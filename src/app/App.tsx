import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SpacesPage } from './pages/SpacesPage';
import { MissionPage } from './pages/MissionPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/mission"    element={<MissionPage />} />
          <Route path="/projects"   element={<ProjectsPage />} />
          <Route path="/spaces"     element={<SpacesPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          {/* legacy path redirect */}
          <Route path="/operation"  element={<Navigate to="/get-involved" replace />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
