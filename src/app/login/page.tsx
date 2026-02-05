"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Login gagal! Periksa email atau password.');
      setLoading(false);
    } else {
      // Login sukses, arahkan ke dashboard
      router.refresh();
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
        
        <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto mb-4">
                 <Image src="/images/logo.png" alt="Logo" fill className="object-contain"/>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Portal KPCDI</h1>
            <p className="text-gray-500 text-sm mt-1">Silakan login untuk mengelola konten.</p>
        </div>

        {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 text-center font-medium border border-red-100">
                {error}
            </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20}/>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                        placeholder="admin@kpcdi.org"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={20}/>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                        placeholder="••••••••"
                        required
                    />
                </div>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-sky-900 text-white font-bold py-3.5 rounded-xl hover:bg-sky-800 transition shadow-lg flex justify-center items-center gap-2"
            >
                {loading ? <Loader2 className="animate-spin" /> : 'Masuk Dashboard'}
            </button>
        </form>

      </div>
    </div>
  );
}