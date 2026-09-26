import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Lock } from 'lucide-react';

export default function Navbar({ activeSection = 'home', setActiveSection, currentPage = 'home', setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (currentPage !== 'home') return;

      // Scrollspy detection
      const sections = ['home', 'collection', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSection(id);
          if (setActiveSection) setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection, currentPage]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'collection', label: 'Collection' },
    { id: 'videos', label: 'Videos' },
    { id: 'about', label: 'About Atelier' },
    { id: 'contact', label: 'Contact & Visit' },
  ];

  const handleNav = (id) => {
    setCurrentSection(id);
    if (setActiveSection) setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === 'videos') {
      if (setCurrentPage) setCurrentPage('videos');
      window.location.hash = 'videos';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'admin') {
      if (setCurrentPage) setCurrentPage('admin');
      window.location.hash = 'admin';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      if (setCurrentPage) setCurrentPage('home');
      window.location.hash = '';
      setTimeout(() => {
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
      }, 100);
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70; // offset for sticky navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
      isScrolled ? 'border-b border-[#f0f0f0] shadow-sm' : 'border-b-0 shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 text-left group focus:outline-none flex-shrink-0"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-[#faf9f8] rounded-full p-1 border border-[#cd9834]/40 flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src="/assets/logo.png" 
                alt="KGN.R Gold Finishing &amp; Designing Works" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-headline text-xl sm:text-2xl font-semibold tracking-wider text-[#222222]">
                  KGN<span className="text-[#cd9834]">.</span>R
                </span>
                <span className="hidden xl:inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#cd9834] border border-[#cd9834]/40 bg-[#faf9f8] rounded-full">
                  Since 2000
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6f6f6d] font-normal whitespace-nowrap">
                Gold Finishing &amp; Designing Works
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links - Single Line */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-5 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = (currentSection || activeSection) === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`whitespace-nowrap px-3.5 xl:px-4 py-2 text-[14px] xl:text-[15px] transition-all relative ${
                    isActive
                      ? 'text-[#222222] font-semibold'
                      : 'text-[#444444] font-normal hover:text-[#cd9834]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#cd9834] transition-all"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA (Admin & Consult Artisan) */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={() => handleNav('admin')}
              className="px-3 py-2 text-xs uppercase tracking-wider text-[#6f6f6d] hover:text-[#cd9834] transition-colors flex items-center gap-1.5 rounded-lg border border-[#e5e3df] hover:border-[#cd9834]"
              title="Admin Panel"
            >
              <Lock className="w-3 h-3 text-[#cd9834]" />
              <span>Admin</span>
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="buick-pill-dark text-xs uppercase tracking-wider py-2.5 px-6 flex items-center gap-1.5 whitespace-nowrap shadow-sm hover:scale-105 transition-transform"
            >
              <span>Consult Artisan</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#222222] hover:text-[#cd9834] rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#f0f0f0] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = (currentSection || activeSection) === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-base ${
                  isActive
                    ? 'bg-[#f6f5f4] text-[#222222] font-semibold border-l-4 border-[#cd9834]'
                    : 'text-[#444444] hover:bg-[#f6f5f4]'
                }`}
              >
                <span className="whitespace-nowrap">{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#cd9834]' : 'text-gray-400'}`} />
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#f0f0f0] space-y-2">
            <button
              onClick={() => handleNav('admin')}
              className="w-full py-2.5 px-4 rounded-lg bg-[#faf9f8] border border-[#e5e3df] text-[#6f6f6d] hover:text-[#cd9834] text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5 text-[#cd9834]" />
              <span>Admin Portal Login</span>
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="w-full buick-pill-dark text-xs tracking-wider uppercase py-3 justify-center"
            >
              <span>Consult Artisan</span>
            </button>
            <div className="text-center text-xs text-[#6f6f6d] pt-3">
              <span>Chinna Bazaar, Nellore • Shop: 095500 81300</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
