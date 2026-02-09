'use client';

import { motion, useTransform, useSpring, useScroll } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect, useRef, ReactNode } from 'react';

// Magnetic Button Component
function MagneticButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic effect - attract button to cursor
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      setPosition({
        x: distanceX * force * 0.3,
        y: distanceY * force * 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      <motion.div style={{ x, y }}>
        {children}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Parallax effect
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const brands = [
    { name: 'Aura', display: 'Aura' },
    { name: 'Nadir', display: 'Nadir' },
    { name: 'Vera', display: 'Vera' },
    { name: 'Lume', display: 'Lume' },
    { name: 'Aeon', display: 'Aeon' },
    { name: 'Solis', display: 'Solis' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Minimalist Grid Background */}
      <div className="absolute inset-0 overflow-hidden bg-white dark:bg-black">
        {/* Subtle Background Blur */}
        <div className="absolute inset-0 bg-gradient-radial from-black/[0.03] dark:from-white/[0.03] via-transparent to-transparent" style={{
          filter: 'blur(60px)',
        }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />
        <div className="absolute inset-0 hidden dark:block" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />

        {/* Animated Geometric Shapes - Minimalist */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-black/20 dark:border-white/20"
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ y: y1 }}
        />

        <motion.div
          className="absolute top-40 right-20 w-24 h-24 rounded-full border border-black/15 dark:border-white/15"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ y: y2 }}
        />

        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 border border-black/10 dark:border-white/10"
          animate={{
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-black/5 dark:bg-white/5"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Subtle Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Bottom Gradient for Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-black via-white/50 dark:via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 md:pt-32">
        {/* Badge with shimmer effect */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-black/[0.08] dark:bg-white/[0.08] border border-black/[0.15] dark:border-white/[0.15] mb-8 sm:mb-12 md:mb-16 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear"
            }}
          />
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-black/80 dark:bg-white/80 relative z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-xs sm:text-[13px] text-black/90 dark:text-white/90 font-light relative z-10">{t('hero.badge')}</span>
        </motion.div>

        {/* Title with letter-by-letter reveal */}
        <div className="mb-8">
          <motion.h1
            className="text-[clamp(3rem,10vw,7rem)] font-normal text-black dark:text-white leading-[1.05] tracking-tight mb-4"
            style={{ opacity }}
          >
            {t('hero.title1').split('').map((char: string, index: number) => (
              <motion.span
                key={`title1-${index}`}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.3 + index * 0.03,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="inline-block"
                style={{ transformOrigin: 'bottom' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className="text-[clamp(3rem,10vw,7rem)] font-normal text-black dark:text-white leading-[1.05] tracking-tight"
            style={{ opacity }}
          >
            {t('hero.title2').split('').map((char: string, index: number) => (
              <motion.span
                key={`title2-${index}`}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.6 + index * 0.03,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="inline-block"
                style={{ transformOrigin: 'bottom' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}{' '}
            <span className="italic">
              {t('hero.titleItalic').split('').map((char: string, index: number) => (
                <motion.span
                  key={`titleItalic-${index}`}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.9 + index * 0.03,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block"
                  style={{ transformOrigin: 'bottom' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm sm:text-[15px] text-black/70 dark:text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light px-4"
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Buttons - Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-24 md:mb-32"
        >
          <MagneticButton onClick={() => scrollToSection('contact')}>
            <motion.div
              className="relative px-8 sm:px-10 py-3 sm:py-[15px] border-2 border-black/80 dark:border-white/80 text-black dark:text-white rounded-full text-sm sm:text-[15px] font-light backdrop-blur-sm overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/0 dark:from-white/0 via-black/10 dark:via-white/20 to-black/0 dark:to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="relative z-10">{t('hero.getStarted')}</span>
            </motion.div>
          </MagneticButton>

          <MagneticButton onClick={() => scrollToSection('projects')}>
            <motion.div
              className="relative px-8 sm:px-10 py-3 sm:py-[15px] border-2 border-black/30 dark:border-white/30 text-black dark:text-white rounded-full text-sm sm:text-[15px] font-light backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0,0,0,0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/0 dark:from-white/0 via-black/5 dark:via-white/10 to-black/0 dark:to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="relative z-10">{t('hero.seeProjects')}</span>
            </motion.div>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
          className="hidden sm:flex items-center justify-center gap-4 md:gap-8"
          style={{ opacity }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="text-xs md:text-[13px] text-black/60 dark:text-white/60 font-light tracking-wider hidden md:inline"
          >
            {t('hero.scrollDown')}
          </motion.span>
          <motion.div
            className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-white/40 to-transparent"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-[18px] h-[32px] border-2 border-black/50 dark:border-white/50 rounded-full flex justify-center items-start pt-1.5 relative"
          >
            <motion.div
              className="w-[3px] h-[6px] bg-black/60 dark:bg-white/60 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-white/40 to-transparent"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="text-xs md:text-[13px] text-black/60 dark:text-white/60 font-light tracking-wider hidden md:inline"
          >
            {t('hero.toSeeProjects')}
          </motion.span>
        </motion.div>

        {/* Brand Logos Carousel - 3D Enhanced */}
        <div className="mt-12 sm:mt-16 md:mt-20 w-full overflow-hidden" style={{ perspective: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, type: "spring" }}
            className="relative"
          >
            <div className="flex" style={{ willChange: 'transform' }}>
              {/* First set */}
              <motion.div
                animate={{ x: [0, -700] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20"
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={`first-${brand.name}-${index}`}
                    className="text-black/50 dark:text-white/50 text-base sm:text-lg md:text-xl font-light tracking-[0.3em] whitespace-nowrap cursor-pointer relative"
                    whileHover={{
                      scale: 1.2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {brand.display}
                  </motion.div>
                ))}
              </motion.div>

              {/* Second set (duplicate for seamless loop) */}
              <motion.div
                animate={{ x: [0, -700] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex items-center gap-12 sm:gap-16 md:gap-20"
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={`second-${brand.name}-${index}`}
                    className="text-black/50 dark:text-white/50 text-base sm:text-lg md:text-xl font-light tracking-[0.3em] whitespace-nowrap cursor-pointer relative"
                    whileHover={{
                      scale: 1.2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {brand.display}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
