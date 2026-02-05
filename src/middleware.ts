import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Ambil URL yang sedang diakses
  const path = request.nextUrl.pathname;

  // 2. Tentukan rute rahasia (Admin)
  const isAdminRoute = path.startsWith('/admin');

  // 3. Cek apakah user punya "Kunci Masuk" (Cookie Session)
  // (Nanti ini diganti dengan Cek Supabase Auth yang asli)
  const userSession = request.cookies.get('sb-access-token');

  // JIKA mau ke Admin TAPI tidak punya session -> Tendang ke Login
  if (isAdminRoute && !userSession) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Selain itu, silakan lewat
  return NextResponse.next();
}

// Tentukan mana saja yang harus dicek oleh Satpam
export const config = {
  matcher: [
    '/admin/:path*', // Lindungi semua halaman admin
    '/login'         // Cek juga halaman login (biar user login gak bisa buka login lagi)
  ],
};