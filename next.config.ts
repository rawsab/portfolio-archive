// next.config.ts

const nextConfig = {
  output: 'export', // enables static HTML export mode
  images: {
    unoptimized: true, // disable next/image optimization (required for static)
  },
  assetPrefix: './', // ensures relative paths work
  trailingSlash: true, // optional: avoids potential Vercel 404s on folders
};

export default nextConfig;
