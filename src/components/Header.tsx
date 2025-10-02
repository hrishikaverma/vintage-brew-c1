import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Phone, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'reservation', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Coffee },
    { id: 'menu', label: 'Menu', icon: Coffee },
    { id: 'reservation', label: 'Reservation', icon: Clock },
    { id: 'about', label: 'About', icon: Coffee },
    { id: 'contact', label: 'Contact', icon: MapPin },
  ];

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-lg border-b border-[#CBB89D]/40' 
          : 'bg-[#FAF7F2] shadow-md border-b border-[#CBB89D]/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="relative w-12 h-12 bg-gradient-to-br from-[#6B4F37] to-[#8B6F47] rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Coffee className="text-[#FAF7F2] w-6 h-6" />
              <motion.div 
                className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h1 className="text-2xl text-[#6B4F37] font-semibold tracking-tight" style={{ fontFamily: 'Playfair Display' }}>
                Vintage Brew
              </h1>
              <p className="text-sm text-[#8DA399] -mt-1" style={{ fontFamily: 'Inter' }}>
                Café
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'text-[#FAF7F2] bg-[#6B4F37] shadow-md'
                    : 'text-[#6B4F37] hover:text-[#8DA399] hover:bg-[#CBB89D]/20'
                }`}
                style={{ fontFamily: 'Inter' }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-6 h-1 bg-[#D4AF37] rounded-full"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ x: '-50%' }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Desktop CTA */}
            <motion.div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('reservation')}
                className="bg-[#D4AF37] text-[#6B4F37] hover:bg-[#E5C048] shadow-lg px-6 py-2 rounded-full transition-all duration-300"
                style={{ fontFamily: 'Inter' }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Table
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#6B4F37]/10 text-[#6B4F37]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-6 border-t border-[#CBB89D]/30 bg-gradient-to-b from-transparent to-[#FAF7F2]">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-[#FAF7F2] bg-[#6B4F37] shadow-md'
                          : 'text-[#6B4F37] hover:text-[#8DA399] hover:bg-[#CBB89D]/20'
                      }`}
                      style={{ fontFamily: 'Inter' }}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-[#D4AF37] rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      )}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    className="pt-4 mt-4 border-t border-[#CBB89D]/30"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <Button
                      onClick={() => scrollToSection('reservation')}
                      className="w-full bg-[#D4AF37] text-[#6B4F37] hover:bg-[#E5C048] shadow-lg py-3 rounded-xl"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Book Your Table
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}