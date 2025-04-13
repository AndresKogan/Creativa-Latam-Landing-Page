
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import CalendlyModal from '@/components/CalendlyModal';
import { Calendar, MessageCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const { t, language } = useLanguage();
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // State for collapsible sections on mobile
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  // Mobile version component
  const MobileContact = () => (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <h1 className="text-3xl font-bold text-center text-white mb-8">{t('contact.title')}</h1>
      
      {/* Email Section */}
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
          <div className="p-6">
            <ContactForm className="mt-4" />
          </div>
        )}
      </div>
      
      {/* WhatsApp Section */}
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
      
      {/* Calendar Section */}
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
                onClick={() => setIsCalendlyModalOpen(true)}
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

  // Desktop version component
  const DesktopContact = () => (
    <div className="min-h-screen flex">
      {/* Email Section - Blue */}
      <section className="flex-1 flex flex-col items-center justify-center p-8 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        
        <motion.div 
          className="relative z-10 max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Mail className="h-10 w-10 text-brand-red" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t('contact.email.title')}
          </h2>
          
          <ContactForm className="mt-4" />
        </motion.div>
      </section>
      
      {/* WhatsApp Section - Red */}
      <section className="flex-1 flex flex-col items-center justify-center p-8 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        
        <motion.div 
          className="relative z-10 max-w-md w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <MessageCircle className="h-10 w-10 text-[#25D366]" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t('contact.text.title')}
          </h2>
          
          <p className="text-white mb-8 text-center">
            {language === 'en' ? 'Send us an instant message and we\'ll get back to you as soon as possible.' : 'Envíanos un mensaje instantáneo y te responderemos lo antes posible.'}
          </p>
          
          <WhatsAppButton 
            className="px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-[#25D366] hover:bg-[#128C7E]"
          />
        </motion.div>
      </section>
      
      {/* Calendar Section - Yellow */}
      <section className="flex-1 flex flex-col items-center justify-center p-8 bg-brand-yellow relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1596920566403-2072ed25d7f4?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        
        <motion.div 
          className="relative z-10 max-w-md w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Calendar className="h-10 w-10 text-brand-lightBlue" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            {t('contact.meet.title')}
          </h2>
          
          <p className="text-black mb-8 text-center">
            {language === 'en' ? 'Schedule a meeting with us to discuss your project in detail.' : 'Agenda una reunión con nosotros para discutir tu proyecto en detalle.'}
          </p>
          
          <Button 
            onClick={() => setIsCalendlyModalOpen(true)}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t('contact.meet.button')}
          </Button>
        </motion.div>
      </section>
      
      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
      />
    </div>
  );

  return (
    <>
      {isMobile ? <MobileContact /> : <DesktopContact />}
      {isMobile && (
        <CalendlyModal
          isOpen={isCalendlyModalOpen}
          onClose={() => setIsCalendlyModalOpen(false)}
        />
      )}
    </>
  );
};

export default Contact;
