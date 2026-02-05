"use client";

import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';

// DATA BERITA (Link Gambar Sudah Diperbarui agar Stabil)
const kpcdiNews = [
  { 
    id: 1, 
    title: 'Darurat Hak Hidup: KPCDI Desak BPJS Pulihkan Status PBI yang Nonaktif Mendadak', 
    category: 'Advokasi', 
    date: 'Februari 2026',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    summary: 'Krisis kemanusiaan terjadi di berbagai RS ketika puluhan pasien cuci darah ditolak layanan karena status PBI dinonaktifkan sepihak tanpa pemberitahuan.' 
  },
  { 
    id: 2, 
    title: 'Mengawal Kedaulatan Obat: KPCDI Gugat UU Paten ke Mahkamah Konstitusi', 
    category: 'Advokasi', 
    date: 'Januari 2026',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    summary: 'KPCDI melawan praktik monopoli obat ("evergreening") yang membuat harga obat transplan dan pendukung dialisis tetap mahal dan sulit dijangkau.'
  },
  { 
    id: 3, 
    title: 'Kenapa CAPD Belum Populer? Solusi Dialisis Mandiri yang Lebih Efisien', 
    category: 'Edukasi', 
    date: 'Maret 2025',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    summary: 'Meski lebih murah dan fleksibel, adopsi cuci darah lewat perut (CAPD) masih rendah. KPCDI mendorong insentif RS dan perbaikan logistik cairan.'
  },
  { 
    id: 4, 
    title: 'Pembiaran Nyawa di RSUD Puri Husada: Jadwal Cuci Darah Dipangkas Sepihak', 
    category: 'Advokasi', 
    date: 'Juni 2025',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80',
    summary: 'KPCDI mengecam keras kebijakan RSUD yang mengurangi frekuensi hemodialisis akibat kelangkaan logistik, yang mengancam keselamatan 97 pasien.'
  },
  { 
    id: 5, 
    title: 'Waspada Gagal Ginjal Anak: Bahaya Minuman Manis dan Gaya Hidup Sedenter', 
    category: 'Edukasi', 
    date: 'Desember 2025',
    image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=800&q=80',
    summary: 'Tren penyakit ginjal merambah usia muda. Obesitas dan konsumsi minuman berpemanis dalam kemasan menjadi pintu masuk utama.'
  },
  { 
    id: 6, 
    title: 'Kecam Kelangkaan Obat Pasca-Transplantasi di RSCM', 
    category: 'Advokasi', 
    date: 'April 2024',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80',
    summary: 'Obat imunosupresan vital bagi pasien cangkok ginjal sempat langka. KPCDI menuntut perbaikan sistem e-katalog agar nyawa tidak jadi taruhan.'
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. HEADER HALAMAN */}
      <PageHeader 
        title="Portal Berita & Edukasi"
        subtitle="Arsip lengkap pergerakan advokasi, update gugatan hukum, dan referensi medis terpercaya bagi komunitas pasien ginjal."
        imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 2. GRID ARTIKEL */}
      <div className="container mx-auto px-4 py-24 -mt-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {kpcdiNews.map((news) => (
            <article key={news.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group shadow-sm">
              
              {/* GAMBAR BERITA */}
              <div className="h-64 w-full relative bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 text-sm font-medium animate-pulse">
                     Loading Image...
                  </div>
                  <Image 
                    src={news.image} 
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Badge Kategori */}
                  <span className={`absolute top-5 left-5 text-xs font-bold px-4 py-2 rounded-full text-white z-10 shadow-lg uppercase tracking-wider ${
                      news.category === 'Advokasi' ? 'bg-red-600' : 
                      news.category === 'Edukasi' ? 'bg-sky-600' : 'bg-green-600'
                  }`}>
                      {news.category}
                  </span>
              </div> 
              
              {/* KONTEN TEKS */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">
                  <span className="text-sky-600">{news.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <span>Tim Media KPCDI</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-snug group-hover:text-sky-700 transition duration-300 cursor-pointer line-clamp-2">
                  {news.title}
                </h2>
                
                <p className="text-gray-600 text-base line-clamp-3 mb-8 flex-grow leading-relaxed">
                  {news.summary}
                </p>
                
                <Link href={`/news/${news.id}`} className="text-white bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all group-hover:gap-4 shadow-md w-fit">
                  Baca Selengkapnya <span className="text-lg">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}