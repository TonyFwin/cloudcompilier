import { Switch } from '@/components/ui/switch'
import { useUnitOfMeasurement } from '@/hooks/useUnitOfMeasurement'

export default function UnitSwitcher() {
  const { data, toggleUnit } = useUnitOfMeasurement()

  return (
    <div className="flex items-center space-x-1.5">
      <span className="mr-2 text-xl font-semibold text-black dark:text-white">°c</span>
      <Switch
        className="transition duration-200 ease-in-out data-[state=unchecked]:bg-black dark:data-[state=unchecked]:bg-white"
        checked={data === 'imperial'}
        onCheckedChange={toggleUnit}
        id="unit-of-measurement-toggle"
      />
      <span className="ml-2 text-xl font-semibold text-black dark:text-white">°f</span>
    </div>
  )
}
