import PageHeader from '@/components/PageHeader';
import { Calendar, CheckCircle, Target, Users, Award, BookOpen } from "lucide-react";
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HEADER DENGAN GAMBAR UNSPLASH */}
      <PageHeader 
        title="Tentang KPCDI"
        subtitle="Dari wadah berbagi rasa, bertransformasi menjadi kekuatan advokasi kebijakan kesehatan yang disegani di Indonesia."
        // Gambar: Orang-orang bergandengan/komunitas
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        
        {/* 2. SEJARAH & VISI (Layout Baru yang Lebih Bersih) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Kolom Kiri: Sejarah */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-red-50 px-5 py-2 rounded-full text-red-700 font-bold mb-4 border border-red-100">
              <Calendar size={20} />
              <span>Berdiri: 15 Maret 2015 (Hari Ginjal Sedunia)</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">Perjalanan Menjadi Subjek yang Berdaya</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              KPCDI lahir dari keresahan bahwa pasien seringkali hanya menjadi objek medis di rumah sakit. Para pendiri menyadari bahwa sekadar "curhat" tidak akan mengubah keadaan. Diperlukan organisasi dengan legal standing kuat untuk duduk sejajar bernegosiasi dengan pembuat kebijakan demi perbaikan layanan BPJS dan fasilitas kesehatan nasional.
            </p>
          </div>

          {/* Kolom Kanan: Visi & Misi Card */}
          <div className="bg-gradient-to-br from-sky-50 to-white p-10 rounded-3xl shadow-xl border border-sky-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-sky-100 rounded-full opacity-50 blur-3xl"></div>
            
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-sky-600 p-3 rounded-xl text-white shadow-md">
                    <Target size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Visi Kami</h3>
            </div>
            
            <p className="text-xl text-gray-800 italic mb-10 font-medium leading-relaxed border-l-4 border-sky-600 pl-6 py-2 bg-sky-50/50 rounded-r-lg">
              "Menciptakan masa depan yang berkualitas, mandiri, dan bermartabat bagi pasien gagal ginjal di Indonesia."
            </p>
            
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><BookOpen size={20} className="text-sky-600"/> Misi Utama:</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-sky-500 shrink-0 mt-1" size={22} />
                <span className="text-gray-700 text-lg">Aksesibilitas layanan dialisis dan obat berkualitas yang merata.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-sky-500 shrink-0 mt-1" size={22} />
                <span className="text-gray-700 text-lg">Edukasi pasien untuk mencapai standar kesehatan internasional.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-sky-500 shrink-0 mt-1" size={22} />
                <span className="text-gray-700 text-lg">Pemberdayaan ekonomi agar pasien kembali produktif.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. STRUKTUR PENGURUS (Tampilan Card Lebih Modern) */}
        <div className="max-w-6xl mx-auto text-center">
           <div className="mb-16">
              <span className="text-sky-600 font-bold tracking-wider uppercase">Struktur Organisasi</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">Dewan Pengurus Pusat</h2>
              <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full mt-6"></div>
           </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Pengurus (Contoh 1) */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              {/* Placeholder Foto (Ganti dengan Image jika ada foto asli) */}
              <div className="w-32 h-32 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full mx-auto mb-6 border-4 border-white shadow-md flex items-center justify-center">
                 <Users size={40} className="text-gray-400" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Tony Richard Samosir</h3>
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Ketua Umum</span>
              <p className="text-gray-600 text-sm italic">"Pemimpin strategis dan wajah publik advokasi pergerakan."</p>
            </div>

             {/* Card Pengurus (Contoh 2) */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-32 h-32 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full mx-auto mb-6 border-4 border-white shadow-md flex items-center justify-center">
                  <Users size={40} className="text-gray-400" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">PH Hariyanto</h3>
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Sekretaris Jenderal</span>
               <p className="text-gray-600 text-sm italic">"Mengelola tata kelola organisasi dan kesekretariatan pusat."</p>
            </div>

             {/* Card Pengurus (Contoh 3) - Aksen Merah untuk Advokasi */}
            <div className="bg-white border border-red-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-32 h-32 bg-gradient-to-tr from-red-50 to-red-100 rounded-full mx-auto mb-6 border-4 border-white shadow-md flex items-center justify-center">
                   <Award size={40} className="text-red-400" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Suryo Adi Nugroho</h3>
              <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Dept. Hukum & Advokasi</span>
               <p className="text-gray-600 text-sm italic">"Ujung tombak litigasi dan gugatan kebijakan publik."</p>
            </div>
            
            {/* ... Tambahkan pengurus lain dengan pola yang sama ... */}

          </div>
        </div>

      </div>
    </main>
  );
}