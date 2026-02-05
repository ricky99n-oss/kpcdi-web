"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; 
import { ImagePlus, Save, Loader2, LogOut, LayoutDashboard, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Cek sesi user saat load (Double protection)
  useEffect(() => {
    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) router.push('/login');
    };
    checkUser();
  }, [router]);

  // Form Data
  const [formData, setFormData] = useState({
    title: '',
    category: 'Advokasi',
    summary: '',
    content: '',
    published_at: new Date().toISOString().split('T')[0]
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';

      // 1. Upload Gambar ke Supabase Storage
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);
        
        imageUrl = publicUrlData.publicUrl;
      }

      // 2. Simpan Data ke Database (RLS akan mengecek apakah Anda admin)
      const slug = formData.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      const { error: insertError } = await supabase
        .from('posts')
        .insert([{
            title: formData.title,
            slug: slug,
            category: formData.category,
            summary: formData.summary,
            content: formData.content,
            image_url: imageUrl,
            published_at: formData.published_at,
        }]);

      if (insertError) throw insertError;

      alert('Berita Berhasil Disimpan!');
      // Reset Form
      setFormData({ ...formData, title: '', summary: '', content: '' });
      setImageFile(null);
      setPreviewUrl(null);
      
    } catch (error: any) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* SIDEBAR SEDERHANA */}
      <aside className="w-64 bg-sky-900 text-white hidden md:flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-3 mb-10">
            <div className="relative w-10 h-10 bg-white rounded-full p-1">
                <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight">Admin Panel</span>
        </div>
        
        <nav className="flex-1 space-y-2">
            <div className="flex items-center gap-3 bg-sky-800 p-3 rounded-xl font-medium cursor-pointer">
                <LayoutDashboard size={20} /> Tambah Berita
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl font-medium text-sky-200 hover:text-white cursor-pointer hover:bg-sky-800 transition">
                <FileText size={20} /> Daftar Berita
            </div>
        </nav>

        <button onClick={handleLogout} className="flex items-center gap-3 p-3 text-red-300 hover:text-white hover:bg-red-900/50 rounded-xl transition mt-auto">
            <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-64 p-8">
        <div className="max-w-4xl mx-auto">
            
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Tambah Berita Baru</h1>
                <div className="md:hidden">
                    <button onClick={handleLogout} className="text-red-600 font-bold text-sm">Logout</button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Judul */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Judul Artikel</label>
                        <input 
                            type="text" 
                            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-lg font-medium"
                            placeholder="Masukkan judul berita..."
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            required
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
                            <select 
                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none bg-white"
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                            >
                                <option>Advokasi</option>
                                <option>Edukasi</option>
                                <option>Kegiatan</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Tanggal Publish</label>
                            <input 
                                type="date" 
                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                                value={formData.published_at}
                                onChange={(e) => setFormData({...formData, published_at: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Upload Gambar */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition cursor-pointer relative min-h-[200px]">
                            <input 
                                type="file" 
                                accept="image/*"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => {
                                    if(e.target.files?.[0]) {
                                        setImageFile(e.target.files[0]);
                                        setPreviewUrl(URL.createObjectURL(e.target.files[0]));
                                    }
                                }}
                            />
                            {previewUrl ? (
                                <div className="relative w-full h-48">
                                    <Image src={previewUrl} alt="Preview" fill className="object-contain" />
                                </div>
                            ) : (
                                <>
                                    <ImagePlus size={48} className="mb-4 text-sky-300" />
                                    <p className="font-medium">Klik untuk upload gambar</p>
                                    <p className="text-sm text-gray-400 mt-1">PNG, JPG, WEBP (Max 2MB)</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Ringkasan */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Ringkasan (Summary)</label>
                        <textarea 
                            rows={3}
                            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                            placeholder="Ringkasan pendek untuk tampilan depan..."
                            value={formData.summary}
                            onChange={(e) => setFormData({...formData, summary: e.target.value})}
                            required
                        />
                    </div>

                    {/* Konten */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Isi Konten</label>
                        <textarea 
                            rows={12}
                            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none font-mono text-sm"
                            placeholder="Tulis artikel lengkap di sini..."
                            value={formData.content}
                            onChange={(e) => setFormData({...formData, content: e.target.value})}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-sky-600 text-white font-bold py-4 rounded-xl hover:bg-sky-700 transition shadow-lg flex items-center justify-center gap-2 text-lg"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><Save /> Simpan Berita</>}
                    </button>

                </form>
            </div>
        </div>
      </div>
    </div>
  );
}