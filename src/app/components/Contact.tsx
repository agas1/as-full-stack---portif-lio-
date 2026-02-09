import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.successMessage'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-black/60 dark:text-white/60 mb-4"
          >
            {t('contact.getInTouch')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-black dark:text-white"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-background border border-border/50 rounded-lg group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">{t('contact.emailLabel')}</p>
                  <p className="font-medium">agathaselbach26@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-background border border-border/50 rounded-lg group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">{t('contact.location')}</p>
                  <p className="font-medium">Brasil</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-foreground/10">
              <p className="text-sm text-foreground/60 mb-4">{t('contact.followMe')}</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-3 bg-background border border-border/50 rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-6 bg-background border border-border/50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="font-medium">{t('contact.availableTitle')}</p>
              </div>
              <p className="text-sm text-foreground/60">{t('contact.availableText')}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  {t('contact.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:border-foreground/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  {t('contact.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:border-foreground/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.messagePlaceholder')}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-foreground text-background rounded-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-sm tracking-wide">{t('contact.send')}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}