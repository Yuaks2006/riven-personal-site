"use client";

/* eslint-disable @next/next/no-img-element */

import { Lightbox } from "@/components/Lightbox";
import type { ImageAsset } from "@/data/site";
import { useState } from "react";

export function DetailGallery({ images }: { images: ImageAsset[] }) {
  const [active, setActive] = useState<ImageAsset | null>(null);
  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {images.map((image) => (
          <button className="focus-ring group overflow-hidden rounded-[30px] border border-black/10 bg-white text-left" type="button" key={image.src} onClick={() => setActive(image)}>
            <img src={image.src} alt={image.alt} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      <Lightbox image={active} onClose={() => setActive(null)} />
    </>
  );
}
