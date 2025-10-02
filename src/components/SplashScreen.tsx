import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 500);
    const timer2 = setTimeout(() => setAnimationStep(2), 1500);
    const timer3 = setTimeout(() => setAnimationStep(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#6B4F37] via-[#8DA399] to-[#6B4F37] overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Coffee Steam Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-8 bg-gradient-to-t from-transparent via-[#FAF7F2]/30 to-transparent rounded-full"
            style={{
              left: `${48 + i * 1}%`,
              top: '45%',
            }}
            animate={{
              y: [-20, -60],
              opacity: [0, 0.6, 0],
              scale: [1, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Logo Container */}
      <div className="relative z-10 text-center">
        {/* Coffee Cup Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={animationStep >= 1 ? { 
            scale: 1, 
            rotate: 0,
          } : {}}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            bounce: 0.4 
          }}
          className="mb-8 mx-auto"
        >
          <div className="relative">
            {/* Coffee Cup */}
            <div className="w-20 h-20 bg-[#FAF7F2] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#D4AF37]">
              <motion.span 
                className="text-[#6B4F37] text-3xl font-bold"
                style={{ fontFamily: 'Playfair Display' }}
                animate={animationStep >= 2 ? {
                  textShadow: "0 0 20px rgba(212, 175, 55, 0.8)"
                } : {}}
              >
                V
              </motion.span>
            </div>
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-xl"
              animate={animationStep >= 2 ? {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Brand Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={animationStep >= 1 ? { 
            opacity: 1, 
            y: 0 
          } : {}}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            ease: "easeOut"
          }}
          className="space-y-2"
        >
          <motion.h1 
            className="text-4xl md:text-6xl text-[#FAF7F2] tracking-wider"
            style={{ fontFamily: 'Playfair Display' }}
            animate={animationStep >= 2 ? {
              textShadow: "0 0 30px rgba(250, 247, 242, 0.8)"
            } : {}}
          >
            Vintage Brew
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={animationStep >= 2 ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
          />
          
          <motion.p 
            className="text-xl text-[#CBB89D] tracking-widest"
            style={{ fontFamily: 'Inter' }}
            initial={{ opacity: 0 }}
            animate={animationStep >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            CAFÉ
          </motion.p>
        </motion.div>

        {/* Tagline Animation */}
        <motion.p
          className="text-[#FAF7F2]/80 text-lg mt-6 italic"
          style={{ fontFamily: 'Playfair Display' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animationStep >= 3 ? { 
            opacity: 1, 
            scale: 1 
          } : {}}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.3
          }}
        >
          Brewed with Love, Served with Warmth
        </motion.p>

        {/* Loading Dots */}
        <motion.div 
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={animationStep >= 2 ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Skip Button */}
        <motion.button
          className="absolute bottom-8 right-8 text-[#FAF7F2]/60 hover:text-[#FAF7F2] text-sm underline transition-colors"
          style={{ fontFamily: 'Inter' }}
          initial={{ opacity: 0 }}
          animate={animationStep >= 1 ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          onClick={onComplete}
        >
          Skip Intro
        </motion.button>
      </div>

      {/* Fade Out Animation */}
      <motion.div
        className="absolute inset-0 bg-[#FAF7F2]"
        initial={{ opacity: 0 }}
        animate={animationStep >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* Coffee Beans Scattered Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-4 bg-[#6B4F37] rounded-full"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              transform: 'rotate(20deg)',
            }}
            animate={animationStep >= 1 ? {
              rotate: [20, 380],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            } : {}}
            transition={{
              duration: 3,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}