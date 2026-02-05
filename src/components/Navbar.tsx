"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // 1. Import Hook Pathname

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 2. Cek kita sedang ada di halaman mana

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. LOGIKA AJAIB:
  // Jika alamat URL dimulai dengan "/admin", maka JANGAN TAMPILKAN Navbar ini.
  // Langsung return null (kosong).
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 ${isScrolled ? 'bg-sky-900/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-20 h-20 md:w-28 md:h-28 transition-transform duration-300 group-hover:scale-105 drop-shadow-lg filter hover:brightness-110">
            <Image 
                src="/images/logo.png" 
                alt="Logo KPCDI" 
                fill
                className="object-contain"
                priority
            />
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8 items-center font-bold text-sm text-white/90 uppercase tracking-wider">
          <Link href="/" className="hover:text-sky-200 transition-colors relative group py-2">
            Beranda
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="hover:text-sky-200 transition-colors relative group py-2">
            Tentang Kami
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/news" className="hover:text-sky-200 transition-colors relative group py-2">
            Portal Berita
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="hover:text-sky-200 transition-colors relative group py-2">
            Kontak
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* TOMBOL DAFTAR */}
        <div className="hidden md:flex">
          <Link 
            href="/contact" 
            className="px-7 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-full font-bold hover:from-sky-500 hover:to-sky-400 transition shadow-lg hover:shadow-sky-500/30 text-sm transform hover:-translate-y-0.5 border border-white/10"
          >
            Daftar Anggota
          </Link>
        </div>

        {/* TOMBOL MOBILE */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU DROP-DOWN */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-6 flex flex-col gap-4 shadow-2xl absolute w-full left-0 top-full z-50 rounded-b-2xl">
          <Link href="/" className="text-gray-800 font-bold text-lg hover:text-sky-600 py-2 border-b border-gray-100 flex justify-between items-center" onClick={() => setIsOpen(false)}>Beranda <span>→</span></Link>
          <Link href="/about" className="text-gray-800 font-bold text-lg hover:text-sky-600 py-2 border-b border-gray-100 flex justify-between items-center" onClick={() => setIsOpen(false)}>Tentang Kami <span>→</span></Link>
          <Link href="/news" className="text-gray-800 font-bold text-lg hover:text-sky-600 py-2 border-b border-gray-100 flex justify-between items-center" onClick={() => setIsOpen(false)}>Portal Berita <span>→</span></Link>
          <Link href="/contact" className="text-gray-800 font-bold text-lg hover:text-sky-600 py-2 border-b border-gray-100 flex justify-between items-center" onClick={() => setIsOpen(false)}>Kontak <span>→</span></Link>
          <Link href="/contact" className="bg-sky-600 text-white text-center py-4 rounded-xl font-bold mt-4 shadow-md hover:bg-sky-700 text-lg" onClick={() => setIsOpen(false)}>
            Daftar Anggota
          </Link>
        </div>
      )}
    </nav>
  );
}