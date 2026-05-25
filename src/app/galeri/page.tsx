"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share2, Play, Image as ImageIcon, Video as VideoIcon, ChevronDown, Crown, Star } from "lucide-react";

// --- TYPES ---
interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

// --- DATA SOURCE ---
const mediaData: MediaItem[] = [
  {
    id: "1",
    type: "image",
    url: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/KELAS10%20(1).jpeg",
    title: "Hari Pertama KELAS 10",
    description: "Kecanggungan awal yang berujung pada pertemanan abadi.",
    date: "2023-07-15",
    category: "KELAS 10"
  },
  {
    id: "2",
    type: "image",
    url: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/KELAS10%20(2).jpeg",
    title: "Suasana Kelas 10",
    description: "Momen adaptasi di lingkungan baru bersama teman sekelas.",
    date: "2023-07-16",
    category: "KELAS 10"
  },
  {
    id: "3",
    type: "image",
    url: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/KELAS10%20(3).jpeg",
    title: "Keseruan Istirahat Kelas 10",
    description: "Tawa pertama di koridor sekolah baru.",
    date: "2023-08-02",
    category: "KELAS 10"
  },
  {
    id: "4",
    type: "image",
    url: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/KELAS10%20(4).jpeg",
    title: "Kerja Kelompok Kelas 10",
    description: "Awal mula terbentuknya tim-tim solid.",
    date: "2023-08-20",
    category: "KELAS 10"
  },
  {
    id: "5",
    type: "image",
    url: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/KELAS10%20(5).jpeg",
    title: "Kilas Balik Akhir Semester Kelas 10",
    description: "Menutup tahun pertama dengan kenangan manis.",
    date: "2023-12-15",
    category: "KELAS 10"
  },

  ...Array.from({ length: 26 }, (_, i) => ({
    id: String(6 + i), type: "image" as const, date: "2023-09-10", category: "PERMATA",
    title: `Kegiatan PERMATA Bagian ${i + 1}`, description: "Momen kebersamaan dan keseruan di agenda PERMATA.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/PERMATA%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 17 }, (_, i) => ({
    id: String(32 + i), type: "image" as const, date: "2023-10-05", category: "BARENG PDP",
    title: `Keseruan Bareng PDP Part ${i + 1}`, description: "Kompak bimbingan dan beraktivitas bersama PDP.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/bareng-pdp%20%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 6 }, (_, i) => ({
    id: String(49 + i), type: "image" as const, date: "2023-11-12", category: "PENGALENGAN",
    title: `Trip Pengalengan Memori ${i + 1}`, description: "Sejuknya udara Pangalengan dan hangatnya kebersamaan kita.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/PENGALENGAN%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    id: String(55 + i), type: "image" as const, date: "2024-03-25", category: "BUKBER",
    title: `Buka Bersama Dokumentasi ${i + 1}`, description: "Indahnya silaturahmi saat momen buka puasa bersama.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/bubukberan%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 8 }, (_, i) => ({
    id: String(65 + i), type: "image" as const, date: "2024-05-10", category: "CAP TANGAN",
    title: `Momen Cap Tangan ${i + 1}`, description: "Goresan tanda tangan dan cap tangan sebagai bukti sejarah kita.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/cap-tangan%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 64 }, (_, i) => ({
    id: String(73 + i), type: "image" as const, date: "2024-02-14", category: "AKHWAT",
    title: `Potret Akhwat Kumpulan ${i + 1}`, description: "Keceriaan, keanggunan, dan solidnya persahabatan para akhwat.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/akhwat%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 117 }, (_, i) => ({
    id: String(137 + i), type: "image" as const, date: "2024-02-14", category: "IKHWAN",
    title: `Keseruan Ikhwan Dokumentasi ${i + 1}`, description: "Aksi kocak, solidaritas tanpa batas, dan cerita para ikhwan.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/ikhwan%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 32 }, (_, i) => ({
    id: String(254 + i), type: "image" as const, date: "2024-06-01", category: "CURUG",
    title: `Petualangan Curug Foto ${i + 1}`, description: "Menyatu dengan alam, bermain air, dan melepas penat bersama.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/curug%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 7 }, (_, i) => ({
    id: String(286 + i), type: "image" as const, date: "2024-08-18", category: "FILM",
    title: `Projek Film Dokumentasi ${i + 1}`, description: "Di balik layar pembuatan tugas film and akting terbaik kita.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/film%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 8 }, (_, i) => ({
    id: String(293 + i), type: "image" as const, date: "2024-10-10", category: "FOTO STUDIO",
    title: `Foto Studio Sesi ${i + 1}`, description: "Gaya formal dan candid terbaik dengan outfit paling kece.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/fostud%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 79 }, (_, i) => ({
    id: String(301 + i), type: "image" as const, date: "2024-11-20", category: "FOTO BARENG",
    title: `Foto Bersama Koleksi ${i + 1}`, description: "Satu frame, sejuta cerita. Bukti kebersamaan angkatan kita.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/fotbar%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 26 }, (_, i) => ({
    id: String(380 + i), type: "image" as const, date: "2024-10-02", category: "HARI BATIK",
    title: `Hari Batik Dokumentasi ${i + 1}`, description: "Bangga berbudaya dengan balutan batik nusantara.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/hari-batik%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 21 }, (_, i) => ({
    id: String(406 + i), type: "image" as const, date: "2024-09-16", category: "MAULID NABI",
    title: `Peringatan Maulid Nabi Part ${i + 1}`, description: "Momen penuh berkah dan refleksi diri di sekolah.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/maulid-nabi%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 11 }, (_, i) => ({
    id: String(427 + i), type: "image" as const, date: "2025-03-08", category: "MUNGGAHAN",
    title: `Acara Munggahan Foto ${i + 1}`, description: "Makan bersama menyambut bulan suci Ramadan dengan suka cita.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/munggahan%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 7 }, (_, i) => ({
    id: String(438 + i), type: "image" as const, date: "2025-03-20", category: "BUKBER P5",
    title: `Bukber P5 Memori ${i + 1}`, description: "Buka puasa bersama sekaligus merayakan rampungnya projek P5.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/bukber-p5%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 14 }, (_, i) => ({
    id: String(445 + i), type: "image" as const, date: "2025-04-15", category: "P5 SUNDA",
    title: `P5 Kebudayaan Sunda Dokumentasi ${i + 1}`, description: "Melestarikan adat dan kesenian Sunda lewat kreativitas P5.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/p5-sunda%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 18 }, (_, i) => ({
    id: String(459 + i), type: "image" as const, date: "2025-05-12", category: "SSO",
    title: `Kegiatan SSO Foto ${i + 1}`, description: "Potret semangat kompetisi dan kerja sama tim di ajang SSO.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/SSO%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 25 }, (_, i) => ({
    id: String(477 + i), type: "image" as const, date: "2025-10-22", category: "STUDY CAMPUS",
    title: `Study Campus Eksplorasi ${i + 1}`, description: "Melihat masa depan dan mencari inspirasi di universitas impian.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/STUDY-CAMPUS%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 9 }, (_, i) => ({
    id: String(502 + i), type: "image" as const, date: "2025-11-05", category: "SV",
    title: `Momen Sekolah Vokasi / SV Part ${i + 1}`, description: "Kunjungan industri dan praktek seru menambah wawasan.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/SV%20(${i + 1}).jpeg`
  })),
  ...Array.from({ length: 24 }, (_, i) => ({
    id: String(511 + i), type: "image" as const, date: "2026-01-20", category: "ULIN",
    title: `Ulin Bareng Dokumentasi ${i + 1}`, description: "Ulin bareng teman-teman, melepas lelah dari rutinitas belajar.",
    url: `https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/photos/ULIN%20(${i + 1}).jpeg`
  }))
];

const categories = ["Semua", ...Array.from(new Set(mediaData.map(item => item.category)))];

export default function GaleriMomen() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedMedia ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedMedia]);

  const filteredMedia = activeFilter === "Semua"
    ? mediaData
    : mediaData.filter(media => media.category === activeFilter);

  const handleShare = async (item: MediaItem) => {
    const shareData = {
      title: item.title,
      text: `${item.description} - Lihat kenangan ini!`,
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (err) { console.log(err); }
    } else {
      try {
        await navigator.clipboard.writeText(item.url);
        alert("Tautan berhasil disalin!");
      } catch (err) { alert("Gagal menyalin tautan."); }
    }
  };

  const handleDownload = async (item: MediaItem) => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch(item.url);
      if (!response.ok) throw new Error();
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      const extension = item.url.split('.').pop()?.split('?')[0] || "jpeg";
      anchor.download = `${item.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${extension}`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      window.open(item.url, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    // PERBAIKAN: Menggunakan utilitas kelas kanonikal text-jawa-bg di baris 226
    <main className="min-h-screen bg-[#2d0202] text-jawa-bg py-12 px-3 md:px-12 font-inter overflow-x-hidden relative selection:bg-jawa-emas selection:text-black">
      
      {/* ROYAL GRADUATION BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 opacity-[0.08] pointer-events-none -z-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C55 20 75 25 100 25C75 25 55 30 50 50C45 30 25 25 0 25C25 25 45 20 50 0ZM50 100C55 80 75 75 100 75C75 75 55 70 50 50C45 70 25 75 0 75C25 75 45 80 50 100Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
             backgroundSize: '140px'
           }}>
      </div>
      {/* PERBAIKAN: Menggunakan bg-linear-to-b di baris 235 */}
      <div className="fixed inset-0 bg-linear-to-b from-transparent via-black/40 to-[#120101] -z-10 pointer-events-none"></div>

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto text-center md:text-left mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2rem] uppercase bg-black/50 border border-jawa-emas/40 text-jawa-emas px-3 py-1 mb-4 rounded-sm backdrop-blur-sm">
          <Crown className="w-3.5 h-3.5" /> Kapsul Memori Agung
        </div>
        <h1 className="font-cinzel text-4xl md:text-6xl font-black uppercase tracking-wider leading-none">
          {/* PERBAIKAN: Menggunakan bg-linear-to-r di baris 243 */}
          Galeri <span className="bg-linear-to-r from-[#FFFACD] via-jawa-emas to-[#B8860B] bg-clip-text text-transparent">Momen</span>
        </h1>
        {/* PERBAIKAN: Menggunakan bg-linear-to-r di baris 245 */}
        <div className="h-px w-32 bg-linear-to-r from-jawa-emas to-transparent mt-4 hidden md:block"></div>
      </div>

      {/* SIMPLIFIED DROP-DOWN SELECTOR FILTER */}
      <div className="max-w-7xl mx-auto mb-8 sticky top-16 md:top-20 z-40 bg-[#2d0202]/95 backdrop-blur-md py-3 border-y border-jawa-emas/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-xs">
          {/* PERBAIKAN: Menggunakan utilitas kelas kanonikal text-jawa-bg di baris 253 */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-black/40 border border-jawa-emas/40 text-jawa-bg px-4 py-2.5 font-cinzel font-bold text-xs uppercase tracking-widest flex items-center justify-between transition-colors hover:border-jawa-emas rounded-xs cursor-pointer"
          >
            <span>Kategori: {activeFilter}</span>
            <ChevronDown className={`w-4 h-4 text-jawa-emas transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 mt-2 bg-[#1e0101] border border-jawa-emas/30 shadow-2xl rounded-xs max-h-60 overflow-y-auto z-50 no-scrollbar"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveFilter(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 font-cinzel text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      activeFilter === cat
                        ? "bg-jawa-emas text-black font-black"
                        : "text-white/80 hover:bg-black/40 hover:text-jawa-emas"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="font-cinzel font-bold text-[10px] md:text-xs bg-black/50 border border-jawa-emas/40 text-jawa-emas px-4 py-2.5 tracking-wider self-start sm:self-auto rounded-xs">
          Terarsip: {filteredMedia.length} Dokumen Momen
        </div>
      </div>

      {/* MASONRY FLUID GRID SYSTEM */}
      <div className="max-w-7xl mx-auto columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredMedia.map((media) => (
            <motion.div
              key={media.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="break-inside-avoid cursor-pointer group relative inline-block w-full"
              onClick={() => setSelectedMedia(media)}
            >
              <div className="border border-jawa-emas/20 bg-[#1e0101]/90 backdrop-blur-xs p-2 md:p-3 shadow-xl hover:border-jawa-emas/60 transition-all duration-300 flex flex-col justify-between h-auto rounded-xs">
                
                <div className="absolute top-4 right-4 z-10 bg-black/70 border border-jawa-emas/40 p-1.5 shadow-md rounded-xs">
                  {media.type === "video" ? (
                    <VideoIcon className="text-jawa-emas w-3.5 h-3.5" />
                  ) : (
                    <ImageIcon className="text-jawa-emas w-3.5 h-3.5" />
                  )}
                </div>

                <div className="w-full overflow-hidden bg-black/40 border border-jawa-emas/10 relative">
                  {media.type === "video" && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 group-hover:bg-black/5 transition-colors">
                      <Play className="w-8 h-8 text-white fill-white drop-shadow-md" />
                    </div>
                  )}
                  <img
                    src={media.url}
                    alt={media.title}
                    className="w-full h-auto object-contain brightness-95 group-hover:brightness-110 group-hover:scale-[1.015] transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="mt-3 pt-2 border-t border-dashed border-jawa-emas/10 text-center md:text-left">
                  <span className="text-[8px] md:text-[9px] font-cinzel font-bold tracking-widest text-jawa-emas bg-black/40 border border-jawa-emas/20 px-2 py-0.5 inline-block mb-1.5">
                    {media.category}
                  </span>
                  <h3 className="font-cinzel text-xs md:text-sm font-bold tracking-wide uppercase line-clamp-1 text-white/90 group-hover:text-jawa-emas transition-colors">
                    {media.title}
                  </h3>
                  <p className="text-[9px] font-medium text-white/40 mt-0.5">{media.date}</p>
                </div>
              </div>
              <Star className="absolute -top-1 -right-1 w-3.5 h-3.5 text-jawa-emas opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* FULLSCREEN PREVIEW MODAL */}
      <AnimatePresence>
        {selectedMedia && (
          // PERBAIKAN: Menggunakan token kanonikal z-9999 di baris 355
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 bg-black/95 flex flex-col md:flex-row items-center justify-center p-3 md:p-12 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-[#2d0202] border border-jawa-emas text-jawa-emas p-2 shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer rounded-xs"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </button>

            <div className="w-full md:w-2/3 h-1/2 md:h-full flex items-center justify-center relative p-1 md:p-2">
              {selectedMedia.type === "video" ? (
                <video controls autoPlay className="max-w-full max-h-full border border-jawa-emas/40 shadow-2xl bg-black">
                  <source src={selectedMedia.url} type="video/mp4" />
                </video>
              ) : (
                <img src={selectedMedia.url} alt={selectedMedia.title} className="max-w-full max-h-full object-contain border border-jawa-emas/40 shadow-2xl" />
              )}
            </div>

            <div className="w-full md:w-1/3 mt-2 md:mt-0 md:ml-8 flex flex-col gap-4 md:gap-6 bg-[#1e0101] border border-jawa-emas/30 p-5 md:p-8 shadow-2xl max-h-[45vh] md:max-h-[85vh] overflow-y-auto rounded-xs relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-jawa-emas/40"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-jawa-emas/40"></div>
              
              <div className="grow">
                <span className="bg-black/50 border border-jawa-emas/40 px-2.5 py-1 text-jawa-emas font-cinzel font-bold text-[9px] md:text-[10px] uppercase tracking-widest">
                  {selectedMedia.category}
                </span>
                <p className="mt-4 text-[10px] md:text-xs font-bold text-white/40">{selectedMedia.date}</p>
                <h2 className="font-cinzel text-lg md:text-2xl font-bold uppercase mt-1 mb-2 leading-tight text-white tracking-wide">
                  {selectedMedia.title}
                </h2>
                <div className="w-8 h-px bg-jawa-emas/40 mb-3"></div>
                <p className="text-xs md:text-sm font-medium border-l border-jawa-emas/60 pl-3 py-0.5 text-white/70 leading-relaxed">
                  {selectedMedia.description}
                </p>
              </div>

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

    </main>
  );
}