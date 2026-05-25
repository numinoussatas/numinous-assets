"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Disc3, Volume2, VolumeX } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); 
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.35); 

  const [currentTrack, setCurrentTrack] = useState({ 
    title: "Nostalgia.mp3", 
    src: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/audio/nostalgia.mp3" 
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  // --- 1. ENGINE PENENTUAN TREK BERDASARKAN RUTE ---
  useEffect(() => {
    // Jika berada di halaman tanpa lagu, paksa matikan status isPlaying agar sinkron
    if (pathname === "/" || pathname === "/beranda") {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
      return;
    }

    let trackTitle = "Nostalgia.mp3";
    let trackSrc = "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/audio/nostalgia.mp3";

    if (pathname === "/galeri") {
      trackTitle = "Ramai Sepi Bersama.mp3";
      trackSrc = "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/audio/ramai_sepi_bersama.mp3";
    } else if (pathname === "/yearbook") {
      trackTitle = "Monokrom.mp3";
      trackSrc = "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/audio/monokrom.mp3";
    } else if (pathname === "/graduation") {
      trackTitle = "Kita Kesana.mp3";
      trackSrc = "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/audio/kita_kesana.mp3";
    }

    // Hanya ganti dan nyalakan jika trek lagu memang berbeda
    if (currentTrack.src !== trackSrc) {
      setCurrentTrack({ title: trackTitle, src: trackSrc });
      setIsPlaying(true); // Auto play trek baru saat pindah halaman galeri/yearbook/graduation
    }
  }, [pathname]); // Dikunci hanya berjalan saat rute berganti

  // --- 2. ENGINE KENDALI AUDIO (VOLUME & PLAY/PAUSE STATE) ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume;

    // Proteksi ekstra untuk rute sunyi
    if (pathname === "/" || pathname === "/beranda") {
      audio.pause();
      return;
    }

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay memerlukan interaksi pengguna awal:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack.src, volume, isMuted, pathname]);

  // --- HANDLER KONTROL ---
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false); 
    }
  };

  // Render aman di paling bawah
  if (pathname === "/" || pathname === "/beranda") {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-9999 font-inter select-none">
      
      <audio 
        ref={audioRef} 
        loop 
        src={currentTrack.src || undefined} 
      />

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="flex items-center gap-3 bg-[#1e0101]/95 backdrop-blur-md border border-jawa-emas/30 p-2.5 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        {/* Piringan Hitam */}
        <div className="relative w-11 h-11 bg-black/40 border border-jawa-emas/20 flex items-center justify-center overflow-hidden shrink-0 rounded-xs">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center"
          >
            <Disc3 className="w-7 h-7 text-jawa-emas" strokeWidth={1.5} />
          </motion.div>
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#2d0202] border border-jawa-emas/30"></div>
        </div>

        {/* Konten Kontrol Utama */}
        <div className="flex flex-col pr-1 shrink-0 justify-center">
          <span className="font-cinzel text-white/90 font-black text-[9px] md:text-xs uppercase mb-1.5 tracking-widest block max-w-35 md:max-w-40 truncate">
            {currentTrack.title}
          </span>
          
          <div className="flex items-center gap-3 md:gap-4">
            {/* Tombol Play/Pause */}
            <button 
              onClick={togglePlay}
              className="text-white/60 hover:text-jawa-emas hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
            
            {/* Sistem Group Slider Volume Mini */}
            <div className="flex items-center gap-2 group/volume relative">
              <button 
                onClick={toggleMute}
                className="text-white/60 hover:text-jawa-emas hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              
              <input 
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-14 sm:w-16 md:w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer range-sm transition-all outline-none border-none"
                style={{
                  background: `linear-to-r from-[#D4AF37] ${isMuted ? 0 : volume * 100}%, rgba(255,255,255,0.2) ${isMuted ? 0 : volume * 100}%`
                }}
              />
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}