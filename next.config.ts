import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Mengizinkan gambar dari Unsplash
      },
    ],
  },
};

export default nextConfig;

// Update pancingan untuk Vercel