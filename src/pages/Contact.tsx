
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import CalendlyModal from '@/components/CalendlyModal';
import { Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20 relative">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <section className="section-container relative z-10">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          {t('contact.title')}
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Contact */}
          <div className="bg-brand-blue bg-opacity-90 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3">
              {t('contact.email.title')}
            </h2>
            <ContactForm className="mt-4" />
          </div>
          
          {/* WhatsApp Contact */}
          <div className="bg-brand-red bg-opacity-90 rounded-lg p-6 flex flex-col items-center justify-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3 w-full">
              {t('contact.text.title')}
            </h2>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="mb-8 p-6 bg-white rounded-full">
                <MessageCircle className="h-16 w-16 text-[#25D366]" />
              </div>
              
              <WhatsAppButton 
                className="px-8 py-6 text-lg"
              />
            </div>
          </div>
          
          {/* Calendly Contact */}
          <div className="bg-brand-lightBlue bg-opacity-90 rounded-lg p-6 flex flex-col items-center justify-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3 w-full">
              {t('contact.meet.title')}
            </h2>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="mb-8 p-6 bg-white rounded-full">
                <Calendar className="h-16 w-16 text-brand-lightBlue" />
              </div>
              
              <Button 
                onClick={() => setIsCalendlyModalOpen(true)}
                className="bg-brand-yellow hover:bg-brand-yellow/90 text-black px-8 py-6 text-lg font-medium"
                size="lg"
              >
                {t('contact.meet.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
      />
    </div>
  );
};

export default Contact;
