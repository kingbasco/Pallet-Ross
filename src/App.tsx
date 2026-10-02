/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowcaseEcommerceSection } from './components/ShowcaseEcommerceSection';
import { MasterclassBanner } from './components/MasterclassBanner';
import { TrustedMarquee } from './components/TrustedMarquee';
import { CascadingDeckSection } from './components/CascadingDeckSection';
import { VisionSection } from './components/VisionSection';
import { CommunityWaveSection } from './components/CommunityWaveSection';
import { StoryBentoSection } from './components/StoryBentoSection';
import { MarketplaceCarousel } from './components/MarketplaceCarousel';
import { SpotlightArtistSection } from './components/SpotlightArtistSection';
import { PricingSection } from './components/PricingSection';
import { NeonRibbonSection } from './components/NeonRibbonSection';
import { SplitFeaturesSection } from './components/SplitFeaturesSection';
import { Footer } from './components/Footer';
import {
  ArtworkDetailModal,
  VideoModal,
  CheckoutModal,
  CreateStrategyModal,
} from './components/Modals';
import { Artwork, Creator, PricingPlan } from './types';
import { PRICING_PLANS } from './data/mockArtworks';

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  const handleOpenDefaultJoin = () => {
    // Open the $19.99 quarterly or annual plan
    const defaultPlan = PRICING_PLANS.find((p) => p.id === 'plan-annually') || PRICING_PLANS[1];
    setSelectedPlan(defaultPlan);
  };

  const handleSelectCreator = (creator: Creator) => {
    // Show details or sample artwork for selected creator
    setSelectedArtwork({
      id: creator.id,
      title: `${creator.name} Signature Series`,
      artist: creator.name,
      handle: creator.handle,
      price: '$350',
      category: creator.specialty,
      likes: 1240,
      renderType: 'blue-poster',
    });
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('footer');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbfbfb] text-[#111215] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenPricing={handleScrollToPricing}
        onOpenContact={handleScrollToContact}
        onOpenCreate={() => setIsStrategyModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onJoin={handleOpenDefaultJoin}
        />

        {/* Section 2: Showcase E-Commerce */}
        <ShowcaseEcommerceSection
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onJoin={handleOpenDefaultJoin}
        />

        {/* Section 3: Masterclass Banner ("Gateway to artist people.") */}
        <MasterclassBanner onWatch={() => setIsVideoModalOpen(true)} />

        {/* Section 4: Trusted by the best Marquee */}
        <TrustedMarquee />

        {/* Section 5: Cascading Deck / Interactive Perspective */}
        <CascadingDeckSection onSelectArtwork={(art) => setSelectedArtwork(art)} />

        {/* Section 6: Our Vision & Interactive Tool Wheel */}
        <VisionSection
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onCreate={() => setIsStrategyModalOpen(true)}
        />

        {/* Section 7: Community Wave ("You will find yourself among us") */}
        <CommunityWaveSection onSelectCreator={handleSelectCreator} />

        {/* Section 8: Story Bento Grid ("Every piece of art tells a story") */}
        <StoryBentoSection
          onPlayVideo={() => setIsVideoModalOpen(true)}
          onJoin={handleOpenDefaultJoin}
        />

        {/* Section 9: Marketplace for Creativity Carousel */}
        <MarketplaceCarousel
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onViewAll={() => {
            const el = document.getElementById('marketplace');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 10: Spotlight Featured Artist & Dock */}
        <SpotlightArtistSection />

        {/* Section 11: Membership / Pricing */}
        <PricingSection onSelectPlan={(plan) => setSelectedPlan(plan)} />

        {/* Section 12: Neon Marquee Ribbon */}
        <NeonRibbonSection />

        {/* Section 13: Split Features ("Meets new people" & "Archive of new arts") */}
        <SplitFeaturesSection
          onMeet={handleOpenDefaultJoin}
          onArchive={() => {
            const el = document.getElementById('marketplace');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPricing={handleScrollToPricing}
        onOpenContact={handleScrollToContact}
        onOpenCreate={() => setIsStrategyModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ArtworkDetailModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <CheckoutModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />

      <CreateStrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />
    </div>
  );
}
