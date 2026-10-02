import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ArtworkGraphic } from './ArtworkGraphic';

export const SpotlightArtistSection: React.FC = () => {
  const [likes, setLikes] = useState(1420);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  // Background artwork thumbnails for the gallery wall
  const bgThumbnails = [
    'summer-90s',
    'fleur-bike',
    'graphic-green',
    'yellow-pop',
    'blue-poster',
    'amnesia-dots',
    'spectrum-wave',
    'collage-class',
    'celebrates-party',
    'orange-staff',
    'green-knight',
    'fluffy-blue',
  ];

  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Floating App Icons Dock */}
        <div className="inline-flex items-center gap-3 p-2 bg-neutral-100 rounded-full mb-12 shadow-inner border border-neutral-200">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            ♫
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            Bē
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            ●
          </div>
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            ❖
          </div>
          <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            🏀
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            S
          </div>
        </div>

        {/* Gallery Wall with Dominant Center Feature Card */}
        <div className="relative max-w-5xl mx-auto min-h-[500px] sm:min-h-[560px] flex items-center justify-center">
          {/* Background Grid Wall */}
          <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 opacity-30 blur-[0.5px] pointer-events-none scale-95">
            {bgThumbnails.map((type, idx) => (
              <div key={idx} className="h-32 sm:h-36 rounded-xl overflow-hidden shadow-xs">
                <ArtworkGraphic type={type} />
              </div>
            ))}
          </div>

          {/* Centerpiece Spotlight Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative z-20 w-72 sm:w-88 md:w-96 h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#ea580c] to-[#9a3412] p-6 flex flex-col justify-between border-4 border-white/80"
          >
            {/* Top-Right Badge: @artist */}
            <div className="flex justify-end">
              <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-semibold px-3.5 py-1 rounded-full shadow-md">
                @artist
              </span>
            </div>

            {/* Stylized Silhouette Representation */}
            <div className="my-auto py-4 flex flex-col items-center">
              <div className="w-40 h-52 relative flex flex-col items-center">
                {/* Back silhouette & hair */}
                <div className="w-20 h-24 bg-neutral-950 rounded-full shadow-lg relative z-20">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full -top-3 left-4 absolute" />
                </div>
                {/* Orange-red backless gown */}
                <div className="w-28 h-36 bg-[#c2410c] -mt-10 rounded-t-3xl relative z-10 shadow-2xl flex flex-col items-center pt-4 border-t border-orange-400/40">
                  <div className="w-12 h-16 bg-[#e6a88b] rounded-b-full shadow-inner" />
                </div>
              </div>
            </div>

            {/* Floating Glass Info Bar */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3.5 flex items-center justify-between shadow-lg text-neutral-900">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                  TW
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm leading-tight text-neutral-900">
                    Trisha Woodward
                  </h4>
                  <span className="text-[11px] text-neutral-500 font-mono">from Artflow</span>
                </div>
              </div>

              {/* Functional Like Button */}
              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  hasLiked
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current text-white' : 'text-neutral-500'}`} />
                <span>{likes}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
