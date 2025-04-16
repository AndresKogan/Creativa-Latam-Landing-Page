
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Calendar, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface DesktopContactViewProps {
  onCalendlyOpen: () => void;
}

const DesktopContactView: React.FC<DesktopContactViewProps> = ({ onCalendlyOpen }) => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col overflow-auto">
      <div className="flex flex-1 overflow-auto">
        <section className="flex-1 flex flex-col items-center justify-start p-8 pt-32 bg-brand-blue relative overflow-hidden">
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
            <div className="flex justify-center">
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
        
        <section className="flex-1 flex flex-col items-center justify-start p-8 pt-32 bg-brand-red relative overflow-hidden">
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
            <div className="flex justify-center">
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
        
        <section className="flex-1 flex flex-col items-center justify-start p-8 pt-32 bg-brand-yellow relative overflow-hidden">
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
            <div className="flex justify-center">
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
              onClick={onCalendlyOpen}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t('contact.meet.button')}
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default DesktopContactView;
