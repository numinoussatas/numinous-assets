import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AudioPlayer from "@/components/AudioPlayer";
import Footer from "@/components/Footer"; // 1. Impor komponen Footer baru Anda

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Numinous Memories - XII 10",
  description: "Arsip Agung Kapsul Waktu Angkatan 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#2d0202] antialiased min-h-screen flex flex-col justify-between`}>
        {/* Navigasi Utama atas */}
        <Navbar />
        
        {/* Konten Halaman Web utama */}
        <div className="grow w-full">
          {children}
        </div>
        
        {/* Pemutar Musik Latar Belakang */}
        <AudioPlayer />
        
        {/* 2. Selipkan komponen Footer di sini (Paling bawah sistem layout) */}
        <Footer />
      </body>
    </html>
  );
}