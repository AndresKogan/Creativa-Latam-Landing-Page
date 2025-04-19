
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-darkGray border-t border-brand-gray py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Left: Company logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <Link to="/">
              <img
                src="/images/d8f17e22-1254-43d0-b7bd-a5194645ce3b.png"
                alt="Creativa Latam Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Center: Social icons */}
          <div className="flex space-x-8">
            <a
              href="https://www.facebook.com/profile.php?id=61558871616136"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/creativalatamoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="mailto:creativalatamoficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
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
