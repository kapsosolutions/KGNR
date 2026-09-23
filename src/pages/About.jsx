import React from 'react';
import { ATELIER_INFO } from '../data/ornamentsData';
import { ShieldCheck, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

export default function About({ setActivePage }) {
  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
            HERITAGE &amp; ATELIER LEGACY
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-light text-[#222222] mb-4">
            The Story of KGN.R Atelier
          </h1>
          <p className="text-sm sm:text-base text-[#6f6f6d] leading-relaxed">
            Founded by master artisan Rabbani Shaik, KGN.R has served royal temple trusts, generation-old families, and prominent South Indian jewellers from Chinna Bazaar, Nellore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#cd9834] bg-[#f6f5f4] p-3">
              <img
                src="/assets/visiting_card.jpg"
                alt="Rabbani Shaik KGN.R Visiting Card"
                className="w-full h-auto rounded-xl shadow-sm"
              />
              <div className="absolute bottom-6 right-6 bg-black/85 backdrop-blur-md px-4 py-2 rounded-full text-xs text-white border border-[#cd9834]/40">
                Chinna Bazaar, Nellore • Est. 2000
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-xs font-semibold tracking-wider text-[#cd9834] uppercase">
              MASTER ARTISAN RABBANI SHAIK
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl font-light text-[#222222] leading-tight">
              A Quarter Century of <br />
              <span className="font-normal">Goldsmithing Dedication</span>
            </h2>
            <p className="text-sm text-[#333333] leading-relaxed">
              In Nellore’s celebrated Chinna Bazaar, where traditional goldsmithing has thrived for generations, <strong className="text-[#222222]">KGN.R</strong> was established to bridge ancient sacred repoussé with modern digital finishing precision.
            </p>
            <p className="text-sm text-[#6f6f6d] leading-relaxed">
              Proprietor Rabbani Shaik recognized that traditional polishing methods often resulted in unrecoverable gold loss and softened the sharp relief lines of sacred temple deities. By pioneering computerized digital ultrasonic buffing and chemical recovery systems, KGN.R achieved zero gold loss while elevating brilliance to showroom perfection.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#f0f0f0] text-xs">
              <div>
                <span className="font-headline text-2xl font-medium text-[#222222] block">25+</span>
                <span className="text-[#6f6f6d]">Years Master Guild Legacy</span>
              </div>
              <div>
                <span className="font-headline text-2xl font-medium text-[#222222] block">10,000+</span>
                <span className="text-[#6f6f6d]">Ornaments Restored &amp; Finished</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Digital Finishing & Casting Process */}
        <div className="bg-[#f6f5f4] rounded-2xl border border-[#f0f0f0] p-8 sm:p-12 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
              PRECISION METHODOLOGY
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-light text-[#222222]">
              The 5 Stages of KGN.R Finishing
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Inspection & Weighing',
                desc: 'Precise electronic tare weight verification down to 0.001g with optical microscope surface analysis.'
              },
              {
                step: '02',
                title: 'Machine Cutting',
                desc: 'Diamond-flywheel CNC faceting creates sharp geometric prisms that reflect dazzling brilliance.'
              },
              {
                step: '03',
                title: 'Meenakari Enamel',
                desc: 'Hand application of vitreous mineral enamel powders, fired at 800°C for royal peacock sheen.'
              },
              {
                step: '04',
                title: 'Digital Buffing',
                desc: 'Specialized 12,000 RPM muslin lathes and diamond paste restore 24K mirror lustre with zero loss.'
              },
              {
                step: '05',
                title: 'Ultrasonic Cleansing',
                desc: '40kHz cavitation removes all micro residues, followed by hot deionized blow-drying and seal.'
              },
            ].map((st, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-[#e8e6e3] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#cd9834] block mb-2">{st.step}</span>
                  <h4 className="font-headline text-base font-medium text-[#222222] mb-2">{st.title}</h4>
                  <p className="text-xs text-[#6f6f6d] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Temple Restorations Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block">
              DEVOTIONAL CRAFT
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-light text-[#222222]">
              Preserving Sacred Deities &amp; Temple Mukhavatas
            </h2>
            <p className="text-sm text-[#333333] leading-relaxed">
              Temple jewellery carries sacred responsibility. When deity idols, crown kireedams, and silver/gold kavachams are brought to KGN.R, our artisans observe strict devotional purity and traditional agamic guidelines.
            </p>
            <ul className="space-y-2.5 text-xs text-[#333333]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cd9834] flex-shrink-0" />
                <span>Restoration of antique Goddess Mukhavatas and Panchaloha idols</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cd9834] flex-shrink-0" />
                <span>Gold foil gilding and multi-year abhishekam resistant sealants</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cd9834] flex-shrink-0" />
                <span>Re-setting of fallen kemp rubies and sacred gem talismans</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${primaryWhatsApp}?text=Hello%20Master%20Rabbani%20Shaik%2C%20I%20have%20a%20temple%20ornament%20or%20idol%20restoration%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="buick-pill-dark text-xs uppercase tracking-wider py-3 px-6 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#cd9834]" />
                <span>Consult on Temple Restoration</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#cd9834] bg-[#f6f5f4]">
              <img
                src="/assets/temple_mukhavata.jpg"
                alt="Sacred Goddess Mukhavata at KGN.R Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quality Guarantee Box */}
        <div className="bg-[#222222] text-white rounded-2xl p-8 sm:p-12 border border-[#333333]">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <ShieldCheck className="w-12 h-12 text-[#cd9834] mx-auto" />
            <h3 className="font-headline text-2xl sm:text-3xl font-light text-white">
              The KGN.R Purity &amp; Hallmarking Pledge
            </h3>
            <p className="text-sm text-[#a0a09e] leading-relaxed">
              Every custom ornament crafted at KGN.R adheres to the Bureau of Indian Standards (BIS) hallmark regulations with 6-digit unique HUID laser engraving. We provide full metallurgical purity verification for 22K (916) and 24K (999) bullion.
            </p>
            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#cd9834]">
              <span>BIS 916 Standard</span>
              <span>•</span>
              <span>HUID Authenticated</span>
              <span>•</span>
              <span>Laser Tested</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
