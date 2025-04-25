import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-black-50 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl ${url ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {url && <ExternalLink className="text-emerald-500" size={20} />}
        </div>
        <p className="text-white">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;