import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import FloatingBottomGradient from '@/components/FloatingBottomGradient';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

function ResumeSections() {
  // InView hooks for each section
  const { ref: expInViewRef, inView: expInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: eduInViewRef, inView: eduInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: resInViewRef, inView: resInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: projInViewRef, inView: projInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Done signals
  const [experienceDone, setExperienceDone] = useState(false);
  const [educationDone, setEducationDone] = useState(false);
  const [researchDone, setResearchDone] = useState(false);
  const [projectsDone, setProjectsDone] = useState(false);

  return (
    <>
      <section id="experience" className="scroll-mt-20" ref={expInViewRef}>
        <ExperienceSection
          start={expInView}
          onDone={() => setExperienceDone(true)}
        />
      </section>
      <section id="education" className="scroll-mt-20" ref={eduInViewRef}>
        <EducationSection
          start={experienceDone && eduInView}
          onDone={() => setEducationDone(true)}
        />
      </section>
      <section id="research" className="scroll-mt-20" ref={resInViewRef}>
        <ResearchSection
          start={educationDone && resInView}
          onDone={() => setResearchDone(true)}
        />
      </section>
      <section id="projects" className="scroll-mt-20" ref={projInViewRef}>
        <ProjectsSection
          start={researchDone && projInView}
          onDone={() => setProjectsDone(true)}
        />
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Rawsab's Portfolio</title>
        <meta
          name="description"
          content="Find out more about my experiences, education, and projects."
        />
      </Head>
      <NavigationBar />
      <main className="scroll-smooth w-full px-4 md:px-8 mx-auto min-h-screen pb-20 lg:w-[60vw] lg:max-w-[947px] lg:min-w-[852px] lg:px-0">
        <section id="hero" className="scroll-mt-20">
          <HeroSection />
        </section>
        <ResumeSections />
      </main>
      <Footer />
      <FloatingBottomGradient />
    </>
  );
}
