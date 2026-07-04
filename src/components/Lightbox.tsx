"use client";

/* eslint-disable @next/next/no-img-element */

import type { ImageAsset } from "@/data/site";
import { withBasePath } from "@/lib/paths";
import { X } from "@phosphor-icons/react";
import { useEffect } from "react";

type LightboxProps = {
  image: ImageAsset | null;
  onClose: () => void;
};

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#101217]/86 p-4 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        className="focus-ring absolute right-5 top-5 rounded-full bg-white p-3 text-[var(--ink)] shadow-xl"
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
      >
        <X size={20} />
      </button>
      <img
        src={withBasePath(image.src)}
        alt={image.alt}
        className="max-h-[88dvh] max-w-[92vw] rounded-[32px] object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
