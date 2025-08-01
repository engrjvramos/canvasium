'use client';

import { usePaintingContext } from '@/components/providers/painting-provider';
import PageLayout from '@/layouts/page-layout';
import { slugify } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, use } from 'react';

export default function Home() {
  const { paintingsPromise } = usePaintingContext();
  const paintings = use(paintingsPromise);

  return (
    <PageLayout>
      <Suspense>
        <div className="columns-1 gap-10 space-y-10 p-5 sm:columns-2 lg:columns-4 xl:p-10">
          {paintings.map((painting, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: 'easeOut' }}
            >
              <Link
                href={`/${slugify(painting.name)}`}
                className="group relative inline-block w-full break-inside-avoid shadow-lg"
              >
                <Image
                  src={painting.images.thumbnail}
                  alt={painting.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={painting.images.thumbnail}
                  className="object-cover"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

                <div className="absolute bottom-0 z-10 w-full p-8 text-white">
                  <h1 className="text-2xl font-bold">{painting.name}</h1>
                  <p className="text-white/75">{painting.artist.name}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Suspense>
    </PageLayout>
  );
}
