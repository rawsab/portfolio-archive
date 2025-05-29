import { motion } from 'framer-motion';
import FadeInOnView, { fadeUpVariants } from './FadeInOnView';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <FadeInOnView>
      <section
        id="hero"
        className="pt-20 md:pt-26 pb-4 text-left flex flex-col gap-6"
      >
        <motion.h1
          variants={fadeUpVariants}
          className="font-acuminpro text-2xl sm:text-4xl text-[var(--foreground)] leading-[1.4] tracking-[-0.025em] mb-3"
        >
          I am a{'\u00A0\u00A0'}
          <span className="font-menocondensed-important italic text-[2rem] sm:text-[2.75rem] underline decoration-[#CFCFED] decoration-2 underline-offset-8">
            Software Engineer & Designer
          </span>
          {'\u00A0\u00A0'}
          <br className="hidden sm:block" />
          with experience building software across
          {'\u00A0\u00A0'}
          <br className="hidden sm:block" />
          <span className="font-menocondensed-important italic text-[2rem] sm:text-[2.75rem] underline decoration-[#CFCFED] decoration-2 underline-offset-8">
            security, fintech,
          </span>
          <span className="inline-block underline decoration-[#CFCFED] decoration-2 underline-offset-8">
            &nbsp;and&nbsp;&nbsp;
          </span>
          <span className="font-menocondensed-important italic text-[2rem] sm:text-[2.75rem] underline decoration-[#CFCFED] decoration-2 underline-offset-8">
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
          AI-integrated features.
          <br className="hidden sm:block" />
          Currently studying Software Engineering @ UWaterloo.
        </motion.p>
        {/* Downwards arrow link */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-4 mb-2"
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
