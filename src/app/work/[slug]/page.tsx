import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import SiteNav from "../../../components/SiteNav";
import { getProject, projects } from "../../../data/site";
import { withBasePath } from "../../../lib/paths";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="relative overflow-hidden">
      <SiteNav />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10">
        <span className="bloom bloom-blue bloom-drift-a left-[-10%] top-[-6%] h-[40vw] w-[40vw] min-h-[340px] min-w-[340px]" />
        <span className="bloom bloom-teal bloom-drift-b right-[-12%] top-[10%] h-[36vw] w-[36vw] min-h-[300px] min-w-[300px]" />
      </div>

      <article className="mx-auto max-w-[900px] px-5 pb-28 pt-36 md:px-10 md:pt-44">
        <Reveal>
          <Link href="/#work" className="link-quiet text-[0.9rem]">
            ← 返回全部作品
          </Link>

          <p className="eyebrow mt-10">
            Work N°{project.index} — {project.type}
          </p>
          <h1 className="display-hair mt-6 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.2]">
            {project.titleZh}
          </h1>
          <p className="en-line mt-4 text-[clamp(0.88rem,1.4vw,1.05rem)] text-ink-faint">
            {project.title} — {project.subtitle}
          </p>

          <p className="mt-9 max-w-[54ch] text-[1rem] leading-[2.05] text-ink-soft">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <span className="chip-veil">{project.role}</span>
            {project.period ? (
              <span className="chip-veil">{project.period}</span>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rule-aurora mt-14 w-full" />
          <p className="eyebrow mt-12">我做了什么 — What I Did</p>
          <ol className="mt-8 space-y-8">
            {project.facts.map((fact, i) => (
              <li key={fact} className="flex gap-7">
                <span className="metric-veil shrink-0 text-4xl leading-none md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-[56ch] pt-1 text-[0.98rem] leading-[2] text-ink-soft">
                  {fact}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {project.images.length > 0 ? (
          <Reveal delay={0.12}>
            <div className="rule-aurora mt-14 w-full" />
            <p className="eyebrow mt-12">现场与产出 — Scenes</p>
            <div className="mt-8 flex flex-wrap gap-8">
              {project.images.map((image) => (
                <figure
                  key={image.src}
                  className="photo-veil img-zoom w-full max-w-[520px]"
                >
                  <img
                    src={withBasePath(image.src)}
                    alt={image.alt}
                    className="block w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </Reveal>
        ) : null}

        {project.projectUrl || project.materials.length > 0 ? (
          <Reveal delay={0.14}>
            <div className="mt-12 flex flex-wrap gap-4">
              {project.projectUrl ? (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-aurora"
                >
                  项目地址 <span aria-hidden>↗</span>
                </a>
              ) : null}
              {project.materials.map((material) => (
                <a
                  key={material.href}
                  href={material.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-quiet"
                >
                  {material.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.08}>
          <nav className="mt-20 grid gap-5 sm:grid-cols-2">
            <Link
              href={`/work/${prev.slug}/`}
              className="card-veil block p-7 text-left"
            >
              <p className="eyebrow">← Prev 上一个</p>
              <p className="display-mid mt-3 text-[1.15rem] leading-snug">
                {prev.titleZh}
              </p>
            </Link>
            <Link
              href={`/work/${next.slug}/`}
              className="card-veil block p-7 text-left sm:text-right"
            >
              <p className="eyebrow">Next 下一个 →</p>
              <p className="display-mid mt-3 text-[1.15rem] leading-snug">
                {next.titleZh}
              </p>
            </Link>
          </nav>
        </Reveal>
      </article>
    </main>
  );
}
