import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KPCDI - Komunitas Pasien Cuci Darah Indonesia",
  description: "Wadah advokasi, edukasi, dan solidaritas bagi pasien ginjal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* <Navbar />  <--- KITA SEMBUNYIKAN DULU */}
        <div style={{ padding: '20px', background: '#f0f9ff', color: 'black' }}>
            <p><strong>Mode Debug:</strong> Navbar dinonaktifkan sementara.</p>
        </div>
        {children}
      </body>
    </html>
  );
}