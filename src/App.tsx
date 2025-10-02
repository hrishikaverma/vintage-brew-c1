import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SplashScreen } from './components/SplashScreen';
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
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

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
    </motion.div>
  );
}