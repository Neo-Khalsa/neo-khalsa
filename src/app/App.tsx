import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { MissionPage } from './pages/MissionPage';
import { OperationPage } from './pages/OperationPage';
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
          <Route path="/operation"  element={<OperationPage />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
