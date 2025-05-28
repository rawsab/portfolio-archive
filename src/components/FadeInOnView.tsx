// components/FadeInOnView.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // adjust delay between h1 and p
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function FadeInOnView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Expect children to already have variants attached */}
      {children}
    </motion.div>
  );
}

export { fadeUpVariants };
