import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex h-[calc(100dvh-5rem)] flex-col overflow-hidden xl:h-[calc(100dvh-8rem)]">
      <article className="no-scrollbar flex-1 overflow-y-auto xl:grid xl:place-items-center">
        <div className="flex w-full flex-1 items-center justify-center px-5 py-10 sm:p-10">
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col sm:gap-16 xl:max-h-[624px] xl:max-w-full xl:flex-row xl:gap-10">
            {/* Left Section */}
            <section className="relative flex flex-1 pb-30 sm:pb-0 xl:flex-2/3">
              <div className="relative h-full w-full sm:h-[560px] sm:w-[475px]">
                <Skeleton className="mx-auto h-[300px] w-full rounded-lg sm:mx-0 xl:h-[560px] xl:w-[475px]" />
              </div>

              <div className="absolute bottom-0 left-0 flex w-full flex-col sm:top-0 sm:right-0 sm:left-auto sm:max-w-[445px]">
                <div className="dark:bg-background mr-11 space-y-2 bg-white p-6 sm:mr-0 sm:space-y-6 sm:pt-0 sm:pr-0 sm:pb-16 sm:pl-16">
                  <Skeleton className="h-8 w-3/4 rounded" />
                  <Skeleton className="h-4 w-1/2 rounded" />
                </div>
                <div className="flex justify-start pl-4 sm:pl-64 xl:mt-auto xl:pl-24">
                  <Skeleton className="h-16 w-16 sm:h-32 sm:w-32" />
                </div>
              </div>
            </section>

            {/* Right Section */}
            <section className="-mt-14 flex flex-1/3 flex-col sm:mt-0 xl:h-[560px]">
              <Skeleton className="h-[120px] w-[200px] self-end sm:h-[200px] sm:w-[300px] sm:self-start" />
              <div className="flex h-full max-w-[457px] flex-col gap-16 sm:gap-10 sm:self-center xl:max-w-[350px] xl:self-auto">
                <Skeleton className="h-24 w-full rounded" />
                <Skeleton className="h-6 w-32 rounded" />
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Bottom controls */}
      <div className="bg-background w-full">
        {/* Progress bar */}
        <Skeleton className="h-[1px] w-full" />

        <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-10 sm:py-6">
          <div className="sm:space-y-2">
            <Skeleton className="h-5 w-32 rounded sm:h-7 sm:w-48" />
            <Skeleton className="h-4 w-20 rounded sm:h-5 sm:w-32" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="h-9 w-9 rounded sm:h-12 sm:w-12" />
            <Skeleton className="h-9 w-9 rounded sm:h-12 sm:w-12" />
            <Skeleton className="h-9 w-9 rounded sm:h-12 sm:w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
