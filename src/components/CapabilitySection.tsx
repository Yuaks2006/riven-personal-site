import { capabilities } from "../data/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const tints = ["tint-green", "tint-teal", "tint-blue", "tint-violet"];

export default function CapabilitySection() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1180px] scroll-mt-28 px-5 pt-32 md:px-10 md:pt-44"
    >
      <SectionHeader
        eyebrow="Capability Map — 能力地图"
        zh="四个象限，一个方向"
        accentWord="方向"
        en="Four quadrants of one direction — not a keyword pile."
      />

      <div className="mt-16 grid gap-7 md:mt-20 md:grid-cols-2">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.index} delay={(i % 2) * 0.07}>
            <div className={`card-veil ${tints[i]} h-full p-8 text-left md:p-11`}>
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden
                  className="mark-idx select-none text-6xl md:text-7xl"
                >
                  {cap.index}
                </span>
                <span className="en-line pt-2 text-right text-[0.78rem] text-ink-faint">
                  {cap.titleEn}
                </span>
              </div>
              <h3 className="display-mid mt-6 text-[1.45rem] md:text-[1.6rem]">
                {cap.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {cap.items.map((item) => (
                  <li key={item} className="chip-veil">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
