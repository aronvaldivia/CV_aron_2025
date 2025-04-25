import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import ExperienceCard from './components/ExperienceCard';
import ContactForm from './components/ContactForm';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];

  const scrollToSection = (direction: 'up' | 'down') => {
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom > 100;
    });

    const currentIndex = sections.indexOf(currentSection || 'hero');
    const nextIndex = direction === 'up' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(sections.length - 1, currentIndex + 1);

    const nextElement = document.getElementById(sections[nextIndex]);
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        scrollToSection('up');
      } else if (e.key === 'ArrowDown') {
        scrollToSection('down');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projects = [
   
    {
      title: "HOCHI IMPORT AND EXPORT",
      description: "Comercialización mayorista de línea de productos tecnológicos",
      image: "https://mcusercontent.com/17635adc15e4488859eb5650d/images/54e0c071-f90f-cf16-5e66-7a70c69ed7e7.png",
      url: "https://hochi.pe/"
    },
    {
      title: "ABEXA CLOUD",
      description: "Empresa de software para Buses y transporte publico",
      image: "https://mcusercontent.com/17635adc15e4488859eb5650d/images/6f7267d5-61e2-4c56-37e1-ebf9fdfde5d7.png",
      url: "https://www.abexacloud.com/"
    },
    {
      title: "Tienda 'LOS RUSOS' ",
      description: "Tienda Virtual - Pedidos por mensaje",
      image: "https://mcusercontent.com/17635adc15e4488859eb5650d/images/8085f325-61b8-9261-89bd-b41b546dc280.png",
      url: "https://rusotienda.netlify.app/"
    }
  ];

  const experiences = [
    {
      title: "UI UX Developer  ",
      company: "ABEXA CLOUD COMPANY.",
      period: "Present",
      description: "Diseñador web "
    },
    {
      title: "Diseñador web - Marketing Digital  ",
      company: "Hochi importaciones SAC . ",
      period: "2019 - 2021",
      description: "Diseñador web - Marketing Digital "
    }
  ];

  const education = [
    {
      title: "Software Engineer",
      institution: "ISIL",
      period: "2018-2022",
      description: "Software Engineering tecnico"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      <MusicPlayer />
      
      {/* Hero Section */}
      <motion.section 
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-r from-slate-900 to-zinc-800 text-white flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
               <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/0c47d545-a4f8-51a9-a382-77d96769579a.png"
                  className="profe-image w-180 h-30 flex justify-center items-center flex gap-4"
                />
                
              <p className="text-xl md:text-2xl text-blue-100 mb-8 pt-10">
              UX/UI Developer
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/aronvaldivia" className="p-2 hover:text-emerald-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aron-valdivia-6a3156248/" className="p-2 hover:text-emerald-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="aronvaldivia0101@gmail.com" className="p-2 hover:text-emerald-200 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="profile-image-container">
                <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/08829a93-8de4-4fd3-17c7-77e103ccbd55.jpg"
                  alt="Profile"
                  className="profile-image w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

     

      
      {/* About Section */}
      <section 
      
        id="about"
        className="min-h-screen bg-gradient-to-r from-slate-900 to-zinc-800 relative overflow-hidden"
      >
        
        <AboutMe />
      </section>

 {/* Projects Section */}
 <section 
        id="projects"
        className="min-h-screen bg-gradient-to-r from-slate-900 to-zinc-800 py-20 flex items-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Mis Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section 
        id="skills"
        className="min-h-screen bg-black py-20 flex items-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Tecnologías
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience"
        className="min-h-screen bg-gradient-to-r from-slate-900 to-zinc-800 py-20 flex items-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Experiencia y Educación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Experiencia Laboral</h3>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Educación</h3>
              {education.map((edu, index) => (
                <ExperienceCard key={index} {...edu} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className="min-h-screen bg-black py-20 flex items-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Contáctame
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        <button
          onClick={() => scrollToSection('up')}
          className="p-3 bg-black-900 text-white rounded-full shadow-lg hover:bg-black transition-colors"
          aria-label="Scroll Up"
        >
          <ArrowUp size={24} />
        </button>
        <button
          onClick={() => scrollToSection('down')}
          className="p-3 bg-black-900 text-white rounded-full shadow-lg hover:bg-black transition-colors"
          aria-label="Scroll Down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;