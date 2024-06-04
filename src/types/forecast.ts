export interface ForecastData {
  cod: string
  message: number
  cnt: number
  list: ForecastItem[]
  city: City
}

export interface ForecastItem {
  dt: number
  main: Main
  weather: WeatherItem[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  rain?: Rain
  sys: Sys
  dt_txt: string
}

export interface Rain {
  '3h': number
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

interface Coord {
  lat: number
  lon: number
}

interface WeatherItem {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Wind {
  speed: number
  deg: number
  gust?: number // optional property
}

export interface Clouds {
  all: number
}

export interface Sys {
  pod: string
}
