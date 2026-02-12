import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import GridBackground from './components/GridBackground';
import HeroCanvas from './components/HeroCanvas';
import Navbar from './components/Navbar';
import StatsBanner from './components/StatsBanner';
import BentoFeatures from './components/BentoFeatures';
import Manifesto from './components/Manifesto';
import DiscordCard from './components/DiscordCard';
import Story from './components/Story';
import PerformanceCalculator from './components/PerformanceCalculator';
import { motion } from 'framer-motion';

const MainContent: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-void text-white selection:bg-neon selection:text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <GridBackground />
      <Navbar onOpenCalculator={() => setIsCalculatorOpen(true)} />
      
      <PerformanceCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />

      {/* HERO SECTION */}
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20">
        <HeroCanvas />
        
        <div className="z-10 text-center px-4 relative max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-neon uppercase bg-neon/10 border border-neon/20 px-4 py-2 rounded-full">
              {t.hero.label}
            </span>
          </motion.div>
          
          <div className="glitch-wrapper mb-8" data-text={t.hero.title}>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white leading-none">
              {t.hero.title}
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base md:text-xl font-mono text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
             <a 
                href="https://discord.gg/8rtPcvAbUd" 
                target="_blank"
                rel="noreferrer"
                className="bg-neon text-white hover:bg-white hover:text-black px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto min-w-[200px]"
             >
                {t.hero.cta_primary}
             </a>
             <button
                onClick={() => setIsCalculatorOpen(true)}
                className="border border-white/20 hover:border-white bg-black/50 backdrop-blur text-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto min-w-[200px]"
             >
                {t.hero.cta_secondary}
             </button>
          </motion.div>
        </div>
      </header>

      {/* SOCIAL PROOF BANNER */}
      <StatsBanner />

      {/* MANIFESTO (VALUE PROPS) */}
      <Manifesto />

      {/* STORY / ORIGIN (New Section) */}
      <Story />

      {/* BENTO GRID FEATURES (RESULTS) */}
      <div id="features">
        <BentoFeatures />
      </div>

      {/* DISCORD CTA */}
      <DiscordCard />

      {/* FOOTER */}
      <footer className="border-t border-grid py-12 px-8 bg-void relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-display text-2xl">NEXT LEVEL</h4>
            <span className="font-mono text-[10px] text-gray-600">
               {t.footer.system} // v3.1.0-RC
            </span>
          </div>
          <div className="font-mono text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;