// Screenshot tool (macOS) — drives system Chrome via puppeteer-core.
// Usage: node screenshot.mjs <url> [label] [--width=390] [--height=844] [--scroll=0] [--full]
// Saves to "./temporary screenshots/screenshot-N[-label].png" (auto-incremented).
import puppeteer from "puppeteer-core";
import { readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const url = args.find((a) => !a.startsWith("--") && a.includes("://")) ?? "http://localhost:3000";
const label = args.find((a) => !a.startsWith("--") && !a.includes("://"));
const flag = (name, def) => {
  const v = args.find((a) => a.startsWith(`--${name}=`));
  return v ? Number(v.split("=")[1]) : def;
};
const width = flag("width", 390);
const height = flag("height", 844);
const scroll = flag("scroll", 0);
const fullPage = args.includes("--full");

const dir = join(import.meta.dirname, "temporary screenshots");
mkdirSync(dir, { recursive: true });
const next =
  Math.max(
    0,
    ...readdirSync(dir)
      .map((f) => f.match(/^screenshot-(\d+)/)?.[1])
      .filter(Boolean)
      .map(Number)
  ) + 1;
const out = join(dir, `screenshot-${next}${label ? `-${label}` : ""}.png`);

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
});
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
if (scroll) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scroll);
  await new Promise((r) => setTimeout(r, 1200)); // let scroll-triggered UI settle
}
await page.screenshot({ path: out, fullPage });
await browser.close();
console.log(out);
