"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      className={`focus-ring inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-[#111318] shadow-sm transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0 ${className ?? ""}`}
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check size={16} weight="bold" /> : <Copy size={16} />}
      {copied ? "Copied" : label}
    </button>
  );
}
