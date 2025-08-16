import { Skeleton } from '@/components/ui/skeleton';

export default function ThumbnailSkeletonLoading() {
  return (
    <div className="columns-1 gap-10 space-y-10 p-5 sm:columns-2 lg:columns-4 xl:p-10">
      {Array.from({ length: 12 }).map((_, index) => (
        <ThumbnailSkeleton key={index} />
      ))}
    </div>
  );
}

function ThumbnailSkeleton() {
  return (
    <div className="relative inline-block w-full break-inside-avoid shadow-lg">
      {/* Image placeholder */}
      <Skeleton className="h-[260px] w-full rounded-lg" />

      {/* Text placeholder */}
      <div className="absolute bottom-0 z-10 w-full p-8 text-white">
        <Skeleton className="h-6 w-3/4 rounded" />
        <Skeleton className="mt-2 h-4 w-1/2 rounded" />
      </div>
    </div>
  );
}
