import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const logo = await sharp(fileURLToPath(new URL('src/assets/image.webp', root)))
  .extract({ left: 16, top: 56, width: 168, height: 64 })
  .png()
  .toBuffer();

const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow"><stop stop-color="#8b5cf6" stop-opacity=".28"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#10b981"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#050505"/>
  <ellipse cx="1040" cy="290" rx="460" ry="440" fill="url(#glow)"/>
  <g fill="none" stroke="url(#accent)">
    <rect x="916" y="119" width="280" height="280" rx="48" transform="rotate(25 1056 259)" opacity=".65"/>
    <rect x="860" y="235" width="240" height="240" rx="42" transform="rotate(25 980 355)" opacity=".35"/>
    <rect x="960" y="277" width="160" height="160" rx="32" transform="rotate(25 1040 357)" opacity=".8"/>
  </g>
  <image href="data:image/png;base64,${logo.toString('base64')}" x="72" y="73" width="105" height="40"/>
  <text x="201" y="104" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#ffffff">MDK Studio</text>
  <rect x="72" y="175" width="48" height="4" rx="2" fill="#10b981"/>
  <g font-family="Arial, sans-serif" font-size="76" font-weight="700" letter-spacing="-2">
    <text x="68" y="277" fill="#ffffff">Sites, apps e</text>
    <text x="68" y="368" fill="#ffffff">sistemas</text>
    <text x="68" y="459" fill="#10b981">sob medida.</text>
  </g>
  <path d="M72 513H1128" stroke="#ffffff" stroke-opacity=".14"/>
  <text x="72" y="563" font-family="Arial, sans-serif" font-size="23" fill="#c0c0ca">Design e tecnologia para o seu negócio.</text>
  <text x="1128" y="563" text-anchor="end" font-family="Arial, sans-serif" font-size="22" fill="#ffffff">mdkstudio.com.br</text>
</svg>`);

await sharp(svg).png().toFile(fileURLToPath(new URL('public/og-image.png', root)));
console.log('Generated public/og-image.png (1200 × 630).');
