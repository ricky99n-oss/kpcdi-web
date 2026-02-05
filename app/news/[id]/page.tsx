import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

// DATA BERITA LENGKAP (Gambar disamakan dengan file sebelumnya)
const newsData = [
  { 
    id: 1, 
    title: 'Darurat Hak Hidup: KPCDI Desak BPJS Pulihkan Status PBI yang Nonaktif Mendadak', 
    category: 'Advokasi', 
    date: 'Februari 2026',
    author: 'Tim Media KPCDI',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="mb-4"><strong>Jakarta, Februari 2026</strong> – Komunitas Pasien Cuci Darah Indonesia (KPCDI) melaporkan adanya krisis kemanusiaan di loket-loket rumah sakit setelah puluhan pasien gagal ginjal mendapati status kepesertaan Penerima Bantuan Iuran (PBI) mereka dinonaktifkan tanpa pemberitahuan.</p>
      <p class="mb-4">Ketua Umum KPCDI, Tony Richard Samosir, menegaskan bahwa tindakan ini merupakan pelanggaran serius terhadap hak konstitusional warga atas kesehatan.</p>
      <blockquote class="border-l-4 border-sky-600 pl-4 italic my-6 text-gray-700">"Bagi pasien cuci darah, ini bukan sekadar urusan administrasi; ini soal hidup dan mati. Begitu jadwal cuci darah terlewat, nyawa mereka menjadi taruhannya."</blockquote>
      <p class="mb-4">KPCDI mencatat sedikitnya 30 laporan dari berbagai daerah di mana pasien tidak mampu harus menanggung biaya mandiri yang sangat mahal atau terpaksa pulang tanpa mendapatkan perawatan. Kondisi ini sangat berbahaya karena keterlambatan cuci darah dapat memicu komplikasi fatal seperti uremia dan edema paru dalam hitungan hari.</p>
      <p class="mb-4">KPCDI mendesak BPJS Kesehatan dan Kementerian Sosial untuk segera melakukan audit terhadap data peserta dan menjamin bahwa tidak ada pasien penyakit kronis yang kehilangan akses layanan hanya karena kendala administratif data.</p>
    `
  },
  { 
    id: 2, 
    title: 'Mengawal Kedaulatan Obat: KPCDI Gugat UU Paten ke Mahkamah Konstitusi', 
    category: 'Advokasi', 
    date: 'Januari 2026',
    author: 'Tim Advokasi KPCDI',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="mb-4"><strong>Jakarta, Januari 2026</strong> – Perjuangan pasien gagal ginjal untuk mendapatkan akses obat terjangkau terus berlanjut di Mahkamah Konstitusi. Koalisi Advokasi Hak Pasien, yang di dalamnya tergabung KPCDI, telah menyerahkan berkas perbaikan permohonan uji materiil terhadap UU Paten.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Melawan Praktik "Evergreening"</h3>
      <p class="mb-4">Gugatan ini difokuskan pada penghapusan praktik <em>evergreening</em> paten, sebuah strategi perusahaan farmasi untuk memperpanjang monopoli obat dengan modifikasi kecil yang tidak signifikan. Hal ini dinilai membatasi ketersediaan obat generik murah di pasar Indonesia.</p>
      <p class="mb-4">Kuasa hukum pemohon menekankan bahwa jika praktik ini dibiarkan, harga obat pendukung dialisis dan pasca-transplantasi akan tetap mahal dan membebani skema BPJS Kesehatan. KPCDI berkomitmen untuk mengawal proses hukum ini hingga akhir demi memastikan tidak ada hambatan buatan terhadap hak atas obat bagi warga negara.</p>
    `
  },
  { 
    id: 3, 
    title: 'Kenapa CAPD Belum Populer? Solusi Dialisis Mandiri yang Lebih Efisien', 
    category: 'Edukasi', 
    date: 'Maret 2025',
    author: 'Dr. Nefrologi & KPCDI',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="mb-4"><strong>Jakarta, Maret 2025</strong> – Dalam rangka memperingati Hari Ginjal Sedunia, KPCDI kembali menyoroti pentingnya adopsi <em>Continuous Ambulatory Peritoneal Dialysis</em> (CAPD) sebagai modalitas dialisis mandiri yang efisien dan berkualitas.</p>
      <p class="mb-4">Meskipun data menunjukkan CAPD lebih murah 10-15% bagi negara dan memberikan fleksibilitas bagi pasien, jumlah penggunanya di Indonesia masih sangat rendah. Hambatan utama bukan terletak pada kesiapan pasien, melainkan pada insentif rumah sakit dan kendala logistik distribusi cairan.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Kemandirian:</strong> Pasien bisa melakukan cuci darah di rumah atau kantor.</li>
        <li><strong>Kualitas Hidup:</strong> Tidak perlu terikat jadwal RS 2-3 kali seminggu.</li>
        <li><strong>Diet:</strong> Pembatasan cairan dan makanan cenderung lebih longgar dibanding HD.</li>
      </ul>
      <p class="mb-4">KPCDI mendorong pemerintah untuk menerapkan kebijakan "CAPD First" yang didukung oleh jaminan ketersediaan logistik hingga ke pelosok Indonesia guna meningkatkan kemandirian dan kualitas hidup pasien gagal ginjal.</p>
    `
  },
  { 
    id: 4, 
    title: 'Pembiaran Nyawa di RSUD Puri Husada: Jadwal Cuci Darah Dipangkas Sepihak', 
    category: 'Advokasi', 
    date: 'Juni 2025',
    author: 'Tim Pengawasan KPCDI',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="mb-4">Kasus pemangkasan jadwal cuci darah di RSUD Puri Husada pada Juni 2025 menjadi preseden buruk bagi pelayanan kesehatan daerah. Kebijakan sepihak rumah sakit untuk mengurangi frekuensi hemodialisis dari dua kali menjadi satu kali seminggu bagi 97 pasien rutin merupakan pelanggaran serius terhadap standar medis.</p>
      <p class="mb-4">KPCDI mengecam tindakan ini sebagai "pembiaran nyawa". Pengurangan frekuensi dialisis secara drastis akan menyebabkan penumpukan racun dan cairan yang berujung pada kematian cepat.</p>
      <p class="mb-4">Setelah tekanan publik yang digalang KPCDI, pihak RSUD akhirnya menormalisasi jadwal kembali. Kasus ini menunjukkan pentingnya pengawasan masyarakat sipil terhadap operasional rumah sakit daerah.</p>
    `
  },
  { 
    id: 5, 
    title: 'Waspada Gagal Ginjal Anak: Bahaya Minuman Manis dan Gaya Hidup Sedenter', 
    category: 'Edukasi', 
    date: 'Desember 2025',
    author: 'Divisi Kesehatan Anak',
    image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="mb-4">Tren penyakit ginjal mulai merambah usia yang lebih muda. KPCDI menyuarakan keprihatinan atas meningkatnya kasus obesitas dan diabetes pada anak yang menjadi pintu masuk penyakit ginjal kronik di masa depan.</p>
      <p class="mb-4">Pola makan yang tinggi gula, garam, dan lemak, serta kurangnya aktivitas fisik menjadi faktor pemicu utama. Banyak remaja yang sudah merokok dan sering mengonsumsi minuman berwarna yang sarat pengawet.</p>
      <p class="mb-4">KPCDI merekomendasikan orang tua untuk kembali pada pola makan sehat, memperbanyak konsumsi air putih, dan waspada terhadap gejala awal seperti urine berbusa atau bengkak pada wajah anak.</p>
    `
  },
  { 
    id: 6, 
    title: 'Kecam Kelangkaan Obat Pasca-Transplantasi di RSCM', 
    category: 'Advokasi', 
    date: 'April 2024',
    author: 'Tim Advokasi KPCDI',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="mb-4">Obat-obatan imunosupresan seperti Cellcept atau Tacrolimus tidak boleh terputus konsumsinya bagi pasien transplantasi ginjal, karena dapat memicu reaksi penolakan organ oleh tubuh.</p>
      <p class="mb-4">KPCDI mengecam keras kelangkaan obat-obatan kritis ini di RSCM pada April 2024. Hal ini dinilai sebagai bentuk pengabaian terhadap investasi besar yang telah dikeluarkan negara untuk prosedur transplantasi tersebut.</p>
      <p class="mb-4">Analisis KPCDI menunjukkan bahwa kelangkaan ini seringkali disebabkan oleh kendala administratif dalam proses e-katalog obat nasional, yang memerlukan reformasi sistematis.</p>
    `
  }
];

// FIX: Gunakan async dan await params (Next.js 15)
export default async function NewsDetailPage(props: { params: Promise<{ id: string }> }) {
  // Await params karena di Next.js terbaru params adalah Promise
  const params = await props.params; 
  
  // Sekarang params.id aman untuk digunakan
  const news = newsData.find((item) => item.id === Number(params.id));

  // Jika berita tidak ditemukan (misal id=999)
  if (!news) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-gray-600 mb-6">Berita tidak ditemukan.</p>
            <Link href="/news" className="text-sky-600 font-bold hover:underline">Kembali ke Portal Berita</Link>
        </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER GAMBAR FULL */}
      <div className="relative h-[60vh] min-h-[400px]">
        {/* Fallback image */}
        <div className="absolute inset-0 bg-gray-300"></div>
        
        <Image 
          src={news.image} 
          alt={news.title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Konten Judul di atas Header */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white container mx-auto">
            <Link href="/news" className="inline-flex items-center gap-2 text-sky-200 hover:text-white mb-6 transition font-bold uppercase tracking-wider text-sm">
                <ArrowLeft size={20} /> Kembali ke Berita
            </Link>
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${news.category === 'Advokasi' ? 'bg-red-600' : 'bg-sky-600'}`}>
                {news.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg max-w-4xl">
                {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-200 font-medium">
                <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-sky-400" />
                    <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <User size={18} className="text-sky-400" />
                    <span>{news.author}</span>
                </div>
            </div>
        </div>
      </div>

      {/* ISI ARTIKEL */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-3xl -mt-24 relative z-10 p-8 md:p-12 shadow-xl border border-gray-100">
            {/* Render HTML Content */}
            <div 
                className="prose prose-lg prose-sky max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: news.content }} 
            />

            {/* Tombol Share Bawah */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                <span className="font-bold text-gray-900">Bagikan artikel ini:</span>
                <div className="flex gap-4">
                    <button className="bg-gray-100 p-3 rounded-full hover:bg-sky-100 hover:text-sky-600 transition">
                        <Share2 size={20} />
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* BERITA LAINNYA */}
      <div className="bg-gray-50 py-16 border-t">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ingin membaca informasi lainnya?</h3>
            <Link href="/news" className="inline-block bg-white text-sky-600 border-2 border-sky-600 px-8 py-3 rounded-full font-bold hover:bg-sky-600 hover:text-white transition shadow-lg">
                Lihat Semua Berita
            </Link>
         </div>
      </div>
    </main>
  );
}