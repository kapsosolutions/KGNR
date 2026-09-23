import React from 'react';
import { ORNAMENTS, SERVICES, TESTIMONIALS, ATELIER_INFO } from '../data/ornamentsData';
import OrnamentCard from '../components/OrnamentCard';
import VideoShowcase from '../components/VideoShowcase';
import EstimatorWidget from '../components/EstimatorWidget';
import { Sparkles, ShieldCheck, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Home({ setActivePage, onSelectOrnament }) {
  const featuredOrnaments = ORNAMENTS.filter((item) => item.featured).slice(0, 3);
  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  return (
    <div className="space-y-0">
      {/* 1. Full-Bleed Luxury Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ganesha_haar.jpg"
            alt="Lord Ganesha Temple Ruby Haar"
            className="w-full h-full object-cover object-center opacity-30 scale-105 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cd9834]/50 bg-black/40 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#cd9834]" />
            <span className="text-xs uppercase tracking-widest text-[#cd9834] font-medium">
              EST. 2000 • NELLORE CHINNA BAZAAR
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight mb-6">
            The Sacred Whisper of <br className="hidden sm:inline" />
            <span className="font-normal text-white">Pure Gold &amp; Divine Craft</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#d4d2ce] font-light leading-relaxed mb-10">
            KGN.R Platinum, Gold &amp; Silver Digital Finishing Works. South India’s sanctuary for temple deity mukhavatas, bespoke 22K heirlooms, and imperial meenakari enamel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setActivePage('collection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="buick-pill-primary text-xs uppercase tracking-wider w-full sm:w-auto"
            >
              <span>Explore Master Collection</span>
              <ArrowRight className="w-4 h-4 text-[#cd9834]" />
            </button>

            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="buick-pill-gold-outline text-xs uppercase tracking-wider text-white border-[#cd9834] hover:bg-[#cd9834] w-full sm:w-auto"
            >
              <span>Custom Atelier Commission</span>
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-[#cd9834] text-xs uppercase font-medium tracking-widest mb-1">
                Zero Gold Loss
              </div>
              <p className="text-xs text-[#a0a09e]">Digital ultrasonic buffing technology</p>
            </div>
            <div>
              <div className="text-[#cd9834] text-xs uppercase font-medium tracking-widest mb-1">
                100% BIS 916
              </div>
              <p className="text-xs text-[#a0a09e]">Complete HUID purity hallmarking</p>
            </div>
            <div>
              <div className="text-[#cd9834] text-xs uppercase font-medium tracking-widest mb-1">
                Temple Guild
              </div>
              <p className="text-xs text-[#a0a09e]">Revered sacred idol restoration</p>
            </div>
            <div>
              <div className="text-[#cd9834] text-xs uppercase font-medium tracking-widest mb-1">
                25+ Years Legacy
              </div>
              <p className="text-xs text-[#a0a09e]">Under Master Rabbani Shaik</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Philosophy Strip */}
      <section className="bg-[#f6f5f4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block">
                THE ATELIER PHILOSOPHY
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-light text-[#222222] leading-tight">
                Gold That Whispers <br />
                <span className="font-normal">With Royal Restraint</span>
              </h2>
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed font-normal">
                Unlike commercial mass-manufactured jewellery, true luxury lies in the nuanced subtleties: the micro-carvings on Lord Ganesha’s crown, the glassy depth of hand-fired peacock enamel, and the velvet feel of satin-buffed 22K bullion against the skin.
              </p>
              <p className="text-[#6f6f6d] text-xs sm:text-sm leading-relaxed">
                Founded in Nellore’s historic Chinna Bazaar goldsmith quarter, KGN.R blends ancient Nakshi repoussé with precision digital electro-polishing to preserve every milligram of precious heritage.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold uppercase tracking-wider text-[#222222] hover:text-[#cd9834] transition-colors inline-flex items-center gap-2"
                >
                  <span>Read the Full Goldsmith Heritage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#cd9834]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#f0f0f0] flex flex-col justify-between">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#f6f5f4] mb-3">
                  <img
                    src="/assets/peacock_gold.jpg"
                    alt="Raw Diamond Framework"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#cd9834] block">
                    STAGE 1: PRECISION GEM SETTING
                  </span>
                  <h4 className="font-headline text-base font-medium text-[#222222]">
                    Chased 22K Gold Peacock Core
                  </h4>
                  <p className="text-xs text-[#6f6f6d] mt-1">
                    Faceted pavé mountings cast and diamond-checked before coloration.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#cd9834] flex flex-col justify-between">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#f6f5f4] mb-3">
                  <img
                    src="/assets/peacock_enamel.jpg"
                    alt="Finished Vitreous Enamel Peacock"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#cd9834] block">
                    STAGE 2: IMPERIAL MEENAKARI
                  </span>
                  <h4 className="font-headline text-base font-medium text-[#222222]">
                    High-Fire Royal Cobalt Enamel
                  </h4>
                  <p className="text-xs text-[#6f6f6d] mt-1">
                    Vivid jewel tones fused at high temperatures with 24K mirror-gloss edges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Heirlooms Grid */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
                CURATED ATELIER HIGHLIGHTS
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-light text-[#222222]">
                Iconic Masterpieces
              </h2>
            </div>
            <button
              onClick={() => {
                setActivePage('collection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="buick-pill-primary text-xs uppercase tracking-wider"
            >
              <span>View Full Lineup ({ORNAMENTS.length} Items)</span>
              <ArrowRight className="w-4 h-4 text-[#cd9834]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredOrnaments.map((ornament) => (
              <OrnamentCard
                key={ornament.id}
                ornament={ornament}
                onSelect={onSelectOrnament}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Video Craftsmanship Showcase */}
      <VideoShowcase />

      {/* 5. 6 Digital Finishing Services */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
              KGN.R FINISHING CAPABILITIES
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-light text-[#222222] mb-4">
              Master Finishing &amp; Digital Polish Services
            </h2>
            <p className="text-[#6f6f6d] text-sm sm:text-base font-normal leading-relaxed">
              Equipped with computerized high-precision machinery, ultrasonic baths, and generational bench goldsmiths to serve discerning retail clients and commercial jewellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="buick-card flex flex-col justify-between hover:border-[#cd9834] transition-all bg-[#faf9f8]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#cd9834] px-2 py-0.5 rounded-full border border-[#cd9834]/40">
                      {service.badge}
                    </span>
                    <span className="text-xs text-[#6f6f6d]">{service.turnaround}</span>
                  </div>

                  <h3 className="font-headline text-xl font-medium text-[#222222] mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs text-[#cd9834] font-medium mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-xs text-[#6f6f6d] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-[#f0f0f0] pt-3 text-xs text-[#333333]">
                    {service.specs.map((sp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#cd9834] flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-[#f0f0f0]">
                  <a
                    href={`https://wa.me/${primaryWhatsApp}?text=Hello%20KGN.R%2C%20I%20am%20inquiring%20about%20your%20service%3A%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#cd9834] hover:text-[#b88528] flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Live Bullion Estimator */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <EstimatorWidget />
        </div>
      </section>

      {/* 7. Official Credentials */}
      <section className="bg-[#f6f5f4] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-[#cd9834]/40 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#cd9834]/50 shadow-sm">
              <img
                src="/assets/visiting_card.jpg"
                alt="KGN.R Official Workshop Card"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block text-[11px] font-semibold tracking-widest text-[#cd9834] uppercase">
                OFFICIAL WORKSHOP CREDENTIALS
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-light text-[#222222]">
                Certified Goldsmith Bench in Chinna Bazaar
              </h3>
              <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                Registered under proprietor <strong className="text-[#222222]">Rabbani Shaik</strong> at <span className="text-[#222222]">#19/156, N, R, N, complex, Korada Street, Chinna Bazaar, Nellore - 524 001, Andhra Pradesh</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-[#f6f5f4] p-3 rounded-lg border border-[#f0f0f0]">
                  <span className="text-[#6f6f6d] block mb-1">Direct Workshop Inquiries</span>
                  <span className="font-medium text-[#222222] block">+91 94400 55996</span>
                  <span className="font-medium text-[#222222] block">+91 93471 01857</span>
                </div>
                <div className="bg-[#f6f5f4] p-3 rounded-lg border border-[#f0f0f0]">
                  <span className="text-[#6f6f6d] block mb-1">Shop Desk Landline</span>
                  <span className="font-medium text-[#222222] block">095500 81300</span>
                  <span className="text-[11px] text-[#6f6f6d]">Mon–Sat: 10AM – 9PM</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="buick-pill-dark text-xs uppercase tracking-wider py-3 px-6"
                >
                  <span>Book In-Person Consultation</span>
                </button>
                <a
                  href={`https://wa.me/${primaryWhatsApp}?text=Hello%20Master%20Rabbani%20Shaik%2C%20I%20would%20like%20to%20visit%20your%20workshop.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buick-pill-gold-outline text-xs uppercase tracking-wider py-3 px-6"
                >
                  <MessageCircle className="w-4 h-4 text-[#cd9834]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-headline text-3xl font-light text-[#222222]">
              Words from Patrons &amp; Jewellers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="buick-card bg-[#faf9f8] flex flex-col justify-between p-6"
              >
                <div>
                  <div className="text-2xl text-[#cd9834] font-serif mb-3 leading-none">“</div>
                  <p className="text-sm text-[#333333] leading-relaxed mb-6 font-normal italic">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#f0f0f0]">
                  <div className="font-headline text-base font-medium text-[#222222]">{t.author}</div>
                  <div className="text-xs text-[#6f6f6d]">{t.location}</div>
                  <div className="text-[11px] text-[#cd9834] font-medium mt-1">{t.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
