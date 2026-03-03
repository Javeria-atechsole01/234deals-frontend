import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Vercel expects the default ".next" output directory
  turbopack: {
    root: __dirname,
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

export default nextConfig;