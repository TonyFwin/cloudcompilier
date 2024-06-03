export const getWeatherIcon = (description: string): string => {
  const lowerCase = description.toLowerCase()

  switch (lowerCase) {
    case 'clouds':
      return 'cloud'
    case 'clear':
      return 'daySunny'
    case 'snow':
      return 'snow'
    case 'rain':
    case 'drizzle':
      return 'rain'
    case 'thunderstorm':
      return 'thunder'
    default:
      if (description.startsWith('7')) {
        if (description.includes('tornado')) {
          return 'tornado'
        } else {
          return 'haze'
        }
      }
      return 'unknown'
  }
}

export const roundNumber = (num: number) => {
  return Math.round(num)
}
