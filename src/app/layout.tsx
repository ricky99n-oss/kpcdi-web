import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cek Website KPCDI",
  description: "Website sedang diperbaiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Navbar dimatikan dulu */}
        <div style={{ padding: '10px', background: 'yellow', color: 'black', textAlign: 'center' }}>
            STATUS: LAYOUT BERHASIL DIMUAT
        </div>
        {children}
      </body>
    </html>
  );
}