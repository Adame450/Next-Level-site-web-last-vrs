import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const BentoFeatures: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 md:px-12 relative border-t border-grid">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-grid pb-4 gap-4">
          <h2 className="text-4xl md:text-6xl font-display uppercase text-white tracking-tighter">
            {t.features.title}
          </h2>
          <span className="font-mono text-xs text-neon">/// SYS.CONFIG</span>
        </div>

        {/* Improved Grid Responsiveness: sm:grid-cols-2 (Tablets) -> md:grid-cols-4 (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0.5 bg-grid border border-grid">
          {t.features.grid.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 0.98, backgroundColor: '#0a0a0a' }}
              className="group relative bg-void p-8 h-64 flex flex-col justify-between overflow-hidden cursor-crosshair"
            >
              {/* Corner markers */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-grid group-hover:border-neon transition-colors duration-300"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-grid group-hover:border-neon transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-grid group-hover:border-neon transition-colors duration-300"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-grid group-hover:border-neon transition-colors duration-300"></div>

              <div className="font-mono text-xs text-gray-500">
                0{index + 1} // {item.title}
              </div>

              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-mono text-white font-bold mb-2 group-hover:text-neon transition-colors">
                  {item.stat}
                </div>
                <p className="font-mono text-xs text-gray-400 max-w-[80%]">
                  {item.desc}
                </p>
              </div>

              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;