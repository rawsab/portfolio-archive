import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen transition-colors duration-300">
      <Component {...pageProps} />
    </div>
  );
}
