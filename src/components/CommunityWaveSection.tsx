import React, { useState } from 'react';
import { COMMUNITY_AVATARS } from '../data/mockArtworks';
import { Creator } from '../types';

interface CommunityWaveSectionProps {
  onSelectCreator?: (creator: Creator) => void;
}

export const CommunityWaveSection: React.FC<CommunityWaveSectionProps> = ({ onSelectCreator }) => {
  const [activeCreator, setActiveCreator] = useState<Creator | null>(null);

  const topRow = COMMUNITY_AVATARS.slice(0, 6);
  const bottomRow = COMMUNITY_AVATARS.slice(6);

  return (
    <section className="py-24 md:py-36 bg-[#fbfbfb] overflow-hidden relative border-t border-neutral-100">
      {/* Top Arched Avatar Row */}
      <div className="relative w-full overflow-hidden mb-12">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 px-4">
          {[...topRow, ...topRow, ...topRow].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onMouseEnter={() => setActiveCreator(item)}
              onMouseLeave={() => setActiveCreator(null)}
              onClick={() => onSelectCreator && onSelectCreator(item)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-700 shadow-md flex items-center justify-center p-1 cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-xl hover:-translate-y-2 group shrink-0 relative"
            >
              <div
                className={`w-full h-full rounded-xl bg-gradient-to-br ${item.avatarBg} flex items-center justify-center text-white font-display font-bold text-lg sm:text-xl shadow-inner relative overflow-hidden`}
              >
                {/* Avatar Initial & Stylized Face Silhouette */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                <span className="relative z-10">{item.name.charAt(0)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Copy & Emblem */}
      <div className="max-w-2xl mx-auto px-6 text-center relative z-20 my-8">
        {/* Emblem */}
        <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-md">
          <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900 leading-[1.08] mb-4 text-balance">
          You will find yourself <br />
          among us
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
          Dive into a dynamic community where artists and buyers seamlessly merge to foster
          collaboration and mutual growth.
        </p>

        {/* Hovered Artist Pill Tooltip */}
        {activeCreator && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-medium shadow-lg animate-fade-in">
            <span className="text-emerald-400 font-semibold">{activeCreator.handle}</span>
            <span className="text-neutral-400">·</span>
            <span>{activeCreator.specialty}</span>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-300 font-mono text-[11px]">{activeCreator.followers} fans</span>
          </div>
        )}
      </div>

      {/* Bottom Arched Avatar Row (Opposite Direction) */}
      <div className="relative w-full overflow-hidden mt-12">
        <div className="animate-marquee-reverse flex items-center gap-6 sm:gap-8 px-4">
          {[...bottomRow, ...bottomRow, ...bottomRow].map((item, idx) => (
            <div
              key={`${item.id}-rev-${idx}`}
              onMouseEnter={() => setActiveCreator(item)}
              onMouseLeave={() => setActiveCreator(null)}
              onClick={() => onSelectCreator && onSelectCreator(item)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-neutral-800 to-neutral-700 shadow-md flex items-center justify-center p-1 cursor-pointer transition-all duration-300 hover:scale-115 hover:shadow-xl hover:translate-y-2 group shrink-0 relative"
            >
              <div
                className={`w-full h-full rounded-xl bg-gradient-to-br ${item.avatarBg} flex items-center justify-center text-white font-display font-bold text-lg sm:text-xl shadow-inner relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                <span className="relative z-10">{item.name.charAt(0)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
