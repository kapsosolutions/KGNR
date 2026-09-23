import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] font-sans selection:bg-[#cd9834]/20 selection:text-[#cd9834] relative">
      {/* 1. Buick Top Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 2. Main Unified Single Page */}
      <main className="flex-grow">
        <Home setActiveSection={setActiveSection} />
      </main>

      {/* 3. Buick Charcoal 4-Column Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* 4. Universal Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
