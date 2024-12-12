import { Skeleton } from "@/shared/ui/skeleton";

export function SkeletonVariants() {
  return (
    <>
      <div className="space-y-4">
        <div className="space-y-1">
          <Skeleton className="h-6 w-40" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <Skeleton className="h-6 w-40" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-5 w-60" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </>
  );
}
