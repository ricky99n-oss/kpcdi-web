import { createClient } from '@supabase/supabase-js';

// Ambil rahasia dari file .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Pengecekan keamanan: Pastikan data ada
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL atau Anon Key belum disetting di file .env.local!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);