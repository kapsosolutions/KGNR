import React from 'react';
import { LIVE_METAL_RATES } from '../data/ornamentsData';
import { TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export default function GoldRateBar() {
  return (
    <aside aria-label="Live precious metal market rates" className="bg-[#222222] text-[#f6f5f4] text-xs border-b border-[#333333] py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[#cd9834] font-medium tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-[#cd9834] animate-pulse"></span>
          <span className="uppercase text-[11px] tracking-widest text-[#cd9834]">LIVE ATELIER TICKER</span>
          <span className="hidden sm:inline text-[#6f6f6d]">|</span>
          <span className="hidden sm:inline text-[#f6f5f4] font-normal">Nellore Bullion Market Standard</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto py-0.5 no-scrollbar text-[12px]">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#6f6f6d]">24K (999):</span>
            <span className="font-medium text-white">₹{LIVE_METAL_RATES.gold24k.ratePerGram.toLocaleString('en-IN')}/g</span>
            <span className="text-emerald-400 text-[10px] flex items-center"><TrendingUp className="w-2.5 h-2.5 ml-0.5" /></span>
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#6f6f6d]">22K (916):</span>
            <span className="font-medium text-[#cd9834]">₹{LIVE_METAL_RATES.gold22k.ratePerGram.toLocaleString('en-IN')}/g</span>
            <span className="text-emerald-400 text-[10px] flex items-center"><TrendingUp className="w-2.5 h-2.5 ml-0.5" /></span>
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#6f6f6d]">18K:</span>
            <span className="font-medium text-white">₹{LIVE_METAL_RATES.gold18k.ratePerGram.toLocaleString('en-IN')}/g</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#6f6f6d]">Platinum 950:</span>
            <span className="font-medium text-white">₹{LIVE_METAL_RATES.platinum950.ratePerGram.toLocaleString('en-IN')}/g</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#6f6f6d]">Silver:</span>
            <span className="font-medium text-white">₹{LIVE_METAL_RATES.silverFine.ratePerGram}/g</span>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-2 text-[11px] text-[#cd9834]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% BIS Hallmarked & HUID Certified</span>
        </div>
      </div>
    </aside>
  );
}
