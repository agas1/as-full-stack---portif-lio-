import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';

const skillCategories = [
  {
    key: 'frontend',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Vue.js',
      'Redux',
      'GraphQL',
      'Webpack',
    ],
  },
  {
    key: 'backend',
    skills: [
      'Node.js',
      'Python',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'REST APIs',
      'Socket.io',
    ],
  },
  {
    key: 'devopsTools',
    skills: [
      'Docker',
      'AWS',
      'CI/CD',
      'Git',
      'Kubernetes',
      'Nginx',
      'Linux',
      'Jenkins',
    ],
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-foreground/60 mb-4"
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light tracking-tight"
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-foreground/60 max-w-2xl"
          >
            {t('skills.subtitle')}
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="pb-4 border-b border-foreground/10">
                <h3 className="text-xl font-medium">{t(`skills.${category.key}`)}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group flex items-center gap-3 py-2 hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover:bg-foreground group-hover:w-6 transition-all duration-300" />
                    <span className="text-foreground/70 group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-foreground/10"
        >
          <p className="text-sm text-foreground/60 mb-6">{t('skills.alsoWorkWith')}</p>
          <div className="flex flex-wrap gap-3">
            {[
              'Figma',
              'Adobe XD',
              'Jest',
              'Cypress',
              'Storybook',
              'Postman',
              'Jira',
              'Slack',
              'Notion',
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-muted/50 border border-border/50 rounded-full text-sm hover:border-foreground/20 hover:bg-muted transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}