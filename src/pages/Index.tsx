
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-brand-dark to-brand-darkGray">
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-32 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t('home.title')}
            </h1>
            
            <div className="bg-brand-darkGray bg-opacity-70 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg text-brand-lightGray mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. 
                Pellentesque sit amet hendrerit risus, sed porttitor quam. Magna harum nobis obcaecati aperiam laborum aspernatur consectetur.
              </p>
              
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-medium px-8 py-6 text-lg"
                >
                  {t('home.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
