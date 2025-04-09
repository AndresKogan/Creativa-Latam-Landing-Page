
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    // Load Calendly script when the modal is opened
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-brand-darkGray border-brand-gray text-white sm:max-w-[800px] sm:max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white mb-4">
            {t('contact.meet.button')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="h-[600px] w-full">
          {isOpen && (
            <div 
              className="calendly-inline-widget w-full h-full" 
              data-url="https://calendly.com/creativalatam/30min"
              style={{ minWidth: '320px', height: '600px' }}
            ></div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
