'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { researchData as researchDataFull } from '../data/researchData';
import { researchData as researchDataCompact } from '../data/researchDataCompact';
import ResearchItem from './ResearchItem';
import { Microscope } from 'lucide-react';

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

export default function ResearchSection() {
  const [data, setData] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 340
      ? researchDataCompact
      : researchDataFull,
  );

  useEffect(() => {
    function handleResize() {
      setData(
        window.innerWidth <= 340 ? researchDataCompact : researchDataFull,
      );
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="research" className="mt-10 w-full tracking-[-0.020em]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <h2 className="text-[1.6rem] font-regular text-[#2D2D2D] mb-2 flex items-center">
          <Microscope className="w-[1em] h-[1em] mr-2 align-middle text-[#2D2D2D]" />
          Research
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
            <ResearchItem {...exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
