/** @type {import('next').NextConfig} */
const nextConfig = {
  // Kita matikan strict mode dulu
  reactStrictMode: false,
  // Izinkan gambar (penting untuk page.tsx Anda)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

// Gunakan module.exports (Format yang paling stabil di Vercel)
module.exports = nextConfig;