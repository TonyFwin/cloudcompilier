import { Skeleton } from '@/components/ui/skeleton'

interface SkeletonHourlyForecastProps {
  testId: number
}

export default function SkeletonHourlyForecast({ testId }: SkeletonHourlyForecastProps) {
  return (
    <div
      data-testid={`skeleton-${testId}`}
      className="flex w-full items-center space-x-2 pt-4 md:space-x-4"
    >
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
