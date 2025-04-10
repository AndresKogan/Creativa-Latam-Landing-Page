
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-brand-darkGray border-brand-gray text-white sm:max-w-[425px]">
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-xl font-bold text-white">
            {t('email.title')}
          </DialogTitle>
        </DialogHeader>
        <div className="bg-brand-darkGray bg-opacity-80 p-4 rounded-md relative z-10">
          <ContactForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
