import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideosPage from './pages/VideosPage';
import AdminPanel from './pages/AdminPanel';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (hash === '#admin' || path === '/admin') return 'admin';
    if (hash === '#videos' || path === '/videos') return 'videos';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin') setCurrentPage('admin');
      else if (hash === '#videos') setCurrentPage('videos');
      else setCurrentPage('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'admin') {
    return (
      <AdminPanel 
        onNavigateHome={() => navigateTo('home')} 
        onNavigateToVideos={() => navigateTo('videos')} 
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] font-sans selection:bg-[#cd9834]/20 selection:text-[#cd9834] relative">
      {/* 1. Atelier Top Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        currentPage={currentPage}
        setCurrentPage={navigateTo}
      />

      {/* 2. Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'videos' ? (
          <VideosPage 
            onNavigateHome={() => navigateTo('home')} 
            onNavigateToAdmin={() => navigateTo('admin')} 
          />
        ) : (
          <Home 
            setActiveSection={setActiveSection} 
            onNavigateToVideos={() => navigateTo('videos')} 
          />
        )}
      </main>

      {/* 3. Buick Charcoal 4-Column Footer */}
      <Footer 
        setActivePage={navigateTo} 
        onNavigateToVideos={() => navigateTo('videos')}
        onNavigateToAdmin={() => navigateTo('admin')}
      />

      {/* 4. Universal Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
