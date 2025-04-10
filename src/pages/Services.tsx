
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import EmailModal from '@/components/EmailModal';

const Services = () => {
  const { t } = useLanguage();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  // Placeholder for branding and e-commerce features
  const brandingFeatures = Array(5).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const ecommerceFeatures = Array(5).fill('Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

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
        <h1 className="text-4xl font-bold text-white mb-12 text-center">{t('nav.services')}</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Branding Section */}
          <div className="bg-brand-blue bg-opacity-90 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">{t('services.branding.title')}</h2>
              <ul className="space-y-4">
                {brandingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* E-commerce Section */}
          <div className="bg-brand-lightBlue bg-opacity-90 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">{t('services.ecommerce.title')}</h2>
              <ul className="space-y-4">
                {ecommerceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-brand-darkGray bg-opacity-90 rounded-lg p-8 text-center backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8">{t('services.contactUs')}</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => setIsEmailModalOpen(true)}
              className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg"
              size="lg"
            >
              {t('services.email')}
            </Button>
            
            <WhatsAppButton className="px-8 py-6 text-lg" />
          </div>
        </div>
      </section>

      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </div>
  );
};

export default Services;
