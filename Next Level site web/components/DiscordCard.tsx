import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const DiscordCard: React.FC = () => {
  const { t, lang } = useLanguage();
  
  return (
    <section className="py-32 px-4 flex justify-center items-center relative overflow-hidden">
      
      {/* Background Radiation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/20 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.a 
        href="https://discord.gg/8rtPcvAbUd"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.9, rotateX: 10 }}
        whileHover={{ scale: 1.05, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        // Added w-full max-w-[450px] for responsiveness
        className="relative group w-full max-w-[450px] h-[250px] bg-[#080808] border border-gray-800 flex flex-col justify-between p-6 overflow-hidden perspective-1000 mx-auto"
      >
         {/* Holographic Border Effect */}
         <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon/50 transition-colors duration-500 z-10"></div>
         
         {/* Top Info */}
         <div className="flex justify-between items-start z-20">
            <div className="flex flex-col">
                <span className="font-mono text-[10px] text-gray-500 mb-1">{t.discord.id_label}</span>
                <span className="font-mono text-sm tracking-widest text-white">X-882-ALPHA</span>
            </div>
            
            {/* Live Status Indicator */}
            <div className="flex items-center gap-2 border border-green-900/50 bg-green-900/10 px-2 py-1">
                <div className="w-2 h-2 bg-acid rounded-full animate-pulse-fast"></div>
                <span className="font-mono text-[10px] text-acid uppercase">{t.discord.status_value}</span>
            </div>
         </div>

         {/* Center Brand */}
         <div className="relative z-20 my-auto">
             <h3 className="text-4xl font-display text-white group-hover:glitch-text" data-text="DISCORD">
                DISCORD
             </h3>
             <div className="h-0.5 w-12 bg-neon mt-2 group-hover:w-full transition-all duration-500"></div>
         </div>

         {/* Bottom Action */}
         <div className="flex justify-between items-end z-20">
             <div className="font-mono text-[10px] text-gray-600">
                {lang === 'AR' ? 'Auth_Level_5' : 'Auth_Level_5'} <br />
                {t.discord.access_label}: GRANTED
             </div>
             <span className="font-mono text-neon text-sm group-hover:underline decoration-1 underline-offset-4">
                {t.discord.cta} &rarr;
             </span>
         </div>

         {/* Grid texture on card */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMzAgMEgwTDMwIDQwSDQwTDAgNDAiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>
         
         {/* Scanline */}
         <div className="absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm animate-[scan_2s_linear_infinite] pointer-events-none"></div>
      </motion.a>
    </section>
  );
};

export default DiscordCard;