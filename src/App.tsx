import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SplashScreen } from './components/SplashScreen';
import { AdminPanel } from './components/AdminPanel';
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Testimonials } from "./components/Testimonials";
import { Reservation } from "./components/Reservation";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentView, setCurrentView] = useState('website'); // 'website' or 'admin'

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowMainContent(true);
    }, 100);
  };

  // Optional: Skip splash on subsequent visits
  useEffect(() => {
    const hasVisited = localStorage.getItem('vintage-brew-visited');
    if (hasVisited) {
      setShowSplash(false);
      setShowMainContent(true);
    } else {
      localStorage.setItem('vintage-brew-visited', 'true');
    }

    // Check URL for admin route
    const path = window.location.pathname;
    if (path.includes('/admin')) {
      setCurrentView('admin');
    }
  }, []);

  // URL routing simulation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentView(path.includes('/admin') ? 'admin' : 'website');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  // Admin Panel View
  if (currentView === 'admin') {
    return <AdminPanel />;
  }

  // Main Website View
  return (
    <motion.div 
      className="min-h-screen bg-[#FAF7F2]"
      initial={{ opacity: 0 }}
      animate={showMainContent ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <Reservation />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {/* Admin Access Button (for demo) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => {
            setCurrentView('admin');
            window.history.pushState({}, '', '/admin');
          }}
          className="bg-[#6B4F37] hover:bg-[#6B4F37]/90 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm"
          style={{ fontFamily: 'Inter' }}
        >
          🔐 Admin Panel
        </button>
      </div>
    </motion.div>
  );
}