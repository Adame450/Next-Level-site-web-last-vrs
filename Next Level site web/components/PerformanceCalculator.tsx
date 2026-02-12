import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface HardwareItem {
  id: string;
  name: string;
  score: number;
  type: 'cpu' | 'gpu' | 'ram';
}

// MASSIVE DATABASE EXPANSION
const HARDWARE_DB: HardwareItem[] = [
    // ================= CPU =================
    // --- INTEL 14th Gen ---
    { id: 'i9-14900ks', name: 'Intel Core i9 14900KS', score: 155, type: 'cpu' },
    { id: 'i9-14900k', name: 'Intel Core i9 14900K / KF', score: 150, type: 'cpu' },
    { id: 'i9-14900', name: 'Intel Core i9 14900 / F', score: 142, type: 'cpu' },
    { id: 'i7-14700k', name: 'Intel Core i7 14700K / KF', score: 135, type: 'cpu' },
    { id: 'i7-14700', name: 'Intel Core i7 14700 / F', score: 128, type: 'cpu' },
    { id: 'i5-14600k', name: 'Intel Core i5 14600K / KF', score: 115, type: 'cpu' },
    { id: 'i5-14500', name: 'Intel Core i5 14500', score: 105, type: 'cpu' },
    { id: 'i5-14400', name: 'Intel Core i5 14400 / F', score: 98, type: 'cpu' },
    { id: 'i3-14100', name: 'Intel Core i3 14100 / F', score: 85, type: 'cpu' },

    // --- INTEL 13th Gen ---
    { id: 'i9-13900ks', name: 'Intel Core i9 13900KS', score: 145, type: 'cpu' },
    { id: 'i9-13900k', name: 'Intel Core i9 13900K / KF', score: 140, type: 'cpu' },
    { id: 'i7-13700k', name: 'Intel Core i7 13700K / KF', score: 125, type: 'cpu' },
    { id: 'i5-13600k', name: 'Intel Core i5 13600K / KF', score: 108, type: 'cpu' },
    { id: 'i5-13500', name: 'Intel Core i5 13500', score: 100, type: 'cpu' },
    { id: 'i5-13400', name: 'Intel Core i5 13400 / F', score: 92, type: 'cpu' },
    { id: 'i3-13100', name: 'Intel Core i3 13100 / F', score: 80, type: 'cpu' },

    // --- INTEL 12th Gen ---
    { id: 'i9-12900ks', name: 'Intel Core i9 12900KS', score: 125, type: 'cpu' },
    { id: 'i9-12900k', name: 'Intel Core i9 12900K / KF', score: 120, type: 'cpu' },
    { id: 'i7-12700k', name: 'Intel Core i7 12700K / KF', score: 110, type: 'cpu' },
    { id: 'i5-12600k', name: 'Intel Core i5 12600K / KF', score: 95, type: 'cpu' },
    { id: 'i5-12400', name: 'Intel Core i5 12400 / F', score: 85, type: 'cpu' },
    { id: 'i3-12100', name: 'Intel Core i3 12100 / F', score: 75, type: 'cpu' },

    // --- INTEL 11th/10th/9th Gen ---
    { id: 'i9-11900k', name: 'Intel Core i9 11900K', score: 100, type: 'cpu' },
    { id: 'i7-11700k', name: 'Intel Core i7 11700K', score: 92, type: 'cpu' },
    { id: 'i5-11600k', name: 'Intel Core i5 11600K', score: 85, type: 'cpu' },
    { id: 'i5-11400', name: 'Intel Core i5 11400 / F', score: 78, type: 'cpu' },
    { id: 'i9-10900k', name: 'Intel Core i9 10900K', score: 95, type: 'cpu' },
    { id: 'i7-10700k', name: 'Intel Core i7 10700K', score: 88, type: 'cpu' },
    { id: 'i5-10600k', name: 'Intel Core i5 10600K', score: 80, type: 'cpu' },
    { id: 'i5-10400', name: 'Intel Core i5 10400 / F', score: 72, type: 'cpu' },
    { id: 'i9-9900k', name: 'Intel Core i9 9900K', score: 85, type: 'cpu' },
    { id: 'i7-9700k', name: 'Intel Core i7 9700K', score: 78, type: 'cpu' },
    { id: 'i5-9600k', name: 'Intel Core i5 9600K', score: 70, type: 'cpu' },
    { id: 'i7-8700k', name: 'Intel Core i7 8700K', score: 75, type: 'cpu' },

    // --- AMD RYZEN 9000 Series ---
    { id: 'r9-9950x', name: 'AMD Ryzen 9 9950X', score: 152, type: 'cpu' },
    { id: 'r9-9900x', name: 'AMD Ryzen 9 9900X', score: 145, type: 'cpu' },
    { id: 'r7-9700x', name: 'AMD Ryzen 7 9700X', score: 138, type: 'cpu' },
    { id: 'r5-9600x', name: 'AMD Ryzen 5 9600X', score: 125, type: 'cpu' },

    // --- AMD RYZEN 8000G (APU) ---
    { id: 'r7-8700g', name: 'AMD Ryzen 7 8700G', score: 115, type: 'cpu' },
    { id: 'r5-8600g', name: 'AMD Ryzen 5 8600G', score: 105, type: 'cpu' },
    { id: 'r5-8500g', name: 'AMD Ryzen 5 8500G', score: 95, type: 'cpu' },

    // --- AMD RYZEN 7000 Series ---
    { id: 'r9-7950x3d', name: 'AMD Ryzen 9 7950X3D', score: 148, type: 'cpu' },
    { id: 'r9-7950x', name: 'AMD Ryzen 9 7950X', score: 142, type: 'cpu' },
    { id: 'r9-7900x3d', name: 'AMD Ryzen 9 7900X3D', score: 138, type: 'cpu' },
    { id: 'r9-7900x', name: 'AMD Ryzen 9 7900X', score: 130, type: 'cpu' },
    { id: 'r7-7800x3d', name: 'AMD Ryzen 7 7800X3D', score: 146, type: 'cpu' },
    { id: 'r7-7700x', name: 'AMD Ryzen 7 7700X', score: 120, type: 'cpu' },
    { id: 'r7-7700', name: 'AMD Ryzen 7 7700', score: 115, type: 'cpu' },
    { id: 'r5-7600x', name: 'AMD Ryzen 5 7600X', score: 105, type: 'cpu' },
    { id: 'r5-7600', name: 'AMD Ryzen 5 7600', score: 100, type: 'cpu' },
    { id: 'r5-7500f', name: 'AMD Ryzen 5 7500F', score: 98, type: 'cpu' },

    // --- AMD RYZEN 5000 Series (X, G, X3D) ---
    { id: 'r7-5800x3d', name: 'AMD Ryzen 7 5800X3D', score: 118, type: 'cpu' },
    { id: 'r7-5700x3d', name: 'AMD Ryzen 7 5700X3D', score: 112, type: 'cpu' },
    { id: 'r9-5950x', name: 'AMD Ryzen 9 5950X', score: 110, type: 'cpu' },
    { id: 'r9-5900x', name: 'AMD Ryzen 9 5900X', score: 105, type: 'cpu' },
    { id: 'r7-5800x', name: 'AMD Ryzen 7 5800X', score: 95, type: 'cpu' },
    { id: 'r7-5700x', name: 'AMD Ryzen 7 5700X', score: 90, type: 'cpu' },
    { id: 'r7-5700g', name: 'AMD Ryzen 7 5700G (APU)', score: 88, type: 'cpu' },
    { id: 'r5-5600x', name: 'AMD Ryzen 5 5600X', score: 85, type: 'cpu' },
    { id: 'r5-5600', name: 'AMD Ryzen 5 5600', score: 82, type: 'cpu' },
    { id: 'r5-5600g', name: 'AMD Ryzen 5 5600G (APU)', score: 78, type: 'cpu' },
    { id: 'r5-5500', name: 'AMD Ryzen 5 5500', score: 72, type: 'cpu' },

    // --- AMD RYZEN 3000/2000 Series ---
    { id: 'r9-3950x', name: 'AMD Ryzen 9 3950X', score: 90, type: 'cpu' },
    { id: 'r9-3900x', name: 'AMD Ryzen 9 3900X', score: 85, type: 'cpu' },
    { id: 'r7-3800x', name: 'AMD Ryzen 7 3800X', score: 80, type: 'cpu' },
    { id: 'r7-3700x', name: 'AMD Ryzen 7 3700X', score: 78, type: 'cpu' },
    { id: 'r5-3600x', name: 'AMD Ryzen 5 3600X', score: 72, type: 'cpu' },
    { id: 'r5-3600', name: 'AMD Ryzen 5 3600', score: 70, type: 'cpu' },
    { id: 'r5-3400g', name: 'AMD Ryzen 5 3400G', score: 60, type: 'cpu' },
    { id: 'r3-3300x', name: 'AMD Ryzen 3 3300X', score: 65, type: 'cpu' },
    { id: 'r3-3200g', name: 'AMD Ryzen 3 3200G', score: 50, type: 'cpu' },
    { id: 'r7-2700x', name: 'AMD Ryzen 7 2700X', score: 68, type: 'cpu' },
    { id: 'r5-2600x', name: 'AMD Ryzen 5 2600X', score: 62, type: 'cpu' },

    // ================= GPU =================
    // --- NVIDIA RTX 40 Series ---
    { id: 'rtx-4090', name: 'NVIDIA GeForce RTX 4090', score: 210, type: 'gpu' },
    { id: 'rtx-4080-super', name: 'NVIDIA GeForce RTX 4080 SUPER', score: 185, type: 'gpu' },
    { id: 'rtx-4080', name: 'NVIDIA GeForce RTX 4080', score: 180, type: 'gpu' },
    { id: 'rtx-4070ti-super', name: 'NVIDIA GeForce RTX 4070 Ti SUPER', score: 165, type: 'gpu' },
    { id: 'rtx-4070ti', name: 'NVIDIA GeForce RTX 4070 Ti', score: 155, type: 'gpu' },
    { id: 'rtx-4070-super', name: 'NVIDIA GeForce RTX 4070 SUPER', score: 145, type: 'gpu' },
    { id: 'rtx-4070', name: 'NVIDIA GeForce RTX 4070', score: 135, type: 'gpu' },
    { id: 'rtx-4060ti-16gb', name: 'NVIDIA GeForce RTX 4060 Ti 16GB', score: 115, type: 'gpu' },
    { id: 'rtx-4060ti', name: 'NVIDIA GeForce RTX 4060 Ti 8GB', score: 112, type: 'gpu' },
    { id: 'rtx-4060', name: 'NVIDIA GeForce RTX 4060', score: 98, type: 'gpu' },

    // --- NVIDIA RTX 30 Series ---
    { id: 'rtx-3090ti', name: 'NVIDIA GeForce RTX 3090 Ti', score: 160, type: 'gpu' },
    { id: 'rtx-3090', name: 'NVIDIA GeForce RTX 3090', score: 150, type: 'gpu' },
    { id: 'rtx-3080ti', name: 'NVIDIA GeForce RTX 3080 Ti', score: 145, type: 'gpu' },
    { id: 'rtx-3080-12gb', name: 'NVIDIA GeForce RTX 3080 12GB', score: 140, type: 'gpu' },
    { id: 'rtx-3080', name: 'NVIDIA GeForce RTX 3080 10GB', score: 135, type: 'gpu' },
    { id: 'rtx-3070ti', name: 'NVIDIA GeForce RTX 3070 Ti', score: 120, type: 'gpu' },
    { id: 'rtx-3070', name: 'NVIDIA GeForce RTX 3070', score: 115, type: 'gpu' },
    { id: 'rtx-3060ti', name: 'NVIDIA GeForce RTX 3060 Ti', score: 105, type: 'gpu' },
    { id: 'rtx-3060', name: 'NVIDIA GeForce RTX 3060 12GB', score: 90, type: 'gpu' },
    { id: 'rtx-3050', name: 'NVIDIA GeForce RTX 3050', score: 65, type: 'gpu' },

    // --- NVIDIA RTX 20 Series ---
    { id: 'rtx-2080ti', name: 'NVIDIA GeForce RTX 2080 Ti', score: 110, type: 'gpu' },
    { id: 'rtx-2080-super', name: 'NVIDIA GeForce RTX 2080 SUPER', score: 100, type: 'gpu' },
    { id: 'rtx-2080', name: 'NVIDIA GeForce RTX 2080', score: 95, type: 'gpu' },
    { id: 'rtx-2070-super', name: 'NVIDIA GeForce RTX 2070 SUPER', score: 90, type: 'gpu' },
    { id: 'rtx-2070', name: 'NVIDIA GeForce RTX 2070', score: 85, type: 'gpu' },
    { id: 'rtx-2060-super', name: 'NVIDIA GeForce RTX 2060 SUPER', score: 80, type: 'gpu' },
    { id: 'rtx-2060', name: 'NVIDIA GeForce RTX 2060', score: 70, type: 'gpu' },

    // --- NVIDIA GTX 16 & 10 Series ---
    { id: 'gtx-1660ti', name: 'NVIDIA GTX 1660 Ti', score: 68, type: 'gpu' },
    { id: 'gtx-1660-super', name: 'NVIDIA GTX 1660 SUPER', score: 65, type: 'gpu' },
    { id: 'gtx-1660', name: 'NVIDIA GTX 1660', score: 60, type: 'gpu' },
    { id: 'gtx-1650-super', name: 'NVIDIA GTX 1650 SUPER', score: 55, type: 'gpu' },
    { id: 'gtx-1650', name: 'NVIDIA GTX 1650 / G6', score: 45, type: 'gpu' },
    { id: 'gtx-1080ti', name: 'NVIDIA GTX 1080 Ti', score: 90, type: 'gpu' },
    { id: 'gtx-1080', name: 'NVIDIA GTX 1080', score: 75, type: 'gpu' },
    { id: 'gtx-1070ti', name: 'NVIDIA GTX 1070 Ti', score: 70, type: 'gpu' },
    { id: 'gtx-1070', name: 'NVIDIA GTX 1070', score: 65, type: 'gpu' },
    { id: 'gtx-1060-6gb', name: 'NVIDIA GTX 1060 6GB', score: 55, type: 'gpu' },
    { id: 'gtx-1060-3gb', name: 'NVIDIA GTX 1060 3GB', score: 50, type: 'gpu' },
    { id: 'gtx-1050ti', name: 'NVIDIA GTX 1050 Ti', score: 35, type: 'gpu' },
    { id: 'titan-xp', name: 'NVIDIA TITAN Xp', score: 95, type: 'gpu' },

    // --- AMD RADEON RX 7000 Series ---
    { id: 'rx-7900xtx', name: 'AMD Radeon RX 7900 XTX', score: 175, type: 'gpu' },
    { id: 'rx-7900xt', name: 'AMD Radeon RX 7900 XT', score: 160, type: 'gpu' },
    { id: 'rx-7900gre', name: 'AMD Radeon RX 7900 GRE', score: 145, type: 'gpu' },
    { id: 'rx-7800xt', name: 'AMD Radeon RX 7800 XT', score: 130, type: 'gpu' },
    { id: 'rx-7700xt', name: 'AMD Radeon RX 7700 XT', score: 115, type: 'gpu' },
    { id: 'rx-7600xt', name: 'AMD Radeon RX 7600 XT', score: 95, type: 'gpu' },
    { id: 'rx-7600', name: 'AMD Radeon RX 7600', score: 85, type: 'gpu' },

    // --- AMD RADEON RX 6000 Series ---
    { id: 'rx-6950xt', name: 'AMD Radeon RX 6950 XT', score: 140, type: 'gpu' },
    { id: 'rx-6900xt', name: 'AMD Radeon RX 6900 XT', score: 135, type: 'gpu' },
    { id: 'rx-6800xt', name: 'AMD Radeon RX 6800 XT', score: 120, type: 'gpu' },
    { id: 'rx-6800', name: 'AMD Radeon RX 6800', score: 110, type: 'gpu' },
    { id: 'rx-6750xt', name: 'AMD Radeon RX 6750 XT', score: 100, type: 'gpu' },
    { id: 'rx-6700xt', name: 'AMD Radeon RX 6700 XT', score: 95, type: 'gpu' },
    { id: 'rx-6650xt', name: 'AMD Radeon RX 6650 XT', score: 80, type: 'gpu' },
    { id: 'rx-6600xt', name: 'AMD Radeon RX 6600 XT', score: 75, type: 'gpu' },
    { id: 'rx-6600', name: 'AMD Radeon RX 6600', score: 70, type: 'gpu' },
    { id: 'rx-6500xt', name: 'AMD Radeon RX 6500 XT', score: 45, type: 'gpu' },

    // --- AMD RADEON RX 5000 & VEGA Series ---
    { id: 'radeon-vii', name: 'AMD Radeon VII', score: 90, type: 'gpu' },
    { id: 'rx-vega-64', name: 'AMD Radeon RX Vega 64', score: 80, type: 'gpu' },
    { id: 'rx-vega-56', name: 'AMD Radeon RX Vega 56', score: 72, type: 'gpu' },
    { id: 'rx-5700xt', name: 'AMD Radeon RX 5700 XT', score: 85, type: 'gpu' },
    { id: 'rx-5700', name: 'AMD Radeon RX 5700', score: 78, type: 'gpu' },
    { id: 'rx-5600xt', name: 'AMD Radeon RX 5600 XT', score: 68, type: 'gpu' },
    { id: 'rx-5500xt', name: 'AMD Radeon RX 5500 XT', score: 55, type: 'gpu' },
    { id: 'rx-590', name: 'AMD Radeon RX 590', score: 50, type: 'gpu' },
    { id: 'rx-580', name: 'AMD Radeon RX 580', score: 45, type: 'gpu' },
    { id: 'rx-570', name: 'AMD Radeon RX 570', score: 40, type: 'gpu' },

    // --- INTEGRATED GRAPHICS & INTEL ARC ---
    { id: 'arc-a770', name: 'Intel Arc A770 16GB', score: 95, type: 'gpu' },
    { id: 'arc-a750', name: 'Intel Arc A750', score: 85, type: 'gpu' },
    { id: 'arc-a580', name: 'Intel Arc A580', score: 70, type: 'gpu' },
    { id: 'vega-11', name: 'AMD Radeon Vega 11 (iGPU)', score: 30, type: 'gpu' },
    { id: 'vega-8', name: 'AMD Radeon Vega 8 (iGPU)', score: 25, type: 'gpu' },
    { id: 'vega-7', name: 'AMD Radeon Vega 7 (iGPU)', score: 22, type: 'gpu' },
    { id: 'uhd-770', name: 'Intel UHD Graphics 770', score: 20, type: 'gpu' },

    // ================= RAM =================
    { id: 'ddr5-8000', name: 'DDR5 8000MHz+ (XOC)', score: 70, type: 'ram' },
    { id: 'ddr5-7600', name: 'DDR5 7600MHz', score: 65, type: 'ram' },
    { id: 'ddr5-7200', name: 'DDR5 7200MHz', score: 62, type: 'ram' },
    { id: 'ddr5-6400', name: 'DDR5 6400MHz', score: 58, type: 'ram' },
    { id: 'ddr5-6000', name: 'DDR5 6000MHz (Sweet Spot)', score: 55, type: 'ram' },
    { id: 'ddr5-5600', name: 'DDR5 5600MHz', score: 50, type: 'ram' },
    { id: 'ddr5-5200', name: 'DDR5 5200MHz', score: 45, type: 'ram' },
    { id: 'ddr5-4800', name: 'DDR5 4800MHz', score: 40, type: 'ram' },
    { id: 'ddr4-4800', name: 'DDR4 4800MHz+ (Gear 2)', score: 52, type: 'ram' },
    { id: 'ddr4-4400', name: 'DDR4 4400MHz (B-Die)', score: 50, type: 'ram' },
    { id: 'ddr4-4000', name: 'DDR4 4000MHz', score: 48, type: 'ram' },
    { id: 'ddr4-3600', name: 'DDR4 3600MHz (Sweet Spot)', score: 45, type: 'ram' },
    { id: 'ddr4-3200', name: 'DDR4 3200MHz', score: 40, type: 'ram' },
    { id: 'ddr4-3000', name: 'DDR4 3000MHz', score: 35, type: 'ram' },
    { id: 'ddr4-2933', name: 'DDR4 2933MHz', score: 32, type: 'ram' },
    { id: 'ddr4-2666', name: 'DDR4 2666MHz', score: 28, type: 'ram' },
    { id: 'ddr4-2400', name: 'DDR4 2400MHz', score: 25, type: 'ram' },
    { id: 'ddr4-2133', name: 'DDR4 2133MHz', score: 20, type: 'ram' },
    { id: 'ddr3-1866', name: 'DDR3 1866MHz', score: 15, type: 'ram' },
    { id: 'ddr3-1600', name: 'DDR3 1600MHz', score: 12, type: 'ram' },
];

const SearchInput: React.FC<{
  label: string;
  type: 'cpu' | 'gpu' | 'ram';
  onSelect: (item: HardwareItem | null) => void;
  placeholder?: string;
}> = ({ label, type, onSelect, placeholder }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HardwareItem | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Filter items
  const filtered = HARDWARE_DB.filter(
    item => item.type === type && item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item: HardwareItem) => {
    setQuery(item.name);
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  const handleClear = () => {
      setQuery('');
      setSelectedItem(null);
      onSelect(null);
  }

  return (
    <div className="relative mb-6" ref={wrapperRef}>
      <label className="block text-xs font-mono text-neon mb-2 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            if (e.target.value === '') {
                setSelectedItem(null);
                onSelect(null);
            }
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder || "Type to search..."}
          className={`w-full bg-black border p-4 font-mono text-sm outline-none transition-all
            ${selectedItem ? 'border-neon text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]' : 'border-white/10 text-gray-300 focus:border-neon/50'}`}
        />
        
        {/* Status Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            {selectedItem ? (
                <span className="text-neon">✔</span>
            ) : (
                <span className="text-gray-600 animate-pulse">_</span>
            )}
        </div>
        
        {/* Clear Button */}
        {query && !selectedItem && (
             <button onClick={handleClear} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xs">
                 CLR
             </button>
        )}

        {/* Suggestions Dropdown */}
        <AnimatePresence>
          {isOpen && query.length > 0 && !selectedItem && filtered.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 left-0 right-0 mt-1 bg-[#0a0a0a] border border-grid max-h-60 overflow-y-auto custom-scrollbar shadow-xl"
            >
              {filtered.map(item => (
                <li
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-3 hover:bg-white/10 cursor-pointer font-mono text-xs text-gray-300 border-b border-white/5 last:border-0 flex justify-between"
                >
                  <span>{item.name}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- REALISTIC LIVE FPS COMPONENT ---
const LiveFpsBar: React.FC<{
  targetFps: number;
  label: string;
  isOptimized?: boolean;
}> = ({ targetFps, label, isOptimized }) => {
  const [currentFps, setCurrentFps] = useState(targetFps);

  useEffect(() => {
    // Fluctuating FPS effect
    const interval = setInterval(() => {
        // Variance: Stock = wide fluctuation (15), Optimized = slight fluctuation (5) to show life
        const variance = isOptimized ? 5 : 20; 
        const offset = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
        setCurrentFps(targetFps + offset);
    }, 80); // Fast updates (80ms) for real-time feel

    return () => clearInterval(interval);
  }, [targetFps, isOptimized]);

  return (
    <div>
        <div className="flex justify-between text-xs font-mono mb-2">
            <span className={isOptimized ? "text-neon font-bold flex items-center gap-2" : "text-gray-400"}>
                {label} {isOptimized && <span className="px-1 py-0.5 bg-neon text-white text-[8px]">PRO</span>}
            </span>
            <span className={isOptimized ? "text-neon text-xl font-bold min-w-[80px] text-right" : "text-gray-400 min-w-[80px] text-right"}>
                {currentFps} FPS
            </span>
        </div>
        <div className={`w-full h-${isOptimized ? '10' : '8'} bg-gray-900 border ${isOptimized ? 'border-neon/30' : 'border-white/10'} relative overflow-hidden ${isOptimized ? 'shadow-[0_0_20px_rgba(139,92,246,0.1)]' : ''}`}>
            {!isOptimized && (
                 <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#fff_5px,#fff_10px)]"></div>
            )}
            <motion.div 
                animate={{ width: `${(currentFps / 400) * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`h-full ${isOptimized ? 'bg-neon relative' : 'bg-gray-600'}`}
            >
                {isOptimized && <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white/50 to-transparent"></div>}
            </motion.div>
        </div>
        {isOptimized && (
            <div className="mt-2 flex justify-between font-mono text-[10px] text-gray-500">
                <span>AUTO BIOS + SCRIPT</span>
                <span className="text-acid">+STABILITY</span>
            </div>
        )}
    </div>
  );
};

const PerformanceCalculator: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [cpu, setCpu] = useState<HardwareItem | null>(null);
  const [gpu, setGpu] = useState<HardwareItem | null>(null);
  const [ram, setRam] = useState<HardwareItem | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ baseFps: number; optFps: number; gain: number } | null>(null);

  const handleAnalyze = () => {
    if (!cpu || !gpu || !ram) return;
    
    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      // Algorithm
      const basePerformance = (cpu.score * 0.35) + (gpu.score * 0.55) + (ram.score * 0.1);
      
      // Base FPS (Competitive Settings)
      const baseFps = Math.round(basePerformance * 2.5); 
      
      // Fixed Logic: Gain is roughly 65 FPS +/- variance based on hardware power
      const rawFpsGain = 65 + (Math.random() * 10 - 5);
      
      const optFps = Math.round(baseFps + rawFpsGain);
      
      setResult({
        baseFps,
        optFps,
        gain: Math.round(rawFpsGain)
      });
      setIsAnalyzing(false);
    }, 2000); 
  };

  const reset = () => {
      setResult(null);
      setIsAnalyzing(false);
      setCpu(null);
      setGpu(null);
      setRam(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
        >
            <div className="absolute inset-0" onClick={onClose}></div>
            
            <motion.div 
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                className="relative w-full max-w-2xl bg-[#050505] border border-grid shadow-[0_0_100px_rgba(139,92,246,0.1)] flex flex-col max-h-[95vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-grid/30 p-6 border-b border-grid flex justify-between items-center shrink-0">
                    <h3 className="font-display text-white text-xl tracking-wide flex items-center gap-2">
                        <span className="text-neon">///</span> {t.calculator.title}
                    </h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-white font-mono text-2xl transition-colors">&times;</button>
                </div>

                <div className="p-8 relative overflow-y-auto custom-scrollbar">
                    
                    {!result && !isAnalyzing && (
                        <div className="relative z-10 flex flex-col">
                            <p className="font-mono text-gray-500 text-xs mb-8 border-l-2 border-neon pl-4">
                                {t.calculator.subtitle}
                            </p>
                            
                            <SearchInput 
                                label={t.calculator.select_cpu} 
                                type="cpu" 
                                onSelect={setCpu} 
                                placeholder="ex: i9 14900k, Ryzen 7 7800X3D..." 
                            />
                            
                            <SearchInput 
                                label={t.calculator.select_gpu} 
                                type="gpu" 
                                onSelect={setGpu} 
                                placeholder="ex: RTX 4070 SUPER, RX 7900 XT..." 
                            />
                            
                            <SearchInput 
                                label={t.calculator.select_ram} 
                                type="ram" 
                                onSelect={setRam} 
                                placeholder="ex: DDR5 6000MHz, DDR4 3600..." 
                            />

                            <button 
                                onClick={handleAnalyze}
                                disabled={!cpu || !gpu || !ram}
                                className={`mt-6 w-full py-5 font-bold font-display text-lg uppercase tracking-widest transition-all
                                    ${(!cpu || !gpu || !ram) 
                                        ? 'bg-white/5 text-gray-600 cursor-not-allowed' 
                                        : 'bg-neon text-white hover:bg-white hover:text-black shadow-[0_0_30px_rgba(139,92,246,0.4)]'}
                                `}
                            >
                                {t.calculator.analyze_btn}
                            </button>
                        </div>
                    )}

                    {isAnalyzing && (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-full h-1 bg-gray-800 mb-8 overflow-hidden relative">
                                <motion.div 
                                    className="absolute top-0 left-0 h-full bg-neon"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                ></motion.div>
                            </div>
                            <div className="font-mono text-neon text-sm animate-pulse tracking-widest">
                                {t.calculator.analyzing}
                            </div>
                            <div className="mt-2 font-mono text-[10px] text-gray-500">
                                OPTIMIZING KERNEL THREADS...
                            </div>
                        </div>
                    )}

                    {result && (
                         <div className="relative z-10">
                            {/* Comparison Bar Chart */}
                            <div className="mb-12 space-y-8">
                                {/* BEFORE */}
                                <LiveFpsBar 
                                    targetFps={result.baseFps} 
                                    label={t.calculator.before} 
                                    isOptimized={false} 
                                />

                                {/* AFTER */}
                                <LiveFpsBar 
                                    targetFps={result.optFps} 
                                    label={t.calculator.after} 
                                    isOptimized={true} 
                                />
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white/5 border-l-2 border-neon">
                                    <div className="text-gray-400 text-[10px] font-mono mb-1">{t.calculator.gain}</div>
                                    <div className="text-3xl font-display text-white">+{result.gain} <span className="text-sm text-gray-500">FPS</span></div>
                                </div>
                                <div className="p-4 bg-white/5 border-l-2 border-acid">
                                    <div className="text-gray-400 text-[10px] font-mono mb-1">{t.calculator.latency_est}</div>
                                    <div className="text-3xl font-display text-white">STABLE</div>
                                </div>
                            </div>

                            <a href="https://discord.gg/8rtPcvAbUd" target="_blank" className="block w-full py-4 bg-neon text-white font-mono text-sm font-bold text-center hover:bg-white hover:text-black transition-all">
                                {t.navbar.cta}
                            </a>
                            
                            <button onClick={reset} className="block w-full text-center mt-4 text-gray-500 hover:text-white text-xs font-mono">
                                RESET SIMULATION
                            </button>
                         </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceCalculator;