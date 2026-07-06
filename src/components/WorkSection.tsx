import Link from "next/link";
import { projects } from "../data/site";
import { withBasePath } from "../lib/paths";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const cardTints = ["tint-green", "tint-teal", "tint-violet"];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-[1180px] scroll-mt-28 px-5 pt-32 md:px-10 md:pt-44"
    >
      <SectionHeader
        eyebrow="Selected Work — 精选项目"
        zh="把想法，做成可见的作品"
        accentWord="可见"
        en="Evidence over adjectives — four projects, four real scenes."
      />

      <div className="mt-16 space-y-8 md:mt-20 md:space-y-10">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <article
              className={`card-veil ${cardTints[i % 3]} group block overflow-hidden p-8 md:p-14`}
            >
              <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-14">
                <div className="text-left">
                  <p className="eyebrow">
                    N°{project.index} — {project.type}
                  </p>
                  <h3 className="display-mid mt-5 text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.3]">
                    {project.titleZh}
                  </h3>
                  <p className="en-line mt-3 text-[0.92rem] text-ink-faint">
                    {project.title} — {project.subtitle}
                  </p>
                  <p className="mt-6 max-w-[46ch] text-[0.96rem] leading-[2] text-ink-soft">
                    {project.summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    <span className="chip-veil">{project.role}</span>
                    {project.period ? (
                      <span className="chip-veil">{project.period}</span>
                    ) : null}
                  </div>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link
                      href={`/work/${project.slug}/`}
                      className="pill-quiet"
                    >
                      深入了解
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-500 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </Link>
                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="pill-aurora"
                      >
                        {project.projectUrlLabel ?? "项目地址"}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  {project.images.length > 0 ? (
                    <div className="photo-veil img-zoom w-full max-w-[420px]">
                      <img
                        src={withBasePath(project.images[0].src)}
                        alt={project.images[0].alt}
                        className="block aspect-[4/3] w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <span
                      aria-hidden
                      className="mark-idx select-none text-[clamp(6rem,14vw,10rem)] transition-transform duration-700 group-hover:scale-105"
                    >
                      {project.index}
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
