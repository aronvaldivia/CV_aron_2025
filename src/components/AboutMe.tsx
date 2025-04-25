import React, { useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMe: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaItems = [
    {
      type: 'video',
      src: "https://mcusercontent.com/17635adc15e4488859eb5650d/files/3ed639f2-7d68-f347-fff4-ae37de21fdd1/VIDEO_FONDO_LADING.mp4",
    },
    {
      type: 'video',
      src: "https://mcusercontent.com/17635adc15e4488859eb5650d/files/69c78b77-6d74-0318-c8cf-fa7c190e6b54/VIDEOLANGIN2.mp4",
    },
    {
      type: 'video',
      src: "https://mcusercontent.com/17635adc15e4488859eb5650d/files/498582fe-6252-4cd3-7162-e189797db9e5/VIDEOLANIDNG3.mp4",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const renderMedia = (item: typeof mediaItems[0]) => {
    if (item.type === 'video') {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={item.src} type="video/mp4" />
        </video>
      );
    } else {
      return (
        <img
          src={item.src}
          alt="Background"
          className="w-full h-full object-cover"
        />
      );
    }
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            {renderMedia(mediaItems[currentIndex])}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Sobre Mí
        </h2>
        <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-lg border border-white/10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="text-white mt-1 " />
              <div>
                <h3 className="text-shadow-lg/30 font-semibold text-emerald-500 ">Experiencia Profesional</h3>
                <p className="text-white/90">
                "UX/UI Developer especializado en crear experiencias digitales impactantes. Tengo experiencia liderando rediseños de plataformas y aplicaciones, mejorando su funcionalidad y rendimiento para optimizar la interacción del usuario.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Code className="text-white mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-emerald-500 ">Especialización</h3>
                <p className="text-white/90">
               diseño UX/UI estratégico con desarrollo frontend funcional 
               
                </p>  
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="text-white mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-emerald-500 ">Formación</h3>
                <p className="text-white/90">
                  ISIL - Ingeniería de Software 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;