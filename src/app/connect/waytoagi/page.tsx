import Link from "next/link";
import Reveal from "../../../components/Reveal";
import SiteNav from "../../../components/SiteNav";
import { connectCommunity, waytoagiEvents } from "../../../data/site";
import { withBasePath } from "../../../lib/paths";

export const metadata = {
  title: "WaytoAGI 活动记录 — Riven"
};

export default function WaytoagiPage() {
  return (
    <main className="relative overflow-hidden">
      <SiteNav />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10">
        <span className="bloom bloom-violet bloom-drift-a left-[-10%] top-[-4%] h-[42vw] w-[42vw] min-h-[340px] min-w-[340px]" />
        <span className="bloom bloom-teal bloom-drift-b right-[-10%] top-[16%] h-[36vw] w-[36vw] min-h-[300px] min-w-[300px]" />
      </div>

      <div className="mx-auto max-w-[1000px] px-5 pb-28 pt-36 md:px-10 md:pt-44">
        <Reveal>
          <Link href="/#connect" className="link-quiet text-[0.9rem]">
            ← 返回现场
          </Link>

          <p className="eyebrow mt-10">Connect — Community Record 活动记录</p>
          <h1 className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="font-un text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-none">
              WaytoAGI
            </span>
            <span className="display-mid text-[1.3rem] text-ink-soft">
              {connectCommunity.nameZh}
            </span>
          </h1>
          <p className="en-line mt-4 text-[0.85rem] text-ink-faint">
            {connectCommunity.role}
          </p>
          <p className="mt-8 max-w-[54ch] text-[0.98rem] leading-[2.05] text-ink-soft">
            {connectCommunity.intro}
          </p>
          <p className="eyebrow mt-8 !tracking-[0.22em]">
            {connectCommunity.span} · {connectCommunity.count} 场记录 · 从最近往回看
          </p>
        </Reveal>

        <div className="relative mt-16 md:mt-20">
          <span className="timeline-rail" aria-hidden />
          <div className="space-y-16 md:space-y-20">
            {waytoagiEvents.map((event, i) => (
              <Reveal key={event.slug} delay={0.04}>
                <article
                  id={event.slug}
                  className="relative scroll-mt-32 pl-8 md:pl-14"
                >
                  <span
                    className={`timeline-dot ${i === 0 ? "hot" : ""}`}
                    aria-hidden
                  />
                  <div className="grid items-start gap-8 md:grid-cols-[1.5fr_1fr] md:gap-12">
                    <div>
                      <p className="eyebrow !tracking-[0.2em]">
                        {event.date} · {event.place}
                      </p>
                      <h2 className="display-mid mt-4 text-[clamp(1.3rem,2.6vw,1.85rem)] leading-[1.45]">
                        {event.title}
                      </h2>
                      <p className="mt-3">
                        <span className="chip-veil">{event.role}</span>
                      </p>
                      <p className="mt-5 max-w-[50ch] text-[0.94rem] leading-[1.95] text-ink-soft">
                        {event.summary}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {event.actions.map((action) => (
                          <li
                            key={action}
                            className="flex gap-3 text-[0.9rem] leading-[1.9] text-ink-soft"
                          >
                            <span aria-hidden className="text-aurora pt-[0.1em]">
                              ✦
                            </span>
                            {action}
                          </li>
                        ))}
                      </ul>
                      {event.result ? (
                        <p className="mt-5">
                          <span className="chip-veil !text-ink">
                            ✦ {event.result}
                          </span>
                        </p>
                      ) : null}
                    </div>

                    {event.images.length > 0 ? (
                      <figure className="photo-veil img-zoom w-full max-w-[340px] justify-self-start md:justify-self-end">
                        <img
                          src={withBasePath(event.images[0].src)}
                          alt={event.images[0].alt}
                          className="block w-full object-cover"
                          loading="lazy"
                        />
                      </figure>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="slot-dashed mt-20 flex flex-wrap items-center justify-between gap-5 px-8 py-7 md:px-12">
            <div>
              <p className="display-mid text-[1.25rem] text-ink-soft md:text-[1.4rem]">
                下一个现场，见了再写。
              </p>
              <p className="en-line mt-1 text-[0.78rem] text-ink-faint">
                the next scene writes itself
              </p>
            </div>
            <Link href="/#contact" className="pill-aurora">
              叫上我 <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
