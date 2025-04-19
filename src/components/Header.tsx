
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="fixed w-full top-0 z-50 py-4 px-4 bg-brand-dark/15 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/images/d8f17e22-1254-43d0-b7bd-a5194645ce3b.png"
            alt="Creativa Latam Logo"
            className="h-10 mr-3"
          />
          <span className="text-2xl font-bold text-white">CreativaLatam</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-white hover:text-brand-lightBlue transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/services" className="text-white hover:text-brand-lightBlue transition-colors">
            {t('nav.services')}
          </Link>
          <Link to="/solutions" className="text-white hover:text-brand-lightBlue transition-colors">
            {t('nav.solutions')}
          </Link>
          <Link to="/contact" className="text-white hover:text-brand-lightBlue transition-colors">
            {t('nav.contact')}
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="ml-4 border-brand-lightBlue text-brand-lightBlue hover:bg-brand-lightBlue hover:text-white"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </Button>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-darkGray/90 backdrop-blur-sm p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-white py-2 px-4 hover:bg-brand-gray/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/services"
              className="text-white py-2 px-4 hover:bg-brand-gray/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/solutions"
              className="text-white py-2 px-4 hover:bg-brand-gray/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.solutions')}
            </Link>
            <Link
              to="/contact"
              className="text-white py-2 px-4 hover:bg-brand-gray/20 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                className="border-brand-lightBlue text-brand-lightBlue hover:bg-brand-lightBlue hover:text-white"
                onClick={toggleLanguage}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
