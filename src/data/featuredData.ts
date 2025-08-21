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
    id: 'patchly',
    title: 'Patchly',
    year: '2025',
    description: 'AI-powered vulnerability scanner with real-time CVE detection and intelligent fix suggestions.',
    image: '/cards/patchly_card.png',
    link: 'https://github.com/rawsab/patchly',
    tags: ['React', 'AI', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Vercel']
  },
  {
    id: 'questporter',
    title: 'Questporter',
    year: '2025',
    description: 'Export Waterloo Quest class schedules to any calendar app.',
    image: '/cards/questporter_card.png',
    link: 'https://github.com/rawsab/quest-schedule-exporter',
    tags: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Supabase', 'Vercel']
  },
  {
    id: 'cnsimulator',
    title: 'CNSimulator', 
    year: '2024',
    description: 'Simulation platform for consensus protocols with blockchain modeling and real-time state tracking.',
    image: '/cards/cnsim_card.png',
    link: 'https://github.com/rawsab/CNSim',
    tags: ['Python', 'D3.js', 'Java', 'Flask']
  },
  {
    id: 'deenboard',
    title: 'DeenBoard', 
    year: '2025',
    description: 'A Muslim-centric homepage with prayer times, calendar sync, and daily widgets.',
    image: '/cards/deenboard_card.png',
    link: 'https://github.com/rawsab/deenboard',
    tags: ['React', 'Tailwind CSS', 'Webpack', 'OAuth2']
  }
];
