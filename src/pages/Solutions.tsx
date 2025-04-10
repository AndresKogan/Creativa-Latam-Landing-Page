
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 relative">
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
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          {t('nav.solutions')}
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Metrics & Analysis */}
          <div className="bg-white bg-opacity-80 rounded-lg p-1 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <div className="border-4 border-brand-blue rounded-md h-full p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center border-b-2 border-brand-blue pb-3">
                {t('solutions.metrics.title')}
              </h2>
              <ul className="space-y-4">
                <li className="text-brand-dark text-lg">{t('solutions.metrics.item1')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.metrics.item2')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.metrics.item3')}</li>
              </ul>
            </div>
          </div>
          
          {/* Communication 360º */}
          <div className="bg-white bg-opacity-80 rounded-lg p-1 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <div className="border-4 border-brand-red rounded-md h-full p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center border-b-2 border-brand-red pb-3">
                {t('solutions.communication.title')}
              </h2>
              <ul className="space-y-4">
                <li className="text-brand-dark text-lg">{t('solutions.communication.item1')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.communication.item2')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.communication.item3')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.communication.item4')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.communication.item5')}</li>
              </ul>
            </div>
          </div>
          
          {/* Digital Assets */}
          <div className="bg-white bg-opacity-80 rounded-lg p-1 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <div className="border-4 border-brand-yellow rounded-md h-full p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center border-b-2 border-brand-yellow pb-3">
                {t('solutions.assets.title')}
              </h2>
              <ul className="space-y-4">
                <li className="text-brand-dark text-lg">{t('solutions.assets.item1')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.assets.item2')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.assets.item3')}</li>
                <li className="text-brand-dark text-lg">{t('solutions.assets.item4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
