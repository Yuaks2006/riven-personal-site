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
import { ArrowRight, GithubLogo, LinkedinLogo, Sparkle, WaveSine } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function HomePage() {
  const [workOpen, setWorkOpen] = useState(false);
  const [lightbox, setLightbox] = useState<ImageAsset | null>(null);
  const { scrollYProgress } = useScroll();
  const avatarY = useTransform(scrollYProgress, [0, 0.2], [0, -34]);
  const roadScale = useTransform(scrollYProgress, [0.3, 0.62], [0.18, 1]);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-surface opacity-70" />
      <nav className="fixed left-1/2 top-4 z-30 w-[min(1080px,calc(100vw-28px))] -translate-x-1/2 rounded-full border border-black/10 bg-white/78 px-3 py-2 shadow-lg shadow-sky-100/60 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold">
            Riven
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.slice(1).map((item) => (
              <Link className="focus-ring rounded-full px-3 py-2 text-sm text-[#475467] transition hover:bg-[#f3fbff] hover:text-[#111318]" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link className="focus-ring rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#111318] transition hover:-translate-y-0.5 hover:bg-[#f3fbff]" href="#contact">
            Say hello
          </Link>
        </div>
      </nav>

      <section className="shell relative grid min-h-[100dvh] items-center gap-10 pb-20 pt-28 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }}>
          <p className="mb-4 text-lg text-[#667085]">{profile.legalName}</p>
          <h1 className="display text-[clamp(5rem,18vw,15rem)] font-black text-[#111318]">Riven</h1>
          <p className="mt-8 max-w-2xl text-2xl leading-10 text-[#252a33] md:text-3xl">{profile.title}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#667085] md:text-lg">{profile.titleEn}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#ffffff] px-5 py-3 text-sm font-semibold text-[#111318] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100" href="#work">
              Explore Work <ArrowRight size={16} />
            </Link>
            <Link className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#111318] transition hover:-translate-y-1 hover:bg-white" href="#road">
              Rainbow Road <WaveSine size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-[520px]" style={{ y: avatarY }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(105,216,255,0.34),transparent_62%)] blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[44px] p-4">
            <img src={profile.avatar} alt="Riven IP avatar" className="aspect-square w-full rounded-[34px] object-cover" />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-full bg-white/86 px-4 py-3 text-sm shadow-xl">
              <span className="font-semibold">Agent Builder</span>
              <span className="rainbow-text font-semibold">Community Node</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="shell pb-28" aria-label="Identity tags">
        <motion.div className="grid gap-4 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.07 }}>
          {identityTags.map(([cn, en], index) => (
            <motion.div variants={fadeUp} className={`rounded-[28px] border border-black/10 bg-white/64 p-6 shadow-sm backdrop-blur-xl ${index === 1 || index === 4 ? "md:translate-y-8" : ""}`} key={cn}>
              <Sparkle className="mb-8 text-[#2f8cff]" size={24} weight="duotone" />
              <h2 className="text-2xl font-semibold">{cn}</h2>
              <p className="mt-2 text-[#667085]">{en}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="shell py-24" id="work">
        <SectionIntro title="Selected Work" text="三个窗口，三种现场：产品、业务链路、文化场景。点击进入更完整的项目叙事。" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <Link href={`/work/${project.slug}`} className="group focus-ring relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[34px] border border-black/10 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100">
                <div className="absolute inset-x-0 top-0 h-1 rainbow-stroke" />
                <div>
                  <p className="text-sm text-[#667085]">{project.type}</p>
                  <h3 className="mt-6 text-4xl font-semibold leading-none">{project.title}</h3>
                  <p className="mt-2 text-lg text-[#475467]">{project.subtitle}</p>
                </div>
                <p className="text-lg leading-8 text-[#252a33]">{project.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  Open window <ArrowRight className="transition group-hover:translate-x-1" size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-28" id="road">
        <div className="shell">
          <SectionIntro title="Rainbow Road" text="彩虹不是装饰，是一条可以被点击、被追踪、被继续填充的路。" />
          <div className="relative mt-16 min-h-[520px] overflow-hidden rounded-[42px] border border-black/10 bg-[#f8fcff] p-6 md:p-10">
            <motion.div className="absolute left-8 right-8 top-1/2 h-3 origin-left rounded-full rainbow-stroke shadow-[0_0_42px_rgba(47,140,255,0.25)]" style={{ scaleX: roadScale }} />
            <div className="relative grid h-full gap-6 md:grid-cols-4">
              <Link href="/road/waytoagi" className="focus-ring glass group col-span-2 flex min-h-[270px] flex-col justify-between rounded-[34px] p-7 transition hover:-translate-y-2">
                <div>
                  <p className="text-sm font-semibold text-[#2f8cff]">Filled node</p>
                  <h3 className="mt-5 text-4xl font-semibold">WaytoAGI</h3>
                  <p className="mt-5 max-w-md text-lg leading-8 text-[#475467]">我参与校园方向活动推进和广州线下活动支持，在活动现场进行技术指导、工具配置、参与者答疑和项目路演支持。</p>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold">
                  Enter road <ArrowRight className="transition group-hover:translate-x-1" size={18} />
                </span>
              </Link>
              {["Future node", "Open node"].map((label, index) => (
                <div className="rounded-[34px] border border-dashed border-black/16 bg-white/54 p-7 text-[#98a2b3]" key={label}>
                  <p className="text-sm">Reserved</p>
                  <h3 className="mt-5 text-3xl font-semibold">{label}</h3>
                  <p className="mt-5 leading-7">等待新的社区、活动组织或合作网络被点亮。</p>
                  <div className={`mt-12 h-3 w-3 rounded-full ${index === 0 ? "bg-[#55d483]" : "bg-[#ffb84a]"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-24" id="skills">
        <SectionIntro title="Capability Map" text="不是证书堆叠，而是能在项目现场被调动的能力轨道。" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div className="rounded-[34px] border border-black/10 bg-white/70 p-7 backdrop-blur-xl" key={capability.title}>
              <h3 className="text-3xl font-semibold">{capability.title}</h3>
              <div className="mt-7 flex flex-wrap gap-2">
                {capability.items.map((item) => (
                  <span className="rounded-full border border-black/10 bg-[#f8fcff] px-4 py-2 text-sm text-[#475467]" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-24" id="experience">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro title="Work Experience" text="正式工作经历独立呈现，但不把整个网站拉回传统履历模式。" />
            <button className="focus-ring mt-10 rounded-full border border-black/10 bg-[#ffffff] px-6 py-3 text-sm font-semibold text-[#111318] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100" type="button" onClick={() => setWorkOpen(true)}>
              Open WavePeak window
            </button>
          </div>
          <button className="group focus-ring overflow-hidden rounded-[40px] border border-black/10 bg-white text-left shadow-sm" type="button" onClick={() => setWorkOpen(true)}>
            <img src={profile.portrait} alt="Riven in real life" className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="p-7">
              <h3 className="text-3xl font-semibold">Riven in Real Life</h3>
              <p className="mt-3 text-[#667085]">从虚拟 IP 到真实行动者。</p>
            </div>
          </button>
        </div>
      </section>

      <section className="shell pb-28 pt-20" id="contact">
        <div className="relative overflow-hidden rounded-[48px] bg-[#111318] p-8 text-[#ffffff] md:p-12">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#69d8ff]/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <h2 className="text-5xl font-semibold leading-none md:text-7xl">Build the road. Light the nodes.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.72)]">如果你正在做 AI 产品、Agent 应用、AIGC 内容、线下活动或青年社区项目，欢迎联系我。</p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.72)]">If you are building AI products, agent-based apps, AIGC content, offline events, or youth communities, feel free to reach out.</p>
            </div>
            <div className="rounded-[34px] bg-white p-6 text-[#111318]">
              <div className="space-y-3">
                <CopyButton value={contact.email} label="Email" />
                <CopyButton value={contact.wechat.value} label="WeChat" />
              </div>
              <p className="mt-4 text-sm text-[#667085]">{contact.wechat.note}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold" href={contact.github} target="_blank" rel="noreferrer">
                  <GithubLogo size={18} /> GitHub
                </a>
                <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold" href={contact.linkedIn} target="_blank" rel="noreferrer">
                  <LinkedinLogo size={18} /> LinkedIn
                </a>
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

function SectionIntro({ title, text }: { title: string; text: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
      <h2 className="text-5xl font-semibold leading-none md:text-7xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#667085]">{text}</p>
    </motion.div>
  );
}
