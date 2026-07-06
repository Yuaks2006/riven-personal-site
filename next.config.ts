import type { NextConfig } from "next";

// On Vercel: native Next.js runtime (no static export, no basePath prefix)
// Elsewhere (local / GitHub Pages): static export with basePath for subdirectory hosting
const isVercel = process.env.VERCEL === "1";
const basePath = isVercel ? undefined : (process.env.NEXT_PUBLIC_BASE_PATH || undefined);

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "export" }),
  outputFileTracingRoot: process.cwd(),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: !isVercel
  },
  trailingSlash: true
};

export default nextConfig;
