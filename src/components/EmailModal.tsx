
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
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            {t('email.title')}
          </DialogTitle>
        </DialogHeader>
        <ContactForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
