// Visits every real route against the built dist/ output and saves the
// fully-rendered HTML so crawlers that don't execute JS (search bots, AI
// crawlers, link-preview bots) get real content instead of an empty shell.
//
// Netlify's build container can't launch a normal Chromium download (no
// root to install the shared libraries headless Chrome needs), so on
// Netlify we launch @sparticuz/chromium instead - a Chromium build made
// for exactly this kind of restricted Linux CI/serverless environment.
// Locally (any other machine) we use the regular playwright-chromium
// install, since that already works fine on a dev machine.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const distDir = path.join(root, "dist");
const port = 4173;
const ON_NETLIFY = Boolean(process.env.NETLIFY);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

function getLearningSlugs() {
  const src = readFileSync(
    path.join(root, "src/data/learningPosts.ts"),
    "utf-8"
  );
  const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  return [...new Set(slugs)];
}

async function startServer() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const filePath = path.join(distDir, urlPath);
    const ext = path.extname(filePath);

    if (ext && existsSync(filePath)) {
      const body = await readFile(filePath);
      res.writeHead(200, { "content-type": MIME[ext] || "application/octet-stream" });
      res.end(body);
      return;
    }

    // SPA fallback — same behaviour as the Netlify _redirects rule
    const indexPath = path.join(distDir, "index.html");
    const body = await readFile(indexPath);
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(body);
  });

  await new Promise((resolve) => server.listen(port, resolve));
  return server;
}

const STATIC_ROUTES = [
  "/",
  "/services",
  "/about",
  "/case-studies",
  "/learning",
  "/bff-coach",
];

// Returns a { browser, goto(page, url), close() } wrapper so the rest of the
// script doesn't need to know which engine it's talking to.
async function launchBrowser() {
  if (ON_NETLIFY) {
    const { default: chromium } = await import("@sparticuz/chromium");
    const puppeteer = await import("puppeteer-core");
    const browser = await puppeteer.default.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
    return {
      browser,
      newPage: () => browser.newPage(),
      goto: (page, url) => page.goto(url, { waitUntil: "networkidle0" }),
      content: (page) => page.content(),
    };
  }

  const { chromium } = await import("playwright-chromium");
  const browser = await chromium.launch();
  return {
    browser,
    newPage: () => browser.newPage(),
    goto: (page, url) => page.goto(url, { waitUntil: "networkidle" }),
    content: (page) => page.content(),
  };
}

async function main() {
  const learningRoutes = getLearningSlugs().map((slug) => `/learning/${slug}`);
  const routes = [...STATIC_ROUTES, ...learningRoutes];

  const server = await startServer();
  const engine = await launchBrowser();

  try {
    for (const route of routes) {
      const page = await engine.newPage();
      await engine.goto(page, `http://localhost:${port}${route}`);
      // Give React a moment to finish the title/meta useEffect calls
      await new Promise((r) => setTimeout(r, 200));
      const html = await engine.content(page);

      // Flat "<route>.html" files (not "<route>/index.html") so Netlify
      // serves them directly at the no-trailing-slash URL, matching our
      // canonical tags and sitemap, instead of 301-redirecting to add a
      // trailing slash.
      const outFile =
        route === "/" ? path.join(distDir, "index.html") : path.join(distDir, `${route}.html`);
      await mkdir(path.dirname(outFile), { recursive: true });
      await writeFile(outFile, html);
      console.log(`prerendered ${route}`);
      await page.close();
    }
  } finally {
    await engine.browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
