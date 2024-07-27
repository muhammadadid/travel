import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token');

  // Jika token tidak ada, redirect ke halaman login
  if (!token) {
    return NextResponse.redirect('/login');
  }

  // Jika token ada, lanjutkan permintaan
  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/**'], // Terapkan middleware hanya untuk rute yang dilindungi
};
