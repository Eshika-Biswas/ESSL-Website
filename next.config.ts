import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
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
