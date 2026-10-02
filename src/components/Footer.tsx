import React from 'react';

interface FooterProps {
  onOpenPricing?: () => void;
  onOpenContact?: () => void;
  onOpenCreate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPricing,
  onOpenContact,
  onOpenCreate,
}) => {
  return (
    <footer id="footer" className="bg-[#fbfbfb] border-t border-neutral-200/80 pt-20 pb-12 text-neutral-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-emerald-400/20 text-emerald-600 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-neutral-900">Pallet Ross</span>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              In the realm of Artnestia, creativity knows no bounds. This eternal marketplace
              celebrates the timeless nature of art and empowers visionary creators worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="X Twitter"
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                ig
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                dr
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                gh
              </a>
            </div>
          </div>

          {/* Column 1: Get Started */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold mb-4">
              Get Started
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={onOpenCreate}
                  className="hover:text-neutral-900 transition-colors cursor-pointer text-left"
                >
                  Create strategy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPricing}
                  className="hover:text-neutral-900 transition-colors cursor-pointer text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-neutral-900 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#vision" className="hover:text-neutral-900 transition-colors block">
                  Solution
                </a>
              </li>
              <li>
                <a href="#ecommerce" className="hover:text-neutral-900 transition-colors block">
                  E-Commerce
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Your Story */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold mb-4">
              Your Story
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={onOpenCreate}
                  className="hover:text-neutral-900 transition-colors cursor-pointer text-left"
                >
                  Create Story
                </button>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-neutral-900 transition-colors block">
                  Sell fast
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Privacy & Policy */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold mb-4">
              Privacy & Policy
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-neutral-900 transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors block">
                  Api
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors block">
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2024. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-800 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neutral-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-800 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
