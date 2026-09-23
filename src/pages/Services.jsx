import React from 'react';
import { SERVICES, ATELIER_INFO } from '../data/ornamentsData';
import { Clock, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Services({ setActivePage }) {
  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
            ADVANCED WORKSHOP CAPABILITIES
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-light text-[#222222] mb-4">
            Digital Finishing &amp; Jewellery Care
          </h1>
          <p className="text-sm sm:text-base text-[#6f6f6d] leading-relaxed">
            From zero-loss ultrasonic gold cleaning and platinum mirror buffing to high-temperature vitreous enamel and CNC machine faceting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="buick-card bg-[#faf9f8] p-6 sm:p-8 flex flex-col justify-between border border-[#e8e6e3] hover:border-[#cd9834] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#cd9834] border border-[#cd9834]/40 px-2.5 py-1 rounded-full">
                    {s.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#6f6f6d]">
                    <Clock className="w-3.5 h-3.5 text-[#cd9834]" />
                    <span>{s.turnaround}</span>
                  </span>
                </div>

                <h3 className="font-headline text-2xl font-medium text-[#222222] mb-1">
                  {s.title}
                </h3>
                <div className="text-xs text-[#cd9834] font-medium mb-3">
                  {s.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed mb-6 font-normal">
                  {s.description}
                </p>

                <div className="space-y-2.5 border-t border-[#f0f0f0] pt-4 mb-6 text-xs text-[#333333]">
                  {s.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#cd9834] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                <a
                  href={`https://wa.me/${primaryWhatsApp}?text=Hello%20Master%20Rabbani%20Shaik%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(s.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buick-pill-dark text-xs uppercase tracking-wider py-2.5 px-5 flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#cd9834]" />
                  <span>Request WhatsApp Quote</span>
                </a>
                <span className="text-xs text-[#6f6f6d]">Nellore Atelier</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Comparison Table */}
        <div className="bg-[#f6f5f4] rounded-2xl border border-[#cd9834]/30 p-6 sm:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-1">
              THE TECHNICAL ADVANTAGE
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-light text-[#222222]">
              Why Nellore Jewellers Trust KGN.R Digital Finishing
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#d8d6d2] text-[#222222]">
                  <th className="pb-3 font-semibold uppercase tracking-wider">Finishing Parameter</th>
                  <th className="pb-3 font-semibold uppercase tracking-wider text-[#6f6f6d]">Traditional Manual Buffing</th>
                  <th className="pb-3 font-semibold uppercase tracking-wider text-[#cd9834]">KGN.R Digital Ultrasonic Finishing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e6e3] text-[#333333]">
                <tr>
                  <td className="py-3.5 font-medium">Gold Retention / Wastage</td>
                  <td className="py-3.5 text-red-600">0.5% - 2% unrecoverable gold loss</td>
                  <td className="py-3.5 text-[#cd9834] font-semibold">Zero Gold Loss (Enclosed suction &amp; micro-recovery)</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Lustre Depth &amp; Uniformity</td>
                  <td className="py-3.5 text-[#6f6f6d]">Surface shine only; leaves buffer streaks</td>
                  <td className="py-3.5 text-[#222222] font-semibold">24K electro-lustre with microscopic mirror planar level</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Deity Relief &amp; Carving Edge</td>
                  <td className="py-3.5 text-red-600">Softens sharp details on temple mukhavatas</td>
                  <td className="py-3.5 text-[#cd9834] font-semibold">Preserves micro-chased iconography &amp; nakshi depth</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Gemstone Safety</td>
                  <td className="py-3.5 text-[#6f6f6d]">High heat risks damaging kemp &amp; emeralds</td>
                  <td className="py-3.5 text-[#222222] font-semibold">Controlled temperature finishing &amp; ultrasonic safe zones</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">HUID Stamp Preservation</td>
                  <td className="py-3.5 text-red-600">Often erases shallow laser hallmark stamps</td>
                  <td className="py-3.5 text-[#cd9834] font-semibold">Guaranteed HUID hallmark stamp preservation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Commercial Partnership Banner */}
        <div className="bg-[#222222] text-white rounded-2xl p-8 sm:p-12 border border-[#333333] text-center">
          <h3 className="font-headline text-2xl sm:text-3xl font-light text-white mb-3">
            Are You a Commercial Jeweller or Showroom?
          </h3>
          <p className="text-sm text-[#a0a09e] max-w-2xl mx-auto mb-6 leading-relaxed">
            KGN.R handles high-volume daily jobwork for prominent retail showrooms across Nellore, Tirupati, Guntur, and Chennai. Benefit from priority same-day turnaround, strict security, and wholesale pricing.
          </p>
          <a
            href={`https://wa.me/${primaryWhatsApp}?text=Hello%20Rabbani%20Shaik%2C%20I%20am%20a%20jeweller%20inquiring%20about%20commercial%20jobwork%20and%20finishing%20partnerships.`}
            target="_blank"
            rel="noopener noreferrer"
            className="buick-pill-primary text-xs uppercase tracking-wider py-3.5 px-8 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#cd9834]" />
            <span>Open Commercial Jobwork Account</span>
          </a>
        </div>
      </div>
    </div>
  );
}
