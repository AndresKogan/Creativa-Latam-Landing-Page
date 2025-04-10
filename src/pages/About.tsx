
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 relative">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <section className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">{t('nav.about')}</h1>
          
          <div className="bg-brand-darkGray bg-opacity-90 rounded-lg p-8 mb-12 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. 
              Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna harum nobis obcaecati aperiam laborum aspernatur consectetur.
            </p>
            <p className="text-gray-300">
              Fusce varius, dolor tempor interdum tristique, dui urna bibendum odio, ut imperdiet eros diam eget ex. 
              Vivamus lacus ipsum, gravida id efficitur eget, maximus eget ipsum. Donec id euismod lacus. 
              Suspendisse et congue ante, ut dictum est. Ut faucibus lobortis purus, sed sagittis leo scelerisque et.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-darkGray bg-opacity-90 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. 
                Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna harum nobis obcaecati aperiam laborum aspernatur consectetur.
              </p>
            </div>
            
            <div className="bg-brand-darkGray bg-opacity-90 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
              <p className="text-gray-300">
                Fusce varius, dolor tempor interdum tristique, dui urna bibendum odio, ut imperdiet eros diam eget ex. 
                Vivamus lacus ipsum, gravida id efficitur eget, maximus eget ipsum. Donec id euismod lacus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
