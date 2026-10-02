import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArtworkGraphic } from './ArtworkGraphic';
import { VISION_PERSONAL_CARDS, VISION_BUSINESS_CARDS } from '../data/mockArtworks';
import { Artwork } from '../types';
import {
  PenTool,
  Lock,
  Box,
  Scissors,
  Star,
  Key,
  Camera,
  Flower2,
  Atom,
  Paintbrush,
  Plus,
} from 'lucide-react';

interface VisionSectionProps {
  onSelectArtwork: (art: Artwork) => void;
  onCreate: () => void;
}

const VISION_ICONS = [
  { id: 'pen', icon: PenTool, label: 'Drawing & Line' },
  { id: 'lock', icon: Lock, label: 'Vault & Provenance' },
  { id: 'box', icon: Box, label: '3D & Spatial' },
  { id: 'scissors', icon: Scissors, label: 'Cutout & Collage' },
  { id: 'star', icon: Star, label: 'Curated Picks' },
  { id: 'key', icon: Key, label: 'Private Access' },
  { id: 'camera', icon: Camera, label: '35mm Film' },
  { id: 'flower', icon: Flower2, label: 'Botanical Form' },
  { id: 'atom', icon: Atom, label: 'Generative Code' },
  { id: 'paint', icon: Paintbrush, label: 'Oil & Pigment' },
];

export const VisionSection: React.FC<VisionSectionProps> = ({ onSelectArtwork, onCreate }) => {
  const [activeTab, setActiveTab] = useState<'Personal' | 'Business'>('Personal');
  const [selectedIcon, setSelectedIcon] = useState('pen');

  const currentCards = activeTab === 'Personal' ? VISION_PERSONAL_CARDS : VISION_BUSINESS_CARDS;

  return (
    <section id="vision" className="py-24 md:py-36 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Copy, & Circular Icon Wheel */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-neutral-900 leading-[1.1] mb-6 text-balance">
              Our vision <br />
              for any art technology.
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed">
              Every piece of art tells a story. Echoes of Expression allows artists to showcase
              their personal journeys through their work, while empowering modern collectors with
              verifiable ownership and high-fidelity interaction.
            </p>

            <a
              href="#story-bento"
              className="inline-block text-xs sm:text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors mb-12"
            >
              Read more
            </a>

            {/* Circular Artistic Tool Icons Cluster */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto lg:mx-0 p-4 flex items-center justify-center">
              {/* Outer dashed guide circle */}
              <div className="absolute inset-4 rounded-full border border-dashed border-neutral-300 pointer-events-none" />

              {/* Center Hub */}
              <div className="w-14 h-14 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-lg z-10">
                <span className="font-display font-bold text-xs tracking-wider">PALLET</span>
              </div>

              {/* Orbiting Icons */}
              {VISION_ICONS.map((item, index) => {
                const total = VISION_ICONS.length;
                const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
                const radius = 95; // radius in px
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = selectedIcon === item.id;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIcon(item.id)}
                    aria-label={item.label}
                    title={item.label}
                    className={`absolute w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm ${
                      isSelected
                        ? 'bg-neutral-900 text-white scale-125 z-20 shadow-md ring-4 ring-neutral-200'
                        : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:scale-110 hover:border-neutral-400'
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tabbed Art Grid (Personal vs Business) */}
          <div className="lg:col-span-7 bg-[#fbfbfb] p-6 sm:p-8 rounded-3xl border border-neutral-200/80">
            {/* Tab Controls Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200/60 flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-neutral-200/70 p-1 rounded-full">
                <button
                  onClick={() => setActiveTab('Personal')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'Personal'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Personal
                </button>
                <button
                  onClick={() => setActiveTab('Business')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'Business'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Business
                </button>
              </div>

              {/* + Create Action */}
              <button
                onClick={onCreate}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create</span>
              </button>
            </div>

            {/* 6-Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <AnimatePresence mode="wait">
                {currentCards.map((card) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => onSelectArtwork(card)}
                    className="h-44 sm:h-52 rounded-xl shadow-xs overflow-hidden cursor-pointer relative group"
                  >
                    <ArtworkGraphic type={card.renderType} title={card.title} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5 text-white">
                      <div>
                        <span className="text-[9px] font-mono text-neutral-300 block">{card.price}</span>
                        <span className="font-display text-xs font-bold truncate block">{card.title}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
