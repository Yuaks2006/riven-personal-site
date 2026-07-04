import { BackLink } from "@/components/BackLink";
import { DetailGallery } from "@/components/DetailGallery";
import { getProject, projects } from "@/data/site";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-[100dvh] px-5 py-8">
      <div className="mx-auto max-w-7xl">
        <BackLink href="/#work" label="Back to work" />
        <section className="mt-8 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="spatial-surface sticky top-8 h-fit rounded-[42px] p-7">
            <p className="text-sm text-[var(--ink-faint)]">Project window</p>
            <h1 className="mt-5 text-6xl font-semibold leading-none md:text-8xl">{project.title}</h1>
            <p className="mt-4 text-2xl text-[var(--ink-soft)]">{project.subtitle}</p>
            <div className="mt-8 grid gap-3">
              {project.period ? <InfoPill label="Period" value={project.period} /> : null}
              <InfoPill label="Role" value={project.role} />
              <InfoPill label="Type" value={project.type} />
            </div>
            {project.projectUrl ? (
              <a className="signal-button mt-8 w-fit bg-[var(--ink)] text-white hover:bg-black" href={project.projectUrl} target="_blank" rel="noreferrer">
                Open project <ArrowSquareOut size={16} />
              </a>
            ) : null}
          </aside>

          <article className="spatial-surface overflow-hidden rounded-[52px] p-7 md:p-12">
            <div className="soft-air -m-7 mb-10 min-h-[320px] rounded-b-[44px] p-8 md:-m-12 md:mb-12 md:p-12">
              <p className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">{project.summary}</p>
            </div>
            <div className="grid gap-4">
              {project.facts.map((fact, index) => (
                <div className="grid gap-4 rounded-[30px] border border-[var(--soft-line)] bg-white/70 p-5 md:grid-cols-[80px_1fr]" key={fact}>
                  <span className="text-sm text-[var(--ink-faint)]">0{index + 1}</span>
                  <p className="text-lg leading-8 text-[var(--ink-soft)]">{fact}</p>
                </div>
              ))}
            </div>
            {project.materials.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.materials.map((material) => (
                  <a className="signal-button" href={material.href} key={material.href} target="_blank" rel="noreferrer">
                    {material.label}
                  </a>
                ))}
              </div>
            ) : null}
            <DetailGallery images={project.images} />
          </article>
        </section>
      </div>
    </main>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-[var(--soft-line)] bg-white/70 p-4">
      <p className="text-xs text-[var(--ink-faint)]">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6">{value}</p>
    </div>
  );
}
