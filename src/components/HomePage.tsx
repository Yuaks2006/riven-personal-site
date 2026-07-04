"use client";

/* eslint-disable @next/next/no-img-element */

import {
  capabilities,
  contact,
  identityTags,
  navItems,
  profile,
  projects,
  type ImageAsset
} from "@/data/site";
import { CopyButton } from "@/components/CopyButton";
import { Lightbox } from "@/components/Lightbox";
import { WorkModal } from "@/components/WorkModal";
import { withBasePath } from "@/lib/paths";
import {
  ArrowRight,
  At,
  GithubLogo,
  LinkedinLogo,
  WechatLogo
} from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 }
};

const projectVisuals = [
  "from-[#edf7ff] via-[#ffffff] to-[#ffece5]",
  "from-[#eaf5ff] via-[#eef9f5] to-[#ffffff]",
  "from-[#e9f5f8] via-[#ffffff] to-[#eaf0ff]"
];

export function HomePage() {
  const [workOpen, setWorkOpen] = useState(false);
  const [lightbox, setLightbox] = useState<ImageAsset | null>(null);
  const [activeCapability, setActiveCapability] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, -42]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.96]);
  const roadScale = useTransform(scrollYProgress, [0.34, 0.6], [0.08, 1]);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 thin-grid opacity-70" />
      <SiteNav />

      <section className="relative min-h-[100dvh] overflow-hidden pb-14 pt-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[72dvh] soft-air" />
        <div className="shell grid min-h-[calc(100dvh-6rem)] items-start gap-10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-0">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="mb-7 flex flex-wrap items-center gap-3 text-sm text-[var(--ink-soft)]">
              <span className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2">Guangzhou</span>
              <span>Agent Builder · Community Connector · AIGC Creator</span>
            </div>
            <h1 className="display text-[clamp(5.8rem,19vw,17rem)] font-semibold text-[var(--ink)]">Riven</h1>
            <p className="mt-3 text-2xl font-semibold text-[var(--ink)] md:text-4xl">{profile.legalName}</p>
            <p className="mobile-safe-copy mt-8 max-w-2xl break-words text-xl leading-9 text-[var(--ink)] md:text-3xl md:leading-[1.35]">{profile.title}</p>
            <p className="mobile-safe-copy-en mt-5 max-w-xl break-words text-base leading-7 text-[var(--ink-soft)] md:text-lg">{profile.titleEn}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link className="signal-button bg-[var(--ink)] text-white hover:bg-black" href="#work">
                Explore Work <ArrowRight size={17} />
              </Link>
              <Link className="signal-button" href="#contact">
                Connect <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="identity-canvas relative mx-auto aspect-square w-full max-w-[620px]"
            style={{ y: heroY, scale: heroScale }}
            initial={false}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.92),rgba(232,246,251,0.56)_52%,transparent_72%)] shadow-[0_50px_120px_rgba(47,140,255,0.16)]" />
            <div className="absolute left-[8%] top-[10%] h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96),rgba(105,216,255,0.24))] blur-[1px]" />
            <div className="absolute bottom-[12%] right-[7%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96),rgba(158,230,201,0.34))]" />
            <div className="image-sheen spatial-surface absolute inset-[15%] overflow-hidden rounded-full p-4">
              <img src={withBasePath(profile.avatar)} alt="Riven IP avatar" className="h-full w-full rounded-full object-cover" />
            </div>
            <motion.div
              className="spatial-surface absolute bottom-[13%] left-0 rounded-[32px] p-5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm text-[var(--ink-faint)]">Now building</p>
              <p className="mt-1 text-xl font-semibold">ideas into visible systems</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-frame pt-10" aria-label="Persona OS">
        <div className="shell">
          <div className="spatial-surface relative overflow-hidden rounded-[46px] p-7 md:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgba(105,216,255,0.22)] blur-3xl" />
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-eyebrow">Persona OS</p>
                <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-none md:text-7xl">我如何进入一个现场</h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">{profile.intro}</p>
                <p className="mt-4 max-w-xl text-base leading-7 text-[var(--ink-faint)]">{profile.introEn}</p>
              </div>
              <motion.div
                className="relative min-h-[440px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.28 }}
                transition={{ staggerChildren: 0.06 }}
              >
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-white/70 shadow-[0_28px_80px_rgba(42,103,143,0.12)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-5xl font-semibold">Riven</p>
                  <p className="mt-2 text-sm text-[var(--ink-faint)]">Action node</p>
                </div>
                {identityTags.map(([cn, en], index) => {
                  const positions = [
                    "left-[3%] top-[7%]",
                    "right-[8%] top-[5%]",
                    "left-[18%] top-[39%]",
                    "right-[2%] top-[42%]",
                    "left-[6%] bottom-[9%]",
                    "right-[17%] bottom-[8%]"
                  ];
                  return (
                    <motion.div
                      variants={fadeUp}
                      className={`magnetic spatial-surface absolute ${positions[index]} max-w-[240px] rounded-[999px] px-5 py-4`}
                      key={cn}
                    >
                      <p className="font-semibold">{cn}</p>
                      <p className="text-sm text-[var(--ink-soft)]">{en}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame" id="work">
        <div className="shell">
          <SectionHeading eyebrow="Selected Work" title="把想法放进可点击的窗口" text="三个项目窗口保留标题和短介绍，进入后再看角色、动作、材料和图片。" />
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ delay: index * 0.08 }}
                className={index === 1 ? "lg:-mt-8" : "lg:mt-12"}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className={`project-window magnetic group flex min-h-[520px] flex-col justify-between rounded-[42px] border border-white/80 bg-gradient-to-br ${projectVisuals[index]} p-6 shadow-[0_40px_110px_rgba(42,103,143,0.13)]`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[var(--ink-faint)]">0{index + 1}</p>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-white/76 shadow-lg transition group-hover:rotate-[-18deg]">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                    <h3 className="mt-12 text-5xl font-semibold leading-none">{project.title}</h3>
                    <p className="mt-3 text-xl text-[var(--ink-soft)]">{project.subtitle}</p>
                  </div>
                  <div className="relative my-10 h-44 overflow-hidden rounded-[30px] bg-white/52">
                    {project.images[0] ? (
                      <img src={withBasePath(project.images[0].src)} alt={project.images[0].alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="h-28 w-28 rounded-full border border-white/80 bg-[radial-gradient(circle,rgba(255,255,255,0.94),rgba(105,216,255,0.22)_58%,rgba(255,143,112,0.18))] shadow-[0_26px_70px_rgba(47,140,255,0.16)]" />
                      </div>
                    )}
                  </div>
                  <p className="text-lg leading-8 text-[var(--ink-soft)]">{project.summary}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame" id="road">
        <div className="shell">
          <SectionHeading eyebrow="Connect" title="一条彩虹路，连接真实现场" text="彩虹只在这里作为信息结构出现。WaytoAGI 是已点亮节点，其他节点为空位，等待之后继续填充。" />
          <div className="rainbow-road-system soft-air min-h-[620px] rounded-[52px] border border-white/80 p-6 shadow-[0_42px_110px_rgba(42,103,143,0.12)] md:p-12">
            <motion.div className="absolute left-[8%] top-[52%] h-8 w-[84%] origin-left rounded-full rainbow-stroke blur-[1px]" style={{ scaleX: roadScale }} />
            <motion.div className="absolute left-[8%] top-[52%] h-20 w-[84%] origin-left rounded-full rainbow-stroke opacity-20 blur-2xl" style={{ scaleX: roadScale }} />
            <div className="relative grid min-h-[520px] gap-7 md:grid-cols-[1.15fr_0.85fr_0.85fr]">
              <Link href="/road/waytoagi" className="magnetic spatial-surface z-10 flex min-h-[360px] flex-col justify-between rounded-[42px] p-8">
                <div>
                  <p className="text-sm font-semibold text-[var(--blue)]">Active node</p>
                  <h3 className="mt-5 text-5xl font-semibold leading-none">WaytoAGI</h3>
                  <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--ink-soft)]">我参与校园方向活动推进和广州线下活动支持，在活动现场进行技术指导、工具配置、参与者答疑和项目路演支持。</p>
                </div>
                <span className="signal-button w-fit">
                  Enter community route <ArrowRight size={17} />
                </span>
              </Link>
              {["Future Node", "Open Slot"].map((label, index) => (
                <div className={`spatial-surface z-10 rounded-[42px] p-8 ${index === 0 ? "self-center" : "self-end"}`} key={label}>
                  <p className="text-sm text-[var(--ink-faint)]">Reserved</p>
                  <h3 className="mt-5 text-4xl font-semibold">{label}</h3>
                  <p className="mt-5 leading-7 text-[var(--ink-faint)]">为空置窗口保留结构，不伪造未来内容。</p>
                  <div className="mt-12 h-16 w-16 rounded-full border border-dashed border-[var(--line)] bg-white/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame" id="skills">
        <div className="shell">
          <SectionHeading eyebrow="Capability Map" title="能力不是列表，是可被调度的轨道" text="点击或悬停一个能力簇，右侧只展开当前最重要的动作，不把页面变成清单。" />
          <div className="capability-orbit grid gap-8 lg:grid-cols-[1fr_0.82fr]">
            <div className="spatial-surface relative min-h-[620px] rounded-[52px] p-7 md:p-12">
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/84 shadow-[0_32px_90px_rgba(42,103,143,0.12)]" />
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-4xl font-semibold">Riven</p>
                <p className="mt-2 text-sm text-[var(--ink-faint)]">Capability orbit</p>
              </div>
              {capabilities.map((capability, index) => {
                const positions = [
                  "left-[6%] top-[12%]",
                  "right-[4%] top-[18%]",
                  "left-[8%] bottom-[13%]",
                  "right-[13%] bottom-[10%]"
                ];
                return (
                  <button
                    type="button"
                    className={`magnetic focus-ring absolute ${positions[index]} max-w-[270px] rounded-[34px] border p-5 text-left shadow-[0_20px_70px_rgba(42,103,143,0.1)] ${
                      activeCapability === index ? "border-[var(--blue)] bg-white" : "border-white/80 bg-white/68"
                    }`}
                    key={capability.title}
                    onMouseEnter={() => setActiveCapability(index)}
                    onFocus={() => setActiveCapability(index)}
                    onClick={() => setActiveCapability(index)}
                  >
                    <p className="text-sm text-[var(--ink-faint)]">0{index + 1}</p>
                    <h3 className="mt-4 text-2xl font-semibold">{capability.title}</h3>
                  </button>
                );
              })}
            </div>
            <motion.div
              key={capabilities[activeCapability].title}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="spatial-surface self-center rounded-[42px] p-8"
            >
              <p className="text-sm text-[var(--ink-faint)]">Selected cluster</p>
              <h3 className="mt-4 text-4xl font-semibold">{capabilities[activeCapability].title}</h3>
              <div className="mt-8 grid gap-3">
                {capabilities[activeCapability].items.map((item) => (
                  <div className="rounded-[22px] border border-[var(--soft-line)] bg-white/70 px-4 py-3 text-[var(--ink-soft)]" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-frame" id="experience">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="work-dossier spatial-surface rounded-[52px] p-8 md:p-12">
              <p className="section-eyebrow">Work Experience</p>
              <h2 className="mt-5 text-5xl font-semibold leading-none md:text-7xl">真实行动的记录窗口</h2>
              <p className="mt-7 text-lg leading-8 text-[var(--ink-soft)]">正式经历独立呈现，但保持个人网站的轻盈。点击窗口打开完整文字与图片材料。</p>
              <button className="signal-button mt-9 bg-[var(--ink)] text-white hover:bg-black" type="button" onClick={() => setWorkOpen(true)}>
                Open dossier <ArrowRight size={17} />
              </button>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <button className="focus-ring magnetic rounded-[32px] border border-[var(--line)] bg-white/70 p-5 text-left" type="button" onClick={() => setWorkOpen(true)}>
                  <p className="text-sm text-[var(--ink-faint)]">Filled</p>
                  <h3 className="mt-4 text-2xl font-semibold">浪尖儿运营实习</h3>
                </button>
                <div className="rounded-[32px] border border-dashed border-[var(--line)] bg-white/42 p-5 text-[var(--ink-faint)]">
                  <p className="text-sm">Reserved</p>
                  <h3 className="mt-4 text-2xl font-semibold">Next field note</h3>
                </div>
              </div>
            </div>
            <button className="image-sheen focus-ring magnetic relative min-h-[620px] overflow-hidden rounded-[52px] border border-white/80 bg-white text-left shadow-[0_42px_120px_rgba(42,103,143,0.13)]" type="button" onClick={() => setWorkOpen(true)}>
              <img src={withBasePath(profile.portrait)} alt="Riven real portrait" className="h-full min-h-[620px] w-full object-cover" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[34px] bg-white/86 p-6 shadow-[0_24px_80px_rgba(16,18,23,0.16)]">
                <p className="text-sm text-[var(--ink-faint)]">Real life anchor</p>
                <h3 className="mt-2 text-3xl font-semibold">从 IP 到现场</h3>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="section-frame pb-16" id="contact">
        <div className="shell">
          <div className="contact-station rounded-[56px] bg-[var(--ink)] p-7 text-white shadow-[0_48px_120px_rgba(16,18,23,0.2)] md:p-12">
            <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-[rgba(105,216,255,0.18)] blur-3xl" />
            <div className="absolute bottom-[-8rem] left-[20%] h-80 w-80 rounded-full bg-[rgba(158,230,201,0.12)] blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm text-white/58">Contact</p>
                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-none md:text-8xl">保持连接，一起创造更多可能。</h2>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">如果你正在做 AI 产品、Agent 应用、AIGC 内容、线下活动或青年社区项目，欢迎联系我。</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">If you are building AI products, agent-based apps, AIGC content, offline events, or youth communities, feel free to reach out.</p>
              </div>
              <div className="rounded-[42px] bg-white p-6 text-[var(--ink)] md:p-8">
                <div className="space-y-4">
                  <ContactLine icon={<At size={20} />} label="Email" value={contact.email} />
                  <ContactLine icon={<WechatLogo size={20} />} label="WeChat" value={contact.wechat.value} />
                </div>
                <div className="mt-5 rounded-[26px] bg-[#f5fafb] p-4 text-sm text-[var(--ink-soft)]">{contact.wechat.note}</div>
                <div className="mt-8 grid gap-3">
                  <CopyButton value={contact.email} label="Copy email" className="w-full justify-center" />
                  <CopyButton value={contact.wechat.value} label="Copy WeChat" className="w-full justify-center" />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a className="signal-button" href={contact.github} target="_blank" rel="noreferrer">
                    <GithubLogo size={18} /> GitHub
                  </a>
                  <a className="signal-button" href={contact.linkedIn} target="_blank" rel="noreferrer">
                    <LinkedinLogo size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkModal open={workOpen} onClose={() => setWorkOpen(false)} onImage={setLightbox} />
      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </main>
  );
}

function SiteNav() {
  return (
    <nav className="fixed left-3 right-3 top-4 z-40 mx-auto max-w-[1080px] rounded-full border border-white/80 bg-white/80 px-3 py-2 shadow-[0_18px_60px_rgba(42,103,143,0.12)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold">
          Riven
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.slice(1).map((item) => (
            <Link className="focus-ring rounded-full px-3 py-2 text-sm text-[var(--ink-soft)] transition hover:bg-[#f3fbff] hover:text-[var(--ink)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="signal-button mobile-nav-cta min-h-0 px-4 py-2" href="#contact">
          Say hello
        </Link>
      </div>
    </nav>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">{text}</p>
    </motion.div>
  );
}

function ContactLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-[26px] border border-[var(--soft-line)] bg-white px-4 py-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eef8fb] text-[var(--ink)]">{icon}</div>
      <div>
        <p className="text-sm text-[var(--ink-faint)]">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
