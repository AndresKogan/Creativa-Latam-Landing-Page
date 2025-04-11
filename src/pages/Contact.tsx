
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import CalendlyModal from '@/components/CalendlyModal';
import { Calendar, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Email Section - Red */}
      <section className="flex-1 flex flex-col items-center justify-center p-8 bg-brand-red relative overflow-hidden">
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
          <div className="flex justify-center mb-6">
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
      
      {/* WhatsApp Section - Blue */}
      <section className="flex-1 flex flex-col items-center justify-center p-8 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        
        <motion.div 
          className="relative z-10 max-w-md w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <MessageCircle className="h-10 w-10 text-[#25D366]" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t('contact.text.title')}
          </h2>
          
          <p className="text-white mb-8 text-center">
            Envíanos un mensaje instantáneo y te responderemos lo antes posible.
          </p>
          
          <WhatsAppButton 
            className="px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
          className="relative z-10 max-w-md w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Calendar className="h-10 w-10 text-brand-lightBlue" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            {t('contact.meet.title')}
          </h2>
          
          <p className="text-black mb-8 text-center">
            Agenda una reunión con nosotros para discutir tu proyecto en detalle.
          </p>
          
          <Button 
            onClick={() => setIsCalendlyModalOpen(true)}
            className="bg-brand-dark hover:bg-brand-darkGray text-white px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            size="lg"
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
};

export default Contact;
