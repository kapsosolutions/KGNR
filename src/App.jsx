import React, { useState } from 'react';
import GoldRateBar from './components/GoldRateBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductModal from './components/ProductModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedOrnament, setSelectedOrnament] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] font-sans selection:bg-[#cd9834]/20 selection:text-[#cd9834] relative">
      {/* 1. Live Precious Metal Rate Ticker Bar */}
      <GoldRateBar />

      {/* 2. Buick Top Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* 3. Main Page Routing Container */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <Home 
            setActivePage={setActivePage} 
            onSelectOrnament={(ornament) => setSelectedOrnament(ornament)} 
          />
        )}

        {activePage === 'collection' && (
          <Collection 
            setActivePage={setActivePage}
            onSelectOrnament={(ornament) => setSelectedOrnament(ornament)} 
          />
        )}

        {activePage === 'services' && (
          <Services 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'about' && (
          <About 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* 4. Buick Charcoal 4-Column Footer */}
      <Footer setActivePage={setActivePage} />

      {/* 5. Buick 16px Product Quick View Modal */}
      {selectedOrnament && (
        <ProductModal 
          ornament={selectedOrnament} 
          onClose={() => setSelectedOrnament(null)} 
        />
      )}

      {/* 6. Universal Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
