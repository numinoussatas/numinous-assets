"use client";

import { motion } from "framer-motion";
import { Crown, Scroll, Users, User, Sparkles } from "lucide-react";

// --- GURU PANGAMPU ---
const teacher = {
  name: "Bapak Tiar Sofwani, S.T",
  title: "Guru Pangampu XII-10",
  photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/teachers/walikelas.png",
  quote: "Kenangan di kelas ini akan berlalu, tapi pelajaran hidupnya semoga selalu kalian bawa. Jadilah pribadi yang berilmu, berakhlak dan bermanfaat untuk banyak orang. Terbang setinggi mungkin, tapi jangan pernah lupa darimana kalian memulai",
};

// --- DATA WANGSA & KELOMPOK ---
const groups = [
  { id: 1, name: "RIVALDO-REZA-MEDINA-ARSYA-ISMI-SYAKIRA-ELVIRA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/1.png" },
  { id: 2, name: "RIVALDO-REZA-MEDINA-ARSYA-ISMI-SYAKIRA-ELVIRA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/2.png" },
  { id: 3, name: "DZULFIQAR-M.SUPYAN-GENDIS-MASSAYU-ANGGUN-MUTIA S", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/3.png" },
  { id: 4, name: "DZULFIQAR-M.SUPYAN-GENDIS-MASSAYU-ANGGUN-MUTIA S", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/4.png" },
  { id: 5, name: "FAYZAN-SENDRA-KANITA-SHERA-BELLA-ERIKA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/5.png" },
  { id: 6, name: "FAYZAN-SENDRA-KANITA-SHERA-BELLA-ERIKA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/6.png" },
  { id: 7, name: "DZIAULHAQ-ROFFI-FAZRIEL-NITA-ALIZA-MASSAYU", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/7.png" },
  { id: 8, name: "DZIAULHAQ-ROFFI-FAZRIEL-NITA-ALIZA-MASSAYU", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/8.png" },
  { id: 9, name: "DZIAULHAQ-YUSUF-FAZRIEL-FATMA-SABIRA-ALIYA-FEBBY", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/9.png" },
  { id: 10, name: "DZIAULHAQ-YUSUF-FAZRIEL-FATMA-SABIRA-ALIYA-FEBBY", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/10.png" },
  { id: 11, name: "M.RASYADAN-M.FIRELL-M.ROFFI-KEZYA-MADINA-CHERIL-GEDINNY", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/11.png" },
  { id: 12, name: "M.RASYADAN-M.FIRELL-M.ROFFI-KEZYA-MADINA-CHERIL-GEDINNY", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/Kelompok/12.png" },
];

// --- DATA INDIVIDU SISWA ---
const students = [
  { id: 1, name: "ALIYA KHAERUN NISA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Aliya%20Khaerun%20Nisa.png", motto: "hUuuHh uno game." },
  { id: 2, name: "ALIZA MAWLA ATTAQI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Aliza%20Mawla%20Attaqi.png", motto: "Semoga dengan aku masuk di satas ini, aku dapat ilmu yang bermanfaat, sukses, dan bisa membanggakan orangtua ku." },
  { id: 3, name: "ANGGUN INDAH PUTRIAJI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Anggun%20Indah%20Putriaji.png", motto: "They all say that it gets better, but what if i’m as good as it gets?" },
  { id: 4, name: "ARSYA FAHIRA NUR HAWA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Arsya%20Fahira%20Nur%20Hawa.png", motto: "Only forwards, never backwards." },
  { id: 5, name: "BELLA RISMAYANTHI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Bella%20Rismayanthi.png", motto: "Everything you lose is a step you take." },
  { id: 6, name: "CHERIL PUTRI ANDINI PRIATNA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Cheril%20Putri%20Andini%20Priatna.png", motto: "Kecantikan sejati memancar dari ketulusan hati." },
  { id: 7, name: "DZIAULHAQ FAWWAZ ABDULLAH", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Dziaulhaq%20Fawwaz%20Abdullah.png", motto: "Kita hidup untuk berguna bukan untuk sempurna." },
  { id: 8, name: "DZULFIQAR NADA PURNAMA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Dzulfiqar%20Nada%20Purnama.png", motto: "Etika lebih penting dari apapun." },
  { id: 9, name: "ELVIRA SITI AZZAHRA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Elvira%20Siti%20Azzahra.png", motto: "You gotta step into the daylight and let it go." },
  { id: 10, name: "ERIKA FITRIA MEDIANA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Erika%20Fitria%20Mediana.png", motto: "One phase done, more to come." },
  { id: 11, name: "FATMA MUTIA NURIL PARADIS KUSDINAR", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Fatma%20Mutia%20Nuril%20Paradis%20Kusdinar.png", motto: "See you in our best versions." },
  { id: 12, name: "FAYZAN ATHAR SABIQ", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Fayzan%20Athar%20Sabiq.png", motto: "Goodbye and good luck!." },
  { id: 13, name: "FAZRIEL NURRAHMAN ROMADONI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Fazriel%20Nurrahman%20Romadoni.png", motto: "Motivasi tanpa aksi hanyalah halusinasi." },
  { id: 14, name: "FEBBY APRILIYANI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Febby%20Apriliyani.png", motto: "It's fine to fake it till you make it, till you do, till it's true - Taylor Swift ." },
  { id: 15, name: "GEDINNY NADHA SAYLLA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Gedinny%20Nadha%20Saylla.png", motto: "Pesona memori indah takkan pudar oleh sang waktu." },
  { id: 16, name: "GENDIS PUJI AL MAGHFIRA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Gendis%20Puji%20Almaghfira.png", motto: "Anyone, from anywhere, can do anything." },
  { id: 17, name: "ISMI NUURUL ZAHRA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Ismi%20Nuurul%20Zahra.png", motto: "Some things have to end for better things to begin." },
  { id: 18, name: "KANITA AWALITA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Kanita%20Awalita.png", motto: "Not that bad, i’ll rate it 20/22" },
  { id: 19, name: "KEZYA KHUSUUFI AZZUKHRUF", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Kezya%20Khusuufi%20Azzukhruf.png", motto: "Perhiasan dunia terbaik adalah ilmu yang bermanfaat." },
  { id: 20, name: "MADINA AZKIA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Madina%20Azkia.png", motto: "Kebijaksanaan adalah mahkota bagi pikiran yang jernih." },
  { id: 21, name: "MASSAYU HERDIAN", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Massayu%20Herdian.png", motto: "You gotta step into the daylight and let it go." },
  { id: 22, name: "MEDINA RAHMAH", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Medina%20Rahmah.png", motto: "But i promise you this" },
  { id: 23, name: "MOCHAMMAD FIRELL TAHTA AL-GHOZALI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Mochammad%20Firell%20Tahta%20Al%20Ghozali.png", motto: "Pemimpin bijaksana mengutamakan keadilan bersama." },
  { id: 24, name: "MOCHAMMAD ROFFI PUTRA FIRANSYAH", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Mochammad%20Roffi%20Putra%20Firansyah.png", motto: "This school gave me many memories that i'll never forget." },
  { id: 25, name: "MUHAMAD SUPYAN AL-ANSHORI WARGAWINATA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Muhamad%20Supyan%20Al-Anshori%20Wargawinata.png", motto: "Eclipse first, the rest nowhere.." },
  { id: 26, name: "MUHAMMAD RASYADAN", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Muhammad%20Rasyadan.png", motto: "Petualangan sejati dimulai ketika zona nyaman berakhir." },
  { id: 27, name: "MUTIA MAHARANI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Mutia%20Maharani.JPG", motto: " " },
  { id: 28, name: "MUTIA SALMA TSABITA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Mutia%20Salma%20Tsabita.png", motto: "“Good luck buat kita semua! Kejar sukses setinggi mungkin, tapi tetap rendah hati ya." },
  { id: 29, name: "NITA NURLAILA KHOERUNNISA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Nita%20Nurlaila%20Khoerunnisa.png", motto: "Be yourself, despite the doubts of others. Your worth is defined by your own conviction, not their view of you." },
  { id: 30, name: "REZA ADI WIJAYA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Reza%20Adi%20Wijaya.png", motto: "Ini hanya sementara bukan ujung dari rencana, jalanmu kan sepanjang niatmu." },
  { id: 31, name: "RIVALDO DWI PUTRA RAMDANI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Rivaldo%20Dwi%20Putra%20Ramdani.png", motto: "I'll always look out for you." },
  { id: 32, name: "SABIRA NURFADILA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Sabira%20Nurfadila.png", motto: "We survived the great war. may we all be successful." },
  { id: 33, name: "SENDRA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Sendra.png", motto: "Datang, Setting, Reyen." },
  { id: 34, name: "SHERA ANUGRAH SETIAWAN", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Shera%20Anugrah%20Setiawan.png", motto: "Do something today that your future self will thank you for." },
  { id: 35, name: "SYAKIRA DEWI RHAMADHANI", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Syakira%20Dewi%20Rhamadhani%20.png", motto: "We're all chasing' after our ends" },
  { id: 36, name: "TASYA MELINDA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Tasya%20Melinda.JPG", motto: " " },
  { id: 37, name: "YUSUF YUDI RIZKY PURNAMA", photo: "https://raw.githubusercontent.com/numinoussatas/numinous-assets/main/yearbook/individu/Yusuf%20Yudi%20Rizky%20Purnama%20.png", motto: "Terus semangat belajar, jaga kebersamaan, dan jadilah pribadi yang lebih baik SEMOGA SEMUA TERWUJUD DI PTN YANG DIINGINKAN." }
];

const GoldDivider = () => (
  <div className="w-full flex items-center justify-center my-12 md:my-24 opacity-40">
    <div className="h-px w-24 md:w-48 bg-linear-to-r from-transparent to-jawa-emas"></div>
    <Crown className="w-5 h-5 md:w-8 md:h-8 text-jawa-emas mx-4 md:mx-6" />
    <div className="h-px w-24 md:w-48 bg-linear-to-l from-transparent to-jawa-emas"></div>
  </div>
);

export default function KeratonYearbookPage() {
  return (
    // PERBAIKAN: Menggunakan utilitas kelas kanonikal text-jawa-bg di baris 81
    <main className="min-h-screen bg-[#4a0404] text-jawa-bg font-inter overflow-x-hidden relative selection:bg-jawa-emas selection:text-white py-12 md:py-20 px-4 md:px-12 lg:px-24">
      
      {/* BACKGROUND PATTERN */}
      <div className="fixed inset-0 opacity-10 pointer-events-none -z-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C55 20 75 25 100 25C75 25 55 30 50 50C45 30 25 25 0 25C25 25 45 20 50 0ZM50 100C55 80 75 75 100 75C75 75 55 70 50 50C45 70 25 75 0 75C25 75 45 80 50 100Z' fill='%23D4AF37' fill-opacity='1'/%3E%3C/svg%3E")`,
             backgroundSize: '150px' 
           }}>
      </div>
      <div className="fixed inset-0 bg-linear-to-b from-transparent via-[#2d0202]/50 to-[#1a0101] -z-10 pointer-events-none"></div>

      {/* VERTICAL FLOATING TEXT */}
      <div className="fixed right-2 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-4 font-cinzel text-3xl md:text-6xl font-black text-white/5 uppercase tracking-[1rem] md:tracking-[1.5rem] leading-none select-none pointer-events-none z-0">
        {"NUMINOUS".split("").map((char, i) => (
          <span key={i} className="block">{char}</span>
        ))}
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20 relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
          <Crown className="w-12 h-12 md:w-16 md:h-16 text-jawa-emas drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="font-cinzel text-3xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-widest mb-4 drop-shadow-2xl">
          ARSIP <span className="text-jawa-emas">NUMINOUS</span>
        </motion.h1>
        
        <div className="h-0.5 w-48 md:w-64 bg-linear-to-r from-transparent via-jawa-emas to-transparent mb-6"></div>
        
        <p className="text-sm md:text-xl lg:text-2xl font-serif italic text-white/80 max-w-3xl leading-relaxed px-2">
          Untuk setiap tawa, cerita, dan jiwa yang singgah di XII-10. Kenangan Angkatan 2026 ini akan selalu punya tempat untuk pulang.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BAGIAN 1: GURU PANGAMPU */}
        <section className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 justify-center mb-8 md:mb-12">
            <Scroll className="w-7 h-7 md:w-9 md:h-9 text-jawa-emas" />
            <h2 className="font-cinzel text-xl md:text-3xl font-bold uppercase tracking-[0.2rem] md:tracking-[0.4rem] text-white">Guru Pangampu</h2>
          </div>
          
          <div className="bg-[#2d0202]/80 backdrop-blur-md border border-jawa-emas/40 p-5 md:p-12 lg:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
            <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-jawa-emas"></div>
            <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-4 border-r-4 border-jawa-emas"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-4 border-l-4 border-jawa-emas"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-jawa-emas"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16 relative z-10">
              <div className="w-full sm:w-2/3 md:w-5/12 relative group">
                <div className="absolute inset-0 border-2 border-jawa-emas transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 transition-transform duration-500"></div>
                <img src={teacher.photo} alt={teacher.name} className="relative w-full aspect-4/5 object-cover md:grayscale md:brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 shadow-2xl" />
              </div>
              <div className="w-full md:w-7/12 text-center md:text-left">
                <p className="font-serif italic text-lg md:text-2xl lg:text-3xl leading-relaxed text-white mb-6 md:mb-12 drop-shadow-lg">"{teacher.quote}"</p>
                <div className="inline-block relative">
                  <h3 className="font-cinzel text-xl md:text-3xl lg:text-4xl font-black uppercase text-jawa-emas tracking-widest">{teacher.name}</h3>
                  <p className="font-bold text-white/60 mt-1 md:mt-3 uppercase tracking-[0.15rem] md:tracking-[0.25rem] text-[10px] md:text-sm">{teacher.title}</p>
                  <Sparkles className="absolute -right-8 md:-right-12 top-0 w-5 h-5 md:w-7 md:h-7 text-jawa-emas/50 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* BAGIAN 2: WANGSA & KELOMPOK */}
        <section className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 justify-center mb-10 md:mb-16">
            <Users className="w-7 h-7 md:w-9 md:h-9 text-jawa-emas" />
            <h2 className="font-cinzel text-xl md:text-3xl font-bold uppercase tracking-[0.2rem] md:tracking-[0.4rem] text-white">Wangsa & Kelompok</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {groups.map((group) => (
              <motion.div whileHover={{ y: -8 }} key={group.id} className="bg-[#2d0202]/60 border border-jawa-emas/30 shadow-2xl overflow-hidden flex flex-col relative group">
                <div className="w-full aspect-3/2 overflow-hidden relative shrink-0">
                  <img src={group.photo} alt={group.name} className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                {/* PERBAIKAN: Menggunakan utilitas kelas kanonikal min-h-17.5 dan md:min-h-22.5 di baris 164 */}
                <div className="p-4 md:p-6 text-center flex items-center justify-center grow min-h-17.5 md:min-h-22.5 bg-black/20">
                  {/* PERBAIKAN: Menggunakan kelas kanonikal wrap-break-word di baris 165 */}
                  <h3 className="font-cinzel text-[11px] md:text-sm font-bold uppercase text-jawa-emas tracking-wider leading-snug wrap-break-word px-2">{group.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* BAGIAN 3: SISWA & SISWI */}
        <section className="pb-16 md:pb-32">
          <div className="flex items-center gap-3 justify-center mb-12 md:mb-20">
            <User className="w-7 h-7 md:w-9 md:h-9 text-jawa-emas" />
            <h2 className="font-cinzel text-xl md:text-3xl font-bold uppercase tracking-[0.2rem] md:tracking-[0.4rem] text-white">SISWA & SISWI</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
            {students.map((student, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: (index % 4) * 0.04 }}
                key={student.id} 
                className="bg-[#2d0202]/40 border border-jawa-emas/20 p-2.5 md:p-4 shadow-xl group hover:border-jawa-emas/60 transition-all flex flex-col items-center w-full"
              >
                <div className="w-full aspect-290/200 border border-jawa-emas/30 overflow-hidden mb-3 md:mb-5 relative shrink-0 bg-neutral-900/40">
                  <img src={student.photo} alt={student.name} className="w-full h-full object-cover md:grayscale md:brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                </div>
                
                <div className="text-center w-full flex flex-col grow justify-between">
                  <div>
                    {/* PERBAIKAN: Menggunakan utilitas kelas kanonikal min-h-10 dan md:min-h-14 di baris 202 */}
                    <h3 className="font-cinzel text-[11px] sm:text-sm md:text-lg font-bold text-white uppercase tracking-wider line-clamp-2 min-h-10 md:min-h-14 flex items-center justify-center leading-tight">
                      {student.name}
                    </h3>
                    <div className="h-px w-6 md:w-8 bg-jawa-emas/30 mx-auto my-2"></div>
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-cinzel text-jawa-emas uppercase tracking-widest mb-1 opacity-70">Prinsip Hidup</p>
                    <p className="font-serif italic text-[10px] md:text-sm text-white/60 line-clamp-3 px-1 leading-snug">
                      "{student.motto || "Mengukir cerita indah bersama waktu."}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}