'use client';

import { usePathname } from 'next/navigation';
import SocialLinks from './social-links';

export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <footer className="flex items-center justify-center p-5 sm:p-10 sm:pt-0">
      <div className="text-muted-foreground font-poppins text-center text-[13px] text-balance">
        &copy; Coded as part of a{' '}
        <a
          href="https://www.frontendmentor.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-theme-secondary dark:hover:text-theme-primary hover:underline"
        >
          Frontend Mentor
        </a>{' '}
        challenge. Built by <SocialLinks />. All rights reserved.
      </div>
    </footer>
  );
}
