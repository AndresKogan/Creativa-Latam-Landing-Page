
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import EmailModal from '@/components/EmailModal';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Services = () => {
  const { t, language } = useLanguage();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const isMobile = useIsMobile();

  // Services features lists for English
  const brandingFeaturesEn = [
    "Domain + annual hosting",
    "Responsive website",
    "Organic social media",
    "Targeted advertising",
    "Creative strategy"
  ];

  const ecommerceFeaturesEn = [
    "Domain + annual hosting",
    "Responsive website",
    "Organic social media",
    "Targeted advertising",
    "Creative strategy",
    "E-commerce store",
    "Conversion optimization",
    "Email marketing",
    "User experience"
  ];

  // Services features lists for Spanish
  const brandingFeaturesEs = [
    "Dominio + hosting anual",
    "Sitio web reactivo",
    "Redes sociales orgánicas",
    "Publicidad dirigida",
    "Estrategia creativa"
  ];

  const ecommerceFeaturesEs = [
    "Dominio + hosting anual",
    "Sitio web reactivo",
    "Redes sociales orgánicas",
    "Publicidad dirigida",
    "Estrategia creativa",
    "Tienda e-commerce",
    "Optimización de conversión",
    "Email marketing",
    "Experiencia de usuario"
  ];

  const brandingFeatures = language === 'en' ? brandingFeaturesEn : brandingFeaturesEs;
  const ecommerceFeatures = language === 'en' ? ecommerceFeaturesEn : ecommerceFeaturesEs;

  return (
    <div className={`${isMobile ? 'min-h-screen' : 'h-screen'} flex flex-col`}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Logo centered at the top */}
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center mt-16">
          <motion.img
            src="/images/MarcaCompleta.png"
            alt="Creativa Latam Logo"
            className="w-32 h-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Branding Section */}
        <motion.section
          className="flex-1 bg-brand-blue relative flex items-center justify-center py-24 px-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=1920&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="relative z-10 max-w-md mx-auto p-8 md:p-12 flex flex-col h-full">
            <h2 className="text-3xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3 mt-20">
              <span translate="no">{t('services.branding.title')}</span>
            </h2>

            <ul className="space-y-4 mb-auto">
              {brandingFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <Button
                onClick={() => setIsEmailModalOpen(true)}
                className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('services.email')}
              </Button>
            </div>
          </div>
        </motion.section>

        {/* E-commerce Section */}
        <motion.section
          className="flex-1 bg-brand-lightBlue relative flex items-center justify-center py-24 px-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1920&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="relative z-10 max-w-md mx-auto p-8 md:p-12 flex flex-col h-full">
            <h2 className="text-3xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3 mt-20">
              <span translate="no">{t('services.ecommerce.title')}</span>
            </h2>

            <ul className="space-y-4 mb-auto">
              {ecommerceFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <WhatsAppButton className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" />
            </div>
          </div>
        </motion.section>
      </div>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
};

export default Services;
