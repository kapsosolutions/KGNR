import React, { useState, useMemo } from 'react';
import { ORNAMENTS, TESTIMONIALS, ATELIER_INFO, CATEGORIES } from '../data/ornamentsData';
import OrnamentCard from '../components/OrnamentCard';
import VideoShowcase from '../components/VideoShowcase';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { Sparkles, ArrowRight, MapPin, Clock, Phone, Mail, Navigation, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

const MARQUEE_IMAGES = [
  { id: 1, src: '/collections/1.png', title: 'Royal Gold Bangles & Kadas' },
  { id: 2, src: '/collections/2.png', title: 'Sacred Deity Om Crown' },
  { id: 3, src: '/collections/3.png', title: 'Temple Nakshi Haar' },
  { id: 4, src: '/collections/4.png', title: 'Bespoke Heritage Necklace' },
  { id: 5, src: '/collections/5.png', title: 'Imperial Gemstone Choker' },
  { id: 6, src: '/collections/6.png', title: '22K Handcrafted Jhumkas' },
  { id: 7, src: '/collections/7.png', title: 'Royal Vadanam Waistbelt' },
  { id: 8, src: '/collections/8.png', title: 'Nakshi Bridal Choker' },
  { id: 9, src: '/collections/9.png', title: 'Vitreous Enamel Bangle' },
  { id: 10, src: '/collections/10.png', title: 'Antique Temple Pendant' },
  { id: 11, src: '/collections/11.png', title: 'Imperial Girdle & Kada' },
];

export default function Home({ onSelectOrnament }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bespoke Gold Ornament',
    karat: '22K (916 Hallmark)',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  const filteredOrnaments = useMemo(() => {
    if (selectedCategory === 'all') return ORNAMENTS;
    return ORNAMENTS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message = encodeURIComponent(
      `Hello Master Rabbani Shaik (KGN.R),\nI am inquiring via your website:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Piece: ${formData.service}\n• Karat: ${formData.karat}\n• Notes: ${formData.message || 'None'}`
    );

    window.open(`https://wa.me/${primaryWhatsApp}?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-0">
      {/* 1. Solid Pure White Luxury Hero Section */}
      <section id="home" className="relative bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#f0f0f0] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typography, Value Props, and CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Antique Gold Whispered Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#cd9834]/40 bg-[#faf9f8]">
                <Sparkles className="w-3.5 h-3.5 text-[#cd9834]" />
                <span className="text-xs uppercase tracking-widest text-[#cd9834] font-semibold">
                  EST. 2000 • NELLORE CHINNA BAZAAR
                </span>
              </div>

              {/* Buick Headline 56px / weight 300 & 500 in Charcoal #222222 */}
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#222222] leading-[1.12]">
                The Sacred Whisper of <br className="hidden sm:inline" />
                <span className="font-normal text-[#222222]">Pure Gold &amp; Divine Craft</span>
              </h1>

              {/* Lead Body Text in Buick Charcoal */}
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-xl">
                KGN.R Platinum, Gold &amp; Silver Digital Finishing Works. South India’s sanctuary for temple deity mukhavatas, bespoke 22K heirlooms, and imperial meenakari enamel.
              </p>

              {/* Pill CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => scrollToSection('collection')}
                  className="buick-pill-dark text-xs uppercase tracking-wider py-3.5 px-8 flex items-center justify-center gap-2 shadow-sm hover:scale-105 transition-transform"
                >
                  <span>Explore Master Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#cd9834]" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="buick-pill-gold-outline text-xs uppercase tracking-wider text-[#222222] border-[#cd9834] hover:bg-[#cd9834] hover:text-white py-3.5 px-8 transition-all flex items-center justify-center"
                >
                  <span>Custom Atelier Commission</span>
                </button>
              </div>

              {/* Key Guarantees Strip */}
              <div className="pt-8 mt-4 border-t border-[#f0f0f0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <div className="text-[#cd9834] text-xs uppercase font-semibold tracking-wider mb-1">
                    Zero Gold Loss
                  </div>
                  <p className="text-xs text-[#6f6f6d] leading-tight">Digital ultrasonic buffing</p>
                </div>
                <div>
                  <div className="text-[#cd9834] text-xs uppercase font-semibold tracking-wider mb-1">
                    100% BIS 916
                  </div>
                  <p className="text-xs text-[#6f6f6d] leading-tight">Complete HUID hallmarking</p>
                </div>
                <div>
                  <div className="text-[#cd9834] text-xs uppercase font-semibold tracking-wider mb-1">
                    Temple Guild
                  </div>
                  <p className="text-xs text-[#6f6f6d] leading-tight">Sacred idol restoration</p>
                </div>
                <div>
                  <div className="text-[#cd9834] text-xs uppercase font-semibold tracking-wider mb-1">
                    25+ Years
                  </div>
                  <p className="text-xs text-[#6f6f6d] leading-tight">Under Master Rabbani</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image (/hero.png from public) - Pure flat white, no shadow, no hover */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full max-w-lg lg:max-w-xl">
                <img
                  src="/hero.png"
                  alt="Sri Rama &amp; Sita Celestial Kalyanam 22K Temple Pendant"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Vault Collections Marquee Section */}
      <section id="collection" className="bg-white py-14 sm:py-18 border-b border-[#f0f0f0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
            MASTER ATELIER SHOWCASE
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-light text-[#222222]">
            Signature Vault Collections
          </h2>
          <p className="text-xs sm:text-sm text-[#6f6f6d] mt-2 max-w-xl mx-auto">
            From imperial deity mukhavatas to bespoke diamond bridal ornaments, explore our hallmarked 22K masterpieces.
          </p>
        </div>

        {/* Continuous Moving Marquee of Clean Images (No Card Box, No Text Labels) */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-10 sm:gap-14 md:gap-16 items-center py-4">
            {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  const matched = ORNAMENTS.find((o) => o.image.includes(`${item.id}.png`)) || ORNAMENTS[0];
                  if (onSelectOrnament) onSelectOrnament(matched);
                }}
                className="flex-shrink-0 cursor-pointer flex items-center justify-center py-2"
                title={item.title}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-36 sm:h-44 md:h-52 w-auto max-w-[220px] sm:max-w-[280px] object-contain select-none transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Masterpieces Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
              CURATED ATELIER HIGHLIGHTS
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-light text-[#222222]">
              Iconic Hallmarked Ornaments
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#222222] text-white border border-[#222222]'
                      : 'bg-[#faf9f8] text-[#444444] border border-[#e8e6e3] hover:border-[#cd9834]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOrnaments.slice(0, 6).map((ornament) => (
              <OrnamentCard
                key={ornament.id}
                ornament={ornament}
                onSelect={onSelectOrnament}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="buick-pill-dark text-xs uppercase tracking-wider py-3.5 px-8 inline-flex items-center gap-2"
            >
              <span>Commission a Custom Masterpiece</span>
              <ArrowRight className="w-4 h-4 text-[#cd9834]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Video Craftsmanship Showcase */}
      <VideoShowcase />

      {/* 4. About Atelier Section (With public/card.png) */}
      <section id="about" className="bg-white py-16 sm:py-24 border-t border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
              HERITAGE &amp; MASTER BENCH LEGACY
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-light text-[#222222] mb-4">
              The Story of KGN.R Atelier
            </h2>
            <p className="text-sm sm:text-base text-[#6f6f6d] leading-relaxed">
              Founded by master artisan Rabbani Shaik, KGN.R has served royal temple trusts, generation-old families, and prominent South Indian jewellers from Chinna Bazaar, Nellore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Column: Visiting Card Image (/card.png from public) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#cd9834]/40 bg-[#faf9f8] p-3 sm:p-4 shadow-sm group">
                <img
                  src="/card.png"
                  alt="KGN.R Official Workshop Card - Rabbani Shaik"
                  className="w-full h-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="mt-3 text-center">
                  <span className="text-xs text-[#6f6f6d] font-medium">
                    Official Workshop Identity Card • Korada St, Chinna Bazaar, Nellore
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Artisan Legacy Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-xs font-semibold tracking-wider text-[#cd9834] uppercase">
                MASTER ARTISAN RABBANI SHAIK • EST. 2000
              </div>
              <h3 className="font-headline text-2xl sm:text-4xl font-light text-[#222222] leading-tight">
                A Quarter Century of <br />
                <span className="font-normal">Goldsmithing Dedication</span>
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                In Nellore’s celebrated Chinna Bazaar, where traditional goldsmithing has thrived for generations, <strong className="text-[#222222]">KGN.R</strong> was established to bridge ancient sacred repoussé with modern digital finishing precision.
              </p>
              <p className="text-sm text-[#6f6f6d] leading-relaxed">
                Proprietor Rabbani Shaik recognized that traditional polishing methods often resulted in unrecoverable gold loss and softened the sharp relief lines of sacred temple deities. By pioneering computerized digital ultrasonic buffing and chemical recovery systems, KGN.R achieved zero gold loss while elevating brilliance to showroom perfection.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#f0f0f0] text-center">
                <div className="bg-[#faf9f8] p-3 rounded-xl border border-[#f0f0f0]">
                  <span className="font-headline text-2xl font-semibold text-[#222222] block">25+</span>
                  <span className="text-[11px] text-[#6f6f6d]">Years Legacy</span>
                </div>
                <div className="bg-[#faf9f8] p-3 rounded-xl border border-[#f0f0f0]">
                  <span className="font-headline text-2xl font-semibold text-[#222222] block">10,000+</span>
                  <span className="text-[11px] text-[#6f6f6d]">Ornaments Restored</span>
                </div>
                <div className="bg-[#faf9f8] p-3 rounded-xl border border-[#f0f0f0]">
                  <span className="font-headline text-2xl font-semibold text-[#cd9834] block">0.00%</span>
                  <span className="text-[11px] text-[#6f6f6d]">Gold Loss Precision</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="buick-pill-dark text-xs uppercase tracking-wider py-3 px-6"
                >
                  <span>Book In-Person Consultation</span>
                </button>
                <a
                  href={`https://wa.me/${primaryWhatsApp}?text=Hello%20Master%20Rabbani%20Shaik%2C%20I%20would%20like%20to%20consult%20on%20an%20ornament%20or%20finishing%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buick-pill-primary border border-[#25D366]/50 text-xs uppercase tracking-wider py-3 px-6 flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" color="#25D366" />
                  <span>WhatsApp Master Rabbani</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Craftsmanship */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#f0f0f0]">
            <div className="bg-[#faf9f8] p-6 rounded-2xl border border-[#e8e6e3]">
              <div className="w-9 h-9 rounded-full bg-white border border-[#cd9834]/40 flex items-center justify-center text-[#cd9834] font-semibold text-xs mb-4">
                01
              </div>
              <h4 className="font-headline text-base font-medium text-[#222222] mb-2">
                Temple Deity Mukhavatas
              </h4>
              <p className="text-xs text-[#6f6f6d] leading-relaxed">
                Sacred Panchaloha idol restorations, crown kireedams, and ritual silver/gold kavachams adhering to devotional agamic purity.
              </p>
            </div>

            <div className="bg-[#faf9f8] p-6 rounded-2xl border border-[#e8e6e3]">
              <div className="w-9 h-9 rounded-full bg-white border border-[#cd9834]/40 flex items-center justify-center text-[#cd9834] font-semibold text-xs mb-4">
                02
              </div>
              <h4 className="font-headline text-base font-medium text-[#222222] mb-2">
                Digital Buffing &amp; Zero Loss
              </h4>
              <p className="text-xs text-[#6f6f6d] leading-relaxed">
                12,000 RPM precision muslin lathes with micro-capture chemical filters ensure flawless mirror shine with zero unrecoverable gold loss.
              </p>
            </div>

            <div className="bg-[#faf9f8] p-6 rounded-2xl border border-[#e8e6e3]">
              <div className="w-9 h-9 rounded-full bg-white border border-[#cd9834]/40 flex items-center justify-center text-[#cd9834] font-semibold text-xs mb-4">
                03
              </div>
              <h4 className="font-headline text-base font-medium text-[#222222] mb-2">
                Vitreous Peacock Meenakari
              </h4>
              <p className="text-xs text-[#6f6f6d] leading-relaxed">
                Hand-blended mineral glass enamel fired at 800°C gives temple jewellery and royal kadas lasting sapphire, ruby, and emerald luster.
              </p>
            </div>

            <div className="bg-[#faf9f8] p-6 rounded-2xl border border-[#e8e6e3]">
              <div className="w-9 h-9 rounded-full bg-white border border-[#cd9834]/40 flex items-center justify-center text-[#cd9834] font-semibold text-xs mb-4">
                04
              </div>
              <h4 className="font-headline text-base font-medium text-[#222222] mb-2">
                Machine Facet Cutting
              </h4>
              <p className="text-xs text-[#6f6f6d] leading-relaxed">
                Diamond-flywheel CNC faceting carves light-refracting geometric prisms onto 22K bangles, necklaces, and bridal waistbelts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
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

      {/* 6. Contact & Atelier Location Section */}
      <section id="contact" className="bg-[#f6f5f4] py-16 sm:py-24 border-t border-[#e8e6e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
              ATELIER LOCATION &amp; CONSULTATION
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-light text-[#222222] mb-4">
              Connect With Master Goldsmiths
            </h2>
            <p className="text-[#6f6f6d] text-sm sm:text-base font-normal leading-relaxed">
              Whether commissioning a one-of-a-kind temple necklace, scheduling high-volume commercial polishing, or visiting our workshop in Chinna Bazaar.
            </p>
          </div>

          {/* Contact Details & Inquiry Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left Column: Physical Workshop Info & Direct Reach */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e8e6e3] shadow-sm">
                <span className="text-[11px] font-semibold tracking-widest text-[#cd9834] uppercase block mb-2">
                  PHYSICAL WORKSHOP ADDRESS
                </span>
                <h3 className="font-headline text-xl sm:text-2xl font-medium text-[#222222] mb-3">
                  KGN.R Gold Finishing &amp; Designing Works
                </h3>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#333333] mb-4">
                  <MapPin className="w-5 h-5 text-[#cd9834] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#222222]">#19/156, N, R, N, complex, Korada Street,</p>
                    <p className="text-[#555555]">Chinna Bazaar, Nellore - 524 001,</p>
                    <p className="text-[#555555]">Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="border-t border-[#f0f0f0] pt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 text-[#333333]">
                    <Clock className="w-4 h-4 text-[#cd9834] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#222222] block">Operating Hours:</span>
                      <span className="text-[#6f6f6d]">Monday – Saturday: 10:00 AM – 9:00 PM</span><br />
                      <span className="text-[#6f6f6d]">Sunday: 11:00 AM – 5:00 PM (By Appointment)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#333333]">
                    <Phone className="w-4 h-4 text-[#cd9834] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#222222] block">Direct Workshop Phones:</span>
                      <span className="text-[#555555]">+91 94400 55996 / +91 93471 01857</span><br />
                      <span className="text-[#555555]">Shop Desk Landline: 095500 81300</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#333333]">
                    <Mail className="w-4 h-4 text-[#cd9834] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#222222] block">Official Email:</span>
                      <span className="text-[#555555]">{ATELIER_INFO.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/${ATELIER_INFO.phones[0].clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl border border-[#e8e6e3] hover:border-[#25D366] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="w-5 h-5" color="#25D366" />
                    <div>
                      <div className="text-[11px] text-[#6f6f6d]">Rabbani Shaik (Direct)</div>
                      <div className="font-medium text-xs text-[#222222]">{ATELIER_INFO.phones[0].number}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#25D366] font-medium group-hover:translate-x-0.5 transition-transform">
                    Chat &rarr;
                  </span>
                </a>

                <a
                  href={`https://wa.me/${ATELIER_INFO.phones[1].clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl border border-[#e8e6e3] hover:border-[#25D366] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="w-5 h-5" color="#25D366" />
                    <div>
                      <div className="text-[11px] text-[#6f6f6d]">Workshop Secondary</div>
                      <div className="font-medium text-xs text-[#222222]">{ATELIER_INFO.phones[1].number}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#25D366] font-medium group-hover:translate-x-0.5 transition-transform">
                    Chat &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Consultation Form */}
            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e8e6e3] shadow-sm">
                <span className="text-[11px] font-semibold tracking-widest text-[#cd9834] uppercase block mb-1">
                  INSTANT INQUIRY
                </span>
                <h3 className="font-headline text-xl sm:text-2xl font-medium text-[#222222] mb-4">
                  Request Master Consultation
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#444444] mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Venkat Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf9f8] border border-[#e0deda] rounded-lg text-xs text-[#222222] focus:outline-none focus:border-[#cd9834]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#444444] mb-1 font-medium">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#faf9f8] border border-[#e0deda] rounded-lg text-xs text-[#222222] focus:outline-none focus:border-[#cd9834]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#444444] mb-1 font-medium">Purity Preference</label>
                      <select
                        value={formData.karat}
                        onChange={(e) => setFormData({ ...formData, karat: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#faf9f8] border border-[#e0deda] rounded-lg text-xs text-[#222222] focus:outline-none focus:border-[#cd9834]"
                      >
                        <option value="22K (916 Hallmark)">22K (916 Standard)</option>
                        <option value="24K (Fine Bullion)">24K (Pure Bullion)</option>
                        <option value="18K (Diamond Jewellery)">18K (Diamond Setting)</option>
                        <option value="Silver / Platinum">Fine Silver / Platinum</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#444444] mb-1 font-medium">Service or Ornament Inquiry</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf9f8] border border-[#e0deda] rounded-lg text-xs text-[#222222] focus:outline-none focus:border-[#cd9834]"
                    >
                      <option value="Bespoke Gold Ornament">Bespoke 22K Gold Ornament</option>
                      <option value="Temple Idol & Mukhavata Restoration">Temple Idol &amp; Mukhavata Restoration</option>
                      <option value="Zero Gold Loss Digital Buffing">Zero Gold Loss Digital Buffing</option>
                      <option value="Imperial Meenakari & Enamel">Imperial Meenakari &amp; Enamel</option>
                      <option value="Machine Cutting & Faceting">Machine Cutting &amp; Faceting</option>
                      <option value="Commercial Jeweller High-Volume Finishing">Commercial High-Volume Bench Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#444444] mb-1 font-medium">Details / Message (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Mention expected gram weight, sacred idol dimensions, or specific design requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#faf9f8] border border-[#e0deda] rounded-lg text-xs text-[#222222] focus:outline-none focus:border-[#cd9834]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full buick-pill-dark text-xs uppercase tracking-wider py-3.5 flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" color="#25D366" />
                    <span>Send Consultation via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="bg-white rounded-2xl border border-[#e8e6e3] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-semibold tracking-widest text-[#cd9834] uppercase block mb-2">
                  WORKSHOP NAVIGATION
                </span>
                <h3 className="font-headline text-xl sm:text-2xl font-medium text-[#222222] mb-3">
                  Visit KGN.R in Chinna Bazaar
                </h3>
                <p className="text-xs sm:text-sm text-[#6f6f6d] leading-relaxed mb-4">
                  Located right in the heart of Nellore’s celebrated goldsmith lane on Korada Street. Walk-ins welcome during working hours.
                </p>
                <div className="space-y-2 text-xs text-[#333333]">
                  <p><strong>Landmark:</strong> N, R, N, complex, Korada Street</p>
                  <p><strong>District:</strong> SPSR Nellore, Andhra Pradesh</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.google.com/maps/place/14%C2%B027'15.8%22N+79%C2%B058'45.5%22E/@14.4543889,79.9792917,643m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d14.4543889!4d79.9792917?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buick-pill-primary text-xs uppercase tracking-wider py-3 px-5 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#cd9834]" />
                  <span>Get Google Maps Directions</span>
                </a>

                <a
                  href={`https://wa.me/${primaryWhatsApp}?text=Hello%20Master%20Rabbani%20Shaik%2C%20I%20would%20like%20directions%20to%20visit%20your%20workshop%20in%20Chinna%20Bazaar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buick-pill-dark text-xs uppercase tracking-wider py-3 px-5 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" color="#25D366" />
                  <span>WhatsApp Location</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-[380px] sm:h-[440px] lg:h-full min-h-[380px] relative bg-[#e8e6e3]">
              <iframe
                title="KGN.R Workshop Location Map"
                src="https://maps.google.com/maps?q=14.4543889,79.9792917&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
