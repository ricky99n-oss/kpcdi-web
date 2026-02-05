import React from 'react';
import Link from 'next/link';

// Ini Server Component (Default), jadi tidak perlu 'use client'
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Dashboard Admin</h1>
            <Link href="/" className="bg-white border px-4 py-2 rounded-lg text-sm hover:bg-slate-100">
                Lihat Website
            </Link>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center">
            <h2 className="text-xl font-semibold mb-2">Selamat Datang!</h2>
            <p className="text-gray-600 mb-6">Sistem manajemen konten KPCDI sedang disiapkan.</p>
            <div className="p-4 bg-sky-50 text-sky-700 rounded-lg inline-block">
                Status Database: <strong>Terhubung</strong>
            </div>
        </div>
      </div>
    </div>
  );
}