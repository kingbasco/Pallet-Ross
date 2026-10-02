import React from 'react';
import { TRUSTED_LOGOS } from '../data/mockArtworks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TrustedMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-[#fbfbfb] border-t border-b border-neutral-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-neutral-900 mb-2">
            Trusted by the best.
          </h3>
          <p className="text-sm text-neutral-500 max-w-lg leading-relaxed">
            Our growth hackers are experts in identifying and capitalizing on the most
            promising creative partnerships, galleries, and private collections worldwide.
          </p>
        </div>

        {/* Carousel controls indicator */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <button
            aria-label="Previous partner"
            className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            aria-label="Next partner"
            className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fbfbfb] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 md:gap-24 opacity-75 hover:opacity-100 transition-opacity">
          {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo, index) => (
            <div
              key={index}
              className={`text-neutral-700 hover:text-neutral-950 transition-colors select-none whitespace-nowrap ${logo.font}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
