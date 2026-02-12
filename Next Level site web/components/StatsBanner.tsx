import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const StatsBanner: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.stats.clients, value: "5,000+" },
    { label: t.stats.fps, value: "+45%" },
    { label: t.stats.latency, value: "-15ms" },
    { label: t.stats.satisfaction, value: "100%" },
  ];

  return (
    <div className="border-y border-grid bg-black/50 backdrop-blur-sm py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
            >
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                    {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {stat.label}
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;