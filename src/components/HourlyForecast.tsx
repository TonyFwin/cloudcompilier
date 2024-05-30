import { ScrollArea, ScrollBar } from './ui/scroll-area'
export default function HourlyForecast() {
  return (
    <div>
      <h2>Hourly Forecast</h2>
      <ScrollArea className="h-[200px] w-[350px]">
        {[...Array(24)].map((_, i) => {
          return (
            // Componetize this
            <div key={i} className="w-full p-2">
              <div>
                <div>Icon</div>
                {/* Componentize below */}
                <div>
                  <div>{i} o clock </div>
                  <div>Sunny</div>
                </div>
              </div>
              <div>16 degrees</div>
            </div>
          )
        })}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}
