import { motion } from 'framer-motion';
import FadeInOnView, { fadeUpVariants } from './FadeInOnView';
import { ArrowDown } from 'lucide-react';
import ArrowUpRight from '../../public/icons/ArrowUpRight';

export default function HeroSection() {
  return (
    <FadeInOnView>
      <section
        id="hero"
        className="pt-10 md:pt-16 pb-4 text-left flex flex-col gap-6"
      >
        <motion.h1
          variants={fadeUpVariants}
          className="font-acuminpro text-2xl sm:text-4xl text-[var(--foreground)] leading-[1.2] tracking-[-0.025em] mb-3"
        >
          I am a{'\u00A0\u00A0'}
          <span className="font-menocondensed-important italic text-[2rem] sm:text-[2.75rem] underline decoration-[var(--underline)] decoration-2 underline-offset-8">
            software engineer & designer
          </span>
          {'\u00A0\u00A0'}
          <br className="hidden sm:block" />
          with experience building software across
          {'\u00A0\u00A0'}
          <br className="hidden sm:block" />
          <span className="font-menocondensed-important italic text-[2rem] sm:text-[2.75rem] underline decoration-[var(--underline)] decoration-2 underline-offset-8">
            security, fintech,
          </span>
          <span className="inline-block underline decoration-[var(--underline)] decoration-2 underline-offset-8">
            &nbsp;and&nbsp;&nbsp;
          </span>
          <span className="font-menocondensed-important italic text-[2rem] sm:text-[2.75rem] underline decoration-[var(--underline)] decoration-2 underline-offset-8">
            social
          </span>
          {'\u00A0\u00A0'}
          industries.
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="text-base sm:text-[1.15rem] text-[var(--foreground)]/70 max-w-[650px] tracking-[-0.010em] leading-snug"
        >
          I've worked across early-stage startups and scaling products,
          contributing to secure backend systems, real-time data flows, and
          AI-integrated features. <br className="hidden sm:block" />
          Currently studying Software Engineering @ UWaterloo.
        </motion.p>
        
        {/* Portfolio link */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://www.rawsab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center gap-1 group text-base sm:text-[1rem] text-[var(--foreground)]/70 tracking-[-0.010em]"
          >
            View my new portfolio here
            <ArrowUpRight className="w-3 h-3 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
        
        {/* Downwards arrow link */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-2 mb-0"
        >
          <a
            href="#experience"
            aria-label="Scroll to experience section"
            className="animate-bounce text-[var(--foreground)] hover:text-[#7B7B7B] focus:outline-none"
          >
            <ArrowDown className="w-8 h-8" strokeWidth={1} />
          </a>
        </motion.div>
      </section>
    </FadeInOnView>
  );
}
