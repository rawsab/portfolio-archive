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
        <h2 className="text-[1.6rem] font-regular text-[#2D2D2D] mb-2 flex items-center">
          <Folder className="w-[1em] h-[1em] mr-2 align-middle text-[#2D2D2D]" />
          Projects
        </h2>
        <div className="h-[1px] bg-[#e0e0e0] mb-5" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            {...(onDone && index === projects.length - 1
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
    </section>
  );
}
