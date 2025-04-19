
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className={`${isMobile ? 'min-h-screen' : 'h-screen'} flex items-center justify-center relative bg-gradient-to-br from-brand-blue via-brand-lightBlue to-brand-red`}>

      <section className="section-container relative z-10 pt-20">
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
            <h2 className="text-2xl font-bold text-white mb-4 text-center">{language === 'en' ? 'Who We Are' : 'Quienes Somos'}</h2>
            <p className="text-gray-300 mb-4 font-bold text-justify" >
              {language === 'en' ?
                'We are three restless minds, passionate about communication, and united by a common passion: bringing brands to the digital world and making them shine.' :
                'Somos tres mentes inquietas, apasionadas por la comunicación y unidas por una misma pasión: llevar marcas al mundo digital y hacerlas brillar.'}
            </p>
            <p className="text-gray-300 mb-4 font-bold text-justify">
              {language === 'en' ?
                'From the heart of Latin America, we combine the best of design, technology, and strategy to create experiences that connect. One of us thinks in colors, shapes, and emotions; another in lines of code, algorithms, and functionality; and the third in time, flows, and results.' :
                'Desde el corazón de América Latina, combinamos lo mejor del diseño, la tecnología y la estrategia para crear experiencias que conectan. Uno de nosotros piensa en colores, formas y emociones; otro en líneas de código, algoritmos y funcionalidad; y el tercero en tiempos, flujos y resultados.'}
            </p>
            <p className="text-gray-300 mb-4 font-bold text-justify">
              {language === 'en' ?
                'Together, we are an agile, creative agency focused on making each project leave its mark.' :
                'Juntos, somos una agencia ágil, creativa y enfocada en hacer que cada proyecto deje huella.'}
            </p>
            <p className="text-gray-300 font-bold text-justify">
              {language === 'en' ?
                '70% of Latin American SMEs are not yet in the digital world; they don\'t need excuses: they need allies. And that\'s where we come in.' :
                'El 70% de las pymes latinoamericanas aún no están en el entorno digital, no necesitan excusas: necesitan aliados. Y ahí entramos nosotros.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center ">
                {language === 'en' ? 'Mission' : 'Misión'}
              </h2>
              <p className="text-gray-300 font-bold text-justify">
                {language === 'en' ?
                  'To digitize Latin American brands through data-driven strategies, integrating marketing solutions aimed at sustainable growth in Spanish- and English-speaking environments.' :
                  'Digitalizar marcas latinoamericanas mediante estrategias basadas en datos, integrando soluciones de marketing orientadas al crecimiento sostenible en entornos hispanohablantes y angloparlantes.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                {language === 'en' ? 'Vision' : 'Visión'}
              </h2>
              <p className="text-gray-300 font-bold text-justify ">
                {language === 'en' ?
                  'To bridge the digital divide between brands by leading digital transformation processes with a scientific approach, measurable impact, and global reach.' :
                  'Reducir la brecha digital presente entre las marcas, liderando procesos de transformación digital con enfoque científico, impacto medible y alcance global.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
