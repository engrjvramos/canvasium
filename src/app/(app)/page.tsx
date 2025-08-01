'use client';

import { usePaintingContext } from '@/components/providers/painting-provider';
import Thumbnail from '@/components/thumbnail';
import { Loader2 } from 'lucide-react';
import { Suspense, use } from 'react';

export default function Home() {
  const { paintingsPromise } = usePaintingContext();
  const paintings = use(paintingsPromise);

  return (
    <Suspense fallback={<LandingLoader />}>
      <div className="columns-1 gap-10 space-y-10 p-5 sm:columns-2 lg:columns-4 xl:p-10">
        {paintings.map((painting, index) => (
          <Thumbnail key={painting.name} index={index} painting={painting} />
        ))}
      </div>
    </Suspense>
  );
}

function LandingLoader() {
  return (
    <div className="grid h-full w-full flex-1 place-items-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  );
}
