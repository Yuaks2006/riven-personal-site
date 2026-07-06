import puppeteer from "puppeteer-core";

const CHROME =
  "C:\\Users\\长行\\.cache\\puppeteer\\chrome\\win64-148.0.7778.167\\chrome-win64\\chrome.exe";
const BASE = process.env.QA_BASE ?? "http://127.0.0.1:3017";

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 60000 });
const info = await page.evaluate(() => {
  const wide = [];
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > 420) {
      wide.push(
        `${el.tagName}.${String(el.className).slice(0, 70)} w=${Math.round(r.width)} right=${Math.round(r.right)}`
      );
    }
  });
  return {
    scrollW: document.documentElement.scrollWidth,
    bodyScrollW: document.body.scrollWidth,
    wide: wide.slice(0, 20)
  };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
