import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
