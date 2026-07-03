import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: process.cwd(),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
