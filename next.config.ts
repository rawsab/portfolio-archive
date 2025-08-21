// next.config.ts
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  output: 'export', // enables static HTML export mode
  images: {
    unoptimized: true, // disable next/image optimization (required for static)
  },
  trailingSlash: true, // optional: avoids potential Vercel 404s on folders
  
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
};

export default withMDX(nextConfig);
