import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArtworkGraphic } from './ArtworkGraphic';
import { HERO_CARDS } from '../data/mockArtworks';
import { Artwork } from '../types';

interface HeroSectionProps {
  onSelectArtwork: (art: Artwork) => void;
  onJoin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectArtwork, onJoin }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Card fan offsets and rotations
  const fanAngles = [-18, -9, 0, 9, 18];
  const fanX = [-110, -55, 0, 55, 110];
  const fanY = [16, 4, 0, 4, 16];

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-neutral-200/40 via-neutral-100/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-neutral-900 leading-[1.06] text-balance max-w-4xl mx-auto"
        >
          A place to display your <br className="hidden sm:inline" />
          masterpiece.
        </motion.h1>

        {/* Fanned Card Deck Display */}
        <div className="relative mt-12 mb-10 h-72 sm:h-80 md:h-96 flex items-center justify-center">
          {/* Floating artist speech bubbles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute left-6 sm:left-16 md:left-24 top-8 sm:top-12 z-30"
          >
            <div className="relative bg-[#3b82f6] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>@colin</span>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-[#3b82f6] rotate-45" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute right-6 sm:right-16 md:right-24 top-10 sm:top-14 z-30"
          >
            <div className="relative bg-[#10b981] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>@andrea</span>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-[#10b981] rotate-45" />
            </div>
          </motion.div>

          {/* Cards Fan Container */}
          <div className="relative w-44 sm:w-52 md:w-60 h-64 sm:h-72 md:h-80 flex items-center justify-center">
            {HERO_CARDS.map((card, index) => {
              const isHovered = hoveredIndex === index;
              const angle = fanAngles[index] || 0;
              const posX = fanX[index] || 0;
              const posY = fanY[index] || 0;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 60, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: isHovered ? posY - 30 : posY,
                    x: isHovered ? posX * 1.15 : posX,
                    rotate: isHovered ? 0 : angle,
                    scale: isHovered ? 1.08 : 1,
                    zIndex: isHovered ? 40 : index + 10,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 22,
                    delay: index * 0.08,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => onSelectArtwork(card)}
                  className="absolute w-40 sm:w-48 md:w-56 h-56 sm:h-64 md:h-76 cursor-pointer drop-shadow-xl transition-shadow hover:drop-shadow-2xl"
                  style={{
                    transformOrigin: 'bottom center',
                  }}
                >
                  <ArtworkGraphic type={card.renderType} title={card.title} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Subtitle & Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto mb-8 font-normal leading-relaxed text-balance"
        >
          Artists can display their masterpieces, and buyers can discover and acquire
          unique works with proven provenance and direct creator support.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={onJoin}
            className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Join for $19.99
          </button>

          <a
            href="#ecommerce"
            className="px-6 py-3 rounded-full bg-transparent hover:bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
          >
            Read more
          </a>
        </motion.div>
      </div>
    </section>
  );
};
