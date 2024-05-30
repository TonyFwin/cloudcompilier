export default function CurrentConditions() {
  return (
    <div className="flex space-x-4">
      <div className="text-3xl">Icon</div>
      <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Temperature
      </div>

      <div className="flex flex-col space-y-0.5">
        <div className=" text-xl font-medium lg:text-2xl">City Name</div>
        <div className="text-sm font-light">Date and Time</div>
      </div>
    </div>
  )
}
