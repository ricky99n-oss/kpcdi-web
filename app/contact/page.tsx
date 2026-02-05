import PageHeader from '@/components/PageHeader';
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. HEADER BARU */}
      <PageHeader 
        title="Hubungi KPCDI"
        subtitle="Kami siap mendengar, mendampingi, dan menyambut Anda. Jangan ragu untuk menghubungi kami untuk bantuan advokasi atau informasi keanggotaan."
        // Gambar: Komunikasi/Support/Menulis
        imageUrl="https://images.unsplash.com/photo-1423666639041-f14003862007?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container mx-auto px-4 py-24 -mt-10 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          
          {/* SIDEBAR INFO (Kiri - Biru Gelap) */}
          <div className="md:col-span-5 bg-sky-900 p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-sky-800 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-sky-700 rounded-full opacity-40 blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Informasi Kontak</h3>
            <p className="text-sky-200 mb-12 leading-relaxed relative z-10">
              Silakan hubungi kami melalui saluran resmi di bawah ini. Untuk kasus darurat advokasi, mohon sertakan kronologi singkat.
            </p>
            
            <div className="space-y-8 relative z-10">
              {/* Alamat */}
              <div className="flex items-start gap-5">
                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm shrink-0">
                  <MapPin className="text-sky-200" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Sekretariat Pusat</p>
                  <p className="text-sky-200 text-sm leading-relaxed opacity-90">
                    CEO Building, Jl. TB Simatupang<br/>
                    Cilandak, Jakarta Selatan<br/>
                    Indonesia, 12430
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-5">
                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm shrink-0">
                  <Phone className="text-sky-200" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">WhatsApp Center</p>
                  <p className="text-sky-200 text-sm font-mono text-lg">+62 812-3456-7890</p>
                  <p className="text-sky-300 text-xs mt-1 flex items-center gap-1"><Clock size={12}/> Senin - Jumat, 09:00 - 17:00 WIB</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                 <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm shrink-0">
                  <Mail className="text-sky-200" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Email Resmi</p>
                  <p className="text-sky-200 text-sm">info@kpcdi.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM INPUT (Kanan - Putih) */}
          <div className="md:col-span-7 p-12">
            <div className="flex items-center gap-3 mb-8">
                <MessageSquare size={28} className="text-sky-600"/>
                <h2 className="text-3xl font-bold text-gray-900">Kirim Pesan</h2>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-800 tracking-wide">Nama Lengkap <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border-2 border-gray-100 rounded-xl p-4 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition bg-gray-50 focus:bg-white font-medium" placeholder="Nama Anda" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-800 tracking-wide">Nomor WhatsApp <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full border-2 border-gray-100 rounded-xl p-4 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition bg-gray-50 focus:bg-white font-medium" placeholder="0812xxxx" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 tracking-wide">Kategori Pesan <span className="text-red-500">*</span></label>
                <select className="w-full border-2 border-gray-100 rounded-xl p-4 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none bg-gray-50 focus:bg-white font-medium appearance-none">
                   <option value="" disabled selected>Pilih Kategori...</option>
                   <option>Pendaftaran Anggota Baru</option>
                   <option className="font-bold text-red-600">Pengaduan Advokasi (Darurat/Kasus RS)</option>
                   <option>Pertanyaan Medis / Edukasi</option>
                   <option>Kerjasama / Media / Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 tracking-wide">Detail Pesan / Kronologi <span className="text-red-500">*</span></label>
                <textarea className="w-full border-2 border-gray-100 rounded-xl p-4 h-48 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition bg-gray-50 focus:bg-white font-medium resize-none" placeholder="Jelaskan kebutuhan atau permasalahan Anda secara detail..." required></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold py-5 rounded-xl hover:from-sky-700 hover:to-sky-600 transition shadow-xl hover:shadow-sky-200 transform hover:-translate-y-1 text-lg tracking-wide">
                Kirim Pesan Sekarang
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">Data Anda aman dan hanya digunakan untuk kepentingan layanan KPCDI.</p>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}