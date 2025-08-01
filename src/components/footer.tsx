'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <footer className="flex items-center justify-center p-5 sm:p-10 sm:pt-0">
      <div className="text-muted-foreground text-center font-mono text-xs text-balance uppercase">
        &copy; Design by{' '}
        <a
          href={'https://www.frontendmentor.io/'}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 hover:underline dark:hover:text-pink-400"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href={'https://jobie.dev'}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 hover:underline dark:hover:text-pink-400"
        >
          Jose Roberto Vasquez Ramos
        </a>
        .
      </div>
    </footer>
  );
}
