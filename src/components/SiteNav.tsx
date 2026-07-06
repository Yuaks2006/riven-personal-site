"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { navItems } from "../data/site";

export default function SiteNav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
      {/* reading progress — a hairline of aurora across the top edge */}
      <motion.span
        aria-hidden
        style={{ scaleX: progress, background: "var(--grad-aurora)" }}
        className="fixed inset-x-0 top-0 h-[2px] origin-left"
      />
      <div className="nav-glass flex items-center gap-1 rounded-full px-2.5 py-1.5 md:gap-2 md:px-4 md:py-2">
        <Link
          href="/"
          className="font-un px-2 text-[0.98rem] font-light leading-none tracking-[0.08em] md:px-3 md:text-[1.08rem]"
        >
          R<span className="text-aurora">iven</span>
        </Link>
        <span className="hidden h-4 w-px bg-[var(--line-strong)] md:block" />
        <nav className="flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-1 text-[0.88rem] text-ink-soft transition-colors hover:bg-[rgba(60,235,176,0.08)] hover:text-ink md:px-3.5 md:text-[0.92rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
