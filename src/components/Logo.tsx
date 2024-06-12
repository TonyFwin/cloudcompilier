import { WiDaySunnyOvercast } from 'react-icons/wi'

export default function Logo() {
  const logoClasses = 'h-12 w-12 md:h-20 md:w-20'
  return (
    <div className="flex flex-row items-center">
      <WiDaySunnyOvercast className={`${logoClasses}`} />
      {/* <WiNightAltCloudy className={`${logoClasses}`} /> */}
      <p className="cursor-default text-sm font-semibold uppercase tracking-widest">
        cloudcompiler
      </p>
    </div>
  )
}
