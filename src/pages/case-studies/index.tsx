import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import FloatingBottomGradient from '../../components/FloatingBottomGradient';
import { featuredProjects } from '../../data/featuredData';

interface CaseStudyMeta {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  timeline: string;
  year: string;
  technologies: string[];
  featured: boolean;
  order: number;
  heroImage?: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudyMeta[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: custom * 0.1, // 0.1s delay per card
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Head>
        <title>Project Case Studies | Rawsab Said</title>
        <meta name="description" content="A collection of project case studies exploring the intersection of design and engineering. Each case study breaks down the design process, technical decisions, and challenges behind the work." />
        <meta name="keywords" content="case studies, design, engineering, projects, portfolio, Rawsab Said" />
        <meta property="og:title" content="Project Case Studies | Rawsab Said" />
        <meta property="og:description" content="A collection of project case studies exploring the intersection of design and engineering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rawsab.com/case-studies" />
        <meta property="og:image" content="https://rawsab.com/og_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Case Studies | Rawsab Said" />
        <meta name="twitter:description" content="A collection of project case studies exploring the intersection of design and engineering." />
        <meta name="twitter:image" content="https://rawsab.com/og_image.png" />
        <link rel="canonical" href="https://rawsab.com/case-studies" />
      </Head>
      <NavigationBar />
      
      <motion.main 
        className="max-w-full mx-auto px-4 md:px-8 lg:px-12 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div className="mb-12" variants={fadeUpVariants}>
          <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/60 mb-4">
            <a href="/" className="text-[var(--foreground)]/40 hover:text-[var(--foreground)]/60 transition-all duration-300">Home</a>
            <span>&nbsp;›&nbsp;</span>
            <span>Case Studies</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-menocondensed-important italic text-[var(--foreground)] mb-4">
            Project Case Studies
          </h1>
          
          <p className="text-md md:text-lg text-[var(--foreground)]/70 max-w-3xl">
            A collection of projects where I explore the intersection of design and engineering. Each case study breaks down the design process, technical decisions, and challenges behind the work, highlighting both the user experience and the systems that power it.
          </p>
        </motion.div>
        
        {/* Case Studies Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={fadeUpVariants}>
          {caseStudies.map((caseStudy, index) => (
            <motion.div 
              key={caseStudy.slug} 
              variants={cardVariants}
              custom={index}
            >
              <Link 
                href={`/case-studies/${caseStudy.slug}`}
                className="group cursor-pointer block"
              >
              {/* 3:2 aspect ratio project image */}
              <div className="relative overflow-hidden rounded-lg border border-[var(--foreground)]/20 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={caseStudy.heroImage}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Project title with arrow */}
              <div className="mt-3 flex items-start justify-between">
                <h2 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-[#7B7B7B] transition-colors tracking-[-0.025em]">
                  {caseStudy.title}
                </h2>
                <svg
                  className="w-5 h-5 text-[var(--foreground)]/50 group-hover:text-[#7B7B7B] transform transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
              
              {/* Project description */}
              <p className="text-sm text-[var(--foreground)]/70 mt-1 line-clamp-2 tracking-[-0.025em]">
                {caseStudy.shortDescription}
              </p>
              
              {/* Project metadata */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-[var(--foreground)]/60">
                  {caseStudy.timeline}
                </span>
                <div className="flex gap-1">
                  {caseStudy.technologies.slice(0, 2).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-[var(--foreground)]/10 rounded text-xs text-[var(--foreground)]/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy.technologies.length > 2 && (
                    <span className="px-2 py-1 bg-[var(--foreground)]/10 rounded text-xs text-[var(--foreground)]/60">
                      +{caseStudy.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty State */}
        {caseStudies.length === 0 && (
          <motion.div className="text-center py-12" variants={fadeUpVariants}>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              No Case Studies Available
            </h2>
            <p className="text-[var(--foreground)]/70 mb-6">
              Case studies will appear here once they're added to the content directory.
            </p>
            <Link 
              href="/"
              className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:bg-[var(--foreground)]/90 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        )}
      </motion.main>
      
      <FloatingBottomGradient />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const caseStudiesDir = path.join(process.cwd(), 'src/content/case-studies');
  
  // Check if directory exists
  if (!fs.existsSync(caseStudiesDir)) {
    return {
      props: {
        caseStudies: [],
      },
    };
  }
  
  const caseStudyFolders = fs.readdirSync(caseStudiesDir);
  
  const caseStudies = caseStudyFolders
    .map((folder) => {
      const caseStudyPath = path.join(caseStudiesDir, folder, 'index.mdx');
      
      if (!fs.existsSync(caseStudyPath)) {
        return null;
      }
      
      const source = fs.readFileSync(caseStudyPath, 'utf8');
      const { data } = matter(source);
      
      return {
        slug: folder,
        ...data,
      };
    })
    .filter((item): item is CaseStudyMeta => item !== null)
    .sort((a, b) => a.order - b.order);
  
  return {
    props: {
      caseStudies,
    },
  };
};
