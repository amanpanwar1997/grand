import { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AnimatedCursor } from './components/AnimatedCursor';
import { PageTransition } from './components/ui/PageTransition';
import { PWAInstallPrompt, IOSInstallInstructions } from './components/ui/PWAInstallPrompt';
import { LenisScroll } from './components/ui/LenisScroll';
import { CursorSpotlight } from './components/ui/CursorSpotlight';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CodeProtection } from './components/ui/CodeProtection';
import { initRoutePreloader, preloadAllRoutes } from './utils/routePreloader';
import { registerServiceWorker } from './utils/pwaInstaller';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('./components/pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./components/pages/ServiceDetailPage').then(module => ({ default: module.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('./components/pages/IndustriesPage').then(module => ({ default: module.IndustriesPage })));
const IndustryDetailPage = lazy(() => import('./components/pages/IndustryDetailPage').then(module => ({ default: module.IndustryDetailPage })));
const BlogsPage = lazy(() => import('./components/pages/BlogsPage').then(module => ({ default: module.BlogsPage })));
const BlogDetailPage = lazy(() => import('./components/pages/BlogDetailPage').then(module => ({ default: module.BlogDetailPage })));
const FAQsPage = lazy(() => import('./components/pages/FAQsPage').then(module => ({ default: module.FAQsPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(module => ({ default: module.ContactPage })));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const AIChatbot = lazy(() => import('./components/AIChatbot').then(module => ({ default: module.AIChatbot })));

// Loading component - Fast, minimal skeleton
function PageLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div 
          className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full"
          style={{
            animation: 'spin 0.6s linear infinite',
            willChange: 'transform'
          }}
        />
        <p className="text-white/60 text-sm">Loading...</p>
      </div>
    </div>
  );
}

// Add spin keyframes if not in CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Main routes wrapper with transition
function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:category/:slug" element={<BlogDetailPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // ⚡ PERFORMANCE: Initialize route preloader
  useEffect(() => {
    // Start preloading routes on link hover
    const cleanup = initRoutePreloader();

    // Preload all routes after initial page load
    preloadAllRoutes();

    return cleanup;
  }, []);

  // 📱 PWA: Register service worker
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }
  }, []);



  return (
    <Router>
      <LenisScroll>
        <div className="min-h-screen text-white flex flex-col select-none">
          {/* ⚠️ REMOVED bg-black - Using body background with grid pattern from globals.css */}
          
          {/* 🔒 CODE PROTECTION - Bot-Friendly (Allows Googlebot/Bingbot) */}
          <CodeProtection />
          
          {/* ⭐ PREMIUM VISUAL ENHANCEMENTS ⭐ */}
          {/* Animated Cursor Trail - Desktop Only */}
          <AnimatedCursor />
          
          {/* Cursor Spotlight Effect (Enhancement #2) */}
          <CursorSpotlight />
          
          {/* Scroll Progress Indicators (Enhancement #5) */}
          <ScrollProgress />
          
          <Navigation />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <AppRoutes />
            </Suspense>
          </main>
          <Footer />

        {/* AI Chatbot - Lazy loaded */}
        {chatbotOpen && (
          <Suspense fallback={null}>
            <AIChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
          </Suspense>
        )}

        {/* PWA Install Prompts */}
        <PWAInstallPrompt />
        <IOSInstallInstructions />

        {/* Floating Chatbot Button */}
        {!chatbotOpen && (
          <button
            onClick={() => setChatbotOpen(true)}
            className="fixed bottom-6 right-6 z-[9000] bg-yellow-500 hover:bg-yellow-400 text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Open AI Chatbot"
            style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.5)',
            }}
          >
            <Bot className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                Chat with us! 💬
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
              </div>
            </div>
          </button>
        )}
        </div>
      </LenisScroll>
    </Router>
  );
}
