export interface FeaturedProject {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: '1',
    title: 'Patchly',
    year: '2025',
    description: 'Codebase vulnerability scanner with automated CVE detection and AI-powered fixes.',
    image: '/cards/patchly_card.png',
    link: 'https://github.com/rawsab/patchly',
    tags: ['React', 'AI', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Vercel']
  },
  {
    id: '2',
    title: 'Questporter',
    year: '2025',
    description: 'Export Waterloo Quest class schedules to any calendar app.',
    image: '/cards/questporter_card.png',
    link: 'https://github.com/rawsab/quest-schedule-exporter',
    tags: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Supabase', 'Vercel']
  },
  {
    id: '3',
    title: 'CNSimulator', 
    year: '2024',
    description: 'Simulation platform for consensus protocols with blockchain modeling and real-time state tracking.',
    image: '/cards/cnsim_card.png',
    link: 'https://github.com/rawsab/CNSim',
    tags: ['Python', 'D3.js', 'Java', 'Flask']
  },
  {
    id: '4',
    title: 'DeenBoard', 
    year: '2025',
    description: 'A Muslim-centric homepage with prayer times, calendar sync, and daily widgets.',
    image: '/cards/deenboard_card.png',
    link: 'https://github.com/rawsab/deenboard',
    tags: ['React', 'Tailwind CSS', 'Webpack', 'OAuth2']
  }
];
