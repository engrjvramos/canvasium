'use client';

import { Icons } from '@/components/icons';
import { usePaintingContext } from '@/components/providers/painting-provider';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useWindowSize } from '@/hooks/useWindowSize';

import { slugify } from '@/lib/utils';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { use, useCallback, useEffect } from 'react';
import ImageModal from './_components/image-modal';

export default function PaintingPage(props: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const size = useWindowSize();
  const { paintingsPromise, pause, setPause } = usePaintingContext();

  const paintings = use(paintingsPromise);
  const { slug } = use(props.params);

  const painting = paintings.find((painting) => slugify(painting.name) === slug);
  const index = paintings.findIndex((p) => slugify(p.name) === slug);
  const prevPainting = paintings[index - 1];
  const nextPainting = paintings[index + 1];
  const progressValue = ((index + 1) / paintings.length) * 100;

  const goToPainting = useCallback(
    (paintingName: string) => {
      const newSlug = slugify(paintingName);
      router.push(`/${newSlug}`);
    },
    [router],
  );

  const nextIndex = (index + 1) % paintings.length;
  const loopedNextPainting = paintings[nextIndex];

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      goToPainting(loopedNextPainting.name);
    }, 7000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, pause]);

  const togglePause = useCallback(() => setPause(!pause), [setPause, pause]);

  useEffect(() => {
    const throttledNavigation = throttle((code: string) => {
      if (code === 'ArrowRight' && nextPainting) {
        goToPainting(nextPainting.name);
      } else if (code === 'ArrowLeft' && prevPainting) {
        goToPainting(prevPainting.name);
      }
    }, 500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        togglePause();
      } else if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
        e.preventDefault();
        throttledNavigation(e.code);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPainting, nextPainting, prevPainting, togglePause]);

  if (!painting) return notFound();

  return (
    <div className="flex h-[calc(100dvh-5rem)] flex-col overflow-hidden xl:h-[calc(100dvh-8rem)]">
      <article className="no-scrollbar flex-1 overflow-y-auto xl:grid xl:place-items-center">
        <div className="flex w-full flex-1 items-center justify-center px-5 py-10 sm:p-10">
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col sm:gap-16 xl:max-h-[624px] xl:max-w-full xl:flex-row xl:gap-10">
            <motion.section
              className="relative flex flex-1 pb-30 sm:pb-0 xl:flex-2/3"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative h-full w-full sm:h-[560px] sm:w-[475px]">
                <Image
                  src={size.width >= 640 ? painting.images.hero.large : painting.images.hero.small}
                  alt={painting.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  placeholder="blur"
                  blurDataURL={painting.images.hero.large}
                  className="mx-auto sm:mx-0 xl:h-[560px] xl:w-[475px]"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />

                <ImageModal painting={painting} setPause={setPause} />
              </div>

              <div className="absolute bottom-0 left-0 flex w-full flex-col sm:top-0 sm:right-0 sm:left-auto sm:max-w-[445px]">
                <div className="dark:bg-background mr-11 space-y-2 bg-white p-6 sm:mr-0 sm:space-y-6 sm:pt-0 sm:pr-0 sm:pb-16 sm:pl-16">
                  <h1 className="text-2xl leading-[115%] font-bold text-balance sm:text-[56px]">{painting.name}</h1>
                  <span className="dark:text-muted-foreground text-[15px] text-[#7D7D7D]">{painting.artist.name}</span>
                </div>
                <div className="flex justify-start pl-4 sm:pl-64 xl:mt-auto xl:pl-24">
                  <Image
                    src={painting.artist.image}
                    alt={painting.artist.name}
                    width={128}
                    height={128}
                    style={{
                      width: size.width >= 640 ? 128 : 64,
                      height: size.width >= 640 ? 128 : 64,
                    }}
                  />
                </div>
              </div>
            </motion.section>
            <motion.section
              className="-mt-14 flex flex-1/3 flex-col sm:mt-0 xl:h-[560px]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h1 className="dark:text-input text-right text-[100px] leading-30 font-bold text-[#F3F3F3] sm:text-left sm:text-[200px] sm:leading-60">
                {painting.year}
              </h1>
              <div className="flex h-full max-w-[457px] flex-col gap-16 sm:gap-10 sm:self-center xl:max-w-[350px] xl:self-auto">
                <p className="dark:text-muted-foreground -mt-12 text-[15px] leading-[200%] text-balance text-[#7D7D7D] sm:-mt-42 xl:-mt-32">
                  {painting.description}
                </p>
                <Link
                  href={painting.source}
                  target="_blank"
                  className="dark:text-muted-foreground inline-block text-[11px] leading-[125%] font-bold text-[#7D7D7D] uppercase hover:underline xl:mt-auto"
                >
                  Go to source
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </article>

      <div className="bg-background w-full">
        <Progress value={progressValue} className="h-[1px]" />
        <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-10 sm:py-6">
          <div className="sm:space-y-2">
            <h3 className="text-sm font-bold sm:text-lg">{painting.name}</h3>
            <span className="text-xs opacity-75 sm:text-sm">{painting.artist.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              onClick={() => prevPainting && goToPainting(prevPainting.name)}
              disabled={!prevPainting}
              className="rounded-none px-0"
              title="Prev (Arrow Left)"
            >
              <Icons.slideControl className="size-4 rotate-180 sm:size-6" />
            </Button>
            <Button onClick={togglePause} className="rounded-none px-0" title={'Play/Pause (Space)'}>
              {!pause ? <Icons.pause className="size-5 sm:size-7" /> : <Icons.play className="size-5 sm:size-7" />}
            </Button>
            <Button
              onClick={() => nextPainting && goToPainting(nextPainting.name)}
              disabled={!nextPainting}
              className="rounded-none px-0"
              title="Next (Arrow Right)"
            >
              <Icons.slideControl className="size-4 sm:size-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
