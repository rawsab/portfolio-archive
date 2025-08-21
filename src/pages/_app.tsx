import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen transition-colors duration-300">
        <Component {...pageProps} />
      </div>
    </>
  );
}
