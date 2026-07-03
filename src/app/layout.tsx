import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuaks2006.github.io/riven-personal-site/"),
  title: "Riven",
  description: "Riven personal card, Agent apps, AIGC creation, community scenes, and project practice.",
  openGraph: {
    title: "Riven",
    description: "Agent Builder · Community Connector · AIGC Creator",
    images: ["https://yuaks2006.github.io/riven-personal-site/assets/profile/ip-avatar.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
