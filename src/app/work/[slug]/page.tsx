import { BackLink } from "@/components/BackLink";
import { DetailGallery } from "@/components/DetailGallery";
import { getProject, projects } from "@/data/site";
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
      <div className="mx-auto max-w-5xl">
        <BackLink href="/#work" label="Back to work" />
        <section className="mt-10 rounded-[44px] border border-black/10 bg-white/74 p-7 shadow-xl shadow-sky-100/50 backdrop-blur-xl md:p-12">
          <p className="text-sm text-[#667085]">{project.type}</p>
          <h1 className="mt-6 text-5xl font-semibold leading-none md:text-8xl">{project.title}</h1>
          <p className="mt-4 text-2xl text-[#475467]">{project.subtitle}</p>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#252a33]">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.period ? <span className="rounded-full bg-[#f3fbff] px-4 py-2 text-sm">{project.period}</span> : null}
            <span className="rounded-full bg-[#f3fbff] px-4 py-2 text-sm">{project.role}</span>
          </div>
          <div className="mt-10 space-y-4">
            {project.facts.map((fact) => (
              <p className="border-l-2 border-[#69d8ff] pl-4 leading-8 text-[#475467]" key={fact}>
                {fact}
              </p>
            ))}
          </div>
          {project.projectUrl ? (
              <a className="focus-ring mt-10 inline-flex rounded-full bg-[#111318] px-5 py-3 text-sm font-semibold text-[#ffffff]" href={project.projectUrl} target="_blank" rel="noreferrer">
              Open project
            </a>
          ) : null}
          {project.materials.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.materials.map((material) => (
                <a className="focus-ring rounded-full border border-black/10 px-4 py-2 text-sm" href={material.href} key={material.href} target="_blank" rel="noreferrer">
                  {material.label}
                </a>
              ))}
            </div>
          ) : null}
          <DetailGallery images={project.images} />
        </section>
      </div>
    </main>
  );
}
