import { BackLink } from "@/components/BackLink";
import { waytoagiEvents } from "@/data/site";
import Link from "next/link";

export default function WaytoagiPage() {
  return (
    <main className="min-h-[100dvh] px-5 py-8">
      <div className="mx-auto max-w-6xl">
        <BackLink href="/#road" label="Back to road" />
        <section className="mt-10">
          <h1 className="text-5xl font-semibold leading-none md:text-8xl">WaytoAGI Road</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#667085]">一条按时间倒序展开的彩虹路。每个节点都是一次现场、一次连接、一次把工具带给人的动作。</p>
        </section>
        <section className="relative mt-14 overflow-hidden rounded-[44px] border border-black/10 bg-white/70 p-6 md:p-10">
          <div className="absolute bottom-10 left-8 right-8 top-10 w-2 rounded-full rainbow-stroke md:left-1/2 md:right-auto" />
          <div className="relative space-y-5">
            {waytoagiEvents.map((event, index) => (
              <Link
                className={`focus-ring glass group block rounded-[30px] p-6 transition hover:-translate-y-1 md:w-[46%] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                href={`/road/waytoagi/${event.slug}`}
                key={event.slug}
              >
                <p className="text-sm text-[#667085]">{event.date} · {event.place}</p>
                <h2 className="mt-3 text-2xl font-semibold">{event.title}</h2>
                <p className="mt-4 leading-7 text-[#475467]">{event.summary}</p>
                <p className="mt-5 text-sm font-semibold text-[#2f8cff]">Open node</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
