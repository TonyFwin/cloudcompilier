import { Skeleton } from '../ui/skeleton'

export default function SkeletonCurrentConditions() {
  return (
    <div
      data-testid="skeleton-current-conditions"
      className="flex items-center space-x-4"
    >
      <Skeleton className="h-20 w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28" />
      <Skeleton className="h-20 w-40 lg:h-24" />
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-8 w-24 lg:h-10 lg:w-40" />
        <Skeleton className="h-8 w-8 lg:w-24" />
      </div>
    </div>
  )
}
