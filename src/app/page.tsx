"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Play, Sparkles, FastForward, Crown } from "lucide-react";

// Data Foto Melayang untuk Latar Belakang
const floatingPhotos = [
  { id: 1, src: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/fotbar%20(25).jpeg", top: "10%", left: "5%", delay: 0 },
  { id: 2, src: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/fotbar%20(40).jpeg", top: "60%", left: "15%", delay: 2 },
  { id: 3, src: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/fotbar%20(5).jpeg", top: "20%", left: "70%", delay: 1 },
  { id: 4, src: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/fotbar%20(51).jpeg", top: "70%", left: "80%", delay: 3 },
];

export default function LandingExperience() {
  // Fase: 'idle' -> 'rewinding' -> 'video'
  const [phase, setPhase] = useState<"idle" | "rewinding" | "video">("idle");
  const [year, setYear] = useState(2026);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleActivate = () => {
    setPhase("rewinding");

    // Efek Angka Tahun Mundur Cepat (2026 -> 2023)
    let currentYear = 2026;
    const yearInterval = setInterval(() => {
      currentYear -= 1;
      setYear(currentYear);
      if (currentYear <= 2023) {
        clearInterval(yearInterval);
      }
    }, 400);

    // Setelah 3 detik masa rewinding, pindah ke video
    setTimeout(() => {
      setPhase("video");
    }, 3000);
  };

  const handleSkip = () => {
    window.location.href = "/beranda";
  };

  useEffect(() => {
    if (phase === "video" && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.8;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay bersuara diblokir browser, mencoba fallback play:", err);
        if (videoRef.current) videoRef.current.play();
      });
    }
  }, [phase]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#2d0202] text-jawa-bg flex items-center justify-center selection:bg-jawa-emas selection:text-black">
      
      {/* BACKGROUND BATIK PATTERN OVERLAY */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C55 20 75 25 100 25C75 25 55 30 50 50C45 30 25 25 0 25C25 25 45 20 50 0ZM50 100C55 80 75 75 100 75C75 75 55 70 50 50C45 70 25 75 0 75C25 75 45 80 50 100Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
             backgroundSize: '160px' 
           }}>
      </div>

      {/* ==============================
          FASE 1: IDLE (RUANG MEMORI ROYAL)
      =============================== */}
      <AnimatePresence>
        {phase === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.3, filter: "blur(12px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            {/* Foto-foto melayang di background */}
            {floatingPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                initial={{ y: 50, opacity: 0, rotate: -10 }}
                animate={{ 
                  y: [-15, 15, -15], 
                  opacity: [0.15, 0.35, 0.15],
                  rotate: [-4, 4, -4]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  delay: photo.delay,
                  ease: "easeInOut" 
                }}
                className="absolute w-36 md:w-56 aspect-square p-2 bg-[#1e0101] border border-jawa-emas/40 shadow-2xl pointer-events-none filter grayscale sepia-[0.4] brightness-75 hidden sm:block"
                style={{ top: photo.top, left: photo.left }}
              >
                <img src={photo.src} alt="memory assets" className="w-full h-full object-cover rounded-xs" />
              </motion.div>
            ))}

            {/* Jam Analog Dekoratif */}
            <Clock className="absolute text-jawa-emas/5 w-75 h-75 md:w-137.5 md:h-137.5 animate-spin-slow -z-10" />
            
            <div className="relative z-20 text-center flex flex-col items-center px-4">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-2 mb-5 bg-black/40 border border-jawa-emas/40 px-4 py-1.5 font-cinzel font-bold uppercase tracking-[0.2rem] text-xs md:text-sm text-jawa-emas backdrop-blur-xs rounded-xs"
              >
                <Crown className="w-4 h-4 animate-pulse" /> Kapsul Waktu XII-10
              </motion.div>

              <motion.h1 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="font-cinzel text-5xl md:text-8xl font-black text-center mb-8 uppercase tracking-widest leading-none text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              >
                Numinous <br/>
                <span className="bg-linear-to-b from-[#FFFACD] via-jawa-emas to-[#B8860B] bg-clip-text text-transparent drop-shadow-md">Memories</span>
              </motion.h1>

              {/* PERBAIKAN: Properti kustom 'shadow' diganti menjadi properti CSS standar 'boxShadow' */}
              <motion.button
                onClick={handleActivate}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(212,175,55,0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-3 bg-jawa-emas text-black border border-jawa-emas px-8 py-4 md:px-10 md:py-5 font-cinzel font-black text-lg md:text-2xl uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer overflow-hidden rounded-xs"
              >
                <Play fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 relative z-10 transition-colors" />
                <span className="relative z-10">Buka Gerbang</span>
              </motion.button>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="mt-6 font-sans font-bold text-white/40 uppercase tracking-widest text-[9px] md:text-xs"
              >
                Pastikan volume perangkat Anda aktif
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==============================
          FASE 2: REWINDING (TEROWONGAN WAKTU)
      =============================== */}
      <AnimatePresence>
        {phase === "rewinding" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1, 
              x: [0, -8, 8, -8, 8, -4, 4, 0],
              y: [0, 4, -4, 4, -4, 8, -8, 0]
            }}
            exit={{ opacity: 0, filter: "brightness(200%)" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 z-30 bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.div 
              animate={{ scale: [1, 2.5, 6, 12], opacity: [0, 0.4, 0.7, 1] }}
              transition={{ duration: 3, ease: "easeIn" }}
              className="absolute w-32 h-32 bg-[#fffacd] rounded-full blur-[90px]"
            />

            <p className="text-jawa-emas font-cinzel text-sm md:text-xl tracking-[0.3rem] mb-4 z-10 drop-shadow-md">MENEMBUS SIKLUS WAKTU...</p>
            <motion.h2 
              key={year}
              initial={{ scale: 1.4, opacity: 0, filter: "blur(8px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="font-cinzel text-7xl md:text-[140px] font-black text-white z-10 drop-shadow-[0_10px_25px_rgba(212,175,55,0.5)]"
            >
              {year}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==============================
          FASE 3: FULLSCREEN VIDEO DOKUMENTER
      =============================== */}
      <AnimatePresence>
        {phase === "video" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-40 bg-black flex items-center justify-center"
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              onEnded={handleSkip} 
              className="w-full h-full object-contain md:object-cover bg-black"
            >
              <source src="https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/videos/Opening.mp4" type="video/mp4" />
              Browser Anda tidak mendukung pemutaran video tag.
            </video>

            <button
              onClick={handleSkip}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center gap-2 bg-[#2d0202] border border-jawa-emas text-jawa-emas px-4 py-2 md:px-6 md:py-3 font-cinzel font-bold text-xs md:text-base uppercase tracking-widest shadow-2xl hover:bg-black/80 active:scale-95 transition-all cursor-pointer rounded-xs"
            >
              Lewati <FastForward className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}