import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rawsab Said" />
        <meta name="theme-color" content="#000000" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rawsab Said" />
        <meta property="og:title" content="Rawsab Said" />
        <meta property="og:description" content="Software Engineering student at the University of Waterloo with experience across startups and scaling products. Explore my projects and work showcased on this site." />
        <meta property="og:image" content="og_image.png" />
        <meta property="og:url" content="https://rawsab.com" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rawsab Said" />
        <meta name="twitter:description" content="Software Engineering student at the University of Waterloo with experience across startups and scaling products. Explore my projects and work showcased on this site." />
        <meta name="twitter:image" content="og_image.png" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/my-favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/my-favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/my-favicon/site.webmanifest" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7JQDLM7YY5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7JQDLM7YY5');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
