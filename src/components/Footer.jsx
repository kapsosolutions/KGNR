import React from 'react';
import { ATELIER_INFO } from '../data/ornamentsData';
import { ShieldCheck, Phone, Mail, MapPin, Sparkles, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#222222] text-[#f6f5f4] pt-16 pb-12 border-t border-[#333333] overflow-hidden">
      {/* PC / Desktop Footer Background SVG */}
      <div 
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none bg-bottom bg-cover bg-no-repeat opacity-30 z-0"
        style={{ backgroundImage: "url('/footer_pc.svg')" }}
        aria-hidden="true"
      />

      {/* Mobile Footer Background SVG */}
      <div 
        className="block md:hidden absolute inset-0 w-full h-full pointer-events-none bg-bottom bg-cover bg-no-repeat opacity-30 z-0"
        style={{ backgroundImage: "url('/footer_mobile.svg')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#333333]">
          {/* Column 1: Brand Atelier & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center border border-[#cd9834]/40">
                <img src="/assets/logo.png" alt="KGN.R Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-headline text-2xl font-semibold tracking-wider text-white">
                  KGN<span className="text-[#cd9834]">.</span>R
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#cd9834]">
                  Gold Finishing &amp; Designing
                </p>
              </div>
            </div>

            <p className="text-[13px] text-[#a0a09e] leading-relaxed">
              Under the master direction of <strong className="text-white font-medium">Rabbani Shaik</strong>, KGN.R delivers South India’s most revered digital electro-finishing, temple idol restoration, and custom gold ornaments with zero gold loss.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#cd9834]">
              <ShieldCheck className="w-4 h-4 text-[#cd9834]" />
              <span className="tracking-wide">100% BIS Hallmarked &amp; HUID Compliant</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-headline text-base font-normal tracking-wider text-white uppercase mb-4 border-b border-[#cd9834]/30 pb-2">
              Explore Atelier
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#a0a09e]">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('collection');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Signature Vault Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Master Artisan &amp; About Legacy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Chinna Bazaar Workshop Visit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Consult Artisan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier Legacy & Craft */}
          <div>
            <h3 className="font-headline text-base font-normal tracking-wider text-white uppercase mb-4 border-b border-[#cd9834]/30 pb-2">
              Atelier Standards
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#a0a09e]">
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Zero Gold Loss Digital Buffing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Sacred Temple Deity Mukhavatas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Vitreous Mineral Meenakari Enamel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Diamond-Flywheel Machine Facets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  25+ Years Chinna Bazaar Legacy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Atelier Workshop & Direct Reach */}
          <div>
            <h3 className="font-headline text-base font-normal tracking-wider text-white uppercase mb-4 border-b border-[#cd9834]/30 pb-2">
              Nellore Atelier
            </h3>
            <div className="space-y-3 text-[13px] text-[#a0a09e]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#cd9834] flex-shrink-0 mt-1" />
                <span>
                  {ATELIER_INFO.address.line1}, {ATELIER_INFO.address.street}, {ATELIER_INFO.address.city} - {ATELIER_INFO.address.pincode}, A.P.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#cd9834] flex-shrink-0" />
                <span>Shop: {ATELIER_INFO.phones[2].number}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#cd9834] flex-shrink-0" />
                <span>WhatsApp: {ATELIER_INFO.phones[0].number}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#cd9834] flex-shrink-0" />
                <span className="truncate">{ATELIER_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f6f6d]">
          <p>
            &copy; {new Date().getFullYear()} KGN.R Platinum, Gold &amp; Silver Digital Finishing Works. All rights reserved. Master Goldsmithing &amp; Finishing in Chinna Bazaar, Nellore.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#cd9834] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
