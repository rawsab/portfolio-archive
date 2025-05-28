import { motion } from 'framer-motion';
import FadeInOnView, { fadeUpVariants } from './FadeInOnView';

export default function HeroSection() {
  return (
    <FadeInOnView>
      <section id="hero" className="pt-26 pb-6 text-left flex flex-col gap-6">
        <motion.h1
          variants={fadeUpVariants}
          className="font-acuminpro text-4xl sm:text-4xl text-[#2D2D2D] leading-[1.4] tracking-[-0.025em] mb-3"
        >
          I am a{'  '}
          <span className="font-menocondensed-important italic text-[2.75rem] underline decoration-[#CFCFED] decoration-2 underline-offset-8">
            Software Engineer & Designer
          </span>
          <br />
          with experience building software across
          <br />
          <span className="font-menocondensed-important italic text-[2.75rem] underline decoration-[#CFCFED] decoration-2 underline-offset-8">
            security, fintech,
          </span>
          <span className="inline-block underline decoration-[#CFCFED] decoration-2 underline-offset-8">
            &nbsp;and&nbsp;&nbsp;
          </span>
          <span className="font-menocondensed-important italic text-[2.75rem] underline decoration-[#CFCFED] decoration-2 underline-offset-8">
            social
          </span>
          {'  '}
          industries.
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="text-[1.15rem] text-[#7B7B7B] max-w-[650px] tracking-[-0.010em] leading-snug"
        >
          I've worked across early-stage startups and scaling products,
          contributing to secure backend systems, real-time data flows, and
          AI-integrated features.
          <br />
          Currently studying Software Engineering @ UWaterloo.
        </motion.p>
      </section>
    </FadeInOnView>
  );
}
