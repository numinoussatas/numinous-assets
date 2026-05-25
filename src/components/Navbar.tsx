"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Jangan tampilkan navbar di halaman pembuka (Landing Page /)
  if (pathname === "/") return null;

  const navLinks = [
    { name: "Beranda", path: "/beranda" },
    { name: "Galeri", path: "/galeri" },
    { name: "Yearbook", path: "/yearbook" },
    { name: "Graduation", path: "/graduation" },
  ];

  // --- STYLING AGUNG TERINTEGRASI (Royal Velvet & Gold Theme) ---
  const headerClass = "fixed top-0 left-0 w-full z-50 bg-[#2d0202]/90 backdrop-blur-md border-b border-jawa-emas/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-500";
  const logoClass = "font-cinzel font-black text-xl md:text-2xl text-white flex items-center gap-2 tracking-[0.2rem] uppercase group";
  const mobileMenuClass = "absolute top-full left-0 w-full bg-[#1e0101] border-b border-jawa-emas/30 flex flex-col p-6 gap-2 shadow-2xl backdrop-blur-lg";

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `font-cinzel font-bold text-xs md:text-sm tracking-[0.15rem] uppercase transition-all duration-300 py-1 ${
      isActive 
        ? "text-jawa-emas border-b border-jawa-emas drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" 
        : "text-jawa-bg/70 hover:text-jawa-emas" // PERBAIKAN: Menggunakan utilitas kelas kanonikal text-jawa-bg/70
    }`;
  };

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">

        {/* LOGO AGUNG */}
        <Link href="/beranda" className={logoClass}>
          <Crown className="w-5 h-5 md:w-6 md:h-6 text-jawa-emas group-hover:rotate-12 transition-transform duration-300" />
          <span>Numinous</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={getLinkClass(link.path)}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-jawa-bg hover:text-jawa-emas transition-colors cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-jawa-emas" strokeWidth={2.5} />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className={mobileMenuClass}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-center py-3.5 border-b border-white/5 last:border-none ${getLinkClass(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}