"use client";

/* eslint-disable @next/next/no-img-element */

import { workExperience, type ImageAsset } from "@/data/site";
import { withBasePath } from "@/lib/paths";
import { ArrowSquareOut, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

type WorkModalProps = {
  open: boolean;
  onClose: () => void;
  onImage: (image: ImageAsset) => void;
};

export function WorkModal({ open, onClose, onImage }: WorkModalProps) {
  const work = workExperience[0];

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 grid place-items-center bg-[#101217]/36 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            className="spatial-surface max-h-[86dvh] w-full max-w-5xl overflow-y-auto rounded-[42px] p-6 md:p-9"
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.98, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[var(--ink-faint)]">{work.period}</p>
                <h2 className="mt-2 text-3xl font-semibold md:text-5xl">{work.title}</h2>
                <p className="mt-3 text-lg text-[var(--ink-soft)]">{work.role}</p>
              </div>
              <button className="focus-ring rounded-full bg-[var(--ink)] p-3 text-[#ffffff]" type="button" onClick={onClose} aria-label="Close work details">
                <X size={18} />
              </button>
            </div>

            <p className="max-w-3xl text-xl leading-8 text-[var(--ink)]">{work.summary}</p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {work.metrics.map((metric) => (
                <div className="rounded-[26px] border border-[var(--soft-line)] bg-white/74 p-5 text-sm font-medium text-[var(--ink)]" key={metric}>
                  {metric}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                {work.details.map((detail) => (
                  <p className="rounded-[24px] border border-[var(--soft-line)] bg-white/66 p-5 leading-7 text-[var(--ink-soft)]" key={detail}>
                    {detail}
                  </p>
                ))}
              </div>
              <div className="space-y-3">
                {work.images.map((image) => (
                  <button
                    className="group focus-ring relative block overflow-hidden rounded-[28px] border border-[var(--soft-line)] bg-white text-left"
                    type="button"
                    key={image.src}
                    onClick={() => onImage(image)}
                  >
                    <img src={withBasePath(image.src)} alt={image.alt} className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-[var(--ink)]">
                      View full <ArrowSquareOut size={14} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
