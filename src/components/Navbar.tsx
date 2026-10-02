import React, { useState, useEffect } from 'react';
import { Sparkles, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPricing?: () => void;
  onOpenContact?: () => void;
  onOpenCreate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPricing, onOpenContact, onOpenCreate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-neutral-200/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-md bg-emerald-400/20 text-emerald-600 flex items-center justify-center transition-transform group-hover:rotate-45">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-neutral-900">
            Pallet Ross
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-neutral-600">
          <a
            href="#hero"
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Get Started
          </a>

          <button
            onClick={onOpenCreate}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-colors cursor-pointer text-[13px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
            <span>Create strategy</span>
          </button>

          <a
            href="#pricing"
            onClick={(e) => {
              if (onOpenPricing) {
                e.preventDefault();
                onOpenPricing();
              }
            }}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Pricing
          </a>

          <a
            href="#footer"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Contact
          </a>

          <a
            href="#vision"
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Solution
          </a>

          <a
            href="#ecommerce"
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            E-Commerce
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="User Account"
            onClick={onOpenContact}
            className="w-9 h-9 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-all cursor-pointer shadow-2xs hover:scale-105"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-neutral-200 px-6 py-6 shadow-xl space-y-4">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 hover:text-neutral-950"
          >
            Get Started
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenCreate) onOpenCreate();
            }}
            className="flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-950"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Create strategy
          </button>
          <a
            href="#pricing"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenPricing) onOpenPricing();
            }}
            className="block text-sm font-medium text-neutral-800 hover:text-neutral-950"
          >
            Pricing
          </a>
          <a
            href="#ecommerce"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 hover:text-neutral-950"
          >
            E-Commerce
          </a>
          <a
            href="#vision"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-800 hover:text-neutral-950"
          >
            Solution
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            className="block text-sm font-medium text-neutral-800 hover:text-neutral-950"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
