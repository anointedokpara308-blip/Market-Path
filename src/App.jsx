import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import TickerBar from './components/TickerBar';
import Footer from './components/Footer';
import SearchDialog from './components/SearchDialog';
import ArticleModal from './components/ArticleModal';

import Hero from './modules/Hero';
import LearningRoadmap from './modules/LearningRoadmap';
import CalculatorsSuite from './modules/CalculatorsSuite';
import BrokerMatrix from './modules/BrokerMatrix';
import InsightsArticles from './modules/InsightsArticles';
import RiskQuiz from './modules/RiskQuiz';
import StarterToolkit from './modules/StarterToolkit';

import RoadmapPage from './pages/RoadmapPage';
import ModuleDetailPage from './pages/ModuleDetailPages';
import KnowledgeCenterPage from './pages/KnowledgeCenterPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AffiliateDisclosure from './pages/AffiliateDisclosure';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white flex flex-col font-sans selection:bg-emerald-500 selection:text-navy-900">
      
      {/* Scroll to Top Trigger */}
      <ScrollToTop />

      {/* Top Fixed / Sticky Navigation */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Page Routing */}
      <Routes>
        {/* Main Landing Page Body */}
        <Route
          path="/"
          element={
            <main className="flex-grow">
              {/* Hero Banner Section */}
              <Hero />

              {/* Live Interbank Ticker Feed
              <TickerBar /> */}

              {/* Step-by-Step Learning Curriculum */}
              <LearningRoadmap />

              {/* Dynamic Fintech Position & Risk Calculators */}
              <CalculatorsSuite />

              {/* Regulated Broker Matrix & Reviews */}
              <BrokerMatrix />

              {/* Knowledge Articles & Insights */}
              <InsightsArticles onSelectArticle={(article) => setSelectedArticle(article)} />

              {/* Interactive Risk Diagnostic Quiz */}
              <RiskQuiz />

              {/* Starters Toolkit */}
              <StarterToolkit />
            </main>
          }
        />

        {/* Full Curriculum Directory Page */}
        <Route path="/roadmap" element={<RoadmapPage />} />

        {/* Individual Module Detail Page */}
        <Route path="/roadmap/:slug" element={<ModuleDetailPage />} />

        {/* Knowledge Center Articles Page */}
        <Route path="/knowledge" element={<KnowledgeCenterPage onSelectArticle={(article) => setSelectedArticle(article)} />} />

        {/* New Support Routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
      </Routes>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Global Modals & Dialogs */}
      <SearchDialog 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

    </div>
  );
}