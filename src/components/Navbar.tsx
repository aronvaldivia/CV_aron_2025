import React from 'react';
import { Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2 hover:text-blue-700 transition-colors"
          >
             <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/a469f9b8-da28-7f56-507e-03b041e19ef6.png"
                  alt="logo"
                 width={80}
                />
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {[
               { id: 'about', label: 'Sobre Mí' },
              { id: 'projects', label: 'Proyectos' },
              { id: 'skills', label: 'Tecnologías' },
              { id: 'experience', label: 'Experiencia' },
              { id: 'contact', label: 'Contacto' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-700 hover:text-green-400 transition-colors relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;