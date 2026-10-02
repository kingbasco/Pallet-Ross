import React from 'react';
import { Box, Diamond, PenTool, Flower2, Pin, Atom, Target, Disc } from 'lucide-react';

export const NeonRibbonSection: React.FC = () => {
  const ribbonIcons = [
    { icon: Box, label: 'Cube' },
    { icon: Diamond, label: 'Diamond' },
    { icon: PenTool, label: 'Pen' },
    { icon: Flower2, label: 'Flower' },
    { icon: Pin, label: 'Pin' },
    { icon: Atom, label: 'Atom' },
    { icon: Target, label: 'Target' },
    { icon: Disc, label: 'Vinyl' },
  ];

  return (
    <section className="relative bg-[#ccff00] text-neutral-950 py-16 md:py-20 overflow-hidden select-none border-y border-neutral-900/10">
      {/* Dynamic Animated Marquee Text */}
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap mb-8 font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tighter uppercase">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span>Artists can ride</span>
            <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center text-xl shadow-md">
              ★
            </div>
            <span>Inspired by people</span>
            <div className="w-12 h-8 rounded-lg bg-neutral-950 text-amber-300 flex items-center justify-center text-xs font-mono font-bold shadow-md">
              2024
            </div>
            <span>New Art Platform</span>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg shadow-md">
              ✦
            </div>
          </div>
        ))}
      </div>

      {/* Floating Circular Line Icons Row */}
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
        {ribbonIcons.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 border-2 border-neutral-950 flex items-center justify-center text-neutral-950 shadow-md hover:scale-115 transition-transform cursor-pointer"
            >
              <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
