import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header & Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.contact': 'Contact',
    'nav.search': 'Search',
    
    // Home page
    'home.title': 'Bring your brand into a USD 89 trillion digital environment',
    'home.description': 'Creativa Latam is a group of communicators focused on various areas. Our team includes programmers, designers, and specialists in all aspects of digital communication.',
    'home.cta': 'Contact Us',
    
    // Services page
    'services.branding.title': 'Branding',
    'services.ecommerce.title': 'E-Commerce',
    'services.contactUs': 'Contact us',
    'services.email': 'E-mail',
    'services.talk': "Let's talk",
    
    // Email modal
    'email.title': 'Please contact me',
    'email.service': 'Service',
    'email.placeholder': 'contact me',
    'email.send': 'Send',
    
    // Solutions page
    'solutions.metrics.title': 'Metrics & Analysis',
    'solutions.metrics.item1': '🚀 User Experience',
    'solutions.metrics.item2': '📊 Data Analysis',
    'solutions.metrics.item3': '🛍️ Conversion Optimization',
    
    'solutions.communication.title': 'Communication 360º',
    'solutions.communication.item1': '🎨 Graphic Design',
    'solutions.communication.item2': '🎬 Content Production',
    'solutions.communication.item3': '🌱 Organic Social Media',
    'solutions.communication.item4': '📧 Email Marketing',
    'solutions.communication.item5': '🎯 Targeted Advertising',
    
    'solutions.assets.title': 'Digital Assets',
    'solutions.assets.item1': '🎈 Branding',
    'solutions.assets.item2': '♟️ Creative Strategy',
    'solutions.assets.item3': '📲 Responsive Web Design',
    'solutions.assets.item4': '⚙️ Annual Domain and Hosting',
    
    // Contact page
    'contact.title': "Let's talk",
    'contact.email.title': 'Contact by email',
    'contact.text.title': 'Text me',
    'contact.meet.title': 'I want to meet',
    'contact.meet.button': 'Schedule a meeting',
    
    // Footer
    'footer.copyright': 'Copyright © 2025 CreativaLatam',
    'footer.powered': 'Powered by CreativaLatam'
  },
  es: {
    // Header & Navigation
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.contact': 'Contacto',
    'nav.search': 'Buscar',
    
    // Home page
    'home.title': 'Lleva tu marca a un entorno digital de USD 89 billones',
    'home.description': 'Creativa Latam es un grupo de comunicadores con focalización en diferentes áreas. Nuestro equipo cuenta con programadores, diseñadores y especialistas en todos los aspectos que hacen a la comunicación digital.',
    'home.cta': 'Contáctanos',
    
    // Services page
    'services.branding.title': 'Branding',
    'services.ecommerce.title': 'E-Commerce',
    'services.contactUs': 'Contáctanos',
    'services.email': 'Correo',
    'services.talk': 'Hablemos',
    
    // Email modal
    'email.title': 'Por favor contáctame',
    'email.service': 'Servicio',
    'email.placeholder': 'contáctame',
    'email.send': 'Enviar',
    
    // Solutions page
    'solutions.metrics.title': 'Métricas & Análisis',
    'solutions.metrics.item1': '🚀 Experiencia de usuario',
    'solutions.metrics.item2': '📊 Análisis de datos',
    'solutions.metrics.item3': '🛍️ Optimización de conversión',
    
    'solutions.communication.title': 'Comunicación 360º',
    'solutions.communication.item1': '🎨 Diseño gráfico',
    'solutions.communication.item2': '🎬 Producción de contenido',
    'solutions.communication.item3': '🌱 Redes sociales orgánicas',
    'solutions.communication.item4': '📧 Email marketing',
    'solutions.communication.item5': '🎯 Publicidad dirigida',
    
    'solutions.assets.title': 'Activos digitales',
    'solutions.assets.item1': '🎈 Branding',
    'solutions.assets.item2': '♟️ Estrategia creativa',
    'solutions.assets.item3': '📲 Diseño web reactivo',
    'solutions.assets.item4': '⚙️ Dominio y hosting anual',
    
    // Contact page
    'contact.title': 'Hablemos',
    'contact.email.title': 'Contacto por correo',
    'contact.text.title': 'Escríbeme',
    'contact.meet.title': 'Quiero reunirme',
    'contact.meet.button': 'Programar una reunión',
    
    // Footer
    'footer.copyright': 'Copyright © 2025 CreativaLatam',
    'footer.powered': 'Desarrollado por CreativaLatam'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Detect user's language based on browser or geolocation
  useEffect(() => {
    const detectLanguage = async () => {
      // Simple browser language detection
      const browserLang = navigator.language.split('-')[0];
      
      if (browserLang === 'es') {
        setLanguage('es');
      }
      
      // For more accurate geolocation-based detection, you could integrate with a geolocation API
      // but for now we'll just use browser language as a simplification
    };
    
    detectLanguage();
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
