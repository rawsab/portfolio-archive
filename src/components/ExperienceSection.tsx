'use client';

import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';
import ExperienceItem from './ExperienceItem';
import { Briefcase } from 'lucide-react';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-[50px] w-full tracking-[-0.020em]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[#2D2D2D] mb-2 flex items-center">
          <Briefcase className="w-[1em] h-[1em] mr-2 align-middle text-[#2D2D2D]" />
          Experience
        </h2>
        <div className="h-[1px] bg-[#e0e0e0] mb-5" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        {experienceData.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ExperienceItem {...exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
