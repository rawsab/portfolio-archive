'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projectData';
import { Folder } from 'lucide-react';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-16 w-full tracking-[-0.020em]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[#2D2D2D] mb-2 flex items-center">
          <Folder className="w-[1em] h-[1em] mr-2 align-middle text-[#2D2D2D]" />
          Projects
        </h2>
        <div className="h-[1px] bg-[#e0e0e0] mb-5" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
