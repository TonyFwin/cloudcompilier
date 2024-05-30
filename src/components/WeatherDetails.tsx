export default function WeatherDetails() {
  return (
    <div className="w-full">
      <h2>Sunny with a chance of meatballs</h2>
      {/* Componetize below */}
      <div className="flex w-full justify-between">
        <p>Max</p>
        {/* componetize */}
        <div>
          <p>25 degrees C</p>
          icon
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p>Min</p>
        <div>
          <p>25 degrees C</p>
          icon
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p>Humidity</p>
        <div>
          <p>25 degrees C</p>
          icon
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p>Wind</p>
        <div>
          <p>25 degrees C</p>
          icon
        </div>
      </div>
    </div>
  )
}
