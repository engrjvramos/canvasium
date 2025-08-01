'use client';

import { slugify } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { use } from 'react';
import { Icons } from './icons';
import { usePaintingContext } from './providers/painting-provider';
import ThemeToggler from './theme-toggler';
import { Button } from './ui/button';

export default function Header() {
  const { paintingsPromise, setPause } = usePaintingContext();
  const paintings = use(paintingsPromise);
  const router = useRouter();
  const pathname = usePathname();

  const handleSlideShow = () => {
    if (pathname === '/') {
      setPause(false);
      router.push(`/${slugify(paintings[0].name)}`);
    } else {
      router.push('/');
    }
  };

  return (
    <header className="px-6 xl:px-10">
      <div className="flex items-center justify-between border-b py-6 xl:py-10">
        <Link href={'/'} className="text-[clamp(24px,5vw,48px)] font-extrabold">
          {/* <Icons.logo className="h-[clamp(32px,15vw,48px)] w-[clamp(114px,15vw,170px)]" /> */}
          canvasium.
        </Link>
        <div className="flex items-center gap-5">
          <Button
            className="dark:text-muted-foreground size-9 rounded-full text-xs font-bold tracking-wider text-[#7d7d7d] uppercase hover:text-black sm:size-auto dark:hover:text-white"
            onClick={handleSlideShow}
          >
            <span className="inline sm:hidden">
              {pathname === '/' ? (
                <Icons.start className="text-foreground size-9 sm:size-5" />
              ) : (
                <Icons.stop className="text-foreground size-9 sm:size-5" />
              )}
            </span>
            <span className="hidden sm:inline">{pathname === '/' ? 'START SLIDESHOW' : 'STOP SLIDESHOW'}</span>
          </Button>

          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
