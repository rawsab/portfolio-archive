'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projectData';
import { Folder, ChevronDown, ChevronUp } from 'lucide-react';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectsSection({
  start = true,
  onDone,
  sectionRef,
}: {
  start?: boolean;
  onDone?: () => void;
  sectionRef?: any;
}) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  // Check if we're in single column layout
  useEffect(() => {
    const checkLayout = () => {
      const grid = document.querySelector('.projects-grid');
      if (grid) {
        const computedStyle = window.getComputedStyle(grid);
        const gridTemplateColumns = computedStyle.gridTemplateColumns;
        setIsSingleColumn(gridTemplateColumns.split(' ').length === 1);
      }
    };
    
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  const displayedProjects = isSingleColumn && !showAllProjects ? projects.slice(0, 3) : projects;

  return (
    <section
      id="projects"
      className="mt-[50px] w-full tracking-[-0.020em]"
      ref={sectionRef}
    >
      <motion.div
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[var(--foreground)] mb-2 flex items-center">
          <Folder className="w-[1em] h-[1em] mr-2 align-middle text-[var(--foreground)]" />
          Projects
        </h2>
        <div className="h-[1px] bg-[var(--foreground)]/10 mb-5" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 projects-grid"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            {...(onDone && index === displayedProjects.length - 1
              ? { onAnimationStart: onDone }
              : {})}
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Show All/Less Toggle Button - Only show in single column layout */}
      {isSingleColumn && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--foreground)]/70 transition-colors font-medium"
            >
              {showAllProjects ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show All
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
          
          {/* Divider line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="h-[1px] bg-[var(--foreground)]/10 mt-8"
          />
        </>
      )}
    </section>
  );
}
