import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ResourcesPage } from './components/ResourcesPage';
import { InterventionPage } from './components/InterventionPage';
import { TrainingPage } from './components/TrainingPage';
import { PostersPage } from './components/PostersPage';
import { Footer } from './components/Footer';
import CookieBanner from "./components/CookieBanner";
import { QuickExitButton } from './components/QuickExitButton';
import { ScrollToTop } from './components/ScrollToTop';
import MentionsLegales from "./components/MentionsLegales";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] flex flex-col">
      <CookieBanner />
      <QuickExitButton />
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" replace />} />
          <Route path="/accueil" element={<HomePage />} />
          <Route path="/ressources" element={<ResourcesPage />} />
          <Route path="/intervention" element={<InterventionPage />} />
          <Route path="/formations" element={<TrainingPage />} />
          <Route path="/medias" element={<PostersPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<div className="p-8 text-center">Page introuvable</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}