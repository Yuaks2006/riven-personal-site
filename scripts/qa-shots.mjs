import puppeteer from "puppeteer-core";

const CHROME =
  "C:\\Users\\长行\\.cache\\puppeteer\\chrome\\win64-148.0.7778.167\\chrome-win64\\chrome.exe";
const BASE = process.env.QA_BASE ?? "http://127.0.0.1:3017";

const shots = [
  { name: "qa-v2-home-desktop", url: "/", w: 1440, h: 900, full: true },
  { name: "qa-v2-home-mobile", url: "/", w: 390, h: 844, full: true },
  { name: "qa-v2-work-desktop", url: "/work/digital-museum/", w: 1440, h: 900, full: true },
  { name: "qa-v2-waytoagi-desktop", url: "/connect/waytoagi/", w: 1440, h: 900, full: true },
  { name: "qa-v2-waytoagi-mobile", url: "/connect/waytoagi/", w: 390, h: 844, full: true }
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new"
});

for (const shot of shots) {
  const page = await browser.newPage();
  await page.setViewport({ width: shot.w, height: shot.h, deviceScaleFactor: 1 });
  await page.goto(BASE + shot.url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(async () => {
    // force lazy content + reveal animations to settle
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 900));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 700));
  });
  // freeze infinite animations so captureScreenshot can settle
  await page.addStyleTag({
    content:
      "*, *::before, *::after { animation-play-state: paused !important; }"
  });
  await page.screenshot({ path: `${shot.name}.png`, fullPage: shot.full });
  console.log("saved", shot.name);
  await page.close();
}

await browser.close();
