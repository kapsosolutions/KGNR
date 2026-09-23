import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { LIVE_METAL_RATES, ATELIER_INFO } from '../data/ornamentsData';

export default function EstimatorWidget() {
  const [weight, setWeight] = useState(25);
  const [karat, setKarat] = useState('22k');
  const [craftType, setCraftType] = useState('nakshi');

  const ratePerGram = karat === '24k' 
    ? LIVE_METAL_RATES.gold24k.ratePerGram 
    : karat === '22k' 
    ? LIVE_METAL_RATES.gold22k.ratePerGram 
    : LIVE_METAL_RATES.gold18k.ratePerGram;

  const craftMultipliers = {
    standard: 0.05,
    nakshi: 0.09,
    enamel: 0.12,
  };

  const baseGoldCost = Math.round(weight * ratePerGram);
  const craftCost = Math.round(baseGoldCost * craftMultipliers[craftType]);
  const gstCost = Math.round((baseGoldCost + craftCost) * 0.03);
  const totalEstimated = baseGoldCost + craftCost + gstCost;

  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;
  const quoteText = encodeURIComponent(
    `Hello KGN.R Atelier,\nI used your online estimator:\n• Weight: ${weight} grams\n• Purity: ${karat.toUpperCase()}\n• Finishing Craft: ${craftType}\n• Estimated Total: ₹${totalEstimated.toLocaleString('en-IN')}\nCould you please review and provide an official quotation?`
  );

  return (
    <div className="bg-[#f6f5f4] rounded-2xl border border-[#cd9834]/40 p-6 sm:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#e8e6e3]">
        <div>
          <div className="text-[11px] font-medium tracking-wider uppercase text-[#cd9834] flex items-center gap-1 mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Bullion &amp; Craftsmanship Estimator</span>
          </div>
          <h3 className="font-headline text-2xl font-normal text-[#222222]">
            Estimate Your Custom Ornament
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs text-[#6f6f6d] block">Live 22K Benchmark</span>
          <span className="font-headline text-lg font-medium text-[#222222]">
            ₹{LIVE_METAL_RATES.gold22k.ratePerGram.toLocaleString('en-IN')} / gram
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Weight Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#333333]">
                Gold Weight in Grams
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                  className="w-20 px-2 py-1 bg-white border border-[#cd9834]/40 rounded-lg text-sm text-center font-medium focus:outline-none focus:border-[#cd9834]"
                />
                <span className="text-xs font-medium text-[#6f6f6d]">g</span>
              </div>
            </div>
            <input
              type="range"
              min="2"
              max="150"
              step="1"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full h-2 bg-[#e0deda] rounded-lg appearance-none cursor-pointer accent-[#cd9834]"
            />
            <div className="flex justify-between text-[11px] text-[#6f6f6d] mt-1">
              <span>Light (2g)</span>
              <span>Necklace (35g)</span>
              <span>Heavy Bridal (80g+)</span>
              <span>150g</span>
            </div>
          </div>

          {/* Karat Selection */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#333333] block mb-2">
              Select Gold Purity (Karat)
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: '22k', label: '22K (916)', desc: 'Standard Hallmark' },
                { id: '24k', label: '24K (999)', desc: 'Fine Bullion' },
                { id: '18k', label: '18K (750)', desc: 'Diamond Setting' },
              ].map((k) => (
                <button
                  key={k.id}
                  onClick={() => setKarat(k.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    karat === k.id
                      ? 'border-[#cd9834] bg-white text-[#222222]'
                      : 'border-[#e0deda] bg-white/60 text-[#6f6f6d] hover:bg-white'
                  }`}
                >
                  <span className="font-headline text-base font-semibold block text-[#222222]">
                    {k.label}
                  </span>
                  <span className="text-[11px] text-[#6f6f6d]">{k.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Finishing Craft Tier */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#333333] block mb-2">
              Finishing &amp; Craftsmanship Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'standard', label: 'High-Gloss Buff', note: '5% Finishing' },
                { id: 'nakshi', label: 'Sacred Temple Nakshi', note: '9% Repoussé' },
                { id: 'enamel', label: 'Meenakari & CNC Cut', note: '12% Vitreous' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCraftType(c.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    craftType === c.id
                      ? 'border-[#cd9834] bg-white text-[#222222]'
                      : 'border-[#e0deda] bg-white/60 text-[#6f6f6d] hover:bg-white'
                  }`}
                >
                  <span className="font-medium text-xs block text-[#222222]">{c.label}</span>
                  <span className="text-[10px] text-[#cd9834] font-medium">{c.note}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation Summary Box */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#cd9834] p-6 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#cd9834] block mb-1">
              Estimated Valuation Breakdown
            </span>
            <div className="font-headline text-3xl font-medium text-[#222222] mb-4">
              ₹{totalEstimated.toLocaleString('en-IN')}*
            </div>

            <div className="space-y-2.5 text-xs text-[#333333] border-t border-[#f0f0f0] pt-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#6f6f6d]">Pure Bullion ({weight}g @ ₹{ratePerGram}/g):</span>
                <span className="font-medium text-[#222222]">₹{baseGoldCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6f6f6d]">Digital Finishing &amp; Making:</span>
                <span className="font-medium text-[#222222]">₹{craftCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6f6f6d]">Statutory GST (3%):</span>
                <span className="font-medium text-[#222222]">₹{gstCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#6f6f6d] leading-normal italic mb-4">
              *Approximate indicative rate based on current market ticker. Exact billing adheres to final weight on certified jeweler micro-balance and BIS hallmarking charges.
            </p>
          </div>

          <a
            href={`https://wa.me/${primaryWhatsApp}?text=${quoteText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="buick-pill-dark w-full py-3.5 text-xs uppercase tracking-wider justify-center"
          >
            <MessageCircle className="w-4 h-4 text-[#cd9834]" />
            <span>Lock Estimate via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
