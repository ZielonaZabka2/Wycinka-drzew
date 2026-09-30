// Zrzuty ekranu i kontrola poziomego scrolla: node scripts/shot.mjs <outdir> <url...>
import puppeteer from 'puppeteer-core';
const [out, ...urls] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const p = await b.newPage();
for (const u of urls) {
  for (const [w, h, tag] of [[390, 844, 'm'], [1440, 900, 'd']]) {
    await p.setViewport({ width: w, height: h, deviceScaleFactor: 1, isMobile: w < 500, hasTouch: w < 500 });
    await p.goto(u, { waitUntil: 'networkidle0' });
    const sw = await p.evaluate(() => [document.documentElement.scrollWidth, [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(e => e.tagName + '.' + e.className)]);
    console.log(tag, u, JSON.stringify(sw));
    const name = u.replace(/https?:\/\/[^/]+/, '').replace(/\//g, '_') || '_';
    await p.screenshot({ path: `${out}/${tag}${name}.png`, fullPage: true });
  }
}
await b.close();
