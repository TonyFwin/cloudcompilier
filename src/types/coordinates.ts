export interface Coordinates {
  lat: number
  lon: number
}

export interface OpenWeatherMapCoordinates {
  country: string
  lat: number
  lon: number
  local_names: Array<{ [locality: string]: string }>
  name: string
  state: string
}
