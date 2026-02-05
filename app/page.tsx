import Link from 'next/link';
import Image from 'next/image';
import { HeartPulse, Scale, Users, ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';

// DATA BERITA TERBARU (Top 3)
const latestNews = [
  { 
    id: 1, 
    title: 'Darurat Hak Hidup: KPCDI Desak BPJS Pulihkan Status PBI', 
    category: 'Advokasi', 
    date: 'Februari 2026',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    summary: 'Krisis kemanusiaan terjadi ketika puluhan pasien cuci darah ditolak layanan karena status PBI dinonaktifkan sepihak.' 
  },
  { 
    id: 2, 
    title: 'Mengawal Kedaulatan Obat: KPCDI Gugat UU Paten ke MK', 
    category: 'Advokasi', 
    date: 'Januari 2026',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    summary: 'KPCDI melawan praktik monopoli obat ("evergreening") yang membuat harga obat transplan tetap mahal.'
  },
  { 
    id: 3, 
    title: 'Kenapa CAPD Belum Populer? Solusi Dialisis Mandiri', 
    category: 'Edukasi', 
    date: 'Maret 2025',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    summary: 'Meski lebih murah dan fleksibel, adopsi CAPD masih rendah. KPCDI mendorong insentif RS dan perbaikan logistik.'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION (Header Image) */}
      <section className="relative h-[750px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Pastikan file header.png ada di folder public/images/ */}
           <Image 
             src="/images/header.png" 
             alt="Header KPCDI" 
             fill
             className="object-cover"
             priority
           />
           <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-sky-900/90 via-black/20 to-black/40"></div>
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10 px-4 pt-32">
          <span className="bg-white/10 text-white px-5 py-2 rounded-full text-sm font-bold mb-8 inline-block backdrop-blur-md border border-white/20 shadow-sm">
            Est. 2015 — Hari Ginjal Sedunia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl tracking-tight">
            Perjuangan, Persaudaraan, <br/> & Pengetahuan
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-sky-50 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Bersama KPCDI, kita wujudkan masa depan pasien ginjal Indonesia yang berkualitas, mandiri, dan berdaya.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/news" className="bg-sky-600 border-2 border-sky-600 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-500 hover:border-sky-500 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform hover:-translate-y-1">
              Pelajari Advokasi <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="border-2 border-white bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-sky-900 transition flex items-center justify-center backdrop-blur-sm">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PILAR PERGERAKAN */}
      <section className="py-24 bg-slate-50 relative z-20 rounded-t-[40px] -mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilar Pergerakan Kami</h2>
            <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Tiga landasan utama KPCDI dalam melindungi hak dan martabat pasien.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
              <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition duration-500">
                <Scale className="w-10 h-10 text-red-600 group-hover:text-white transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-sky-600 transition">Advokasi Kebijakan</h3>
              <p className="text-gray-600 leading-relaxed">
                Melakukan litigasi hukum dan tekanan publik untuk kebijakan BPJS, regulasi obat, dan akses layanan kesehatan yang adil.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
               <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition duration-500">
                <HeartPulse className="w-10 h-10 text-red-600 group-hover:text-white transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-sky-600 transition">Edukasi Medis</h3>
              <p className="text-gray-600 leading-relaxed">
                Pusat informasi valid tentang Hemodialisis, CAPD, dan Transplantasi untuk membentuk pasien yang cerdas dan mandiri.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
               <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition duration-500">
                <Users className="w-10 h-10 text-red-600 group-hover:text-white transition duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-sky-600 transition">Solidaritas Sosial</h3>
              <p className="text-gray-600 leading-relaxed">
                Membangun persaudaraan yang kuat, saling menguatkan dalam krisis, dan program pemberdayaan ekonomi pasien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION BERITA TERBARU */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <span className="text-sky-600 font-bold tracking-wider uppercase text-sm">Update Terkini</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Berita & Kegiatan</h2>
             </div>
             <Link href="/news" className="group flex items-center gap-2 text-sky-600 font-bold hover:text-sky-800 transition">
                Lihat Semua Berita <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <article key={news.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                   <Image 
                      src={news.image} 
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                   />
                   <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full text-white z-10 ${news.category === 'Advokasi' ? 'bg-red-600' : 'bg-sky-600'}`}>
                      {news.category}
                   </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-semibold">
                      <Calendar size={14} className="text-sky-500"/> {news.date}
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-sky-600 transition">
                      <Link href={`/news/${news.id}`}>
                        <span className="absolute inset-0"></span> {/* Make entire card clickable */}
                        {news.title}
                      </Link>
                   </h3>
                   <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                      {news.summary}
                   </p>
                   <div className="flex items-center text-sky-600 font-bold text-sm mt-auto group-hover:underline decoration-2 underline-offset-4">
                      Baca Selengkapnya <ArrowUpRight size={16} className="ml-1" />
                   </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERS */}
      <section className="py-16 border-t bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-10">Didukung Oleh Mitra Strategis</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <h3 className="text-2xl font-black text-gray-800">PRODIA</h3>
             <h3 className="text-2xl font-black text-gray-800">PT. ETANA</h3>
             <h3 className="text-2xl font-black text-gray-800">PERNEFRI</h3>
             <h3 className="text-2xl font-black text-gray-800">BAYER</h3>
          </div>
        </div>
      </section>

    </main>
  );
}
