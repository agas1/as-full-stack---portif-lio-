import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';

const projects = [
  {
    key: 'deskly',
    image: '/Captura de tela 2026-02-09 195439.png',
    grid: 'md:col-span-7 md:row-span-2',
    height: 'h-[300px] md:h-auto',
    direction: 'left' as const,
  },
  {
    key: 'helpcenter',
    image: '/8f62c993-ec95-4c25-b4c9-3248b87c90a2.png',
    grid: 'md:col-span-5',
    height: 'h-[260px] md:h-auto',
    direction: 'right' as const,
  },
  {
    key: 'replai',
    image: '/fec5afd6-5233-4c5b-b5d4-919977c42d5d.png',
    grid: 'md:col-span-5',
    height: 'h-[260px] md:h-auto',
    direction: 'right' as const,
  },
  {
    key: 'crmdashboard',
    image: '/Captura de tela 2026-02-10 000649.png',
    grid: 'md:col-span-5',
    height: 'h-[260px] md:h-auto',
    direction: 'left' as const,
  },
  {
    key: 'realestate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center',
    grid: 'md:col-span-7',
    height: 'h-[260px] md:h-auto',
    direction: 'right' as const,
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-black/60 dark:text-white/60 mb-4"
          >
            {t('projects.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-black dark:text-white"
          >
            {t('projects.title')}
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:[grid-auto-rows:240px] gap-4">
          {projects.map((project, index) => {
            const isRealProject = project.key === 'deskly' || project.key === 'replai';
            const initialAnim =
              project.direction === 'left'
                ? { opacity: 0, x: -50 }
                : { opacity: 0, x: 50 };

            return (
              <motion.div
                key={project.key}
                initial={initialAnim}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-2xl bg-muted cursor-pointer ${project.grid} ${project.height}`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.key}.title`)}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
                      isRealProject ? '' : 'grayscale group-hover:grayscale-0'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs text-white/50 tracking-[0.3em] uppercase mb-2">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-2">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2 mb-4">
                    {t(`projects.${project.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t(`projects.${project.key}.tech`)
                      .split(', ')
                      .map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
