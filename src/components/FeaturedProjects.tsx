import { useState } from 'react';
import { motion } from 'framer-motion';
import { featuredProjects, FeaturedProject } from '@/data/featuredData';

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div 
      className="pt-0 lg:pt-4 font-acuminpro"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2 
        className="text-md font-bold lg:mb-6 mb-4 text-left text-[var(--foreground)]/70 font-google-sans-code tracking-[-0.025em]"
        variants={fadeUpVariants}
      >
        FEATURED PROJECTS
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer"
            variants={fadeUpVariants}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* 3:2 aspect ratio project image */}
            <div className="relative overflow-hidden rounded-lg border border-[var(--foreground)]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredProject === project.id ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            {/* Project title with arrow */}
            <div className="mt-3 flex items-start justify-between">
              <h3 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-[#7B7B7B] transition-colors tracking-[-0.025em]">
                {project.title}
              </h3>
              <svg
                className="w-5 h-5 text-[var(--foreground)]/50 group-hover:text-[#7B7B7B] transform transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
            
            {/* Project description */}
            <p className="text-sm text-[var(--foreground)]/70 mt-1 line-clamp-2 tracking-[-0.025em]">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* <motion.div 
        className="mt-6 pt-4 border-t border-[var(--foreground)]/20 md:text-left max-md:hidden"
        variants={fadeUpVariants}
      >
        <a
          href="https://github.com/rawsab"
          className="inline-flex items-center text-sm font-medium text-[var(--foreground)] hover:text-[var(--foreground)]/70 transition-colors"
        >
          View on GitHub
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </motion.div> */}
    </motion.div>
  );
}
