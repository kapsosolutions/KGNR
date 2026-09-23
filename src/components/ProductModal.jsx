import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { ATELIER_INFO } from '../data/ornamentsData';
import WhatsAppIcon from './WhatsAppIcon';

export default function ProductModal({ ornament, onClose }) {
  if (!ornament) return null;

  const [activeImage, setActiveImage] = useState(ornament.image);
  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  const inquiryText = encodeURIComponent(
    `Hello Rabbani Shaik (KGN.R),\nI am interested in acquiring or customizing this ornament:\n• Name: ${ornament.name}\n• Karat: ${ornament.karat}\n• Weight: ${ornament.weightGrams}g\nPlease share current quote, making charges, and custom order timeline.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Buick 16px Modal Container with 1px Gold Border */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-[#cd9834] overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 border border-[#f0f0f0] text-[#222222] hover:text-[#cd9834] flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Showcase */}
        <div className="md:w-1/2 bg-[#f6f5f4] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#f0f0f0]">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white border border-[#f0f0f0] mb-4">
            <img
              src={activeImage}
              alt={ornament.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#222222] border border-[#f0f0f0]">
              {ornament.karat} • {ornament.weightGrams}g
            </div>
          </div>

          {/* Alternate Angles Thumbnail Strip */}
          {ornament.alternateImage && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveImage(ornament.image)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === ornament.image ? 'border-[#cd9834]' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={ornament.image} alt="Primary angle" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveImage(ornament.alternateImage)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === ornament.alternateImage ? 'border-[#cd9834]' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={ornament.alternateImage} alt="Alternate detail" className="w-full h-full object-cover" />
              </button>
              <span className="text-xs text-[#6f6f6d] pl-2">
                Click to toggle alternate angle
              </span>
            </div>
          )}

          {/* BIS Hallmark Badge */}
          <div className="mt-4 pt-4 border-t border-[#e8e6e3] flex items-center justify-between text-xs text-[#6f6f6d]">
            <span className="flex items-center gap-1.5 text-[#222222] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#cd9834]" />
              BIS 916 Hallmarked &amp; HUID Verified
            </span>
            <span>Nellore Atelier</span>
          </div>
        </div>

        {/* Right Column: Specifications & Inquiries */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Offer label in antique gold */}
            <div className="text-xs font-semibold uppercase tracking-wider text-[#cd9834] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{ornament.offerLabel}</span>
            </div>

            {/* Title */}
            <h2 className="font-headline text-2xl sm:text-3xl font-normal text-[#222222] mb-3">
              {ornament.name}
            </h2>

            {/* Approximate Value / Price notice */}
            {ornament.approxCostINR && (
              <div className="mb-4 bg-[#f6f5f4] p-3 rounded-lg border border-[#f0f0f0] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#6f6f6d] uppercase tracking-wider block">Estimated Bullion Value</span>
                  <span className="font-headline text-xl font-medium text-[#222222]">{ornament.approxCostINR}</span>
                </div>
                <span className="text-[11px] text-[#cd9834] font-medium border border-[#cd9834]/40 px-2 py-0.5 rounded-full">
                  Based on Live 22K Rates
                </span>
              </div>
            )}

            {/* Detailed Description */}
            <p className="text-sm text-[#333333] leading-relaxed mb-6 font-normal">
              {ornament.description}
            </p>

            {/* Specifications Matrix */}
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#222222] mb-3 pb-1 border-b border-[#f0f0f0]">
              Master Technical Specifications
            </h3>

            <div className="space-y-2 mb-6">
              {ornament.specifications && ornament.specifications.map((spec, index) => (
                <div key={index} className="flex items-center justify-between text-xs py-1 border-b border-[#f6f5f4]">
                  <span className="text-[#6f6f6d]">{spec.label}</span>
                  <span className="font-medium text-[#222222] text-right">{spec.value}</span>
                </div>
              ))}
              {ornament.gemstones && (
                <div className="flex items-start justify-between text-xs py-1 border-b border-[#f6f5f4]">
                  <span className="text-[#6f6f6d]">Gemstones</span>
                  <span className="font-medium text-[#222222] text-right max-w-[60%]">{ornament.gemstones}</span>
                </div>
              )}
            </div>
          </div>

          {/* WhatsApp Direct Inquiry & Call Action */}
          <div className="pt-4 border-t border-[#f0f0f0] space-y-3">
            <a
              href={`https://wa.me/${primaryWhatsApp}?text=${inquiryText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="buick-pill-dark w-full py-3.5 text-xs uppercase tracking-wider justify-center flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" color="#25D366" />
              <span>Inquire &amp; Order on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-xs text-[#6f6f6d] px-2">
              <a href={`tel:${ATELIER_INFO.phones[2].clean}`} className="hover:text-[#cd9834] flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#cd9834]" />
                <span>Call Shop: {ATELIER_INFO.phones[2].number}</span>
              </a>
              <span>Chinna Bazaar, Nellore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
