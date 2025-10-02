import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';   // ✅ FIXED
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coffee, Star, Users, Clock, Award, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1618798566857-9941daaa6254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Rustic coffee shop interior"
    },
    {
      src: "https://images.unsplash.com/photo-1719547898868-3a00906413a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Vintage coffee shop atmosphere"
    },
    {
      src: "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Cozy cafe warm lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1649015005325-ea8d33599d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Coffee beans and espresso"
    },
    {
      src: "https://images.unsplash.com/photo-1586864030218-6885c4d16684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Coffee shop counter and barista"
    },
    {
      src: "https://images.unsplash.com/photo-1569387623950-11c5f5be2f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Artisan coffee roasting"
    }
  ];

  const features = [
    { icon: Star, label: "4.9/5 Rating", value: "500+ Reviews" },
    { icon: Users, label: "Happy Customers", value: "2000+" },
    { icon: Clock, label: "Open Daily", value: "7AM - 11PM" },
    { icon: Award, label: "Award Winning", value: "Best Coffee 2024" }
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, heroImages.length]);

  // Mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#FAF7F2] via-[#F5F2ED] to-[#CBB89D]/20"
        animate={{
          background: [
            "linear-gradient(135deg, #FAF7F2 0%, #F5F2ED 50%, rgba(203, 184, 157, 0.2) 100%)",
            "linear-gradient(135deg, #F5F2ED 0%, #FAF7F2 50%, rgba(141, 163, 153, 0.2) 100%)",
            "linear-gradient(135deg, #FAF7F2 0%, #F5F2ED 50%, rgba(203, 184, 157, 0.2) 100%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Coffee Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#CBB89D]/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7
            }}
          >
            <Coffee size={32 + i * 4} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        {/* ---- (rest of your component code is unchanged) ---- */}
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
