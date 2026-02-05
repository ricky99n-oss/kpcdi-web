import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Pastikan nama file di folder components adalah "Navbar.tsx" (N besar)
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}