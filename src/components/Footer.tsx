"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crown, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Sembunyikan footer otomatis hanya di halaman pembuka (Landing Page /)
  if (pathname === "/") return null;

  return (
    // PERBAIKAN: Menggunakan utilitas kelas kanonikal text-jawa-bg/60 di baris 14
    <footer className="w-full bg-[#1a0101] border-t border-jawa-emas/20 relative overflow-hidden text-jawa-bg/60 font-sans py-12 px-6 mt-auto">
      
      {/* Ornamen Garis Emas Khas Keraton */}
      {/* PERBAIKAN: Menggunakan bg-linear-to-r kanonikal di baris 17 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-jawa-emas/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Sisi Kiri: Identitas Logo */}
        <div className="flex items-center gap-2 text-white">
          <Crown className="w-5 h-5 text-jawa-emas animate-pulse" />
          <span className="font-cinzel font-black tracking-[0.2rem] text-sm md:text-base uppercase">
            Numinous <span className="text-jawa-emas font-bold">XII-10</span>
          </span>
        </div>

        {/* Sisi Tengah: Hak Cipta & Tahun Angkatan */}
        <div className="text-center font-serif italic text-xs md:text-sm tracking-wide px-4">
          &copy; 2026 Numinous Memories.
        </div>

        {/* Sisi Kanan: Pembuat & Dedikasi */}
        <div className="flex items-center gap-1 text-[11px] md:text-xs uppercase tracking-widest font-cinzel text-white/80">
          <span>Dibuat dengan</span>
          <Heart className="w-3.5 h-3.5 text-jawa-merah fill-current mx-0.5 animate-bounce" />
          <span>oleh & untuk</span>
          <span className="text-jawa-emas font-bold ml-1 flex items-center gap-0.5">
            Numinous <Sparkles className="w-3 h-3 text-jawa-emas" />
          </span>
        </div>

      </div>
    </footer>
  );
}