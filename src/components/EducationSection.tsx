'use client';

import { motion } from 'framer-motion';
import { educationData } from '../data/educationData';
import EducationItem from './EducationItem';

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
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function EducationSection() {
  return (
    <section id="education" className="mt-10 w-full tracking-[-0.020em]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[#2D2D2D] mb-2">
          Education
        </h2>
        <div className="h-[1px] bg-[#e0e0e0] mb-5" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationData.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <EducationItem {...exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
