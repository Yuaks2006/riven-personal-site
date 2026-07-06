import type { Metadata } from "next";
import localFont from "next/font/local";
import PointerVeil from "../components/PointerVeil";
import "./globals.css";

const sansSC = localFont({
  src: "../fonts/NotoSansSC-sub.woff2",
  variable: "--font-sans-sc",
  weight: "100 900",
  display: "swap"
});

const unbounded = localFont({
  src: "../fonts/Unbounded-sub.woff2",
  variable: "--font-unbounded",
  weight: "200 900",
  display: "swap"
});

const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://yuaks2006.github.io/riven-personal-site/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Riven 谭宇峻 — 行动型节点 / Action-driven Node",
  description:
    "连接 Agent 应用、AIGC 创作、社区现场与项目实践的行动型节点。An action-driven node connecting Agent apps, AIGC creation, community scenes, and project practice.",
  openGraph: {
    title: "Riven — 行动型节点",
    description:
      "Agent apps × AIGC creation × community scenes × project practice.",
    images: [
      "https://yuaks2006.github.io/riven-personal-site/assets/profile/ip-avatar.jpg"
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${sansSC.variable} ${unbounded.variable} grain`}>
        {/* polar sky — stars + aurora curtain, behind every page */}
        <div aria-hidden className="sky">
          <span className="veil veil-green veil-sway-a left-[6%] top-[-16%] h-[86vh] w-[34vw] min-w-[300px]" />
          <span className="veil veil-teal veil-sway-b left-[34%] top-[-22%] h-[78vh] w-[26vw] min-w-[240px]" />
          <span className="veil veil-violet veil-sway-c right-[4%] top-[-14%] h-[70vh] w-[30vw] min-w-[260px]" />
        </div>
        <PointerVeil />
        {children}
      </body>
    </html>
  );
}
