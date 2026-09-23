import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'collection', label: 'Collection' },
    { id: 'services', label: 'Digital Finishing' },
    { id: 'about', label: 'About Atelier' },
    { id: 'contact', label: 'Contact & Visit' },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 text-left group focus:outline-none flex-shrink-0"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-white rounded-full p-1 border border-[#cd9834]/30 flex items-center justify-center transition-transform group-hover:scale-105">
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
                <span className="hidden xl:inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#cd9834] border border-[#cd9834]/40 rounded-full">
                  Since 2000
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6f6f6d] font-normal whitespace-nowrap">
                Gold Finishing &amp; Designing Works
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links - Single Line */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`whitespace-nowrap px-3.5 xl:px-4 py-2 text-[14px] xl:text-[15px] font-normal transition-all relative ${
                    isActive
                      ? 'text-[#222222] font-semibold'
                      : 'text-[#444444] hover:text-[#cd9834]'
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

          {/* Right Action CTA (Consult Artisan button only) */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              onClick={() => handleNav('contact')}
              className="buick-pill-dark text-xs uppercase tracking-wider py-2.5 px-6 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Consult Artisan</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#222222] rounded-lg focus:outline-none"
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
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-base ${
                  isActive
                    ? 'bg-[#f6f5f4] text-[#222222] font-semibold border-l-4 border-[#cd9834]'
                    : 'text-[#333333] hover:bg-[#f6f5f4]'
                }`}
              >
                <span className="whitespace-nowrap">{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#cd9834]' : 'text-gray-300'}`} />
              </button>
            );
          })}

          <div className="pt-4 border-t border-[#f0f0f0]">
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
