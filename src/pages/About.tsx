
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

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
          <motion.h1 
            className="text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('nav.about')}
          </motion.h1>
          
          <motion.div 
            className="bg-brand-darkGray bg-opacity-80 rounded-lg p-8 mb-12 backdrop-blur-sm border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Quienes Somos</h2>
            <p className="text-gray-300 mb-6">
              Somos tres mentes inquietas, apasionadas por la comunicación y unidas por una misma pasión: 
              llevar marcas al mundo digital y hacerlas brillar.
            </p>
            <p className="text-gray-300 mb-6">
              Desde el corazón de América Latina, combinamos lo mejor del diseño, la tecnología y la estrategia 
              para crear experiencias que conectan. Uno de nosotros piensa en colores, formas y emociones; otro 
              en líneas de código, algoritmos y funcionalidad; y el tercero en tiempos, flujos y resultados. 
              Juntos, somos una agencia ágil, creativa y enfocada en hacer que cada proyecto deje huella.
            </p>
            <p className="text-gray-300">
              El 70% de las pymes latinoamericanas aún no están en el entorno digital, no necesitan excusas: 
              necesitan aliados. Y ahí entramos nosotros.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-brand-darkGray bg-opacity-80 rounded-lg p-8 backdrop-blur-sm border border-white/10 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Misión</h2>
              <p className="text-gray-300">
                Digitalizar marcas latinoamericanas mediante estrategias basadas en datos, integrando 
                soluciones de marketing orientadas al crecimiento sostenible en entornos hispanohablantes 
                y angloparlantes.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-brand-darkGray bg-opacity-80 rounded-lg p-8 backdrop-blur-sm border border-white/10 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Visión</h2>
              <p className="text-gray-300">
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
