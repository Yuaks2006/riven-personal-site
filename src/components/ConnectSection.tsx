import Link from "next/link";
import { connectCommunity, profile, waytoagiEvents } from "../data/site";
import { withBasePath } from "../lib/paths";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative mx-auto max-w-[1180px] scroll-mt-28 px-5 pt-32 md:px-10 md:pt-44"
    >
      <div aria-hidden className="absolute inset-x-0 top-24 -z-10">
        <span className="bloom bloom-green bloom-drift-b left-[-10%] top-0 h-[40vw] w-[40vw] min-h-[320px] min-w-[320px]" />
        <span className="bloom bloom-violet bloom-drift-a right-[-8%] top-[240px] h-[34vw] w-[34vw] min-h-[280px] min-w-[280px]" />
      </div>

      <SectionHeader
        eyebrow="Connect — 社会活动经历"
        zh="去现场，连接真实的人"
        accentWord="现场"
        en="Real scenes, real people — where things actually happen."
      />

      {/* community feature card */}
      <Reveal className="mt-16 md:mt-20">
        <div className="card-veil card-still tint-teal overflow-hidden p-8 md:p-14">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div className="text-left">
              <p className="eyebrow">Community 社区</p>
              <h3 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-un text-[clamp(1.9rem,3.6vw,2.9rem)] font-light leading-none">
                  WaytoAGI
                </span>
                <span className="display-mid text-[1.15rem] text-ink-soft">
                  {connectCommunity.nameZh}
                </span>
              </h3>
              <p className="en-line mt-4 text-[0.85rem] text-ink-faint">
                campus initiatives · Guangzhou offline scenes
              </p>
              <p className="mt-6 max-w-[48ch] text-[0.96rem] leading-[2] text-ink-soft">
                {connectCommunity.intro}
              </p>

              <div className="mt-9 flex flex-wrap items-end gap-x-12 gap-y-5">
                <div>
                  <p className="metric-veil text-5xl leading-none">
                    {connectCommunity.count}
                  </p>
                  <p className="eyebrow mt-3 !tracking-[0.22em]">场活动记录</p>
                </div>
                <div>
                  <p className="metric-veil text-5xl leading-none">7</p>
                  <p className="eyebrow mt-3 !tracking-[0.22em]">个月持续在场</p>
                </div>
                <Link href="/connect/waytoagi/" className="pill-aurora mb-1">
                  看全部记录 <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-[300px]">
              <div className="photo-veil img-zoom">
                <img
                  src={withBasePath(profile.portrait)}
                  alt="现场的 Riven"
                  className="block aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="en-line mt-4 text-center text-[0.8rem] text-ink-faint">
                on Dali — Riven
              </figcaption>
            </figure>
          </div>
        </div>
      </Reveal>

      {/* filmstrip */}
      <Reveal delay={0.08} className="mt-14">
        <div className="edge-fade -mx-5 md:-mx-10">
          <div className="flex snap-x gap-6 overflow-x-auto px-8 pb-6 pt-2 [scrollbar-width:none] md:px-14">
            {waytoagiEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/connect/waytoagi/#${event.slug}`}
                className="group w-[236px] shrink-0 snap-start"
              >
                <div className="photo-veil img-zoom !rounded-[18px]">
                  <img
                    src={withBasePath(event.images[0].src)}
                    alt={event.images[0].alt}
                    className="block aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="eyebrow mt-4 !tracking-[0.18em]">{event.date}</p>
                <p className="mt-1.5 text-[0.92rem] leading-snug text-ink-soft transition-colors group-hover:text-ink">
                  {event.title.replace(/^WaytoAGI (× )?/, "")}
                </p>
              </Link>
            ))}

            <div className="slot-dashed flex w-[236px] shrink-0 snap-start flex-col items-center justify-center gap-2.5 self-stretch">
              <span aria-hidden className="mark-idx text-4xl">
                ✦
              </span>
              <p className="display-mid text-[1.05rem] text-ink-soft">下一个现场</p>
              <p className="en-line text-[0.72rem] text-ink-faint">
                next scene, soon
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
