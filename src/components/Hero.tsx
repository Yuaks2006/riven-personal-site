"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "motion/react";
import { contact, profile } from "../data/site";
import { withBasePath } from "../lib/paths";

const ease = [0.22, 1, 0.36, 1] as const;
const springCfg = { stiffness: 55, damping: 16, mass: 0.6 };

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // pointer parallax — the avatar leans gently toward the cursor
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const ax = useSpring(useTransform(px, [-1, 1], [-16, 16]), springCfg);
  const ay = useSpring(useTransform(py, [-1, 1], [-12, 12]), springCfg);
  const rx = useSpring(useTransform(py, [-1, 1], [6, -6]), springCfg);
  const ry = useSpring(useTransform(px, [-1, 1], [-6, 6]), springCfg);
  const wx = useSpring(useTransform(px, [-1, 1], [7, -7]), springCfg);

  // scroll exit — hero sinks and dims as you leave it
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const fade = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const drift = useTransform(scrollYProgress, [0, 1], [0, -110]);

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 2 - 1);
    py.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }

  const rise = (delay: number) => ({
    initial: reduce
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 36, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1.15, delay, ease }
  });

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-24 text-center md:px-10"
    >
      <motion.div
        style={reduce ? undefined : { opacity: fade, y: drift }}
        className="flex flex-col items-center"
      >
        {/* avatar — the second focal point, a node under an orbiting light */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.08, ease }}
          style={
            reduce
              ? undefined
              : { x: ax, y: ay, rotateX: rx, rotateY: ry, transformPerspective: 900 }
          }
          className="float-soft"
        >
          <div className="halo relative h-[clamp(150px,18vw,200px)] w-[clamp(150px,18vw,200px)]">
            <span aria-hidden className="orbit" />
            <img
              src={withBasePath(profile.avatar)}
              alt="Riven 的 IP 形象"
              className="relative z-10 h-full w-full rounded-full border border-[var(--line-strong)] object-cover"
            />
          </div>
        </motion.div>

        {/* eyebrow */}
        <motion.p {...rise(0.3)} className="eyebrow mt-9">
          Guangzhou, CN
        </motion.p>

        {/* RIVEN — the headline itself */}
        <motion.h1
          {...rise(0.4)}
          className="mt-3 flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2 md:gap-x-7"
        >
          <motion.span
            style={reduce ? undefined : { x: wx }}
            className="font-un text-aurora inline-block font-extralight leading-none tracking-[0.03em] text-[clamp(3.8rem,12vw,8.6rem)]"
          >
            Riven
          </motion.span>
          <span className="display-mid text-[clamp(0.95rem,1.5vw,1.15rem)] tracking-[0.42em] text-ink-faint">
            谭宇峻
          </span>
        </motion.h1>

        {/* slogan — subtitle weight */}
        <motion.p
          {...rise(0.52)}
          className="display-hair mt-7 text-[clamp(1.12rem,2.1vw,1.55rem)] leading-[1.9] [text-wrap:balance]"
        >
          连接 Agent、AIGC 与<span className="whitespace-nowrap">社区现场</span>，
          做一个
          <span className="text-aurora display-mid mx-1 whitespace-nowrap align-baseline">
            行动型节点
          </span>
          。
        </motion.p>

        {/* english line */}
        <motion.p
          {...rise(0.62)}
          className="en-line mt-5 text-[clamp(0.8rem,1.3vw,1rem)] text-ink-soft"
        >
          Connect the scenes. Light the nodes.
        </motion.p>

        {/* intro */}
        <motion.p
          {...rise(0.7)}
          className="mt-5 max-w-[42ch] text-[0.95rem] leading-[2] text-ink-soft"
        >
          {profile.intro}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...rise(0.8)}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/#work" className="pill-aurora">
            看作品 <span aria-hidden>→</span>
          </Link>
          <Link href="/#contact" className="pill-quiet">
            联系我
          </Link>
        </motion.div>

        <motion.div
          {...rise(0.9)}
          className="mt-6 flex items-center gap-8 text-[0.92rem]"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            GitHub<span aria-hidden> ↗</span>
          </a>
          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            LinkedIn<span aria-hidden> ↗</span>
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <span className="chevron-pulse block text-xl text-ink-faint">⌄</span>
      </motion.div>
    </section>
  );
}
