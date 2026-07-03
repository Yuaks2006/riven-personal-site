import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const banned = [
  ["院", "校"].join(""),
  ["学", "校"].join(""),
  ["专", "业"].join(""),
  ["个", "人", "主", "页"].join(""),
  ["个", "人", "作", "品", "集"].join(""),
  ["A", "I", "工", "具", "链"].join(""),
  ["P", "r", "o", "o", "f"].join(""),
  ["可", "信", "证", "明"].join(""),
  ["A", "w", "a", "r", "d", "s"].join(""),
  ["B", "l", "o", "g"].join(""),
  ["A", "r", "t", "i", "c", "l", "e", "s"].join("")
];

const ignored = new Set(["node_modules", ".next", "out", ".git", "package-lock.json"]);
const files = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (ignored.has(entry)) continue;
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    if (stat.isFile() && /\.(ts|tsx|js|jsx|json|md|css|html)$/i.test(entry)) files.push(path);
  }
}

walk(root);

const failures = [];
let sampleWordCount = 0;
const sampleToken = ["d", "e", "m", "o"].join("");

for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const word of banned) {
    if (text.includes(word)) failures.push(`${file}: contains ${word}`);
  }
  if (!file.endsWith("scripts\\check-content.mjs") && !file.endsWith("scripts/check-content.mjs")) {
    sampleWordCount += (text.match(new RegExp(`\\b${sampleToken}\\b`, "gi")) ?? []).length;
  }
}

if (sampleWordCount !== 1) {
  failures.push(`expected exactly one sample capability token, found ${sampleWordCount}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("content checks passed");
