import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { Projects } from '@/app/components/Projects';
import { Testimonials } from '@/app/components/Testimonials';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { BackToTop } from '@/app/components/BackToTop';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <Toaster position="bottom-right" />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}