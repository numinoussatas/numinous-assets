"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Camera, 
  Video, 
  Calendar, 
  GraduationCap, 
  Map, 
  Trophy, 
  BookOpen, 
  Music, 
  HeartHandshake,
  Crown,
  Sparkles
} from "lucide-react";

// Data Statistik Angkatan (Warna diselaraskan ke tema Keraton & Graduation)
const stats = [
  { label: "Siswa", value: "37", icon: Users, color: "bg-[#4a0404] text-jawa-emas border-jawa-emas/40" },
  { label: "Foto", value: "642", icon: Camera, color: "bg-black/40 text-white border-jawa-emas/30" },
  { label: "Video", value: "2", icon: Video, color: "bg-[#4a0404] text-jawa-emas border-jawa-emas/40" },
  { label: "Tahun Masuk", value: "2023", icon: Calendar, color: "bg-black/40 text-white border-jawa-emas/30" },
  { label: "Lulus", value: "2026", icon: GraduationCap, color: "bg-jawa-emas text-black border-jawa-emas" },
];

// Data Timeline Perjalanan XII-10
const timelineEvents = [
  { id: 1, title: "MPLS", desc: "Hari pertama dengan seragam putih abu-abu di kelas baru.", icon: Map, color: "bg-[#4a0404] border-jawa-emas/40 text-white" },
  { id: 2, title: "Class Meeting", desc: "Teriakan suporter dan keringat kebersamaan di lapangan sekolah.", icon: Trophy, color: "bg-black/40 border-jawa-emas/30 text-jawa-bg" },
  { id: 3, title: "Study Tour", desc: "Perjalanan di bus yang jauh lebih seru dari tempat tujuannya.", icon: Map, color: "bg-[#4a0404] border-jawa-emas/40 text-white" },
  { id: 4, title: "Praktikum", desc: "Ketegangan di laboratorium dan laporan yang dikerjakan bersama.", icon: BookOpen, color: "bg-black/40 border-jawa-emas/30 text-jawa-bg" },
  { id: 5, title: "Pentas Seni", desc: "Momen panggung kreativitas, lagu kenangan, dan sorak sorai ria.", icon: Music, color: "bg-[#4a0404] border-jawa-emas/40 text-white" },
  { id: 6, title: "Hari Guru", desc: "Kejutan air mata penuh rasa hormat untuk bimbingan sang guru.", icon: HeartHandshake, color: "bg-black/40 border-jawa-emas/30 text-jawa-bg" },
  { id: 7, title: "Wisuda", desc: "Akhir dari sebuah babak cerita yang tak akan pernah terlupakan.", icon: GraduationCap, color: "bg-jawa-emas border-jawa-emas text-black" },
];

export default function BerandaPage() {
  return (
    // PERBAIKAN: Menggunakan utilitas kelas kanonikal text-jawa-bg
    <main className="min-h-screen bg-[#2d0202] text-jawa-bg py-16 px-4 md:px-12 lg:px-24 font-inter overflow-x-hidden relative selection:bg-jawa-emas selection:text-black">
      
      {/* BACKGROUND PATTERN DEKORATIF */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none -z-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C55 20 75 25 100 25C75 25 55 30 50 50C45 30 25 25 0 25C25 25 45 20 50 0ZM50 100C55 80 75 75 100 75C75 75 55 70 50 50C45 70 25 75 0 75C25 75 45 80 50 100Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
             backgroundSize: '150px' 
           }}>
      </div>
      {/* PERBAIKAN: Menggunakan bg-linear-to-b & bg-linear-to-r kanonikal */}
      <div className="fixed inset-0 bg-linear-to-b from-transparent via-black/40 to-[#120101] -z-10 pointer-events-none"></div>

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2rem] uppercase bg-black/40 border border-jawa-emas/30 text-jawa-emas px-3 py-1.5 mb-4 rounded-sm"
        >
          <Crown className="w-3.5 h-3.5 animate-pulse" /> Gerbang Kapsul Waktu
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-4xl md:text-7xl font-black uppercase tracking-wider text-white"
        >
          Ruang <span className="bg-linear-to-b from-[#FFFACD] via-jawa-emas to-[#B8860B] bg-clip-text text-transparent">Memori</span>
        </motion.h1>
        
        <div className="h-px w-32 bg-linear-to-r from-transparent via-jawa-emas to-transparent mx-auto my-6"></div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm md:text-xl font-serif italic max-w-2xl mx-auto bg-black/30 border border-jawa-emas/20 px-4 py-3 md:py-4 shadow-xl backdrop-blur-xs text-white/80 rounded-xs"
        >
          "Kita mungkin tidak lagi berada di satu ruang kelas, namun jejak sejarah kita akan selalu hidup abadi dalam satu cerita."
        </motion.p>
      </div>

      {/* STATISTIK ANGKATAN */}
      <section className="max-w-7xl mx-auto mb-24 md:mb-36 relative z-10">
        <div className="flex items-center gap-2 justify-center md:justify-start mb-8 border-b border-jawa-emas/20 pb-3">
          <Sparkles className="w-5 h-5 text-jawa-emas" />
          <h2 className="font-cinzel text-lg md:text-2xl font-bold uppercase tracking-widest text-white">
            Statistik Lintasan Sejarah
          </h2>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className={`${stat.color} border p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 transition-all rounded-xs shadow-md`}
            >
              <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-current" strokeWidth={1.5} />
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-cinzel font-black tracking-wide leading-none mb-1">{stat.value}</p>
                <p className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-wider opacity-60">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE PERJALANAN SMA */}
      <section className="max-w-5xl mx-auto relative z-10 pb-16">
        <div className="flex items-center gap-2 justify-center mb-16 border-b border-jawa-emas/20 pb-3">
          <Calendar className="w-5 h-5 text-jawa-emas" />
          <h2 className="font-cinzel text-lg md:text-2xl font-bold uppercase tracking-widest text-white">
            Jejak Waktu Kronologis
          </h2>
        </div>
        
        <div className="relative w-full">
          {/* Garis Vertikal Timeline */}
          {/* PERBAIKAN: Menggunakan bg-linear-to-b kanonikal */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-jawa-emas/80 via-jawa-emas/30 to-transparent transform md:-translate-x-1/2"></div>

          {/* Pemetaan Kartu Timeline */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className={`relative flex items-center justify-between mb-8 md:mb-12 w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-row-reverse`}
            >
              {/* Spacer untuk formasi zig-zag Desktop */}
              <div className="hidden md:block w-5/12"></div>

              {/* Ikon Lingkaran Tengah */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-jawa-emas bg-[#2d0202] z-20 shadow-lg">
                <event.icon className="w-4 h-4 text-jawa-emas" strokeWidth={2} />
              </div>

              {/* Kotak Konten Isi Cerita */}
              {/* PERBAIKAN: Menggunakan bg-linear-to-br kanonikal */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className={`w-[84%] md:w-5/12 border p-4 md:p-6 rounded-xs transition-colors bg-linear-to-br ${event.color} shadow-lg`}
              >
                <span className="text-[9px] font-cinzel font-black bg-black/30 border border-jawa-emas/20 px-2 py-0.5 inline-block mb-1.5 text-jawa-emas tracking-widest">
                  Momen {event.id}
                </span>
                <h3 className="font-cinzel text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-1">
                  {event.title}
                </h3>
                <p className="font-sans text-xs md:text-sm font-medium text-white/70 leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}