import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.20.10.3'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "punkt-cdn.oslo.kommune.no",
      },
    ],
  },
};

export default nextConfig;
