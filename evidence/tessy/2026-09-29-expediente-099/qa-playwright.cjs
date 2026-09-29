// Tessy Fenix / Codex · 2026-09-29. QA visual do post e do índice.
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const root = path.resolve(__dirname, '../../..');
const playwrightPath = path.resolve(root, '../../modernity-group/node_modules/playwright');
const { chromium } = require(playwrightPath);
const out = __dirname;
const slug = '2026-09-29-o-mapa-depois-da-prova';

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  const results = [];
  try {
    for (const [name, rel] of [['post', `posts/${slug}.html`], ['index', 'index.html']]) {
      for (const width of [375, 1440]) {
        const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, isMobile: width === 375 });
        const page = await context.newPage();
        const failures = [];
        page.on('requestfailed', request => failures.push(request.url()));
        await page.goto(pathToFileURL(path.join(root, rel)).href, { waitUntil: 'load' });
        await page.evaluate(() => document.fonts.ready);
        if (name === 'index') await page.locator(`#posts a[href="./posts/${slug}.html"]`).first().scrollIntoViewIfNeeded();
        const metrics = await page.evaluate(() => ({
          title: document.title,
          h1: document.querySelector('h1')?.textContent.trim() ?? null,
          viewportWidth: innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          brokenImages: [...document.images].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.getAttribute('src')),
          postCards: document.querySelectorAll('.post-card').length,
        }));
        const screenshot = `${name}-${width}.png`;
        await page.screenshot({ path: path.join(out, screenshot), fullPage: name === 'post' });
        results.push({ page: name, width, screenshot, ...metrics, overflowX: metrics.documentWidth > width + 1, requestFailures: failures });
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  const report = { author: 'Tessy Fenix / Codex', timestamp: new Date().toISOString(), method: 'Playwright com Chromium local, file://, viewports 375/1440', results };
  fs.writeFileSync(path.join(out, 'qa.json'), JSON.stringify(report, null, 2) + '\n');
  if (results.some(r => r.overflowX || r.brokenImages.length || r.requestFailures.length)) process.exitCode = 1;
  console.log(JSON.stringify(report));
})().catch(error => { console.error(error); process.exitCode = 1; });
