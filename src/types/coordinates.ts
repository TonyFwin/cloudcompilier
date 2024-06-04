export interface Coordinates {
  lat: number
  lon: number
}

export interface CoordinatesData {
  country: string
  lat: number
  lon: number
  local_names: Array<{ [locality: string]: string }>
  name: string
  state: string
}
