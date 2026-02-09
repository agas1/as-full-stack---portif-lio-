import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: t('nav.services'), id: 'services' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.testimonials'), id: 'testimonials' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 text-black dark:text-white"
              whileHover={{ scale: 1.02 }}
            >
              <img src="/image.png" alt="AS" className="w-28 h-auto invert dark:invert-0" />
            </motion.a>

            {/* Right Section - Navigation Links & Button */}
            <div className="hidden md:flex items-center gap-8">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}

              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-1">
                {['en', 'pt', 'es'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as 'en' | 'pt' | 'es')}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      language === lang
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Talk to Me Button */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white rounded-lg text-sm hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center gap-2"
              >
                {t('nav.talkToMe')}
              </motion.button>

              {/* Theme Switch */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative w-12 h-6 bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full transition-colors hover:bg-black/20 dark:hover:bg-white/20"
              >
                <motion.div
                  animate={{ x: theme === 'dark' ? 2 : 22 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 w-5 h-5 bg-black dark:bg-white rounded-full flex items-center justify-center"
                >
                  {theme === 'dark' ? (
                    <Moon className="w-3 h-3 text-white" />
                  ) : (
                    <Sun className="w-3 h-3 text-white" />
                  )}
                </motion.div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white dark:bg-black border-l border-black/10 dark:border-white/10 md:hidden"
        >
          <div className="p-6 pt-24 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-lg py-3 px-4 rounded-lg text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileTap={{ scale: 0.95 }}
              className="w-full px-5 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white rounded-lg text-sm hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              {t('nav.talkToMe')}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}
