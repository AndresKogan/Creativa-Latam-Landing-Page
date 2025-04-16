
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Calendar, MessageCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react';

interface MobileContactViewProps {
  onCalendlyOpen: () => void;
}

const MobileContactView: React.FC<MobileContactViewProps> = ({ onCalendlyOpen }) => {
  const { t, language } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <h1 className="text-3xl font-bold text-center text-white mb-8">{t('contact.title')}</h1>
      
      <div className="mb-6 bg-brand-blue rounded-lg overflow-hidden shadow-lg">
        <Button 
          onClick={() => toggleSection('email')} 
          className="w-full py-6 flex items-center justify-between bg-brand-blue hover:bg-brand-blue/90 text-white"
        >
          <div className="flex items-center">
            <div className="bg-white rounded-full p-3 mr-4">
              <Mail className="h-6 w-6 text-brand-red" />
            </div>
            <span className="font-semibold">{t('contact.email.title')}</span>
          </div>
          {openSection === 'email' ? <ChevronUp /> : <ChevronDown />}
        </Button>
        
        {openSection === 'email' && (
          <div className="p-6 bg-white">
            <ContactForm className="mt-4" />
          </div>
        )}
      </div>
      
      <div className="mb-6 bg-brand-red rounded-lg overflow-hidden shadow-lg">
        <Button 
          onClick={() => toggleSection('whatsapp')} 
          className="w-full py-6 flex items-center justify-between bg-brand-red hover:bg-brand-red/90 text-white"
        >
          <div className="flex items-center">
            <div className="bg-white rounded-full p-3 mr-4">
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
            </div>
            <span className="font-semibold">{t('contact.text.title')}</span>
          </div>
          {openSection === 'whatsapp' ? <ChevronUp /> : <ChevronDown />}
        </Button>
        
        {openSection === 'whatsapp' && (
          <div className="p-6">
            <p className="text-white mb-6 text-center">
              {language === 'en' ? 'Send us an instant message and we\'ll get back to you as soon as possible.' : 'Envíanos un mensaje instantáneo y te responderemos lo antes posible.'}
            </p>
            <div className="flex justify-center">
              <WhatsAppButton 
                className="px-6 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-[#25D366] hover:bg-[#128C7E]"
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-6 bg-brand-yellow rounded-lg overflow-hidden shadow-lg">
        <Button 
          onClick={() => toggleSection('calendar')} 
          className="w-full py-6 flex items-center justify-between bg-brand-yellow hover:bg-brand-yellow/90 text-black"
        >
          <div className="flex items-center">
            <div className="bg-white rounded-full p-3 mr-4">
              <Calendar className="h-6 w-6 text-brand-lightBlue" />
            </div>
            <span className="font-semibold">{t('contact.meet.title')}</span>
          </div>
          {openSection === 'calendar' ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
        </Button>
        
        {openSection === 'calendar' && (
          <div className="p-6">
            <p className="text-black mb-6 text-center">
              {language === 'en' ? 'Schedule a meeting with us to discuss your project in detail.' : 'Agenda una reunión con nosotros para discutir tu proyecto en detalle.'}
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={onCalendlyOpen}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('contact.meet.button')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileContactView;
