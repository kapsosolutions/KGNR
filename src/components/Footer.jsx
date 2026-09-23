import React from 'react';
import { ATELIER_INFO } from '../data/ornamentsData';
import { ShieldCheck, Phone, Mail, MapPin, Sparkles, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#222222] text-[#f6f5f4] pt-16 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Column 2: Master Collections */}
          <div>
            <h3 className="font-headline text-base font-normal tracking-wider text-white uppercase mb-4 border-b border-[#cd9834]/30 pb-2">
              Curated Collections
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#a0a09e]">
              <li>
                <button 
                  onClick={() => { setActivePage('collection'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Sacred Temple Mukhavatas &amp; Idols
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('collection'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Sri Ganesha Royal Ruby Haar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('collection'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Tirupati Balaji Prabhavali Rings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('collection'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Royal Peacock Vitreous Enamel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('collection'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Heritage Nizam Filigree Bangles
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Finishing Services */}
          <div>
            <h3 className="font-headline text-base font-normal tracking-wider text-white uppercase mb-4 border-b border-[#cd9834]/30 pb-2">
              Atelier Services
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[#a0a09e]">
              <li>
                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Gold &amp; Silver Polish Works (Ultrasonic)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Platinum Polish &amp; Rhodium Plating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Enamel Colours &amp; Imperial Meenakari
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Antic Colours &amp; Machine Cutting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                  className="hover:text-[#cd9834] transition-colors text-left"
                >
                  Temple Jewellery Repair &amp; Gilding
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

              <div className="pt-2">
                <a
                  href={`https://wa.me/${ATELIER_INFO.phones[0].clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buick-pill-gold-outline w-full py-2.5 text-xs text-center justify-center text-white border-[#cd9834] hover:bg-[#cd9834]"
                >
                  WhatsApp Direct Inquiry
                </a>
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
