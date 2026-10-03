import React, { useState, useEffect } from 'react';
import { Petals3DCanvas } from './components/3d/Petals3DCanvas.tsx';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { VideoModal } from './components/common/VideoModal.tsx';
import { PhotoLightboxModal } from './components/common/PhotoLightboxModal.tsx';
import { NavPage, VlogReelItem } from './types/portfolio.ts';

// Dedicated Sub-Sites / Pages
import { HomePage } from './pages/HomePage.tsx';
import { TikTokChannelsPage } from './pages/TikTokChannelsPage.tsx';
import { ContentFacebookPage } from './pages/ContentFacebookPage.tsx';
import { VideoUGCPage } from './pages/VideoUGCPage.tsx';
import { MarketingPlanPage } from './pages/MarketingPlanPage.tsx';
import { ContentAdsPage } from './pages/ContentAdsPage.tsx';
import { DesignAIPage } from './pages/DesignAIPage.tsx';
import { CategoryPlaceholderPage } from './pages/CategoryPlaceholderPage.tsx';

export const App: React.FC = () => {
  const getPageFromHash = (): NavPage => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const validPages: NavPage[] = [
      'home', 
      'tiktok', 
      'video-reels', 
      'video-ugc', 
      'marketing-plan', 
      'ads', 
      'design-ai'
    ];
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
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Luôn cuộn lên đầu trang ngay lập tức khi chuyển danh mục
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Đảm bảo cuộn lên đầu cả khi component mới hoàn tất render
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* 3D Floating Matcha Leaves & Sakura Petals Canvas */}
      <Petals3DCanvas />

      {/* Floating Pill Header Navigation with 9 Categories */}
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

        {currentPage === 'tiktok' && (
          <TikTokChannelsPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'video-reels' && (
          <ContentFacebookPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'video-ugc' && (
          <VideoUGCPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'marketing-plan' && (
          <MarketingPlanPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'ads' && (
          <ContentAdsPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'design-ai' && (
          <DesignAIPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage !== 'home' && 
         currentPage !== 'tiktok' && 
         currentPage !== 'video-reels' && 
         currentPage !== 'video-ugc' && 
         currentPage !== 'marketing-plan' && 
         currentPage !== 'ads' && 
         currentPage !== 'design-ai' && (
          <CategoryPlaceholderPage 
            pageId={currentPage} 
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
