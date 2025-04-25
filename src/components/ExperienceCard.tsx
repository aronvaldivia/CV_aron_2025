import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  institution,
  period,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(255, 255, 255, 1)"
      }}
      className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:border-blue-200"
    >
      <h4 className="text-xl font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-emerald-700 font-medium mb-2">{company || institution}</p>
      <p className="text-gray-600 text-sm mb-3">{period}</p>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default ExperienceCard;