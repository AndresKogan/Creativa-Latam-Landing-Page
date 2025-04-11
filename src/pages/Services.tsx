
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import EmailModal from '@/components/EmailModal';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useLanguage();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  // Services features lists
  const brandingFeatures = [
    "Dominio + hosting anual",
    "Sitio web reactivo",
    "Redes sociales orgánicas",
    "Publicidad dirigida",
    "Estrategia creativa"
  ];
  
  const ecommerceFeatures = [
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

  return (
    <div className="min-h-screen pt-20 relative">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <section className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <img 
            src="/lovable-uploads/ffa79e4f-f018-4cf7-b52f-ab1e7be6d5c0.png" 
            alt="Creativa Latam Logo" 
            className="w-48 h-auto"
          />
        </motion.div>
        
        <motion.h1 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('nav.services')}
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Branding Section */}
          <motion.div 
            className="bg-brand-blue bg-opacity-80 rounded-lg overflow-hidden backdrop-blur-sm border-2 border-brand-red shadow-xl transition-all duration-300 hover:shadow-brand-red/20 hover:shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3">
                {t('services.branding.title')}
              </h2>
              <ul className="space-y-4">
                {brandingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* E-commerce Section */}
          <motion.div 
            className="bg-brand-lightBlue bg-opacity-80 rounded-lg overflow-hidden backdrop-blur-sm border-2 border-brand-yellow shadow-xl transition-all duration-300 hover:shadow-brand-yellow/20 hover:shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3">
                {t('services.ecommerce.title')}
              </h2>
              <ul className="space-y-4">
                {ecommerceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Contact Section */}
        <motion.div 
          className="bg-brand-darkGray bg-opacity-80 rounded-lg p-8 text-center backdrop-blur-sm border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">{t('services.contactUs')}</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => setIsEmailModalOpen(true)}
              className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              size="lg"
            >
              {t('services.email')}
            </Button>
            
            <WhatsAppButton className="px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" />
          </div>
        </motion.div>
      </section>

      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </div>
  );
};

export default Services;
