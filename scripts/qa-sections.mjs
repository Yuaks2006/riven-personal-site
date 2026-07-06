import puppeteer from "puppeteer-core";

const CHROME =
  "C:\\Users\\长行\\.cache\\puppeteer\\chrome\\win64-148.0.7778.167\\chrome-win64\\chrome.exe";
const BASE = process.env.QA_BASE ?? "http://127.0.0.1:3017";

const anchors = ["top", "work", "connect", "skills", "experience", "contact"];

const W = Number(process.env.QA_W ?? 1440);
const H = Number(process.env.QA_H ?? 900);
const TAG = process.env.QA_TAG ?? "sec";

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H });
await page.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 60000 });
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

// settle reveals
await page.evaluate(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 700) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 90));
  }
});
await page.addStyleTag({
  content: "*, *::before, *::after { animation-play-state: paused !important; }"
});

for (const anchor of anchors) {
  await page.evaluate((id) => {
    if (id === "top") window.scrollTo({ top: 0, behavior: "instant" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, anchor);
  await new Promise((r) => setTimeout(r, 1100));
  await page.screenshot({ path: `qa-v2-${TAG}-${anchor}.png` });
  console.log("saved", anchor);
}

await browser.close();
