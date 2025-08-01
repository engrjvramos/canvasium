'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <footer className="flex items-center justify-center p-5 sm:p-10 sm:pt-0">
      <p className="text-muted-foreground text-center font-mono text-xs text-balance uppercase">
        &copy; Design by{' '}
        <Link href={'https://www.frontendmentor.io/'} target="_blank" className="hover:underline">
          Frontend Mentor
        </Link>
        . Coded by Jose Roberto Vasquez Ramos.
      </p>
    </footer>
  );
}
