import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingIncludes: {
    '/api/ai-advisor': ['./node_modules/@xenova/transformers/**/*.wasm'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ensure-bd.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleapis.com',
      },
    ],
  },
};

export default nextConfig;
