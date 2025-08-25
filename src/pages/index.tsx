import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import FloatingBottomGradient from '@/components/FloatingBottomGradient';
import GlowCursor from '@/components/GlowCursor';
import CaseStudiesPopup from '@/components/CaseStudiesPopup';
import { CommandMenu } from '@/components/CommandMenu';
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
        <title>Rawsab Said</title>
        <meta
          name="description"
          content="Software Engineering student at the University of Waterloo with experience across startups and scaling products. Explore my projects and work showcased on this site."
        />
        <meta name="keywords" content="software developer, AI, web development, React, TypeScript, Next.js, portfolio, Rawsab, Patchly, Questporter, DeenBoard, Waterloo, University of Waterloo, software engineering, startups, scaling products" />
        <meta name="author" content="Rawsab Said" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://rawsab.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rawsab Said",
              "jobTitle": "Software Engineer",
              "description": "Software Engineering student at the University of Waterloo with experience across startups and scaling products. Explore my projects and work showcased on this site.",
              "url": "https://rawsab.com",
              "sameAs": [
                "https://github.com/rawsab",
                "https://linkedin.com/in/rawsab",
                "https://instagram.com/rrawsab"
              ],
              "knowsAbout": [
                "Software Development",
                "Artificial Intelligence",
                "Web Development",
                "Product Development",
                "Startups",
                "Scaling Products",
                "Automation",
                "Blockchain",
                "Cryptocurrency",
                "Distributed Systems",
                "Computer Science",
                "Backend Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Frontend Development",
                "Full Stack Development",
                "Cloud Computing",
                "DevOps",
                "Software Engineering",
                "React",
                "TypeScript",
                "Next.js"
              ]
            })
          }}
        />
      </Head>
      <NavigationBar />
      <div className="flex flex-col lg:flex-row px-4 md:px-8 mx-auto min-h-screen pb-14 lg:max-w-[1400px] lg:px-8 justify-between">
        {/* Left Column - Main Content */}
        <main className="scroll-smooth w-full lg:w-3/4 lg:max-w-[947px] lg:min-w-[650px] lg:mr-4">
          <section id="hero" className="scroll-mt-20">
            <HeroSection />
          </section>
          <ResumeSections />
        </main>
        
        {/* Right Column - Featured Projects (Desktop only) */}
        <aside className="hidden lg:block w-full lg:w-1/4 lg:max-w-[400px] lg:sticky lg:top-20 lg:h-fit lg:ml-4">
          <FeaturedProjects />
        </aside>
      </div>
      <Footer />
      <FloatingBottomGradient />
      <GlowCursor />
      <CaseStudiesPopup />
      <CommandMenu />
    </>
  );
}
