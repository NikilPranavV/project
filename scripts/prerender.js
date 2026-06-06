const http = require('http');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const PORT = 5000;

const routes = [
  '/',
  '/products',
  '/products/25mm-cube',
  '/about',
  '/contact',
  '/production',
  '/packaging',
  '/quality',
  '/faq',
  '/our-team',
];

(async () => {
  // start static server
  const server = http.createServer((req, res) => handler(req, res, { public: DIST_DIR }));
  server.listen(PORT, () => console.log(`Static server running at http://localhost:${PORT}`));

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log('Prerendering', url);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    const content = await page.content();

    const outPath = path.join(DIST_DIR, route === '/' ? 'index.html' : route.replace(/\/$/, ''), 'index.html');
    const outDir = path.dirname(outPath);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outPath, content, 'utf8');
    console.log('Saved', outPath);
  }

  await browser.close();
  server.close();
  console.log('Prerender complete');
})();
