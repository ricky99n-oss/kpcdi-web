/** @type {import('next').NextConfig} */
const nextConfig = {
  // Kita matikan strict mode sementara biar tidak rewel
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
      },
    ],
  },
};

module.exports = nextConfig;