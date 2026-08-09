import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Cursor } from './components/Cursor';
import { CanvasBackground } from './components/CanvasBackground';
import { Navbar } from './components/Navbar';
import { MenuOverlay } from './components/MenuOverlay';
import { Footer } from './components/Footer';
import { EstimatorModal } from './components/EstimatorModal';
import { ProjectModal, type ProjectData } from './components/ProjectModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'services':
        return <ServicesPage onOpenEstimator={() => setIsEstimatorOpen(true)} />;
      case 'projects':
        return (
          <ProjectsPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        );
    }
  };

  return (
    <div className="relative bg-white text-black font-sans min-h-screen">
      {/* Custom Magnetic Cursor */}
      <Cursor />

      {/* WebGL Canvas Background */}
      <CanvasBackground />

      {/* Floating Header */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Fullscreen Overlay Menu */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Dynamic View Page */}
      <main className="relative z-10">
        {renderActivePage()}
      </main>

      {/* Shared Kinetic Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Estimator Modal */}
      <EstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />
    </div>
  );
};

export default App;
