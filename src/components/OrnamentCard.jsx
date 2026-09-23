import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { ATELIER_INFO } from '../data/ornamentsData';
import WhatsAppIcon from './WhatsAppIcon';

export default function OrnamentCard({ ornament, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  return (
    <article 
      className="buick-card group flex flex-col justify-between cursor-pointer relative transition-all duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(ornament)}
    >
      {/* Top Media Container */}
      <div className="relative w-full aspect-[4/3] rounded-t-xl overflow-hidden bg-[#f6f5f4] mb-4">
        <img
          src={isHovered && ornament.alternateImage ? ornament.alternateImage : ornament.image}
          alt={ornament.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = '/assets/ganesha_haar.jpg';
          }}
        />

        {/* Karat Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide text-[#222222] border border-[#f0f0f0]">
          {ornament.karat}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 text-[#222222] px-4 py-2 rounded-full text-xs font-medium tracking-wider flex items-center gap-1.5 shadow-sm">
            <Eye className="w-3.5 h-3.5 text-[#cd9834]" />
            Quick Inspect
          </span>
        </div>
      </div>

      {/* Buick offer-label: Antique gold #cd9834, 1px tracking */}
      <div className="px-1">
        <div className="text-[11px] font-medium tracking-wider uppercase text-[#cd9834] mb-1.5 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#cd9834]" />
          <span>{ornament.offerLabel}</span>
        </div>

        {/* Buick vehicle-card-title: Buick Text 20px / weight 500 */}
        <h3 className="font-headline text-lg font-medium text-[#222222] group-hover:text-[#cd9834] transition-colors line-clamp-1 mb-2">
          {ornament.name}
        </h3>

        {/* Short description */}
        <p className="text-[13px] text-[#6f6f6d] line-clamp-2 mb-4 leading-relaxed font-normal">
          {ornament.leadDescription}
        </p>

        {/* Key Metrics Row */}
        <div className="pt-3 border-t border-[#f0f0f0] grid grid-cols-2 gap-2 text-xs text-[#333333] mb-4">
          <div>
            <span className="text-[#6f6f6d] block text-[11px]">Gross Weight</span>
            <span className="font-medium text-[#222222]">{ornament.weightGrams} grams</span>
          </div>
          <div>
            <span className="text-[#6f6f6d] block text-[11px]">Craftsmanship</span>
            <span className="font-medium text-[#222222] truncate block">{ornament.craftsmanship.split('&')[0]}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(ornament);
            }}
            className="text-xs font-medium text-[#222222] group-hover:text-[#cd9834] transition-colors flex items-center gap-1 tracking-wider uppercase"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${primaryWhatsApp}?text=Hi%20KGN.R%2C%20I%20am%20interested%20in%20${encodeURIComponent(ornament.name)}%20(${ornament.karat}%2C%20${ornament.weightGrams}g).`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-[#25D366] hover:text-[#1da851] flex items-center gap-1 font-medium tracking-wide"
            title="Inquire via WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" color="#25D366" />
            <span className="text-[#222222] hover:text-[#25D366]">Inquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
