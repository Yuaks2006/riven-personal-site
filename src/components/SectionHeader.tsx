import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  zh: string;
  /** word inside zh to render in the aurora gradient */
  accentWord?: string;
  en: string;
};

function renderTitle(zh: string, accentWord?: string) {
  if (!accentWord || !zh.includes(accentWord)) {
    return zh;
  }
  const [before, after] = zh.split(accentWord);
  return (
    <>
      {before}
      <span className="text-aurora display-mid whitespace-nowrap align-baseline">
        {accentWord}
      </span>
      {after}
    </>
  );
}

export default function SectionHeader({
  eyebrow,
  zh,
  accentWord,
  en
}: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="mx-auto max-w-[760px] text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-hair mt-5 text-[clamp(1.9rem,4.8vw,3.7rem)] leading-[1.28] [text-wrap:balance]">
          {renderTitle(zh, accentWord)}
        </h2>
        <p className="en-line mt-5 text-[clamp(0.82rem,1.3vw,0.98rem)] text-ink-soft">
          {en}
        </p>
        <div className="rule-aurora mx-auto mt-8 w-24" />
      </div>
    </Reveal>
  );
}
