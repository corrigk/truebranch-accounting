// Generates the favicon, phone icons and the link-preview image in /public
// from the brand SVGs in src/assets/brand/.
// Run with: node scripts/make-images.mjs
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const navy = '#21313F', cream = '#EAE7DF', olive = '#575238';
const load = async (name) => (await readFile(`src/assets/brand/${name}.svg`, 'utf8'));
const inner = (svg) => svg.replace(/<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const viewBox = (svg) => svg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);

const emblem = await load('emblem');
const lockup = await load('lockup2');
const branch = await load('branch');

// Emblem centred in a square tile, in a given color.
function iconSvg(size, bg, fg, radius) {
  const [x, y, w, h] = viewBox(emblem);
  const scale = (size * 0.78) / h;
  const tx = (size - w * scale) / 2 - x * scale, ty = (size - h * scale) / 2 - y * scale;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${radius}" fill="${bg}"/>
    <g color="${fg}" transform="translate(${tx} ${ty}) scale(${scale})">${inner(emblem)}</g></svg>`;
}

// SVG favicon (crisp at any size).
await writeFile('public/favicon.svg', iconSvg(64, navy, cream, 12));
await sharp(Buffer.from(iconSvg(32, navy, cream, 6))).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(iconSvg(180, navy, cream, 0))).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(iconSvg(512, navy, cream, 0))).png().toFile('public/icon-512.png');

// Link-preview image: primary lockup on cream with a soft branch.
{
  const [lx, ly, lw, lh] = viewBox(lockup);
  const ls = 520 / lw;
  const [bx, by, bw, bh] = viewBox(branch);
  const bs = 900 / bw;
  const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="${cream}"/>
    <g color="${olive}" opacity="0.12" transform="translate(${620 - bx * bs} ${-60 - by * bs}) scale(${bs})">${inner(branch)}</g>
    <g color="${olive}" opacity="0.08" transform="translate(${-260 - bx * bs} ${330 - by * bs}) scale(${bs}) rotate(12)">${inner(branch)}</g>
    <g color="${navy}" transform="translate(${600 - (lw * ls) / 2 - lx * ls} ${315 - (lh * ls) / 2 - ly * ls}) scale(${ls})">${inner(lockup)}</g>
  </svg>`;
  await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
}
console.log('Wrote favicon.svg, favicon-32.png, apple-touch-icon.png, icon-512.png, og-image.png');
