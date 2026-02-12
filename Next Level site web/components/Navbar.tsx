import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenCalculator: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const languages: Language[] = ['FR', 'EN', 'ES', 'AR'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || mobileMenuOpen
            ? 'bg-void/90 backdrop-blur-md border-grid py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand */}
          <div className="flex items-center gap-2 cursor-pointer group z-50">
             <div className="w-2 h-2 bg-neon group-hover:scale-150 transition-transform duration-300"></div>
             <span className="font-display font-bold text-xl tracking-tighter text-white">
               NEXT <span className="text-gray-600">LEVEL</span>
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
              <a 
                href="https://discord.gg/8rtPcvAbUd" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-mono text-gray-400 hover:text-white transition-colors uppercase flex items-center gap-2"
              >
                  {t.navbar.join}
                  <span className="w-1 h-1 bg-neon rounded-full animate-pulse"></span>
              </a>

              <button 
                  onClick={onOpenCalculator}
                  className="text-sm font-mono text-gray-400 hover:text-neon transition-colors uppercase flex items-center gap-1"
              >
                  {t.navbar.simulator}
              </button>
              
              <div className="flex items-center border-l border-white/10 pl-8 gap-2">
                  {languages.map((l) => (
                      <button
                          key={l}
                          onClick={() => setLang(l)}
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded transition-all ${
                              lang === l 
                              ? 'bg-white text-black font-bold' 
                              : 'text-gray-500 hover:text-white'
                          }`}
                      >
                          {l}
                      </button>
                  ))}
              </div>

              <a 
                  href="https://discord.gg/8rtPcvAbUd"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neon/10 border border-neon/50 text-neon hover:bg-neon hover:text-white px-6 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300"
              >
                  {t.navbar.cta}
              </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden z-50 text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white origin-center"
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-void pt-24 px-6 md:hidden flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6 text-center">
              <a 
                href="https://discord.gg/8rtPcvAbUd"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-white uppercase border-b border-white/10 pb-4"
              >
                {t.navbar.join}
              </a>
              <button 
                onClick={() => {
                    onOpenCalculator();
                    setMobileMenuOpen(false);
                }}
                className="text-2xl font-display font-bold text-neon uppercase border-b border-white/10 pb-4"
              >
                {t.navbar.simulator}
              </button>
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-white uppercase border-b border-white/10 pb-4"
              >
                {t.features.title}
              </a>
            </div>

            <div className="flex justify-center gap-4 mt-4">
               {languages.map((l) => (
                  <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`text-sm font-mono px-4 py-2 border transition-all ${
                          lang === l 
                          ? 'bg-white text-black border-white font-bold' 
                          : 'text-gray-500 border-gray-800 hover:border-white'
                      }`}
                  >
                      {l}
                  </button>
              ))}
            </div>

            <a 
                href="https://discord.gg/8rtPcvAbUd"
                target="_blank"
                rel="noreferrer"
                className="mt-auto mb-8 bg-neon text-white py-4 font-mono text-center font-bold uppercase tracking-widest"
            >
                {t.navbar.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;