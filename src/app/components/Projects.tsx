import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';

const projects = [
  {
    key: 'deskly',
    image: '/Captura de tela 2026-02-09 195439.png',
    size: 'large',
  },
  {
    key: 'helpcenter',
    image: '/8f62c993-ec95-4c25-b4c9-3248b87c90a2.png',
    size: 'medium',
  },
  {
    key: 'replai',
    image: '/fec5afd6-5233-4c5b-b5d4-919977c42d5d.png',
    size: 'medium',
  },
  {
    key: 'fitnesslps',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&crop=center',
    size: 'medium',
  },
  {
    key: 'realestate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center',
    size: 'medium',
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 px-6 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors duration-300">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-rows:280px] gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group relative overflow-hidden bg-muted rounded-lg ${
                project.size === 'large'
                  ? 'md:col-span-2 lg:row-span-2 aspect-square md:aspect-auto'
                  : 'aspect-square lg:aspect-auto'
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
                    project.key === 'deskly' ? '' : 'grayscale group-hover:grayscale-0'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-foreground/70 line-clamp-2 mb-3">
                    {t(`projects.${project.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t(`projects.${project.key}.tech`).split(', ').map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-foreground/10 backdrop-blur-sm rounded-full text-xs text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Label */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
