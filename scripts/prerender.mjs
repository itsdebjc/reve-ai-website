// Visits every real route against the built dist/ output and saves the
// fully-rendered HTML so crawlers that don't execute JS (search bots, AI
// crawlers, link-preview bots) get real content instead of an empty shell.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright-chromium";

const root = path.resolve(import.meta.dirname, "..");
const distDir = path.join(root, "dist");
const port = 4173;

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

async function main() {
  const learningRoutes = getLearningSlugs().map((slug) => `/learning/${slug}`);
  const routes = [...STATIC_ROUTES, ...learningRoutes];

  const server = await startServer();
  const browser = await chromium.launch();

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: "networkidle",
      });
      // Give React a moment to finish the title/meta useEffect calls
      await page.waitForTimeout(150);
      const html = await page.content();

      const outDir = route === "/" ? distDir : path.join(distDir, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), html);
      console.log(`prerendered ${route}`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
