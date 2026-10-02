import React from 'react';
import { motion } from 'motion/react';
import { Compass, FolderArchive, ArrowRight } from 'lucide-react';

interface SplitFeaturesSectionProps {
  onMeet: () => void;
  onArchive: () => void;
}

export const SplitFeaturesSection: React.FC<SplitFeaturesSectionProps> = ({
  onMeet,
  onArchive,
}) => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Meets new people */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#831843] via-[#701a75] to-[#4a044e] text-white flex flex-col justify-between min-h-[460px] shadow-xl relative overflow-hidden group"
          >
            {/* Top row */}
            <div className="flex justify-between items-start z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Compass className="w-6 h-6 text-pink-300" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                COMMUNITY
              </span>
            </div>

            {/* Stylized model portrait graphic */}
            <div className="relative my-6 flex justify-center z-10">
              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-pink-500 to-amber-200 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#3b0764] flex items-center justify-center text-4xl shadow-inner">
                  👤
                </div>
              </div>
            </div>

            {/* Content & CTA */}
            <div className="z-10">
              <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-3">
                Meets new people
              </h3>
              <p className="text-sm text-pink-100/90 leading-relaxed mb-6 max-w-md">
                Creators and enthusiasts to share, discover, and purchase unique artworks with
                vibrant community salons and live critique sessions.
              </p>
              <button
                onClick={onMeet}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm shadow-md hover:bg-neutral-100 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Let&apos;s Meet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Card: Archive of new arts */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 sm:p-12 bg-[#f4f4f5] text-neutral-900 border border-neutral-200/80 flex flex-col justify-between min-h-[460px] shadow-sm relative overflow-hidden group"
          >
            {/* Top row */}
            <div className="flex justify-between items-start z-10">
              <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center shadow-xs">
                <FolderArchive className="w-6 h-6 text-neutral-800" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase bg-neutral-200 text-neutral-700 px-3 py-1 rounded-full">
                CATALOGUE
              </span>
            </div>

            {/* Stylized flower sculpture graphic */}
            <div className="relative my-6 flex justify-center z-10">
              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-400 via-rose-300 to-amber-200 p-1 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl shadow-inner">
                  🌸
                </div>
              </div>
            </div>

            {/* Content & CTA */}
            <div className="z-10">
              <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-neutral-900 mb-3">
                Archive of new arts
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-md">
                Canvas Carousel is the platform where artists can ride the wave of creativity,
                showcasing their work to a broad global audience of curators and collectors.
              </p>
              <button
                onClick={onArchive}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Archives</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
