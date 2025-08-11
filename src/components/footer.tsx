'use client';

import { usePathname } from 'next/navigation';
import SocialLinks from './social-links';

export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <footer className="flex items-center justify-center bg-white p-5 py-8 dark:bg-neutral-900">
      <div className="text-muted-foreground font-poppins flex flex-col items-center gap-1 text-center text-sm sm:flex-row sm:gap-2">
        <span>© {new Date().getFullYear()}</span>
        <span className="hidden sm:inline">•</span>
        <span>
          Built by <SocialLinks />
        </span>
        <span className="hidden sm:inline">•</span>
        <a
          href="https://www.frontendmentor.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:underline dark:hover:text-white"
        >
          Frontend Mentor Challenge
        </a>
      </div>
    </footer>
  );
}
