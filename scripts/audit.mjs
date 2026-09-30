// Audyt Lighthouse (mobile + desktop) dla zbudowanej strony. Wymaga: npm run build.
// Użycie: node scripts/audit.mjs [ścieżki...]
import { createServer } from 'node:http';
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { brotliCompressSync } from 'node:zlib';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const PORT = 4329;
const paths = process.argv.slice(2).length ? process.argv.slice(2) : [
  '/', '/uslugi/', '/uslugi/wycinka-drzew/', '/uslugi/podnosnik-koszowy-zwyzka/', '/obszar-dzialania/',
  '/obszar-dzialania/ostroleka/', '/obszar-dzialania/kadzidlo/', '/faq/', '/poradnik/pozwolenie-na-wycinke-drzew/', '/kontakt/', '/o-nas/',
];
// Serwer statyczny z kompresją Brotli – odwzorowuje zachowanie Vercel (astro preview nie kompresuje).
const types = { html: 'text/html; charset=utf-8', css: 'text/css', js: 'text/javascript', svg: 'image/svg+xml', png: 'image/png', webp: 'image/webp', avif: 'image/avif', jpg: 'image/jpeg', woff2: 'font/woff2', txt: 'text/plain; charset=utf-8', xml: 'application/xml', webmanifest: 'application/manifest+json' };
const server = createServer((req, res) => {
  let f = join('dist', decodeURIComponent(req.url.split('?')[0]));
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { res.writeHead(404); return res.end(); }
  const ext = extname(f).slice(1);
  const body = readFileSync(f);
  const compressible = !['png', 'webp', 'avif', 'jpg', 'woff2'].includes(ext);
  const headers = { 'Content-Type': types[ext] || 'application/octet-stream', 'Cache-Control': 'public, max-age=31536000' };
  if (compressible && /br/.test(req.headers['accept-encoding'] || '')) { headers['Content-Encoding'] = 'br'; res.writeHead(200, headers); return res.end(brotliCompressSync(body)); }
  res.writeHead(200, headers); res.end(body);
}).listen(PORT);
const chrome = await chromeLauncher.launch({
  chromePath: process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
});
mkdirSync('lighthouse-reports', { recursive: true });
const rows = [];
let failed = false;
for (const p of paths) {
  for (const preset of ['mobile', 'desktop']) {
    const config = preset === 'desktop' ? (await import('lighthouse/core/config/desktop-config.js')).default : undefined;
    const res = await lighthouse(`http://localhost:${PORT}${p}`, { port: chrome.port, output: 'json', logLevel: 'error' }, config);
    const c = res.lhr.categories;
    const s = Object.fromEntries(Object.entries(c).map(([k, v]) => [k, Math.round(v.score * 100)]));
    rows.push({ path: p, preset, ...s });
    if (Object.values(s).some((v) => v < 100)) {
      failed = true;
      const bad = Object.values(res.lhr.audits).filter((a) => a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'informative' && a.scoreDisplayMode !== 'notApplicable').map((a) => `${a.id} (${a.displayValue ?? a.score})`);
      console.log(`${p} [${preset}] issues:`, bad.join(', '));
    }
    writeFileSync(`lighthouse-reports/${preset}${p.replace(/\//g, '_') || '_'}.json`, res.report);
  }
}
console.table(rows);
await chrome.kill();
server.close();
process.exit(failed ? 1 : 0);
