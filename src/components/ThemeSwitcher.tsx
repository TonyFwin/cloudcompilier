import { Switch } from '@/components/ui/switch'
import { WiMoonAltWaningGibbous2, WiSunrise } from 'react-icons/wi'
import { useDarkMode } from '@/hooks/useDarkMode'

export default function ThemeSwitcher() {
  const { data, toggleDarkMode } = useDarkMode()

  return (
    <div className="flex items-center">
      <span className="mr-2">
        <WiSunrise className="h-6 w-6 text-yellow-300" />
      </span>
      <Switch
        className="transition duration-200 ease-in-out data-[state=checked]:bg-white data-[state=unchecked]:bg-black"
        checked={data === true}
        onCheckedChange={toggleDarkMode}
        id="darkmode-toggle"
      />
      <span className="ml-2">
        <WiMoonAltWaningGibbous2 className="h-6 w-6 text-white" />
      </span>
    </div>
  )
}
