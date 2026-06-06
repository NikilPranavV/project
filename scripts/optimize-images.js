// Simple image optimization script using sharp
// Installs: npm i -D sharp
// Usage: node scripts/optimize-images.js inputDir outputDir

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const input = process.argv[2] || 'public/images';
const output = process.argv[3] || 'public/images-optimized';

if (!fs.existsSync(output)) fs.mkdirSync(output, { recursive: true });

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const inputPath = path.join(input, file);
  const base = path.basename(file, ext);
  const outAvif = path.join(output, base + '.avif');
  const outWebp = path.join(output, base + '.webp');
  try {
    await sharp(inputPath).resize({ width: 1600 }).avif({ quality: 60 }).toFile(outAvif);
    await sharp(inputPath).resize({ width: 1600 }).webp({ quality: 70 }).toFile(outWebp);
    console.log('Optimized', file);
  } catch (err) {
    console.error('Failed', file, err.message);
  }
}

fs.readdir(input, (err, files) => {
  if (err) return console.error(err);
  files.forEach(processFile);
});
