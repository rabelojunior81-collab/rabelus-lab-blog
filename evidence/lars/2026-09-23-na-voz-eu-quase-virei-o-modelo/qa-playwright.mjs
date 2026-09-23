import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/rabel/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/playwright-core");
const evidenceDir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, "$1"));
const blogRoot = path.resolve(evidenceDir, "../../..");
const targets = {
  post: path.join(blogRoot, "posts", "2026-09-23-na-voz-eu-quase-virei-o-modelo.html"),
  index: path.join(blogRoot, "index.html"),
};
const viewports = {
  "375": { width: 375, height: 812, isMobile: true },
  "1440": { width: 1440, height: 900, isMobile: false },
};

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});

const result = {
  gate: "qa-playwright-equivalent",
  gerado_em: new Date().toISOString(),
  nota: "qa-cdp.py nao iniciou por ausencia de websockets; matriz equivalente via Playwright ja instalado, sem instalar dependencias.",
  paginas: { post: {}, index: {} },
};

for (const [kind, file] of Object.entries(targets)) {
  for (const [label, viewport] of Object.entries(viewports)) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const suffix = kind === "index" ? "#posts" : "";
    await page.goto(`${pathToFileURL(file).href}${suffix}`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    if (kind === "index") {
      await page.evaluate(() => window.scrollTo(0, Math.max(0, document.querySelector("#posts").offsetTop - 105)));
      await page.waitForTimeout(100);
    }
    const metrics = await page.evaluate(() => {
      const all = [...document.querySelectorAll("body *")];
      const viewportWidth = document.documentElement.clientWidth;
      const widest = all
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return { tag: el.tagName.toLowerCase(), cls: el.className || "", left: rect.left, right: rect.right, width: rect.width };
        })
        .filter((x) => x.left < -0.5 || x.right > viewportWidth + 0.5)
        .slice(0, 20);
      const brokenImgs = [...document.images]
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.getAttribute("src"));
      return {
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        brokenImgs,
        widest,
        authorMeta: document.querySelector(".post-author")?.textContent.trim() ?? null,
        avatarRadius: document.querySelector(".author-avatar") ? getComputedStyle(document.querySelector(".author-avatar")).borderRadius : null,
        postCards: document.querySelectorAll(".post-card").length,
        authorCards: document.querySelectorAll(".author-card").length,
        overflowX: document.documentElement.scrollWidth > window.innerWidth,
      };
    });
    const png = `${kind}-${label}.png`;
    await page.screenshot({ path: path.join(evidenceDir, png), fullPage: false });
    result.paginas[kind][label] = { ...metrics, png };
    await context.close();
  }
}

await browser.close();
fs.writeFileSync(path.join(evidenceDir, "qa-cdp.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8");
