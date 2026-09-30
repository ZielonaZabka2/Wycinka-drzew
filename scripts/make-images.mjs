// Generuje favicony, logo PNG i obraz Open Graph (1200x630) z SVG. Uruchom: node scripts/make-images.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const fav = readFileSync('public/favicon.svg');
for (const [f, s] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180], ['logo-192.png', 192], ['logo-512.png', 512]]) {
  await sharp(fav, { density: 600 }).resize(s, s).png().toFile(`public/${f}`);
}
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#173f2a"/>
<circle cx="1050" cy="90" r="260" fill="#f5a524" opacity=".18"/>
<g fill="#1f5537"><path d="M0 630 L0 520 L40 470 L80 520 L120 450 L160 520 L200 480 L240 520 L280 440 L320 520 L360 470 L400 520 L440 455 L480 520 L520 480 L560 520 L600 445 L640 520 L680 470 L720 520 L760 450 L800 520 L840 480 L880 520 L920 445 L960 520 L1000 470 L1040 520 L1080 455 L1120 520 L1160 480 L1200 520 L1200 630Z"/></g>
<g transform="translate(80 90)"><rect width="96" height="96" rx="26" fill="#f5a524"/><path d="M48 14l22 28h-10l12 18H24l12-18H26z" fill="#173f2a"/><rect x="44" y="60" width="8" height="20" rx="2" fill="#173f2a"/></g>
<text x="200" y="130" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" font-weight="700" fill="#dcebd3">SCH WYCINKA DRZEW · OSTROŁĘKA</text>
<text x="200" y="172" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" fill="#bfd0c3">Alpinistyka · Zwyżka · Prace wysokościowe</text>
<text x="80" y="300" font-family="DejaVu Sans, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff">Wycinka drzew Ostrołęka</text>
<text x="80" y="370" font-family="DejaVu Sans, Arial, sans-serif" font-size="34" fill="#dcebd3">Bezpiecznie, sekcyjnie, nawet przy domach i liniach</text>
<rect x="80" y="410" width="470" height="70" rx="35" fill="#f5a524"/>
<text x="315" y="456" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="32" font-weight="700" fill="#10231a">☎ +48 572 345 128</text>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-image.png');
console.log('ok');
