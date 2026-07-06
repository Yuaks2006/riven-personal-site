import puppeteer from "puppeteer-core";

const CHROME =
  "C:\\Users\\长行\\.cache\\puppeteer\\chrome\\win64-148.0.7778.167\\chrome-win64\\chrome.exe";

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://127.0.0.1:3017/#contact", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1400));
await page.addStyleTag({
  content: "*,*::before,*::after{animation-play-state:paused!important}"
});
await page.screenshot({
  path: "qa-v2-contact-zoom.png",
  clip: { x: 0, y: 60, width: 980, height: 700 }
});
console.log("done");
await browser.close();
