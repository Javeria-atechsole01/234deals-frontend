import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'dist',
  turbopack: {
    root: __dirname,
    resolveAlias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

export default nextConfig;