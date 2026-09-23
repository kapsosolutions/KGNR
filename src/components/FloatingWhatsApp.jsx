import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { ATELIER_INFO } from '../data/ornamentsData';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const primaryPhone = ATELIER_INFO.phones[0].clean;
  const secondaryPhone = ATELIER_INFO.phones[1].clean;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Floating Tooltip Pill */}
      <div className="hidden sm:flex items-center gap-2 bg-white text-[#222222] px-3.5 py-1.5 rounded-full border border-[#25D366]/40 shadow-md text-xs font-medium tracking-wide transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:-translate-y-0.5">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Chat with Master Rabbani</span>
      </div>

      {/* Main Circular Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${primaryPhone}?text=Hello%20Master%20Rabbani%20Shaik%20(KGN.R)%2C%20I%20am%20contacting%20you%20from%20your%20website%20regarding%20gold%20ornaments%20and%20finishing.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with KGN.R Atelier"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        {/* Soft Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"></span>

        {/* Real WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 text-white" color="#ffffff" />
      </a>
    </div>
  );
}
