import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonHourlyForecast() {
  return (
    <div className="flex w-full items-center space-x-2 md:space-x-4 pt-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="flex w-full justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[65px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
        <Skeleton className="h-4 w-[25px]" />
      </div>
    </div>
  )
}
