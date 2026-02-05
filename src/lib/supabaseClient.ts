import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Fungsi ini akan dipanggil oleh halaman depan untuk konek ke database
export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL dan Key belum di-setting di Environment Variable!");
  }

  return createSupabaseClient(supabaseUrl, supabaseKey);
};