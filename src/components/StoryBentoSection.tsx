import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowUpRight, Search } from 'lucide-react';
import { ArtworkGraphic } from './ArtworkGraphic';

interface StoryBentoSectionProps {
  onPlayVideo: () => void;
  onJoin: () => void;
}

export const StoryBentoSection: React.FC<StoryBentoSectionProps> = ({ onPlayVideo, onJoin }) => {
  return (
    <section id="story-bento" className="py-24 md:py-36 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full font-semibold inline-block mb-3">
            YOUR STORY TELLING
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-neutral-900 text-balance">
            Every piece of art tells a story
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Connect, Create, Commerce (Top Left, col-span-7) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-7 bg-[#fbfbfb] rounded-3xl p-8 border border-neutral-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex items-center justify-between z-10 mb-6">
              <button
                onClick={onPlayVideo}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-200 text-xs font-semibold shadow-xs transition-transform hover:scale-105 cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Play Video</span>
              </button>

              <div className="bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                <span>@robin</span>
              </div>
            </div>

            {/* Middle Artwork preview stack */}
            <div className="relative my-4 h-48 sm:h-56 flex items-center justify-center">
              <div
                className="w-40 sm:w-48 h-48 sm:h-56 rounded-2xl shadow-lg transform -rotate-6 transition-transform hover:rotate-0"
              >
                <ArtworkGraphic type="blue-poster" title="Prada Editorial" />
              </div>
              <div
                className="w-36 sm:w-44 h-44 sm:h-52 rounded-2xl shadow-md transform rotate-6 -ml-12 transition-transform hover:rotate-0"
              >
                <ArtworkGraphic type="record-dark" title="Vinyl" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="z-10 mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-neutral-200/60">
              <div>
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-1">
                  Connect, Create, Commerce
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
                  Offering buyers a chance to own a piece of that narrative through transparent auctions and instant settlement.
                </p>
              </div>
              <button
                onClick={onPlayVideo}
                className="text-xs font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600 whitespace-nowrap cursor-pointer"
              >
                How it works?
              </button>
            </div>
          </motion.div>

          {/* Bento Card 2: Where Art Breathes Commerce (Top Right, col-span-5) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-5 bg-[#1d4ed8] text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex justify-between items-start z-10 mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                DIGITAL SCULPT
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse" />
            </div>

            {/* Surreal graphic */}
            <div className="my-auto py-6 flex justify-center z-10">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-amber-300 rotate-45 scale-y-50" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-700 shadow-2xl flex items-center justify-center border-2 border-white/50">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-black flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white translate-x-0.5 -translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="z-10">
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Where Art Breathes Commerce
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-3">
                Artistic spirit with commercial viability, providing a high-trust platform where creativity transforms into legacy assets.
              </p>
              <a
                href="#marketplace"
                className="text-xs font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition-colors inline-flex items-center gap-1"
              >
                <span>Read more</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card 3: Spin Your Art into Gold (Bottom Left, col-span-7) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-7 bg-[#fef08a] rounded-3xl p-8 border border-amber-200 shadow-xs flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden"
          >
            {/* Pop Portrait Illustration */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-amber-300 border-2 border-neutral-900 p-2 relative shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-xl bg-gradient-to-tr from-rose-400 via-pink-400 to-amber-200 flex flex-col items-center justify-center p-3 text-center relative overflow-hidden">
                <span className="text-4xl mb-1">✨</span>
                <span className="font-display font-black text-xl text-neutral-950 uppercase leading-none">
                  POP GEN
                </span>
                <span className="text-[10px] font-mono font-bold text-neutral-800 mt-1">2024 DROP</span>
              </div>
            </div>

            {/* Description & CTA */}
            <div className="flex flex-col justify-between h-full text-neutral-950">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-neutral-950 text-amber-300 px-2 py-0.5 rounded font-bold inline-block mb-3">
                  CREATOR MONETIZATION
                </span>
                <h3 className="font-display font-bold text-2xl text-neutral-950 mb-2 leading-tight">
                  Spin Your Art into Gold
                </h3>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed mb-6">
                  Unleash your artistic potential, where innovation and creativity converge to build real, recurring collector revenue.
                </p>
              </div>

              <button
                onClick={onJoin}
                className="self-start px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold shadow-sm transition-all hover:scale-105 cursor-pointer"
              >
                Join us now
              </button>
            </div>
          </motion.div>

          {/* Bento Card 4: Personal Identity (Bottom Right, col-span-5) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-5 bg-[#141517] text-white rounded-3xl p-8 border border-neutral-800 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex justify-between items-start z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                PORTFOLIO
              </span>
              <button
                aria-label="Search Portfolios"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Center Graphic */}
            <div className="my-auto py-8 text-center z-10">
              <div className="inline-block p-4 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-inner">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
                  EXPRESSION REEL
                </span>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                  Personal Identity
                </h4>
                <p className="text-[11px] font-mono text-neutral-500 mt-1">Creative Portfolios Matte</p>
              </div>
            </div>

            <div className="z-10 flex justify-between items-baseline text-xs text-neutral-400 font-mono pt-4 border-t border-neutral-800">
              <span>Showcase your art</span>
              <span className="text-white font-bold">2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
