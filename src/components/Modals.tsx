import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Heart, Share2, Play, Pause, Sparkles } from 'lucide-react';
import { Artwork, PricingPlan } from '../types';
import { ArtworkGraphic } from './ArtworkGraphic';

interface ArtworkDetailModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export const ArtworkDetailModal: React.FC<ArtworkDetailModalProps> = ({ artwork, onClose }) => {
  const [purchased, setPurchased] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-neutral-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-neutral-900/10 hover:bg-neutral-900/20 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Visual preview */}
            <div className="h-64 sm:h-auto min-h-[300px] p-6 bg-neutral-100 flex items-center justify-center">
              <div className="w-48 h-64 rounded-2xl shadow-xl overflow-hidden">
                <ArtworkGraphic type={artwork.renderType} title={artwork.title} />
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase bg-neutral-100 text-neutral-700 px-2.5 py-0.5 rounded-full font-bold">
                    {artwork.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">Verified Piece</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-neutral-900 mb-1">
                  {artwork.title}
                </h3>
                <p className="text-sm font-medium text-neutral-600 mb-4">by {artwork.artist} ({artwork.handle})</p>

                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Original certified digital edition registered on the Pallet Ross collective ledger.
                  Includes high-res print permissions and physical catalog token.
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl font-bold font-mono text-neutral-950">{artwork.price}</span>
                  <span className="text-xs text-neutral-400">USD (Instant Transfer)</span>
                </div>
              </div>

              <div>
                {purchased ? (
                  <div className="w-full py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Acquisition Successful!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPurchased(true)}
                      className="flex-1 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
                    >
                      Acquire Artwork
                    </button>
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`p-3 rounded-full border transition-colors cursor-pointer ${
                        liked
                          ? 'bg-rose-50 border-rose-200 text-rose-600'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                      aria-label="Like"
                    >
                      <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => navigator.clipboard?.writeText(window.location.href)}
                      className="p-3 rounded-full border border-neutral-200 text-neutral-600 hover:border-neutral-400 transition-colors cursor-pointer"
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-neutral-900 rounded-3xl max-w-3xl w-full aspect-video overflow-hidden shadow-2xl z-10 border border-white/10 flex flex-col justify-between p-6 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-300">
                MASTERCLASS REEL · 4K 60FPS
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close video"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Animated Center Playback State */}
          <div className="my-auto text-center flex flex-col items-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-lg mb-4"
            >
              {isPlaying ? <Pause className="w-7 h-7 text-white" /> : <Play className="w-7 h-7 text-white fill-current ml-1" />}
            </button>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Gateway to Artist People: Episode 01
            </h4>
            <p className="text-xs text-neutral-400 mt-1">Directed by Beatha C. Phelan · 24 min runtime</p>
          </div>

          {/* Progress Bar & Controls */}
          <div className="z-10 space-y-2">
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 w-1/3 rounded-full" />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>08:14</span>
              <span>24:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

interface CheckoutModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  if (!plan) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl z-10 border border-neutral-100"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {success ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl text-neutral-900 mb-2">Welcome to Pallet Ross!</h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                Your membership for the <strong className="text-neutral-900">{plan.name}</strong> tier is confirmed. Check your email for your invitation token.
              </p>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold block mb-1">
                MEMBERSHIP CHECKOUT
              </span>
              <h3 className="font-display font-bold text-2xl text-neutral-900 mb-1">
                {plan.name} Tier
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-bold text-3xl text-neutral-950">{plan.price}</span>
                <span className="text-xs text-neutral-500 font-medium">{plan.period}</span>
              </div>

              <div className="space-y-2 mb-6">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="artist@palletross.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  Confirm & Join Platform
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

interface CreateStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateStrategyModal: React.FC<CreateStrategyModalProps> = ({ isOpen, onClose }) => {
  const [style, setStyle] = useState('Contemporary Graphic Design');
  const [generated, setGenerated] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl z-10 border border-neutral-100"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">
              CURATION ENGINE
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl text-neutral-900 mb-2">
            Create Strategy
          </h3>
          <p className="text-xs text-neutral-600 mb-6">
            Generate an algorithmic exhibition schedule, collector tier targets, and edition size recommendation.
          </p>

          {!generated ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">
                  Artistic Medium / Genre
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                >
                  <option>Contemporary Graphic Design</option>
                  <option>3D Generative & Spatial</option>
                  <option>Analog 35mm Photography</option>
                  <option>Mixed Media & Collage</option>
                  <option>Streetwear & Merch Drops</option>
                </select>
              </div>

              <button
                onClick={() => setGenerated(true)}
                className="w-full py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
              >
                Synthesize Strategy
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
                <div className="font-bold text-neutral-900 flex justify-between">
                  <span>Target Edition:</span>
                  <span className="font-mono text-emerald-600">50 Units @ $240</span>
                </div>
                <div className="font-bold text-neutral-900 flex justify-between">
                  <span>Release Window:</span>
                  <span className="font-mono">Every 4th Thursday</span>
                </div>
                <div className="font-bold text-neutral-900 flex justify-between">
                  <span>Primary Collector Segment:</span>
                  <span className="font-mono">Berlin / NYC Galleries</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold"
              >
                Apply to My Profile
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
