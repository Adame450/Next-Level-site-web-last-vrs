import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  const { t } = useLanguage();

  // Fluctuation state for visual bars
  const [stockLow, setStockLow] = useState(45);
  const [optLow, setOptLow] = useState(190);

  useEffect(() => {
    const interval = setInterval(() => {
        // Jitter stock (unstable)
        setStockLow(45 + Math.floor(Math.random() * 20 - 10));
        // Jitter opt (stable but alive - variance +/- 5)
        setOptLow(190 + Math.floor(Math.random() * 10 - 5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="manifesto" className="py-24 px-6 relative bg-void border-b border-grid overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase"
            >
                {t.manifesto.title}
            </motion.h2>
            <p className="font-mono text-gray-400 max-w-2xl mx-auto">
                {t.manifesto.subtitle}
            </p>
        </div>

        {/* Commercial 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative z-10">
            {t.manifesto.items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative p-8 border border-white/10 bg-white/5 hover:border-neon/50 hover:bg-white/[0.07] transition-all duration-300 group"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex justify-between items-start mb-6">
                        <span className="text-5xl font-display font-bold text-gray-800 group-hover:text-white/10 transition-colors">
                            {item.id}
                        </span>
                        <div className="px-2 py-1 bg-black border border-white/20 text-[10px] font-mono text-neon">
                            {item.techSpec}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold font-display uppercase mb-4 text-white group-hover:text-neon transition-colors">
                        {item.title}
                    </h3>
                    
                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* --- FPS VISUALIZATION SECTION --- */}
        <div className="relative border border-grid bg-black/50 p-8 md:p-12 mt-12">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                 <div className="absolute w-96 h-96 bg-neon/20 blur-[100px] -top-20 -left-20"></div>
                 <div className="absolute w-96 h-96 bg-acid/10 blur-[100px] -bottom-20 -right-20"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                {/* Description Text */}
                <div className="flex-1">
                    <h3 className="text-2xl font-display uppercase mb-4 text-white">
                        <span className="text-neon">///</span> THE 1% LOW REALITY
                    </h3>
                    <p className="font-mono text-gray-400 text-sm mb-6 leading-relaxed">
                        High average FPS is useless if your game stutters. Our BIOS-level optimization targets the 
                        <strong className="text-white"> 0.1% and 1% Lows</strong> — ensuring every frame is delivered consistently during intense fights.
                    </p>
                    <div className="flex gap-4 font-mono text-xs">
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gray-700"></div>
                            <span className="text-gray-500">STUTTER (1% LOW)</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-neon"></div>
                            <span className="text-gray-300">SMOOTH (AVG)</span>
                         </div>
                    </div>
                </div>

                {/* Animated Chart */}
                <div className="flex-1 w-full space-y-6">
                    {/* Bar 1: Stock */}
                    <div>
                        <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                            <span>STOCK WINDOWS + BLOATWARE</span>
                            <span>144 FPS (AVG)</span>
                        </div>
                        <div className="h-12 w-full bg-gray-900 border border-white/10 relative flex items-center p-1">
                            {/* 1% Low (Bad) - Jittery */}
                            <motion.div 
                                animate={{ width: `${(stockLow / 240) * 100}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                className="h-full bg-gray-700 relative group"
                            >
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity">
                                    {stockLow} FPS
                                </span>
                            </motion.div>
                            {/* Avg (Decent but shaky) */}
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "45%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.4 }}
                                className="h-full bg-white/20 ml-1 relative"
                            ></motion.div>
                        </div>
                    </div>

                    {/* Bar 2: Optimized */}
                    <div>
                        <div className="flex justify-between text-xs font-mono text-white mb-2">
                            <span className="text-neon font-bold">NEXT LEVEL OPTIMIZATION</span>
                            <span className="text-neon text-lg">240 FPS (AVG)</span>
                        </div>
                        <div className="h-14 w-full bg-gray-900 border border-neon/50 relative flex items-center p-1 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                            {/* 1% Low (Good - Solid base) - Stable Jitter */}
                            <motion.div 
                                animate={{ width: `${(optLow / 240) * 100}%` }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="h-full bg-neon relative group"
                            >
                                <div className="absolute top-0 right-0 h-full w-1 bg-white/50"></div>
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity">
                                    {optLow} FPS (1% LOW)
                                </span>
                            </motion.div>
                            {/* Avg (Max) */}
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "35%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.4 }}
                                className="h-full bg-neon/40 ml-1 relative"
                            ></motion.div>
                        </div>
                        <div className="flex justify-end mt-2">
                             <span className="font-mono text-xs text-acid animate-pulse">+65% STABILITY GAIN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;