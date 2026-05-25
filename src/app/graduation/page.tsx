"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Star, Globe, Play, X, Download, Share2 } from "lucide-react";

// --- TYPES ---
interface GradMediaItem {
  id: number;
  url: string;
  title: string;
}

// --- ENGINE GENERATOR DATA MEDIA GRADUATION (108 ID Foto - Jalur Raw CDN Resmi) ---
const gradPhotos: GradMediaItem[] = Array.from({ length: 108 }, (_, i) => ({
  id: i + 1,
  url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/paturay%20(${i + 1}).jpg`,
  title: `Momen Paturay Tineung ${i + 1}`
}));

export default function GraduationPage() {
  const [selectedMedia, setSelectedMedia] = useState<GradMediaItem | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Efek untuk mengunci scroll body saat jendela pratinjau modal terbuka
  useEffect(() => {
    document.body.style.overflow = selectedMedia ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedMedia]);
  
  // --- FUNGSI FALLBACK OTOMATIS JIKA EKSTENSI HURUF BESAR/KECIL BERBEDA ---
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, id: number) => {
    const imgElement = e.currentTarget;
    
    if (imgElement.src.endsWith(".jpg")) {
      imgElement.src = `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/paturay%20(${id}).JPG`;
    } 
    else if (imgElement.src.endsWith(".JPG")) {
      imgElement.src = `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/paturay%20(${id}).jpeg`;
    }
  };

  // --- PERSISTENT SHARE SYSTEM ---
  const handleShare = async (item: GradMediaItem) => {
    const shareData = {
      title: item.title,
      text: `Lihat potret kenangan indah Paturay Tineung XII-10 ini di website kami!`,
      url: window.location.href,
    };
    if (navigator.share) {
      try { 
        await navigator.share(shareData); 
      } catch (err) { 
        console.log("Error sharing:", err); 
      }
    } else {
      try {
        await navigator.clipboard.writeText(item.url);
        alert("Tautan foto berhasil disalin ke clipboard!");
      } catch (err) { 
        alert("Gagal menyalin tautan."); 
      }
    }
  };

  // --- ENGINE UNDUHAN REAL BLOB DARI GITHUB ---
  const handleDownload = async (item: GradMediaItem) => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch(item.url);
      if (!response.ok) throw new Error();
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      
      // Ambil ekstensi asli secara dinamis dari image path
      const extension = item.url.split('.').pop()?.split('?')[0] || "jpg";
      anchor.download = `paturay_tineung_${item.id}.${extension}`;
      
      document.body.appendChild(anchor);
      anchor.click();
      
      // Bersihkan node elemen jangkar dan objek URL dari memori browser
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // Fallback cadangan jika terjadi kendala kebijakan CORS jaringan: Buka di tab baru
      window.open(item.url, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    // PERBAIKAN: Menggunakan utilitas kelas kanonikal text-jawa-bg di baris 98
    <main className="min-h-screen bg-[#2d0202] text-jawa-bg font-inter overflow-x-hidden relative selection:bg-jawa-emas selection:text-black pt-20">
      
      {/* ROYAL GRADUATION BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 opacity-[0.08] pointer-events-none -z-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C55 20 75 25 100 25C75 25 55 30 50 50C45 30 25 25 0 25C25 25 45 20 50 0ZM50 100C55 80 75 75 100 75C75 75 55 70 50 50C45 70 25 75 0 75C25 75 45 80 50 100Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
             backgroundSize: '140px'
           }}>
      </div>
      {/* PERBAIKAN: Menggunakan bg-linear-to-b di baris 107 */}
      <div className="fixed inset-0 bg-linear-to-b from-transparent via-black/40 to-[#120101] -z-10 pointer-events-none"></div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-10 pb-16 px-4 md:px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4"
          >
            <Crown className="w-12 h-12 md:w-16 md:h-16 text-jawa-emas drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
          </motion.div>

          <div className="text-center relative max-w-4xl px-2">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-cinzel tracking-[0.3rem] md:tracking-[0.5rem] text-jawa-emas text-xs md:text-lg mb-2"
            >
              CELEBRATING THE JOURNEY
            </motion.p>
            
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              // PERBAIKAN: Menggunakan bg-linear-to-b di baris 133
              className="font-cinzel text-4xl sm:text-6xl md:text-[90px] font-black leading-none bg-linear-to-b from-[#FFFACD] via-jawa-emas to-[#8B7500] bg-clip-text text-transparent drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] uppercase tracking-wide"
            >
              Paturay<br/>Tineung
            </motion.h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              // PERBAIKAN: Menggunakan bg-linear-to-r di baris 141
              className="h-px bg-linear-to-r from-transparent via-jawa-emas to-transparent my-6 md:my-8"
            />

            <h2 className="font-cinzel text-lg sm:text-xl md:text-3xl font-bold tracking-widest text-white">
              KELAS XII-10 <span className="text-jawa-emas">|</span> SATAS 2026
            </h2>
            <p className="font-serif italic text-jawa-emas text-base md:text-2xl mt-1 md:mt-2 tracking-wide">(Numinous)</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl px-4">
             <div className="w-full sm:w-auto bg-black/50 border border-jawa-emas/30 backdrop-blur-md px-5 py-3 text-center rounded-sm">
                <p className="font-cinzel text-jawa-emas text-[10px] md:text-xs tracking-widest leading-relaxed">NOT ENDING,<br/>BUT ELEVATING.</p>
             </div>
             <div className="w-full sm:w-auto bg-black/50 border border-jawa-emas/30 backdrop-blur-md px-5 py-4.5 text-center rounded-sm flex items-center justify-center gap-3">
                <Globe className="w-4 h-4 text-jawa-emas" />
                <p className="font-cinzel text-jawa-emas text-[10px] md:text-xs tracking-widest">FUTURE IS OURS</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. DOCUMENTARY VIDEO SECTION */}
      <section className="bg-[#1e0101]/60 py-12 md:py-20 border-y border-jawa-emas/20 z-10 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-10 justify-center">
            <Play className="w-5 h-5 md:w-6 md:h-6 text-jawa-emas fill-current" />
            <h3 className="font-cinzel text-lg md:text-2xl font-bold uppercase tracking-widest text-white">Farewell Documentary</h3>
          </div>
          
          <div className="relative aspect-video w-full bg-black border border-jawa-emas/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] rounded-sm overflow-hidden">
            <video 
              controls 
              className="w-full h-full object-contain"
              src="https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/videos/opening-cinematic.mp4"
            />
          </div>
          
          <p className="text-center mt-6 md:mt-8 font-serif italic text-jawa-emas/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            "Setiap detik yang terekam adalah bukti bahwa kita pernah hebat bersama."
          </p>
        </div>
      </section>

      {/* 4. FLOATING GRADUATION GALLERY */}
      <section className="py-16 md:py-24 px-3 sm:px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4 border-b border-jawa-emas/20 pb-4 md:pb-6">
            <div>
              <span className="text-jawa-emas font-cinzel tracking-widest text-xs md:text-sm uppercase">The Golden Memories</span>
              <h3 className="font-cinzel text-2xl md:text-4xl font-black text-white mt-1">Graduation Gallery</h3>
            </div>
            <div>
              <p className="font-serif italic text-jawa-emas/70 text-xs md:text-sm">Berjalan bersama, Berkembang bersama, Bersinar bersama.</p>
            </div>
          </div>

          {/* MASONRY FLUID LAYOUT */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {gradPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.015 }}
                className="break-inside-avoid relative group inline-block w-full cursor-pointer"
                onClick={() => setSelectedMedia(photo)}
              >
                {/* Polaroid Frame Aristokrat */}
                <div className="bg-[#f3f0df] p-2 pb-3 md:p-3 md:pb-5 shadow-xl border border-jawa-emas/10 flex flex-col justify-between h-auto rounded-xs">
                  
                  <div className="w-full overflow-hidden bg-black/40 relative">
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      onError={(e) => handleImageError(e, photo.id)}
                      className="w-full h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  <p className="font-serif text-black text-[9px] md:text-xs text-center font-bold mt-2 md:mt-3 tracking-wide line-clamp-1 opacity-75 group-hover:opacity-100 group-hover:text-jawa-merah transition-colors">
                    {photo.title}
                  </p>
                </div>
                
                <Star className="absolute -top-1.5 -right-1.5 w-4 h-4 text-jawa-emas opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FULLSCREEN PREVIEW MODAL LUXURY BRUTALISM */}
      <AnimatePresence>
        {selectedMedia && (
          // PERBAIKAN: Menggunakan token kanonikal z-9999 di baris 244
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 bg-black/95 flex flex-col md:flex-row items-center justify-center p-3 md:p-12 backdrop-blur-md"
          >
            {/* Close Trigger */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-[#2d0202] border border-jawa-emas text-jawa-emas p-2 shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer rounded-xs"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </button>

            {/* Media Canvas */}
            <div className="w-full md:w-2/3 h-1/2 md:h-full flex items-center justify-center relative p-1 md:p-2">
              <img 
                src={selectedMedia.url} 
                alt={selectedMedia.title} 
                onError={(e) => handleImageError(e, selectedMedia.id)}
                className="max-w-full max-h-full object-contain border border-jawa-emas/40 shadow-2xl" 
              />
            </div>

            {/* Sidebar Metadata Royal Card */}
            <div className="w-full md:w-1/3 mt-2 md:mt-0 md:ml-8 flex flex-col gap-4 md:gap-6 bg-[#1e0101] border border-jawa-emas/30 p-5 md:p-8 shadow-2xl max-h-[45vh] md:max-h-[85vh] overflow-y-auto rounded-xs relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-jawa-emas/40"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-jawa-emas/40"></div>
              
              <div className="grow">
                <span className="bg-black/50 border border-jawa-emas/40 px-2.5 py-1 text-jawa-emas font-cinzel font-bold text-[9px] md:text-[10px] uppercase tracking-widest">
                  Arsip Kelulusan
                </span>
                <p className="mt-4 text-[10px] md:text-xs font-bold text-white/40">Momen Wisuda 2026</p>
                <h2 className="font-cinzel text-lg md:text-2xl font-bold uppercase mt-1 mb-2 leading-tight text-white tracking-wide">
                  {selectedMedia.title}
                </h2>
                <div className="w-8 h-px bg-jawa-emas/40 mb-3"></div>
                <p className="text-xs md:text-sm font-medium border-l border-jawa-emas/60 pl-3 py-0.5 text-white/70 leading-relaxed">
                  Goresan kenangan indah di hari Paturay Tineung Kelas XII-10. Lembaran baru telah siap dibuka.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 md:gap-3 pt-3 border-t border-dashed border-jawa-emas/10">
                <button
                  onClick={() => handleDownload(selectedMedia)}
                  disabled={isDownloading}
                  className="flex items-center justify-center gap-2 bg-jawa-emas text-black py-2.5 md:py-3.5 font-cinzel font-bold text-xs md:text-sm uppercase shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer disabled:opacity-50 rounded-xs"
                >
                  <Download className="w-4 h-4" /> {isDownloading ? "Mengunduh..." : "Unduh Master File"}
                </button>
                <button
                  onClick={() => handleShare(selectedMedia)}
                  className="flex items-center justify-center gap-2 bg-black/40 border border-jawa-emas/40 text-jawa-emas py-2.5 md:py-3.5 font-cinzel font-bold text-xs md:text-sm uppercase hover:bg-black/60 transition-all cursor-pointer rounded-xs"
                >
                  <Share2 className="w-4 h-4" /> Bagikan Momen
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CLOSING STATEMENT */}
      {/* PERBAIKAN: Menggunakan bg-linear-to-t di baris 305 */}
      <section className="py-20 md:py-28 bg-linear-to-t from-[#120101] to-transparent text-center px-4 z-10 relative">
        <h4 className="font-cinzel text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-widest">SEE YOU AT THE TOP</h4>
        <p className="max-w-xl mx-auto font-serif text-jawa-emas/70 text-sm md:text-base leading-relaxed px-2">
          "Perpisahan bukan berarti kita akan menjadi asing.
          Ini hanyalah jeda sebelum kita bertemu kembali sebagai pemimpin di masa depan."
        </p>
        <motion.button
          onClick={() => window.location.href = "/beranda"}
          whileHover={{ scale: 1.05 }}
          className="mt-10 bg-transparent border-2 border-jawa-emas text-jawa-emas px-6 py-2.5 md:px-8 md:py-3.5 font-cinzel font-bold text-xs md:text-sm tracking-[0.2rem] md:tracking-[0.3rem] hover:bg-jawa-emas hover:text-black transition-all rounded-full cursor-pointer"
        >
          KEMBALI KE BERANDA
        </motion.button>
      </section>

    </main>
  );
}