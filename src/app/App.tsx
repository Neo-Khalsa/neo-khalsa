import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { MissionPage } from './pages/MissionPage';
import { OperationPage } from './pages/OperationPage';
import { ContactPage } from './pages/ContactPage';
import logoImage from '../assets/75c40697214f907eef38b05581e8d850d6220130.webp';
import { useState, useEffect } from 'react';

export default function App() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsAtTop(window.scrollY < 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation isAtTop={isAtTop} />

        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/mission"    element={<MissionPage />} />
          <Route path="/projects"   element={<ProjectsPage />} />
          <Route path="/operation"  element={<OperationPage />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>

        {/* Corner label — desktop only, shown when at top */}
        <div className={`hidden md:flex fixed top-8 left-8 z-40 items-center gap-4 transition-opacity duration-300 ${
          isAtTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <img src={logoImage} alt="Neo Khalsa" className="h-8 w-auto opacity-95" />
          <span className="text-xs tracking-[0.2em] opacity-20 font-mono">NEO KHALSA</span>
        </div>
        <div className="hidden md:block fixed bottom-8 left-8 text-xs tracking-[0.2em] opacity-20 z-40 font-mono">
          2026
        </div>
        <div className="md:hidden fixed bottom-4 left-4 text-xs tracking-[0.2em] opacity-20 z-40 font-mono">
          2026
        </div>
      </div>
    </BrowserRouter>
  );
}
