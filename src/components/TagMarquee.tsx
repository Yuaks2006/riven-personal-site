import { identityTags } from "../data/site";

export default function TagMarquee() {
  const items = [...identityTags, ...identityTags];
  return (
    <section
      aria-label="个人标签"
      className="edge-fade mt-2 max-w-[100vw] overflow-hidden py-10 md:py-14"
    >
      <div className="marquee-track items-center">
        {items.map(([zh, en], i) => (
          <span key={`${zh}-${i}`} className="mx-3 flex shrink-0 items-center gap-3">
            <span className="chip-veil !px-5 !py-2.5">
              <span className="text-[0.95rem] text-ink">{zh}</span>
              <span className="en-line text-[0.74rem] text-ink-faint">{en}</span>
            </span>
            <span aria-hidden className="text-aurora text-sm">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
