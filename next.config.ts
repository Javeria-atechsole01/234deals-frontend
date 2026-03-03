import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Use "dist" as the build output directory to make production artifacts explicit.
  distDir: "dist",
  turbopack: {
    root: __dirname,
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

export default nextConfig;