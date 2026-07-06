import { contact, contactTopics, profile } from "../data/site";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="finale relative mt-32 scroll-mt-28 overflow-hidden rounded-t-[44px] md:mt-44 md:rounded-t-[64px]"
    >
      <div className="mx-auto max-w-[1180px] px-5 pb-14 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Contact — 联系与合作</p>
            <h2 className="display-hair mt-8 text-[clamp(3rem,8.5vw,6.8rem)] leading-[1.12]">
              来
              <span className="text-aurora display-mid whitespace-nowrap align-baseline">
                聊聊
              </span>
              。
            </h2>
            <p className="en-line mt-7 text-[clamp(0.88rem,1.5vw,1.1rem)] text-ink-soft">
              Say hi — always happy to talk.
            </p>
            <p className="mx-auto mt-8 max-w-[46ch] text-[0.96rem] leading-[2.05] text-ink-soft">
              如果你正在做 AI 产品、Agent 应用、AIGC 内容、线下活动或青年社区项目，欢迎联系我。
              我适合参与需求拆解、创意实现、活动协办、现场技术支持、社群连接和项目推进。
            </p>
            <ul className="mx-auto mt-9 flex max-w-[560px] flex-wrap justify-center gap-3">
              {contactTopics.map((topic) => (
                <li key={topic}>
                  <span className="chip-veil">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-16 max-w-[640px] md:mt-20">
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] py-6">
              <div className="text-left">
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-quiet font-un mt-2 inline-block text-lg font-light md:text-xl"
                >
                  {contact.email}
                </a>
              </div>
              <CopyButton value={contact.email} />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] py-6">
              <div className="text-left">
                <p className="eyebrow">WeChat 微信</p>
                <p className="font-un mt-2 text-lg font-light md:text-xl">
                  {contact.wechat.value}
                </p>
                <p className="mt-1.5 text-xs text-ink-faint">
                  {contact.wechat.note}
                </p>
              </div>
              <CopyButton value={contact.wechat.value} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-[var(--line)] py-6">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="link-quiet font-un text-base font-light md:text-lg"
              >
                GitHub<span aria-hidden> ↗</span>
              </a>
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="link-quiet font-un text-base font-light md:text-lg"
              >
                LinkedIn<span aria-hidden> ↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-20 md:mt-24">
          <p
            aria-hidden
            className="font-un select-none whitespace-nowrap text-center text-[clamp(3.6rem,13vw,11rem)] font-extralight leading-none tracking-[0.08em] text-[rgba(198,222,255,0.05)]"
          >
            RIVEN
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6">
            <p className="text-xs tracking-[0.18em] text-ink-faint">
              © 2026 RIVEN · {profile.legalName} · {profile.city}
            </p>
            <p className="en-line text-[0.72rem] text-ink-faint">
              moved by ideas, built with agents
            </p>
            <a href="#top" className="link-quiet text-xs tracking-[0.18em]">
              回到顶部 ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
