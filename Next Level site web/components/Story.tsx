import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 border-b border-grid bg-void relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-grid flex-1"></div>
            <h2 className="text-xl font-mono text-gray-500 uppercase tracking-widest">{t.story.title}</h2>
            <div className="h-px bg-grid flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            
            {/* LEFT: THE FAILURE (Past) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-900/50"></div>
                
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <h3 className="text-red-500 font-mono text-sm uppercase tracking-widest font-bold">
                        LOG_FILE: PREVIOUS_ATTEMPT
                    </h3>
                </div>

                <h4 className="text-2xl md:text-3xl font-display text-white mb-6 uppercase">
                    {t.story.log_failure_title}
                </h4>

                <p className="font-mono text-gray-400 text-sm leading-relaxed border border-red-900/30 bg-red-900/5 p-6 relative">
                    <span className="absolute top-0 right-0 p-1 text-[8px] bg-red-900 text-white font-mono">ERROR 404: SUPPORT NOT FOUND</span>
                    {t.story.log_failure_desc}
                </p>
            </motion.div>

            {/* RIGHT: THE SUCCESS (Present) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
            >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-neon"></div>
                
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-neon rounded-full"></span>
                    <h3 className="text-neon font-mono text-sm uppercase tracking-widest font-bold">
                        LOG_FILE: CURRENT_BUILD
                    </h3>
                </div>

                <h4 className="text-2xl md:text-3xl font-display text-white mb-6 uppercase">
                    {t.story.log_success_title}
                </h4>

                <div className="font-mono text-gray-300 text-sm leading-relaxed border border-neon/30 bg-neon/5 p-6 relative">
                    <span className="absolute top-0 right-0 p-1 text-[8px] bg-neon text-black font-bold font-mono">STATUS: STABLE</span>
                    {t.story.log_success_desc}
                    <div className="mt-4 pt-4 border-t border-neon/20 text-xs text-acid">
                        &gt; {t.story.partner}
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Story;