import { workExperience } from "../data/site";
import { withBasePath } from "../lib/paths";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1180px] scroll-mt-28 px-5 pt-32 md:px-10 md:pt-44"
    >
      <SectionHeader
        eyebrow="Work Experience — 工作履历"
        zh="用数据说话的经历"
        accentWord="数据"
        en="Roles with receipts — numbers, not narratives."
      />

      {workExperience.map((job) => (
        <Reveal key={job.company} className="mt-16 md:mt-20">
          <div className="card-veil card-still tint-violet p-8 md:p-14">
            <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
              <div className="text-left">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip-veil !text-ink">{job.role}</span>
                  <span className="en-line text-[0.8rem] text-ink-faint">
                    {job.period}
                  </span>
                </div>
                <h3 className="display-mid mt-6 text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.4]">
                  {job.company}
                </h3>
                <p className="en-line mt-3 text-[0.8rem] text-ink-faint">
                  community ops — offline, Guangdong
                </p>
                <ul className="mt-7 space-y-3.5">
                  {job.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-[0.94rem] leading-[1.95] text-ink-soft"
                    >
                      <span aria-hidden className="text-aurora pt-[0.1em]">
                        ✦
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-8 text-left">
                <div className="space-y-7">
                  {job.metrics.map((metric) => (
                    <div key={metric.label} className="hairline-b pb-5">
                      <p className="metric-veil text-[clamp(1.8rem,3vw,2.5rem)] leading-none">
                        {metric.value}
                      </p>
                      <p className="mt-2.5 text-sm text-ink-soft">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                {job.images.length > 0 ? (
                  <a
                    href={withBasePath(job.images[0].src)}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-5"
                  >
                    <span className="photo-veil img-zoom block w-20 shrink-0 !rounded-[14px]">
                      <img
                        src={withBasePath(job.images[0].src)}
                        alt={job.images[0].alt}
                        className="block aspect-[3/4] w-full object-cover"
                        loading="lazy"
                      />
                    </span>
                    <span className="link-quiet text-[0.92rem]">
                      实习证明 · certificate ↗
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal delay={0.08}>
        <div className="slot-dashed mt-9 flex flex-wrap items-center justify-between gap-4 px-8 py-7 md:px-12">
          <p className="display-mid text-[1.2rem] text-ink-soft md:text-[1.35rem]">
            下一段经历，正在路上。
          </p>
          <p className="en-line text-[0.8rem] text-ink-faint">
            next chapter — open to opportunities
          </p>
        </div>
      </Reveal>
    </section>
  );
}
