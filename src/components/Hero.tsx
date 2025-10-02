import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Correct import
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Coffee, Star, Users, Clock, Award, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroImages = [
    { src: "https://images.unsplash.com/photo-1618798566857-9941daaa6254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Rustic coffee shop interior" },
    { src: "https://images.unsplash.com/photo-1719547898868-3a00906413a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Vintage coffee shop atmosphere" },
    { src: "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Cozy cafe warm lighting" },
    { src: "https://images.unsplash.com/photo-1649015005325-ea8d33599d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Coffee beans and espresso" },
    { src: "https://images.unsplash.com/photo-1586864030218-6885c4d16684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Coffee shop counter and barista" },
    { src: "https://images.unsplash.com/photo-1569387623950-11c5f5be2f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", alt: "Artisan coffee roasting" }
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
      const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroImages.length), 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, heroImages.length]);

  // Mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#FAF7F2] via-[#F5F2ED] to-[#CBB89D]/20"
        animate={{ background: [
          "linear-gradient(135deg, #FAF7F2 0%, #F5F2ED 50%, rgba(203, 184, 157, 0.2) 100%)",
          "linear-gradient(135deg, #F5F2ED 0%, #FAF7F2 50%, rgba(141, 163, 153, 0.2) 100%)",
          "linear-gradient(135deg, #FAF7F2 0%, #F5F2ED 50%, rgba(203, 184, 157, 0.2) 100%)"
        ]}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Coffee Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute text-[#CBB89D]/20"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.7 }}
          >
            <Coffee size={32 + i * 4} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 lg:pr-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#6B4F37] text-sm font-medium">Award Winning Coffee Since 2015</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl text-[#6B4F37] leading-tight font-serif">
            Brewed with <span className="text-[#D4AF37]">Love</span>, Served with Warmth
          </h1>

          <p className="text-lg md:text-xl text-[#6B4F37]/80 max-w-xl">
            Step into our cozy corner of comfort where every cup tells a story, every bean is carefully selected, and every visit feels like coming home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollToSection("menu")} className="bg-[#6B4F37] text-white px-8 py-4 rounded-full shadow-lg">Explore Menu</Button>
            <Button onClick={() => scrollToSection("reservation")} variant="outline" className="border-2 border-[#8DA399] text-[#8DA399] px-8 py-4 rounded-full shadow-lg">Reserve Table</Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[#CBB89D]/20">
                <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#6B4F37] font-semibold text-sm">{feature.value}</p>
                  <p className="text-[#6B4F37]/60 text-xs">{feature.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Slideshow */}
        <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)` }}
        >
          <div className="relative w-full h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.8 }}>
                <ImageWithFallback src={heroImages[currentSlide].src} alt={heroImages[currentSlide].alt} className="w-full h-full object-cover" />
              </motion.div>
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F37]/40 via-transparent to-transparent" />

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevSlide} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Play/Pause */}
            <button onClick={() => setIsPlaying(!isPlaying)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/40"}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
