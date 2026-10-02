import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface MasterclassBannerProps {
  onWatch: () => void;
}

const MASTERCLASSES = [
  {
    id: 'class-1',
    instructor: 'BEATHA C. PHELAN',
    title: 'Gateway to artist people.',
    tag: '@beatha',
    theme: 'bg-[#ea580c]',
    accent: 'bg-orange-600',
    description: 'Learn the architectural principles of visual rhythm, curation, and color theory from internationally recognized creator Beatha C. Phelan.',
    type: 'model-coral',
  },
  {
    id: 'class-2',
    instructor: 'MARCUS VANCE',
    title: 'Brutalist Type & Form.',
    tag: '@marcus',
    theme: 'bg-[#0f172a]',
    accent: 'bg-slate-900',
    description: 'Master typography hierarchies, experimental poster composition, and digital print techniques.',
    type: 'green-knight',
  },
  {
    id: 'class-3',
    instructor: 'ELENA ROSTOVA',
    title: 'Generative Chroma & Code.',
    tag: '@elena',
    theme: 'bg-[#1e1b4b]',
    accent: 'bg-indigo-950',
    description: 'Bridging algorithmic generative mathematics with contemporary high-end museum exhibitions.',
    type: 'spectrum-wave',
  },
];

export const MasterclassBanner: React.FC<MasterclassBannerProps> = ({ onWatch }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggleState, setToggleState] = useState<'light' | 'dark'>('dark');

  const currentClass = MASTERCLASSES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? MASTERCLASSES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === MASTERCLASSES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      {/* Kicker & Heading */}
      <div className="mb-6">
        <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 font-semibold block mb-2">
          CLASS BY {currentClass.instructor}
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-neutral-900 text-balance">
          {currentClass.title}
        </h2>
      </div>

      {/* Panoramic Banner Card */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentClass.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`absolute inset-0 ${currentClass.theme} flex items-center justify-center overflow-hidden`}
          >
            {/* Visual Subject Graphic */}
            {currentClass.type === 'model-coral' ? (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background artistic texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

                {/* Stylized Editorial Model Illustration */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-8">
                  <div className="relative">
                    {/* Head / Hair */}
                    <div className="w-56 h-64 sm:w-64 sm:h-76 bg-[#261510] rounded-full mx-auto relative overflow-hidden shadow-2xl border-4 border-orange-200/20 flex flex-col items-center pt-10">
                      <div className="absolute -top-6 -left-6 w-36 h-36 bg-[#1a0e0b] rounded-full" />
                      <div className="absolute -top-6 -right-6 w-36 h-36 bg-[#1a0e0b] rounded-full" />

                      {/* Face skin */}
                      <div className="w-44 h-48 sm:w-52 sm:h-56 bg-[#f7b69a] rounded-full relative z-10 flex flex-col items-center pt-8 shadow-inner">
                        {/* Sunglasses */}
                        <div className="flex gap-2 sm:gap-3 items-center z-20">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-950 border-2 sm:border-3 border-amber-300 shadow-xl flex items-center justify-center">
                            <div className="w-5 h-1.5 bg-white/40 rounded-full -rotate-45" />
                          </div>
                          <div className="w-3 sm:w-4 h-1 bg-amber-300" />
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-950 border-2 sm:border-3 border-amber-300 shadow-xl flex items-center justify-center">
                            <div className="w-5 h-1.5 bg-white/40 rounded-full -rotate-45" />
                          </div>
                        </div>

                        {/* Lips */}
                        <div className="w-8 h-2.5 bg-rose-600 rounded-full mt-8 shadow-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 text-center text-white px-6 max-w-lg">
                <span className="text-xs font-mono tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">
                  CURATED MASTERCLASS
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                  {currentClass.title}
                </h3>
                <p className="text-sm text-neutral-200 leading-relaxed">{currentClass.description}</p>
              </div>
            )}

            {/* Top-Right Badge: @beatha */}
            <div className="absolute right-6 sm:right-10 top-6 sm:top-10 z-30">
              <div className="bg-white/90 backdrop-blur-md text-neutral-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5 cursor-pointer hover:bg-white transition-colors">
                <span>{currentClass.tag}</span>
              </div>
            </div>

            {/* Bottom-Left Controls: Toggle & Watch button */}
            <div className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 z-30 flex items-center gap-4">
              {/* Dual-state indicator toggle */}
              <div
                onClick={() => setToggleState(toggleState === 'light' ? 'dark' : 'light')}
                className="w-8 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 p-1 flex flex-col justify-between cursor-pointer transition-colors hover:bg-black/60"
                title="Toggle Mode"
              >
                <div
                  className={`w-6 h-6 rounded-full transition-all duration-200 ${
                    toggleState === 'dark' ? 'bg-black shadow-md' : 'bg-transparent'
                  }`}
                />
                <div
                  className={`w-6 h-6 rounded-full transition-all duration-200 ${
                    toggleState === 'light' ? 'bg-white shadow-md' : 'bg-transparent'
                  }`}
                />
              </div>

              {/* Watch pill button */}
              <button
                onClick={onWatch}
                className="px-5 py-2.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-xs sm:text-sm tracking-wide shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch</span>
              </button>
            </div>

            {/* Bottom-Right Carousel Navigation Buttons */}
            <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-10 z-30 flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Class"
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Class"
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-90 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
