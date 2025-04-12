
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 z-0 opacity-10 flex items-center justify-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img 
          src="/lovable-uploads/d8f17e22-1254-43d0-b7bd-a5194645ce3b.png" 
          alt="Creativa Latam Logo" 
          className="w-96 h-auto opacity-20"
        />
      </div>
      <section className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('nav.about')}
          </motion.h1>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Quienes Somos</h2>
            <p className="text-gray-300 mb-4 font-bold">
              Somos tres mentes inquietas, apasionadas por la comunicación y unidas por una misma pasión: 
              llevar marcas al mundo digital y hacerlas brillar.
            </p>
            <p className="text-gray-300 mb-4 font-bold">
              Desde el corazón de América Latina, combinamos lo mejor del diseño, la tecnología y la estrategia 
              para crear experiencias que conectan. Uno de nosotros piensa en colores, formas y emociones; otro 
              en líneas de código, algoritmos y funcionalidad; y el tercero en tiempos, flujos y resultados. 
              Juntos, somos una agencia ágil, creativa y enfocada en hacer que cada proyecto deje huella.
            </p>
            <p className="text-gray-300 font-bold">
              El 70% de las pymes latinoamericanas aún no están en el entorno digital, no necesitan excusas: 
              necesitan aliados. Y ahí entramos nosotros.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Misión</h2>
              <p className="text-gray-300 font-bold">
                Digitalizar marcas latinoamericanas mediante estrategias basadas en datos, integrando 
                soluciones de marketing orientadas al crecimiento sostenible en entornos hispanohablantes 
                y angloparlantes.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Visión</h2>
              <p className="text-gray-300 font-bold">
                Reducir la brecha digital presente entre las marcas, liderando procesos de transformación 
                digital con enfoque científico, impacto medible y alcance global.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
