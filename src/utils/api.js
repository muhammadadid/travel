import axios from 'axios';

// Membuat instance axios dengan base URL yang diambil dari variabel lingkungan
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,  // Sesuaikan dengan base URL dari API Anda
});

// Menambahkan interceptor request untuk menambahkan token ke header jika ada
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');  // Mengambil token dari localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Menambahkan token ke header Authorization
  }
  return config;  // Mengembalikan konfigurasi yang sudah dimodifikasi
}, error => {
  return Promise.reject(error);  // Mengembalikan kesalahan jika ada masalah dengan request
});

// Export instance axios yang sudah dikonfigurasi
export default api;
