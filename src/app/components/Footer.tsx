import { useLanguage } from '@/app/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <img src="/image.png" alt="AS" className="w-44 h-auto invert dark:invert-0" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-black/60 dark:text-white/60">
            © {currentYear} {t('footer.allRights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
