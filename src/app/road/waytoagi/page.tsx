import { BackLink } from "@/components/BackLink";
import { waytoagiEvents } from "@/data/site";
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function WaytoagiPage() {
  return (
    <main className="min-h-[100dvh] px-5 py-8">
      <div className="mx-auto max-w-7xl">
        <BackLink href="/#road" label="Back to Rainbow Road" />
        <section className="mt-8 overflow-hidden rounded-[56px] soft-air p-7 shadow-[0_42px_120px_rgba(42,103,143,0.14)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm text-[var(--ink-faint)]">WaytoAGI</p>
              <h1 className="mt-5 text-6xl font-semibold leading-none md:text-8xl">社区与活动之路</h1>
              <p className="mt-7 max-w-xl text-xl leading-9 text-[var(--ink-soft)]">一条按时间倒序展开的彩虹路。每个节点都是一次现场、一次连接、一次把工具带给人的动作。</p>
            </div>
            <div className="relative min-h-[420px]">
              <div className="absolute left-[6%] right-[6%] top-1/2 h-8 rounded-full rainbow-stroke opacity-90 shadow-[0_0_70px_rgba(47,140,255,0.18)]" />
              <div className="absolute left-[6%] right-[6%] top-1/2 h-24 -translate-y-6 rounded-full rainbow-stroke opacity-20 blur-2xl" />
              {waytoagiEvents.slice(0, 4).map((event, index) => (
                <Link
                  className={`spatial-surface magnetic absolute w-[min(260px,42vw)] rounded-[30px] p-5 ${index % 2 === 0 ? "top-[8%]" : "bottom-[6%]"}`}
                  style={{ left: `${index * 22 + 2}%` }}
                  href={`/road/waytoagi/${event.slug}`}
                  key={event.slug}
                >
                  <p className="text-xs text-[var(--ink-faint)]">{event.date}</p>
                  <h2 className="mt-3 text-xl font-semibold leading-tight">{event.title}</h2>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                    <MapPin size={14} /> {event.place}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {waytoagiEvents.map((event, index) => (
            <Link
              className="spatial-surface magnetic group rounded-[36px] p-6"
              href={`/road/waytoagi/${event.slug}`}
              key={event.slug}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm text-[var(--ink-faint)]">0{index + 1} · {event.date}</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight">{event.title}</h2>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white shadow-lg">
                  <ArrowRight className="transition group-hover:translate-x-1" size={17} />
                </span>
              </div>
              <p className="mt-5 leading-7 text-[var(--ink-soft)]">{event.summary}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
