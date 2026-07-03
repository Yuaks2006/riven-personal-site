import { BackLink } from "@/components/BackLink";
import { DetailGallery } from "@/components/DetailGallery";
import { getEvent, waytoagiEvents } from "@/data/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return waytoagiEvents.map((event) => ({ eventSlug: event.slug }));
}

export default async function EventPage({ params }: { params: Promise<{ eventSlug: string }> }) {
  const { eventSlug } = await params;
  const event = getEvent(eventSlug);
  if (!event) notFound();

  return (
    <main className="min-h-[100dvh] px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <BackLink href="/road/waytoagi" label="Back to WaytoAGI" />
        <section className="mt-10 rounded-[44px] border border-black/10 bg-white/74 p-7 shadow-xl shadow-sky-100/50 backdrop-blur-xl md:p-12">
          <p className="text-sm text-[#667085]">{event.date} · {event.place}</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-7xl">{event.title}</h1>
          <p className="mt-5 text-xl text-[#475467]">{event.role}</p>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#252a33]">{event.summary}</p>
          <div className="mt-10 space-y-4">
            {event.actions.map((action) => (
              <p className="border-l-2 border-[#69d8ff] pl-4 leading-8 text-[#475467]" key={action}>
                {action}
              </p>
            ))}
          </div>
          {event.result ? <p className="mt-8 rounded-[26px] bg-[#f3fbff] p-5 leading-8 text-[#252a33]">{event.result}</p> : null}
          <DetailGallery images={event.images} />
        </section>
      </div>
    </main>
  );
}
