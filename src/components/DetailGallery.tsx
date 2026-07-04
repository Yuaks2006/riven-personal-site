"use client";

/* eslint-disable @next/next/no-img-element */

import { Lightbox } from "@/components/Lightbox";
import type { ImageAsset } from "@/data/site";
import { withBasePath } from "@/lib/paths";
import { useState } from "react";

export function DetailGallery({ images }: { images: ImageAsset[] }) {
  const [active, setActive] = useState<ImageAsset | null>(null);
  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {images.map((image) => (
          <button className="image-sheen focus-ring magnetic relative overflow-hidden rounded-[34px] border border-white/80 bg-white text-left shadow-[0_24px_80px_rgba(42,103,143,0.12)]" type="button" key={image.src} onClick={() => setActive(image)}>
            <img src={withBasePath(image.src)} alt={image.alt} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      <Lightbox image={active} onClose={() => setActive(null)} />
    </>
  );
}
