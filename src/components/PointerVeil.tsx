"use client";

import { useEffect } from "react";

/**
 * Feeds cursor coordinates to every .card-veil so its spotlight
 * (::before radial) can follow the pointer. One document listener,
 * rAF-throttled — no per-card handlers needed.
 */
export default function PointerVeil() {
  useEffect(() => {
    let raf = 0;
    let ev: PointerEvent | null = null;

    const apply = () => {
      raf = 0;
      if (!ev) return;
      const card = (ev.target as Element | null)?.closest?.(".card-veil");
      if (card instanceof HTMLElement) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        card.style.setProperty("--my", `${ev.clientY - r.top}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      ev = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
