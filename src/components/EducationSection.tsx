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

export default function EducationSection({
  start = true,
  onDone,
  sectionRef,
}: {
  start?: boolean;
  onDone?: () => void;
  sectionRef?: any;
}) {
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
    <section
      id="education"
      className="mt-[50px] w-full tracking-[-0.020em]"
      ref={sectionRef}
    >
      <motion.div
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[var(--foreground)] mb-2 flex items-center">
          <GraduationCap className="w-[1em] h-[1em] mr-2 align-middle text-[var(--foreground)]" />
          Education
        </h2>
        <div className="h-[1px] bg-[var(--foreground)]/10 mb-5" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
        className=""
      >
        {data.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            {...(onDone && index === data.length - 1
              ? { onAnimationStart: onDone }
              : {})}
          >
            <EducationItem {...exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
