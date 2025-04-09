
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="section-container">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          {t('nav.solutions')}
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Metrics & Analysis */}
          <div className="bg-brand-darkGray rounded-lg p-8 border border-brand-blue">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-brand-blue pb-3">
              {t('solutions.metrics.title')}
            </h2>
            <ul className="space-y-4">
              <li className="text-white text-lg">{t('solutions.metrics.item1')}</li>
              <li className="text-white text-lg">{t('solutions.metrics.item2')}</li>
              <li className="text-white text-lg">{t('solutions.metrics.item3')}</li>
            </ul>
          </div>
          
          {/* Communication 360º */}
          <div className="bg-brand-darkGray rounded-lg p-8 border border-brand-red">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-brand-red pb-3">
              {t('solutions.communication.title')}
            </h2>
            <ul className="space-y-4">
              <li className="text-white text-lg">{t('solutions.communication.item1')}</li>
              <li className="text-white text-lg">{t('solutions.communication.item2')}</li>
              <li className="text-white text-lg">{t('solutions.communication.item3')}</li>
              <li className="text-white text-lg">{t('solutions.communication.item4')}</li>
              <li className="text-white text-lg">{t('solutions.communication.item5')}</li>
            </ul>
          </div>
          
          {/* Digital Assets */}
          <div className="bg-brand-darkGray rounded-lg p-8 border border-brand-yellow">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-brand-yellow pb-3">
              {t('solutions.assets.title')}
            </h2>
            <ul className="space-y-4">
              <li className="text-white text-lg">{t('solutions.assets.item1')}</li>
              <li className="text-white text-lg">{t('solutions.assets.item2')}</li>
              <li className="text-white text-lg">{t('solutions.assets.item3')}</li>
              <li className="text-white text-lg">{t('solutions.assets.item4')}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
