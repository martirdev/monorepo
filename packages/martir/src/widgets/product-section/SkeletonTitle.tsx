import { Skeleton } from "@/shared/ui/skeleton";

export function SkeletonTitle() {
  return (
    <>
      <Skeleton className="h-8 w-100" />
      <Skeleton className="h-8 w-80" />
      <Skeleton className="h-12 w-40" />
    </>
  );
}
