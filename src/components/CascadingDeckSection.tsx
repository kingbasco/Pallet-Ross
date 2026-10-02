import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArtworkGraphic } from './ArtworkGraphic';
import { CASCADE_CARDS } from '../data/mockArtworks';
import { Artwork } from '../types';
import { Layers, Grid3X3, AlignJustify } from 'lucide-react';

interface CascadingDeckSectionProps {
  onSelectArtwork: (art: Artwork) => void;
}

export const CascadingDeckSection: React.FC<CascadingDeckSectionProps> = ({ onSelectArtwork }) => {
  const [viewMode, setViewMode] = useState<'stack' | 'cascade' | 'grid'>('cascade');

  return (
    <section id="cascade" className="py-24 md:py-36 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Typographic Headline with Inline Pill Badges */}
        <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight text-neutral-900 leading-[1.25] text-balance max-w-4xl mx-auto mb-10">
          Whether you&apos;re an{' '}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white text-xs sm:text-sm rounded-full align-middle font-sans font-medium -translate-y-1 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            @alician
          </span>{' '}
          looking to sell your work / or buyer seeking{' '}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-neutral-950 text-xs sm:text-sm rounded-full align-middle font-sans font-semibold -translate-y-1 shadow-sm">
            <span>unique pieces</span>
          </span>{' '}
          connects you to world of creativity{' '}
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-neutral-200 text-neutral-800 text-xs sm:text-sm rounded-full align-middle font-sans -translate-y-1">
            <span>🛍️</span>
            <span>commerce.</span>
          </span>
        </h2>

        {/* View Mode Switcher Controls */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="bg-white border border-neutral-200 p-1 rounded-full shadow-sm flex items-center gap-1">
            <button
              onClick={() => setViewMode('stack')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                viewMode === 'stack'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Stack Deck</span>
            </button>
            <button
              onClick={() => setViewMode('cascade')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                viewMode === 'cascade'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <AlignJustify className="w-3.5 h-3.5" />
              <span>Cascade</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Area based on View Mode */}
        <div className="relative min-h-[550px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {viewMode === 'stack' && (
              <motion.div
                key="stack"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative w-64 h-84 flex items-center justify-center"
              >
                {CASCADE_CARDS.map((card, idx) => {
                  const rot = (idx - 2.5) * 5;
                  const offsetY = idx * 6;
                  return (
                    <motion.div
                      key={card.id}
                      whileHover={{ scale: 1.08, zIndex: 50, rotate: 0 }}
                      onClick={() => onSelectArtwork(card)}
                      className="absolute w-56 h-76 rounded-2xl shadow-xl cursor-pointer"
                      style={{
                        transform: `rotate(${rot}deg) translateY(${offsetY}px)`,
                        zIndex: idx + 10,
                      }}
                    >
                      <ArtworkGraphic type={card.renderType} title={card.title} />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {viewMode === 'cascade' && (
              <motion.div
                key="cascade"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl mx-auto"
              >
                {/* Asymmetric cascading stairs layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Marquee Highlight Card with Text */}
                  <div className="md:col-span-5 text-left bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-between h-[480px]">
                    <div>
                      <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 font-bold block mb-2">
                        CURATED ARCHIVE
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 mb-3">
                        Where Art Meets Market
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        Allowing artists to showcase their work and buyers to find unique, inspiring
                        pieces without intermediary commissions or friction.
                      </p>
                    </div>

                    {/* Preview Graphic in card */}
                    <div
                      onClick={() => onSelectArtwork(CASCADE_CARDS[0])}
                      className="w-full h-56 rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-transform"
                    >
                      <ArtworkGraphic type={CASCADE_CARDS[0].renderType} title={CASCADE_CARDS[0].title} />
                    </div>
                  </div>

                  {/* Right Column: Cascading Diagonal Stream of Art Cards */}
                  <div className="md:col-span-7 grid grid-cols-2 gap-5">
                    {CASCADE_CARDS.slice(1).map((card, index) => (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        onClick={() => onSelectArtwork(card)}
                        className="h-64 sm:h-72 rounded-2xl shadow-md overflow-hidden cursor-pointer relative group"
                      >
                        <ArtworkGraphic type={card.renderType} title={card.title} />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-left">
                          <div>
                            <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300">
                              {card.handle}
                            </span>
                            <h4 className="font-display font-bold text-sm text-white line-clamp-1">
                              {card.title}
                            </h4>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {viewMode === 'grid' && (
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto"
              >
                {CASCADE_CARDS.map((card) => (
                  <motion.div
                    key={card.id}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => onSelectArtwork(card)}
                    className="h-68 sm:h-76 rounded-2xl shadow-md overflow-hidden cursor-pointer"
                  >
                    <ArtworkGraphic type={card.renderType} title={card.title} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
