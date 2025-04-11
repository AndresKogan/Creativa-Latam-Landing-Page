
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-brand-darkGray border border-white/10 text-white sm:max-w-[425px] rounded-xl shadow-2xl backdrop-blur-md">
        <div 
          className="absolute inset-0 z-0 opacity-20 rounded-xl overflow-hidden" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-2xl font-bold text-white flex items-center justify-center">
            <img 
              src="/lovable-uploads/ffa79e4f-f018-4cf7-b52f-ab1e7be6d5c0.png" 
              alt="Creativa Latam Logo" 
              className="w-24 h-auto mb-4"
            />
          </DialogTitle>
          <DialogTitle className="text-2xl font-bold text-white text-center">
            {t('email.title')}
          </DialogTitle>
        </DialogHeader>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <ContactForm onSuccess={onClose} />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
