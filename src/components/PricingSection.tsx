import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockArtworks';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [selectedPlanId, setSelectedPlanId] = useState('plan-quarterly');

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[#fbfbfb] border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 max-w-md">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-6 shadow-sm">
              <Layers className="w-5 h-5" />
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-neutral-900 leading-[1.1] mb-4">
              Membership
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Offering buyers a chance to own a piece of that narrative. This platform is where
              stories come alive through art, giving collectors immediate access to private releases
              and priority drops.
            </p>
          </div>

          {/* Right Column: 3 Pricing Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRICING_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              const isPopular = plan.popular;

              return (
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    setSelectedPlanId(plan.id);
                    onSelectPlan(plan);
                  }}
                  className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isPopular
                      ? 'bg-[#ea580c] text-white shadow-xl scale-105 z-10'
                      : 'bg-white text-neutral-900 border border-neutral-200/80 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-3 right-6 bg-white text-orange-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                      Popular
                    </div>
                  )}

                  <div>
                    <span
                      className={`text-xs font-semibold block mb-2 ${
                        isPopular ? 'text-orange-100' : 'text-neutral-500'
                      }`}
                    >
                      {plan.name}
                    </span>

                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                        {plan.price}
                      </span>
                    </div>

                    <p
                      className={`text-xs mb-6 ${
                        isPopular ? 'text-orange-100' : 'text-neutral-500'
                      }`}
                    >
                      {plan.cta}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlan(plan);
                    }}
                    className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-white text-orange-600 hover:bg-neutral-100 shadow-md'
                        : isSelected
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    Select Plan
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
