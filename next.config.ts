// next.config.ts

const nextConfig = {
  output: 'export', // enables static HTML export mode
  images: {
    unoptimized: true, // disable next/image optimization (required for static)
  },
  assetPrefix: './', // ensures relative paths work
  trailingSlash: true, // optional: avoids potential Vercel 404s on folders
  
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
