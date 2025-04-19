import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className={`${isMobile ? 'min-h-screen' : 'h-screen'} flex flex-col`}>
      {/* Hero Section */}
      <section className="relative h-full flex items-center bg-gradient-to-b from-brand-dark to-brand-darkGray overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="container mx-auto px-4 py-12 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.img
              src="/images/d8f17e22-1254-43d0-b7bd-a5194645ce3b.png"
              alt="Creativa Latam Logo"
              className={`${isMobile ? 'w-40 mt-16' : 'w-64'} h-auto mx-auto mb-8`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.h1
              className="text-3xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('home.title')}
            </motion.h1>

            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-brand-lightGray mb-8">
                {t('home.description')}
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-medium px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {t('home.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
