import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const skills = [
    t('about.skill1'),
    t('about.skill2'),
    t('about.skill3'),
    t('about.skill4'),
    t('about.skill5'),
  ];

  const tools = [t('about.tool1'), t('about.tool2')];

  return (
    <section id="about" className="relative bg-white dark:bg-black transition-colors duration-300">
      {/* Border wrapper */}
      <div className="border border-black/10 dark:border-white/10 m-0">
        <div className="min-h-screen">
          {/* Content */}
          <div className="p-16 lg:p-24 flex flex-col justify-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl lg:text-6xl font-light text-black dark:text-white mb-8">
                {t('about.title')}
              </h2>

              <p className="text-black/60 dark:text-white/60 text-base leading-relaxed mb-12 max-w-lg">
                {t('about.bio')}
              </p>

              {/* Skills Tags */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-3 mb-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-black/70 dark:text-white/70 text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (skills.length + index) * 0.1 }}
                      className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-black/70 dark:text-white/70 text-sm"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Experience Table */}
              <div className="space-y-6 mb-12">
                {/* Row 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-[1fr,2fr,1fr] gap-6 items-start border-b border-black/10 dark:border-white/10 pb-4"
                >
                  <span className="text-black/40 dark:text-white/40 text-sm">{t('about.exp1.type')}</span>
                  <div>
                    <p className="text-black dark:text-white text-sm mb-1">{t('about.exp1.role')}</p>
                    <p className="text-black/60 dark:text-white/60 text-sm">{t('about.exp1.company')}</p>
                  </div>
                  <span className="text-black/40 dark:text-white/40 text-sm text-right">{t('about.exp1.period')}</span>
                </motion.div>

                {/* Row 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-[1fr,2fr,1fr] gap-6 items-start border-b border-black/10 dark:border-white/10 pb-4"
                >
                  <span className="text-black/40 dark:text-white/40 text-sm"></span>
                  <div>
                    <p className="text-black/60 dark:text-white/60 text-sm">{t('about.exp2.company')}</p>
                  </div>
                  <span className="text-black/40 dark:text-white/40 text-sm text-right">{t('about.exp2.period')}</span>
                </motion.div>

                {/* Row 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-[1fr,2fr,1fr] gap-6 items-start border-b border-black/10 dark:border-white/10 pb-4"
                >
                  <span className="text-black/40 dark:text-white/40 text-sm"></span>
                  <div>
                    <p className="text-black dark:text-white text-sm mb-1">{t('about.exp3.role')}</p>
                    <p className="text-black/60 dark:text-white/60 text-sm">{t('about.exp3.company')}</p>
                  </div>
                  <span className="text-black/40 dark:text-white/40 text-sm text-right">{t('about.exp3.period')}</span>
                </motion.div>
              </div>

              {/* Recent Works Link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors text-sm group"
                >
                  <span>{t('about.recentWorks')}</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
