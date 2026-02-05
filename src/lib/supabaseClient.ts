import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// --- PERBAIKAN: JANGAN THROW ERROR ---
// Kita ganti throw error dengan fallback string kosong biar middleware tidak crash.
if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️ PERINGATAN: Supabase Env belum terbaca sempurna!");
}

// Gunakan '||' (atau) agar tidak error saat build
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder-key'
);