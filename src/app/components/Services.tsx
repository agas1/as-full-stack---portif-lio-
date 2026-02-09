'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Code2, Database, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';

const serviceIcons = [Code2, Database, Rocket, Zap];
const serviceKeys = ['fullstack', 'backend', 'frontend', 'performance'];

const serviceTags = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'REST APIs',
  'GraphQL',
  'Tailwind CSS',
  'Git',
  'Docker',
  'AWS',
  'CI/CD',
  'Testing',
];

const mainServiceKeys = ['webApps', 'apiDev', 'frontendReact', 'backendNode', 'dbDesign'];

// 3D Tilt Card Component
function ServiceCard({ title, description, Icon, index }: { title: string; description: string; Icon: any; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-black/10 dark:border-white/10 group cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow effect that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, rgba(128,128,128,0.1), transparent 40%)`,
        }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(${Math.atan2(mousePosition.y, mousePosition.x) * (180 / Math.PI)}deg, transparent 40%, rgba(128,128,128,0.1) 50%, transparent 60%)`,
          transition: 'opacity 0.3s',
        }}
      />

      <div className="flex items-start gap-4 relative" style={{ transform: 'translateZ(50px)' }}>
        <motion.div
          className="p-3 bg-black/10 dark:bg-white/10 rounded-xl relative overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Icon glow */}
          <motion.div
            className="absolute inset-0 bg-black/20 dark:bg-white/20 blur-xl"
            animate={{
              scale: isHovering ? [1, 1.2, 1] : 1,
              opacity: isHovering ? [0.5, 0.8, 0.5] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Icon className="w-6 h-6 text-black dark:text-white relative z-10" />
        </motion.div>
        <div className="flex-1">
          <motion.h3
            className="text-xl font-medium mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 + 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-black/70 dark:text-white/70 leading-relaxed text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          boxShadow: isHovering ? '0 0 30px rgba(128,128,128,0.2)' : '0 0 0 rgba(128,128,128,0)',
          transition: 'box-shadow 0.3s',
        }}
      />
    </motion.div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Top Gradient for Smooth Transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white dark:from-black via-white/50 dark:via-black/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Left - Content */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm tracking-[0.3em] uppercase text-black/60 dark:text-white/60 mb-4"
            >
              {t('services.label')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-light tracking-tight mb-6"
            >
              {t('services.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-black/70 dark:text-white/70 mb-8 leading-relaxed"
            >
              {t('services.description')}
            </motion.p>

            {/* Service Tags - Animated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {mainServiceKeys.map((key, index) => (
                <motion.span
                  key={key}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-black/80 dark:text-white/80 cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
                >
                  {t(`services.${key}`)}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="relative px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-black dark:from-white via-gray-800 dark:via-gray-100 to-black dark:to-white"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">{t('services.bookCall')}</span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="relative px-8 py-3 border-2 border-black/30 dark:border-white/30 text-black dark:text-white rounded-full font-light overflow-hidden"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-black/10 dark:bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{t('services.seeProjects')}</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right - Terminal Style Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center"
          >
            <div className="w-full bg-[#1e1e1e] rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#323233] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs sm:text-sm text-white/50 font-mono ml-2 sm:ml-3">Terminal</span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 sm:p-8 font-mono text-sm sm:text-base space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">agatha@dev</span>
                  <span className="text-white/40">:</span>
                  <span className="text-blue-400">~/Project</span>
                  <span className="text-white/80">$ npm run dev</span>
                </div>
                <div className="text-white/50 text-xs sm:text-sm space-y-1">
                  <p>{'>'} next dev --turbo</p>
                  <p className="text-green-400/70">  Ready in 1.2s</p>
                  <p className="text-white/40">  Local: http://localhost:3000</p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">agatha@dev</span>
                    <span className="text-white/40">:</span>
                    <span className="text-blue-400">~/Project</span>
                    <span className="text-white/80">$ git push origin main</span>
                  </div>
                  <div className="text-white/50 text-xs sm:text-sm space-y-1 mt-1">
                    <p>To github.com:agatha/project.git</p>
                    <p className="text-green-400/70">  abc12f4..e8a31b2 main {'->'} main</p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">agatha@dev</span>
                    <span className="text-white/40">:</span>
                    <span className="text-blue-400">~/Project</span>
                    <motion.span
                      className="inline-block w-2 h-4 bg-white/60"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid - 3D Tilt Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20" style={{ perspective: '1000px' }}>
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[index];
            return (
              <ServiceCard
                key={key}
                title={t(`services.${key}.title`)}
                description={t(`services.${key}.description`)}
                Icon={Icon}
                index={index}
              />
            );
          })}
        </div>

        {/* Additional Service Tags - Two Lines with Opposite Movement */}
        <div className="relative space-y-3 sm:space-y-4">
          {/* First Line - Moving Left */}
          <div className="relative overflow-hidden">
            {/* Left Fade Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Right Fade Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="flex" style={{ willChange: 'transform' }}>
                {/* First set */}
                <motion.div
                  animate={{ x: [0, -800] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center gap-2 sm:gap-3 pr-2 sm:pr-3 min-w-max"
                >
                  {serviceTags.slice(0, 8).map((tag, index) => (
                    <span
                      key={`left-first-${index}`}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs sm:text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Second set (duplicate for seamless loop) */}
                <motion.div
                  animate={{ x: [0, -800] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center gap-2 sm:gap-3 min-w-max"
                >
                  {serviceTags.slice(0, 8).map((tag, index) => (
                    <span
                      key={`left-second-${index}`}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs sm:text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Second Line - Moving Right */}
          <div className="relative overflow-hidden">
            {/* Left Fade Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Right Fade Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="flex" style={{ willChange: 'transform' }}>
                {/* First set */}
                <motion.div
                  animate={{ x: [-800, 0] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center gap-2 sm:gap-3 pr-2 sm:pr-3 min-w-max"
                >
                  {serviceTags.slice(8).map((tag, index) => (
                    <span
                      key={`right-first-${index}`}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs sm:text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Second set (duplicate for seamless loop) */}
                <motion.div
                  animate={{ x: [-800, 0] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center gap-2 sm:gap-3 min-w-max"
                >
                  {serviceTags.slice(8).map((tag, index) => (
                    <span
                      key={`right-second-${index}`}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs sm:text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
