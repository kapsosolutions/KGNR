import React, { useState, useMemo } from 'react';
import { ORNAMENTS, CATEGORIES, ATELIER_INFO } from '../data/ornamentsData';
import OrnamentCard from '../components/OrnamentCard';
import EstimatorWidget from '../components/EstimatorWidget';
import { Search, Sparkles, MessageCircle } from 'lucide-react';

export default function Collection({ onSelectOrnament, setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [karatFilter, setKaratFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredOrnaments = useMemo(() => {
    return ORNAMENTS.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.craftsmanship.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesKarat = karatFilter === 'all' || item.karat.includes(karatFilter);
      return matchesCat && matchesSearch && matchesKarat;
    }).sort((a, b) => {
      if (sortBy === 'weight-asc') return a.weightGrams - b.weightGrams;
      if (sortBy === 'weight-desc') return b.weightGrams - a.weightGrams;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, karatFilter, sortBy]);

  const primaryWhatsApp = ATELIER_INFO.phones[0].clean;

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
            THE SACRED REPOSITORY
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-light text-[#222222] mb-4">
            Master Goldsmithing Collection
          </h1>
          <p className="text-sm sm:text-base text-[#6f6f6d] leading-relaxed">
            Every piece is cast in certified 22K/24K hallmark bullion, hand-chased with sacred iconography, and finished with KGN.R’s proprietary digital electro-buffing.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#222222] text-white border border-[#222222]'
                    : 'bg-[#f6f5f4] text-[#333333] border border-[#e8e6e3] hover:border-[#cd9834]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search, Karat Filter, and Sort Controls */}
        <div className="bg-[#faf9f8] p-4 rounded-xl border border-[#f0f0f0] mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#6f6f6d] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search ornaments, temple idols, meenakari..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-[#e0deda] text-xs text-[#222222] placeholder-[#a0a09e] focus:outline-none focus:border-[#cd9834]"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6f6f6d] hidden sm:inline">Purity:</span>
              <select
                value={karatFilter}
                onChange={(e) => setKaratFilter(e.target.value)}
                className="bg-white border border-[#e0deda] rounded-lg px-3 py-2 text-xs text-[#222222] focus:outline-none focus:border-[#cd9834]"
              >
                <option value="all">All Karats</option>
                <option value="22K">22K (916)</option>
                <option value="24K">24K Bullion</option>
                <option value="18K">18K Jewelry</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6f6f6d] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#e0deda] rounded-lg px-3 py-2 text-xs text-[#222222] focus:outline-none focus:border-[#cd9834]"
              >
                <option value="featured">Curated Order</option>
                <option value="weight-asc">Weight: Low to High</option>
                <option value="weight-desc">Weight: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Ornaments Results Grid */}
        {filteredOrnaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredOrnaments.map((ornament) => (
              <OrnamentCard
                key={ornament.id}
                ornament={ornament}
                onSelect={onSelectOrnament}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#f6f5f4] rounded-2xl border border-dashed border-[#cd9834]/40 mb-16 p-8">
            <Sparkles className="w-8 h-8 text-[#cd9834] mx-auto mb-3" />
            <h3 className="font-headline text-xl text-[#222222] mb-2">No ornaments match your filter</h3>
            <p className="text-xs text-[#6f6f6d] mb-4">Try resetting your search query or karat selection</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setKaratFilter('all');
              }}
              className="buick-pill-dark text-xs py-2 px-6"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Order Banner */}
        <div className="bg-[#222222] text-white rounded-2xl border border-[#cd9834] p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block">
                CANNOT FIND YOUR DREAM DESIGN?
              </span>
              <h2 className="font-headline text-3xl font-light text-white">
                Bespoke 3D CAD &amp; Hand-Chased Orders
              </h2>
              <p className="text-sm text-[#a0a09e] leading-relaxed">
                Bring your family heirloom, reference photo, or sacred temple sketch. Master Rabbani Shaik transforms your vision into an authenticated 22K hallmarked masterpiece within 7–14 days.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${primaryWhatsApp}?text=Hello%20Master%20Rabbani%20Shaik%2C%20I%20have%20a%20custom%20ornament%20design%20to%20commission.`}
                target="_blank"
                rel="noopener noreferrer"
                className="buick-pill-primary text-xs uppercase tracking-wider py-3.5 justify-center"
              >
                <MessageCircle className="w-4 h-4 text-[#cd9834]" />
                <span>Submit Custom Design on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="buick-pill-gold-outline text-xs uppercase tracking-wider py-3.5 justify-center text-white border-[#cd9834] hover:bg-[#cd9834]"
              >
                <span>Visit Nellore Workshop</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <EstimatorWidget />
        </div>
      </div>
    </div>
  );
}
