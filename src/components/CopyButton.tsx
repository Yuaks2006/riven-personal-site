"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — leave the value selectable instead
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`btn-copy ${copied ? "copied" : ""}`}
      aria-label={`复制 ${value}`}
    >
      {copied ? "已复制 ✓" : "复制"}
    </button>
  );
}
