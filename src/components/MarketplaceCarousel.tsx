import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MARKETPLACE_ITEMS } from '../data/mockArtworks';
import { ArtworkGraphic } from './ArtworkGraphic';
import { Artwork } from '../types';

interface MarketplaceCarouselProps {
  onSelectArtwork: (art: Artwork) => void;
  onViewAll: () => void;
}

export const MarketplaceCarousel: React.FC<MarketplaceCarouselProps> = ({
  onSelectArtwork,
  onViewAll,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(MARKETPLACE_ITEMS.length - itemsPerPage, prev + 1));
  };

  const visibleItems = MARKETPLACE_ITEMS.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="marketplace" className="py-24 md:py-36 bg-[#fbfbfb] overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header & View All */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 font-semibold block mb-2">
              GET MORE CLOSER
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-neutral-900 mb-3">
              Marketplace for Creativity
            </h2>
            <p className="text-sm text-neutral-600 max-w-lg leading-relaxed">
              In the realm of Artnestia, creativity knows no bounds; this eternal marketplace
              celebrates the timeless nature and diverse expressions of contemporary art.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onViewAll}
              className="px-6 py-2.5 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              View All
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectArtwork(item)}
                className="group cursor-pointer"
              >
                {/* Artwork Card */}
                <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all">
                  <ArtworkGraphic type={item.renderType} title={item.title} />
                </div>

                {/* Info underneath */}
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-display font-bold text-neutral-900 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-neutral-500 text-[11px] font-mono">{item.handle}</span>
                  </div>
                  <span className="font-mono font-bold text-neutral-900">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination & Arrow Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-neutral-200/80">
          {/* Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous artworks"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-neutral-900 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= MARKETPLACE_ITEMS.length - itemsPerPage}
              aria-label="Next artworks"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-neutral-900 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: MARKETPLACE_ITEMS.length - itemsPerPage + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  startIndex === idx ? 'w-8 bg-neutral-900' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
