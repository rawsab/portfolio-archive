'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data/experienceData';
import ExperienceItem from './ExperienceItem';
import { Briefcase } from 'lucide-react';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
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

export default function ExperienceSection({
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
      id="experience"
      className="mt-0 w-full tracking-[-0.020em]"
      ref={sectionRef}
    >
      <motion.div
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[var(--foreground)] mb-2 flex items-center">
          <Briefcase className="w-[1em] h-[1em] mr-2 align-middle text-[var(--foreground)]" />
          Experience
        </h2>
        <div className="h-[1px] bg-[var(--foreground)]/10 mb-5" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
        className="space-y-8"
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            {...(onDone && index === experienceData.length - 1
              ? { onAnimationStart: onDone }
              : {})}
          >
            <ExperienceItem {...exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
