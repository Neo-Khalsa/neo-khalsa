import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { ProjectsPage } from './pages/ProjectsPage';
import { MissionPage } from './pages/MissionPage';
import { OperationPage } from './pages/OperationPage';
// import { DisciplinePage } from './pages/DisciplinePage';
import { ContactPage } from './pages/ContactPage';
import logoImage from '../assets/75c40697214f907eef38b05581e8d850d6220130.png';
import projectImage1 from "../assets/9db7de1cffccd7b3bcecbc3271c23d56717dcbc4.png";
import logoImageProjects from '../assets/84335e1f178065509e21c16077749e55474b40ec.png';
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

  // Preload critical images with better performance
  useEffect(() => {
    // Preload Neo Khalsa Koans image
    const link1 = document.createElement('link');
    link1.rel = 'preload';
    link1.as = 'image';
    link1.href = projectImage1;
    link1.fetchPriority = 'high';
    document.head.appendChild(link1);
    
    // Preload logo image for projects page
    const link2 = document.createElement('link');
    link2.rel = 'preload';
    link2.as = 'image';
    link2.href = logoImageProjects;
    link2.fetchPriority = 'high';
    document.head.appendChild(link2);
    
    // Also preload using Image object as fallback
    const img1 = new Image();
    img1.src = projectImage1;
    
    const img2 = new Image();
    img2.src = logoImageProjects;
    
    return () => {
      if (document.head.contains(link1)) document.head.removeChild(link1);
      if (document.head.contains(link2)) document.head.removeChild(link2);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation isAtTop={isAtTop} />
        
        <Routes>
          <Route path="/" element={<MissionPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/operation" element={<OperationPage />} />
          {/* <Route path="/discipline" element={<DisciplinePage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Corner Labels */}
        <div className={`hidden md:flex fixed top-8 left-8 z-40 items-center gap-4 transition-opacity duration-300 ${
          isAtTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <img src={logoImage} alt="Neo Khalsa" className="h-8 w-auto opacity-95" />
          <span className="text-xs tracking-[0.2em] opacity-20 font-mono">NEO KHALSA</span>
        </div>
        <div className="hidden md:block fixed bottom-8 left-8 text-xs tracking-[0.2em] opacity-20 z-40 font-mono">
          2026
        </div>
        
        {/* Mobile Bottom Label */}
        <div className="md:hidden fixed bottom-4 left-4 text-xs tracking-[0.2em] opacity-20 z-40 font-mono">
          2026
        </div>
      </div>
    </BrowserRouter>
  );
}