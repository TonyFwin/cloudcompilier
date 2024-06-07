import { Skeleton } from '../ui/skeleton'

export default function SkeletonWeatherDetails() {
  return (
    <div className="dark:border:white w-full border-b-2 border-b-black pt-4 md:pt-8">
      <Skeleton className="h-6 w-24 mb-4" />
      <div className="flex flex-col space-y-4 pl-2">
        {[...Array(4)].map((_, i) => {
          return (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-4 w-12" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
