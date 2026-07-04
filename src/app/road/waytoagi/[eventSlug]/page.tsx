import { BackLink } from "@/components/BackLink";
import { DetailGallery } from "@/components/DetailGallery";
import { getEvent, waytoagiEvents } from "@/data/site";
import { MapPin, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return waytoagiEvents.map((event) => ({ eventSlug: event.slug }));
}

export default async function EventPage({ params }: { params: Promise<{ eventSlug: string }> }) {
  const { eventSlug } = await params;
  const event = getEvent(eventSlug);
  if (!event) notFound();

  return (
    <main className="min-h-[100dvh] px-5 py-8">
      <div className="mx-auto max-w-7xl">
        <BackLink href="/road/waytoagi" label="Back to WaytoAGI" />
        <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="spatial-surface h-fit rounded-[46px] p-7 md:p-10">
            <p className="text-sm text-[var(--ink-faint)]">{event.date}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{event.title}</h1>
            <div className="mt-8 grid gap-3">
              <MetaLine icon={<MapPin size={18} />} text={event.place} />
              <MetaLine icon={<UserCircle size={18} />} text={event.role} />
            </div>
          </aside>

          <article className="spatial-surface overflow-hidden rounded-[52px] p-7 md:p-12">
            <div className="relative -m-7 mb-10 min-h-[300px] overflow-hidden rounded-b-[44px] p-8 md:-m-12 md:mb-12 md:p-12">
              <div className="absolute inset-0 rainbow-stroke opacity-16 blur-2xl" />
              <div className="absolute inset-0 soft-air" />
              <p className="relative max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">{event.summary}</p>
            </div>
            <div className="grid gap-4">
              {event.actions.map((action, index) => (
                <div className="grid gap-4 rounded-[30px] border border-[var(--soft-line)] bg-white/70 p-5 md:grid-cols-[80px_1fr]" key={action}>
                  <span className="text-sm text-[var(--ink-faint)]">0{index + 1}</span>
                  <p className="text-lg leading-8 text-[var(--ink-soft)]">{action}</p>
                </div>
              ))}
            </div>
            {event.result ? <p className="mt-8 rounded-[30px] bg-[#f3fafb] p-6 text-lg leading-8 text-[var(--ink)]">{event.result}</p> : null}
            <DetailGallery images={event.images} />
          </article>
        </section>
      </div>
    </main>
  );
}

function MetaLine({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[24px] border border-[var(--soft-line)] bg-white/72 p-4 text-[var(--ink-soft)]">
      {icon}
      <span>{text}</span>
    </div>
  );
}
