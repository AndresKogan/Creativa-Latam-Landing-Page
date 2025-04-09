
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  iconOnly?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text, 
  className = "",
  iconOnly = false
}) => {
  const { t } = useLanguage();
  const phoneNumber = "+5492617251160";
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#128C7E] text-white ${className}`}
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      {!iconOnly && (text || t('services.talk'))}
    </Button>
  );
};

export default WhatsAppButton;
