import { WiDaySunnyOvercast } from 'react-icons/wi'

export default function Logo() {
  return (
    <div className="flex flex-row items-center">
      <WiDaySunnyOvercast className="h-12 w-12 md:h-20 md:w-20" />
      <p className="cursor-default text-sm font-semibold tracking-widest uppercase">cloudcompiler</p>
    </div>
  )
}
