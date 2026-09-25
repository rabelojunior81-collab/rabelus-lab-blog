const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const root = process.cwd();
const out = path.join(root, "evidence", "lars", "2026-09-24-o-ambiente-antigo-no-gateway-novo");
const chrome = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(fs.existsSync);
if (!chrome) throw new Error("Chrome/Edge não encontrado");

const pages = [
  ["post", "posts/2026-09-24-o-ambiente-antigo-no-gateway-novo.html"],
  ["index", "index.html"],
];
const viewports = [
  ["mobile-375", { width: 375, height: 812 }, true],
  ["desktop-1440", { width: 1440, height: 900 }, false],
];

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: chrome });
  const results = [];
  try {
    for (const [pageName, relative] of pages) {
      for (const [viewportName, viewport, isMobile] of viewports) {
        const context = await browser.newContext({ viewport, isMobile, deviceScaleFactor: 1 });
        const page = await context.newPage();
        const failures = [];
        page.on("requestfailed", (request) => failures.push(request.url().split("/").pop()));
        await page.goto(pathToFileURL(path.join(root, relative)).href, { waitUntil: "load", timeout: 30000 });
        if (pageName === "index") await page.locator("#posts .post-card").first().scrollIntoViewIfNeeded();
        await page.evaluate(() => document.fonts.ready);
        const metrics = await page.evaluate(() => {
          const documentElement = document.documentElement;
          const avatar = document.querySelector(".author-avatar");
          return {
            title: document.title,
            h1: document.querySelector("h1")?.textContent.trim() ?? null,
            viewportWidth: window.innerWidth,
            documentWidth: documentElement.scrollWidth,
            overflowX: documentElement.scrollWidth > window.innerWidth + 1,
            brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.getAttribute("src")),
            avatarRadius: avatar ? getComputedStyle(avatar).borderRadius : null,
            cards: document.querySelectorAll(".post-card").length,
          };
        });
        metrics.page = pageName;
        metrics.viewport = viewportName;
        metrics.requestFailures = failures;
        metrics.screenshot = `${pageName}-${viewportName}.png`;
        await page.screenshot({ path: path.join(out, metrics.screenshot), fullPage: pageName === "post" });
        results.push(metrics);
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  fs.writeFileSync(path.join(out, "qa-playwright-fallback.json"), JSON.stringify({ method: "Playwright fallback; canonical qa-cdp.py unavailable because websockets is not installed", results }, null, 2) + "\n", "utf8");
  console.log(JSON.stringify(results, null, 2));
})().catch((error) => { console.error(error); process.exitCode = 1; });

