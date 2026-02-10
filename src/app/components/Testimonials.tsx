'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Star } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    name: 'Lucas Ferreira',
    roleKey: 'testimonials.1.role',
    image: 'https://images.unsplash.com/photo-1710357956769-232ef8e9e1aa?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    textKey: 'testimonials.1.text',
  },
  {
    id: 2,
    name: 'Mariana Lopes',
    roleKey: 'testimonials.2.role',
    image: 'https://images.unsplash.com/photo-1525786210598-d527194d3e9a?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    textKey: 'testimonials.2.text',
  },
  {
    id: 3,
    name: 'Pedro Nascimento',
    roleKey: 'testimonials.3.role',
    image: 'https://ui-avatars.com/api/?name=PN&background=10b981&color=fff&size=100&font-size=0.4&bold=true',
    rating: 5,
    textKey: 'testimonials.3.text',
  },
  {
    id: 4,
    name: 'Camila Duarte',
    roleKey: 'testimonials.4.role',
    image: 'https://ui-avatars.com/api/?name=CD&background=f59e0b&color=fff&size=100&font-size=0.4&bold=true',
    rating: 4,
    textKey: 'testimonials.4.text',
  },
];

const statKeys = [
  { value: '35+', labelKey: 'testimonials.stats.delivered' },
  { value: '98%', labelKey: 'testimonials.stats.satisfaction' },
  { value: '5+', labelKey: 'testimonials.stats.experience' },
];

export function Testimonials() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-black/60 dark:text-white/60 mb-4"
          >
            {t('testimonials.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-6"
          >
            {t('testimonials.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/70 dark:text-white/70 mb-8 leading-relaxed max-w-2xl"
          >
            {t('testimonials.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition-all duration-300 font-medium"
            >
              {t('testimonials.bookCall')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 border-2 border-black/30 dark:border-white/30 text-black dark:text-white rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 font-light"
            >
              {t('testimonials.seeServices')}
            </button>
          </motion.div>
        </div>

      </div>

      {/* Testimonials Carousel - full width */}
      <div className="relative mb-20 overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-10 pointer-events-none" />

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
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6 min-w-max"
              >
                {testimonialData.map((testimonial, index) => (
                  <div
                    key={`first-${testimonial.id}-${index}`}
                    className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors w-[300px] sm:w-[380px] md:w-[450px] flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-black/60 dark:text-white/60">{t(testimonial.roleKey)}</p>
                      </div>
                    </div>
                    <p className="text-black/80 dark:text-white/80 mb-6 leading-relaxed min-h-[100px]">
                      &ldquo;{t(testimonial.textKey)}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium">{testimonial.rating}.0</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-none text-black/20 dark:text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Second set (duplicate for seamless loop) */}
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex items-stretch gap-4 sm:gap-6 min-w-max"
              >
                {testimonialData.map((testimonial, index) => (
                  <div
                    key={`second-${testimonial.id}-${index}`}
                    className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors w-[300px] sm:w-[380px] md:w-[450px] flex-shrink-0"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-base sm:text-lg font-medium">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">{t(testimonial.roleKey)}</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-black/80 dark:text-white/80 mb-4 sm:mb-6 leading-relaxed min-h-[80px] sm:min-h-[100px]">
                      &ldquo;{t(testimonial.textKey)}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-medium">{testimonial.rating}.0</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < testimonial.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-none text-black/20 dark:text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-black/10 dark:border-white/10"
        >
          {statKeys.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-light mb-1">{stat.value}</h3>
              <p className="text-sm text-black/60 dark:text-white/60">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
