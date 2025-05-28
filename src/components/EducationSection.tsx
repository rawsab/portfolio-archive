'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { educationData as educationDataFull } from '../data/educationData';
import { educationData as educationDataCompact } from '../data/educationDataCompact';
import EducationItem from './EducationItem';
import { GraduationCap } from 'lucide-react';

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
  const [data, setData] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 340
      ? educationDataCompact
      : educationDataFull,
  );

  useEffect(() => {
    function handleResize() {
      setData(
        window.innerWidth <= 340 ? educationDataCompact : educationDataFull,
      );
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="education" className="mt-10 w-full tracking-[-0.020em]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[#2D2D2D] mb-2 flex items-center">
          <GraduationCap className="w-[1em] h-[1em] mr-2 align-middle text-[#2D2D2D]" />
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
        {data.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <EducationItem {...exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
