
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-darkGray border-t border-brand-gray py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-xl font-bold text-white mr-2">CreativaLatam</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="mailto:creativalatamoficial@gmail.com" 
              className="text-white hover:text-brand-red transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-brand-gray mt-6 pt-6 text-center">
          <p className="text-brand-lightGray text-sm">
            {t('footer.copyright')}<br />
            {t('footer.powered')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
