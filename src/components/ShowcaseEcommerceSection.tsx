import React from 'react';
import { motion } from 'motion/react';
import { ArtworkGraphic } from './ArtworkGraphic';
import { ECOMMERCE_CARDS } from '../data/mockArtworks';
import { Artwork } from '../types';

interface ShowcaseEcommerceSectionProps {
  onSelectArtwork: (art: Artwork) => void;
  onJoin: () => void;
}

export const ShowcaseEcommerceSection: React.FC<ShowcaseEcommerceSectionProps> = ({
  onSelectArtwork,
  onJoin,
}) => {
  return (
    <section id="ecommerce" className="py-24 md:py-32 overflow-hidden border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Value Prop */}
          <div className="lg:col-span-5 max-w-xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 font-semibold mb-3 block">
              E - COMMERCE
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-[52px] tracking-tight text-neutral-900 leading-[1.08] mb-6 text-balance">
              Showcase, Sell, <br />
              & acquire arts to <br />
              our marketplace.
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed">
              Dynamic community where artists and buyers seamlessly merge. ArtVision brings
              together creators and enthusiasts to share creativity, establish genuine ownership,
              and build enduring collections.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={onJoin}
                className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Join for $19.99
              </button>

              <a
                href="#cascade"
                className="px-5 py-3 rounded-full hover:bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Art Collage */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] flex items-center justify-center">
            {/* Tag @howard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-8 top-6 z-30"
            >
              <div className="relative bg-[#ef4444] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
                <span>@howard</span>
                <div className="absolute -bottom-1 left-3 w-2 h-2 bg-[#ef4444] rotate-45" />
              </div>
            </motion.div>

            {/* Tag @robin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute right-16 sm:right-28 top-28 sm:top-36 z-30"
            >
              <div className="relative bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
                <span>@robin</span>
                <div className="absolute -bottom-1 left-3 w-2 h-2 bg-neutral-900 rotate-45" />
              </div>
            </motion.div>

            {/* Card Collage Grid */}
            <div className="relative w-full max-w-lg h-full flex items-center justify-center">
              {/* Card 1: Record dark (left) */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
                onClick={() => onSelectArtwork(ECOMMERCE_CARDS[0])}
                className="absolute left-0 sm:left-4 top-14 w-44 sm:w-56 h-56 sm:h-72 rounded-2xl shadow-xl cursor-pointer transition-shadow"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <ArtworkGraphic type="record-dark" title="Bose & Bougel" />
              </motion.div>

              {/* Card 2: Summer 90s / let go (center top) */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
                onClick={() => onSelectArtwork(ECOMMERCE_CARDS[1])}
                className="absolute left-24 sm:left-36 top-4 w-40 sm:w-52 h-52 sm:h-68 rounded-2xl shadow-xl cursor-pointer z-10"
                style={{ transform: 'rotate(2deg)' }}
              >
                <ArtworkGraphic type="summer-90s" title="Summer Pop" />
              </motion.div>

              {/* Card 3: Green Graphic (center bottom) */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
                onClick={() => onSelectArtwork(ECOMMERCE_CARDS[2])}
                className="absolute right-12 sm:right-24 bottom-6 w-44 sm:w-56 h-56 sm:h-72 rounded-2xl shadow-2xl cursor-pointer z-20"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <ArtworkGraphic type="graphic-green" title="Art Ross" />
              </motion.div>

              {/* Card 4: Yellow pop (far right) */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
                onClick={() => onSelectArtwork(ECOMMERCE_CARDS[3])}
                className="absolute right-0 bottom-12 w-36 sm:w-44 h-48 sm:h-60 rounded-2xl shadow-lg cursor-pointer opacity-90 hidden sm:block"
                style={{ transform: 'rotate(6deg)' }}
              >
                <ArtworkGraphic type="yellow-pop" title="The Green Knight" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
