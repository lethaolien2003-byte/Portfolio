import React, { useState, useEffect } from 'react';
import { Petals3DCanvas } from './components/3d/Petals3DCanvas.tsx';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { VideoModal } from './components/common/VideoModal.tsx';
import { PhotoLightboxModal } from './components/common/PhotoLightboxModal.tsx';
import { NavPage, VlogReelItem } from './types/portfolio.ts';

// Dedicated Sub-Sites / Pages
import { HomePage } from './pages/HomePage.tsx';
import { VideoReelsPage } from './pages/VideoReelsPage.tsx';
import { PhotoDiaryPage } from './pages/PhotoDiaryPage.tsx';
import { RoadmapPage } from './pages/RoadmapPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export const App: React.FC = () => {
  const getPageFromHash = (): NavPage => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const validPages: NavPage[] = ['home', 'video-reels', 'photo-diary', 'roadmap', 'services', 'contact'];
    if (validPages.includes(hash as NavPage)) {
      return hash as NavPage;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<NavPage>(getPageFromHash);
  const [selectedReel, setSelectedReel] = useState<VlogReelItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption?: string; location?: string } | null>(null);

  // Synchronize state with browser hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* 3D Floating Matcha Leaves & Sakura Petals Canvas */}
      <Petals3DCanvas />

      {/* Floating Pill Header Navigation with Site-Switching */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content: Switches to Dedicated Site Views on Menu Click */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectPhoto={(p) => setSelectedPhoto(p)} 
            onSelectReel={(r) => setSelectedReel(r)} 
          />
        )}

        {currentPage === 'video-reels' && (
          <VideoReelsPage 
            onNavigate={handleNavigate} 
            onSelectReel={(r) => setSelectedReel(r)} 
          />
        )}

        {currentPage === 'photo-diary' && (
          <PhotoDiaryPage 
            onNavigate={handleNavigate} 
            onSelectPhoto={(p) => setSelectedPhoto(p)} 
          />
        )}

        {currentPage === 'roadmap' && (
          <RoadmapPage 
            onNavigate={handleNavigate} 
            onSelectPhoto={(p) => setSelectedPhoto(p)} 
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Shared Footer with Sub-Site Links */}
      <Footer onNavigate={handleNavigate} />

      {/* Vertical Vlog Reel Video Modal */}
      <VideoModal 
        reel={selectedReel} 
        onClose={() => setSelectedReel(null)} 
      />

      {/* Interactive Photo Lightbox Modal */}
      <PhotoLightboxModal 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </div>
  );
};

export default App;
