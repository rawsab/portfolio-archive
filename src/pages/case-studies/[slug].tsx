import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import { CommandMenu } from '../../components/CommandMenu';
import { featuredProjects } from '../../data/featuredData';

// Function to extract headers from MDX content
function extractHeaders(content: string) {
  const headerRegex = /^(#{1,3})\s+(.+)$/gm;
  const headers: { level: number; text: string; id: string }[] = [];
  
  let match;
  while ((match = headerRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    headers.push({ level, text, id });
  }
  
  return headers;
}

// Function to organize headers into sections
function organizeHeaders(headers: { level: number; text: string; id: string }[]) {
  const sections: {
    header: { level: number; text: string; id: string };
    subsections: { level: number; text: string; id: string }[];
  }[] = [];
  
  let currentSection: { level: number; text: string; id: string } | null = null;
  let currentSubsections: { level: number; text: string; id: string }[] = [];
  
  headers.forEach(header => {
    if (header.level === 1 || header.level === 2) {
      // Save previous section if it exists
      if (currentSection) {
        sections.push({
          header: currentSection,
          subsections: currentSubsections
        });
      }
      
      // Start new section
      currentSection = header;
      currentSubsections = [];
    } else if (header.level === 3 && currentSection) {
      // Add to current section's subsections
      currentSubsections.push(header);
    }
  });
  
  // Add the last section
  if (currentSection) {
    sections.push({
      header: currentSection,
      subsections: currentSubsections
    });
  }
  
  return sections;
}

// Collapsible Section Component
function CollapsibleSection({ section }: { 
  section: { 
    header: { level: number; text: string; id: string }; 
    subsections: { level: number; text: string; id: string }[] 
  } 
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasSubsections = section.subsections.length > 0;
  
  return (
    <div>
      <div className="flex items-center">
        <a
          href={`#${section.header.id}`}
          className={`flex-1 text-sm hover:text-[var(--foreground)] transition-colors ${
            section.header.level === 1 
              ? 'text-[var(--foreground)] font-medium' 
              : 'text-[var(--foreground)]/80'
          }`}
        >
          {section.header.text}
        </a>
        {hasSubsections && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 p-1 hover:bg-[var(--foreground)]/10 rounded transition-colors cursor-pointer"
            aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
          >
            <svg
              className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      {hasSubsections && (
        <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="ml-4 mt-2 space-y-1">
            {section.subsections.map((subsection, index) => (
              <a
                key={index}
                href={`#${subsection.id}`}
                className="block text-sm text-[var(--foreground)]/60 hover:text-[var(--foreground)]/80 transition-colors"
              >
                {subsection.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Custom components for MDX
const components = {
  h1: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return (
      <h1 id={id} className="text-2xl font-medium text-[var(--foreground)] tracking-tight mb-6 mt-8 first:mt-0 scroll-mt-20" {...props} />
    );
  },
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return (
      <h2 id={id} className="text-xl font-medium text-[var(--foreground)] tracking-tight mb-4 mt-8 scroll-mt-20" {...props} />
    );
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return (
      <h3 id={id} className="text-lg font-medium text-[var(--foreground)] tracking-tight mb-3 mt-6 scroll-mt-20" {...props} />
    );
  },
  p: (props: any) => (
    <p className="text-[var(--foreground)]/80 leading-relaxed mb-4 [&>strong]:text-[var(--foreground)] [&>strong]:font-semibold" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside text-[var(--foreground)]/80 mb-4 space-y-2 pl-5 [&>li>strong]:text-[var(--foreground)] [&>li>strong]:font-semibold" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside text-[var(--foreground)]/80 mb-4 space-y-2 pl-5 [&>li>strong]:text-[var(--foreground)] [&>li>strong]:font-semibold" {...props} />
  ),
  li: (props: any) => (
    <li className="text-[var(--foreground)]/80" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[var(--foreground)]/20 pl-4 italic text-[var(--foreground)]/70 mb-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-[var(--foreground)]/10 px-2 py-1 rounded text-sm font-google-sans-code" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-[var(--foreground)]/5 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  img: (props: any) => (
    <img className="w-full h-auto rounded-lg mb-6" {...props} />
  ),
  a: (props: any) => (
    <a className="text-[var(--foreground)] hover:text-[var(--foreground)]/80 underline" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-none h-px bg-[var(--foreground)]/20 my-8" {...props} />
  ),
  FeatureGrid: (props: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {props.children}
    </div>
  ),
  FeatureCard: ({ icon, title, children, ...props }: { icon: string; title?: string; children: React.ReactNode }) => {
    const IconComponent = (LucideIcons as any)[icon];
    return (
      <div className="relative pt-4 px-4 border border-[var(--foreground)]/10 rounded-lg bg-[var(--foreground)]/5" {...props}>
        <div className="absolute top-4 left-4 text-[var(--foreground)]">
          {IconComponent ? <IconComponent className="w-6 h-6" /> : icon}
        </div>
        <div className="pt-8 text-[var(--foreground)]/60 text-md">
          {title && (
            <h4 className="font-medium text-[var(--foreground)] mb-1 text-base">
              {title}
            </h4>
          )}
          <div className={title ? 'text-sm' : ''}>
            {children}
          </div>
        </div>
      </div>
    );
  },
};

interface CaseStudyProps {
  source: any;
  frontMatter: {
    title: string;
    description: string;
    timeline: string;
    role: string;
    year: string;
    technologies: string[];
    featured: boolean;
    publishedAt: string;
    heroImage?: string;
    glowScale?: string;
    inProgress?: boolean;
  };
  project: any;
  headers: { level: number; text: string; id: string }[];
  slug: string;
}

export default function CaseStudy({ source, frontMatter, project, headers, slug }: CaseStudyProps) {
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

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Head>
        <title>{frontMatter.title} | Rawsab Said</title>
        <meta name="description" content={frontMatter.description} />
        <meta name="keywords" content={frontMatter.technologies?.join(', ')} />
        <meta name="author" content="Rawsab Said" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${frontMatter.title} | Rawsab Said`} />
        <meta property="og:description" content={frontMatter.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://rawsab.com/case-studies/${slug}`} />
        <meta property="og:image" content={frontMatter.heroImage || 'https://rawsab.com/og_image.png'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${frontMatter.title} | Rawsab Said`} />
        <meta name="twitter:description" content={frontMatter.description} />
        <meta name="twitter:image" content={frontMatter.heroImage || 'https://rawsab.com/og_image.png'} />
        
        {/* Additional metadata */}
        <meta name="article:published_time" content={frontMatter.publishedAt} />
        <meta name="article:author" content="Rawsab Said" />
        <link rel="canonical" href={`https://rawsab.com/case-studies/${slug}`} />
      </Head>
      <NavigationBar />
      
      <motion.main 
        className="max-w-3xl mx-auto px-4 md:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Hero Section */}
        <div className="mb-10">
          {/* Breadcrumbs and GitHub Link */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-[var(--foreground)]/60 mb-2 md:mb-0">
              <Link href="/" className="text-[var(--foreground)]/40 hover:text-[var(--foreground)]/60 transition-all duration-300">Home</Link>
              <span>&nbsp;›&nbsp;</span>
              <Link href="/case-studies" className="text-[var(--foreground)]/40 hover:text-[var(--foreground)]/60 transition-all duration-300">Case Studies</Link>
              <span>&nbsp;›&nbsp;</span>
              <span>{frontMatter.title}</span>
            </div>
            {project && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
              >
                <span>GitHub</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </motion.div>
          
          {/* Title and Date */}
          <motion.div variants={fadeUpVariants}>
            <h1 className="text-4xl font-menocondensed-important text-[var(--foreground)] mb-1 text-center">
              {frontMatter.title}
            </h1>
            <p className="text-lg text-[var(--foreground)]/60 font-google-sans-code text-center mb-6 tracking-tighter">
              {frontMatter.year}
            </p>
          </motion.div>
          
          {/* Hero Image */}
          {frontMatter.heroImage && (
            <motion.div 
              className="w-full rounded-lg mb-8 relative" 
              style={{ aspectRatio: '12/7' }}
              variants={fadeUpVariants}
            >
              {/* Glow effect - configurable scale from frontmatter.glowScale, defaults to scale-112 */}
              <div className={`absolute inset-0 rounded-lg blur-xl ${frontMatter.glowScale || 'scale-112'} hero-glow`}>
                <img 
                  src={frontMatter.heroImage} 
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Main image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img 
                  src={frontMatter.heroImage} 
                  alt={frontMatter.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            </motion.div>
          )}
          
          {/* Timeline and Overview Row */}
          <motion.div variants={fadeUpVariants}>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-auto md:pr-2">
                <h3 className="text-sm font-semibold font-google-sans-code text-[var(--foreground)]/90 uppercase tracking-tight mb-2">
                  Timeline
                </h3>
                <p className="text-[var(--foreground)]/60">{frontMatter.timeline}</p>
              </div>
              <div className="md:flex-1">
                <h3 className="text-sm font-semibold font-google-sans-code text-[var(--foreground)]/90 uppercase tracking-tight mb-2">
                  Overview
                </h3>
                <p className="text-[var(--foreground)]/60 font-light">{frontMatter.description}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Technologies */}
          <motion.div variants={fadeUpVariants}>
            <div className="mb-8">
              <h3 className="text-sm font-semibold font-google-sans-code text-[var(--foreground)]/90 uppercase tracking-tight mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontMatter.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-[var(--foreground)]/6 rounded-full text-sm text-[var(--foreground)]/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Table of Contents */}
        {headers.length > 0 && (
          <motion.div className="mb-8 p-6 bg-[var(--foreground)]/5 rounded-lg" variants={fadeUpVariants}>
            <h3 className="text-sm font-semibold font-google-sans-code text-[var(--foreground)]/90 uppercase tracking-tight mb-4">
              Table of Contents
            </h3>
            <nav className="space-y-2">
              {(() => {
                const sections = organizeHeaders(headers);
                return sections.map((section, index) => (
                  <CollapsibleSection key={index} section={section} />
                ));
              })()}
            </nav>
          </motion.div>
        )}
        
        {/* MDX Content */}
        <motion.article className="prose prose-lg max-w-none" variants={fadeUpVariants}>
          <MDXRemote {...source} components={components} />
        </motion.article>
        
        {/* Project Links */}
        {/* <div className="mt-12 pt-8 border-t border-[var(--foreground)]/10">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            Project Links
          </h2>
          <div className="flex gap-4">
            {project ? (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:bg-[var(--foreground)]/90 transition-colors"
              >
                View Project
              </a>
            ) : (
              <span className="px-6 py-3 bg-[var(--foreground)]/10 text-[var(--foreground)]/60 rounded-lg">
                Project link not available
              </span>
            )}
            <Link 
              href="/case-studies"
              className="px-6 py-3 border border-[var(--foreground)]/20 text-[var(--foreground)] rounded-lg hover:bg-[var(--foreground)]/10 transition-colors"
            >
              Back to Case Studies
            </Link>
          </div>
        </div> */}
      </motion.main>
      
      <Footer />
      <CommandMenu />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudiesDir = path.join(process.cwd(), 'src/content/case-studies');
  
  // Check if directory exists, if not return empty paths
  if (!fs.existsSync(caseStudiesDir)) {
    return {
      paths: [],
      fallback: false,
    };
  }
  
  const caseStudyFolders = fs.readdirSync(caseStudiesDir);
  
  const paths = caseStudyFolders.map((folder) => ({
    params: { slug: folder },
  }));
  
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const caseStudyPath = path.join(process.cwd(), 'src/content/case-studies', slug, 'index.mdx');
  
  // Check if file exists
  if (!fs.existsSync(caseStudyPath)) {
    return {
      notFound: true,
    };
  }
  
  const source = fs.readFileSync(caseStudyPath, 'utf8');
  const { content, data } = matter(source);
  
  const mdxSource = await serialize(content);
  
  // Extract headers from the content
  const headers = extractHeaders(content);
  
  // Find the corresponding project from featured data
  const project = featuredProjects.find(p => p.id === slug) || null;
  
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      project,
      headers,
      slug,
    },
  };
};
