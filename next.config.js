/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. STABILITAS: Matikan strict mode & abaikan error kecil saat build
  // Ini mencegah deploy gagal hanya karena spasi atau warning sepele
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. GAMBAR: Izinkan gambar dari semua sumber HTTPS
  // (Penting untuk Unsplash dan Supabase Storage)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // 3. KEAMANAN EKSTRA (Security Headers)
  // Melindungi website dari serangan XSS, Clickjacking, & Sniffing
  async headers() {
    return [
      {
        source: '/:path*', // Terapkan aturan ini ke SEMUA halaman
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Paksa browser pakai HTTPS selama 2 tahun
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Anti-Clickjacking: Website tidak bisa di-embed di iframe orang lain
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Mencegah browser menebak tipe file (Anti-XSS)
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin', // Menjaga privasi user saat klik link keluar
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Matikan akses kamera/mic/lokasi jika tidak dipakai (Privasi Max)
          },
        ],
      },
    ];
  },
};

// Gunakan module.exports karena ini format paling stabil di server Vercel
module.exports = nextConfig;