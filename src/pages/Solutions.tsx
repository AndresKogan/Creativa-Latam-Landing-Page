
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Solutions = () => {
  const { t } = useLanguage();

  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 relative bg-gradient-to-b from-brand-dark to-brand-darkGray">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <section className="section-container relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          {t('nav.solutions')}
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Metrics & Analysis */}
          <motion.div 
            variants={itemVariants}
            className="bg-white bg-opacity-80 rounded-xl p-1.5 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
          >
            <div className="border-[3px] border-brand-blue rounded-lg h-full p-6 bg-gradient-to-br from-white to-blue-50">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center border-b-2 border-brand-blue pb-3">
                {t('solutions.metrics.title')}
              </h2>
              <ul className="space-y-4">
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">•</span>
                  <span>{t('solutions.metrics.item1')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">•</span>
                  <span>{t('solutions.metrics.item2')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">•</span>
                  <span>{t('solutions.metrics.item3')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Communication 360º */}
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-80 rounded-xl p-1.5 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
          >
            <div className="border-[3px] border-brand-red rounded-lg h-full p-6 bg-gradient-to-br from-white to-red-50">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center border-b-2 border-brand-red pb-3">
                {t('solutions.communication.title')}
              </h2>
              <ul className="space-y-4">
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-red mr-2 font-bold">•</span>
                  <span>{t('solutions.communication.item1')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-red mr-2 font-bold">•</span>
                  <span>{t('solutions.communication.item2')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-red mr-2 font-bold">•</span>
                  <span>{t('solutions.communication.item3')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-red mr-2 font-bold">•</span>
                  <span>{t('solutions.communication.item4')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-red mr-2 font-bold">•</span>
                  <span>{t('solutions.communication.item5')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Digital Assets */}
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-80 rounded-xl p-1.5 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
          >
            <div className="border-[3px] border-brand-yellow rounded-lg h-full p-6 bg-gradient-to-br from-white to-yellow-50">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center border-b-2 border-brand-yellow pb-3">
                {t('solutions.assets.title')}
              </h2>
              <ul className="space-y-4">
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-yellow mr-2 font-bold">•</span>
                  <span>{t('solutions.assets.item1')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-yellow mr-2 font-bold">•</span>
                  <span>{t('solutions.assets.item2')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-yellow mr-2 font-bold">•</span>
                  <span>{t('solutions.assets.item3')}</span>
                </li>
                <li className="text-brand-dark text-lg flex items-start">
                  <span className="text-brand-yellow mr-2 font-bold">•</span>
                  <span>{t('solutions.assets.item4')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Solutions;
