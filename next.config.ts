import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kita hapus bagian eslint/typescript ignore supaya errornya kelihatan
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
      },
    ],
  },
};

export default nextConfig;