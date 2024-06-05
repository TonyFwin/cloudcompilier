export const getWeatherIcon = (code: number): string => {
  if (code >= 200 && code < 300) {
    return 'thunderstorm'
  } else if (code >= 300 && code < 400) {
    return 'drizzle'
  } else if (code >= 500 && code < 600) {
    return 'rain'
  } else if (code >= 600 && code < 700) {
    return 'snow'
  } else if (code >= 700 && code < 800) {
    switch (code) {
      case 701:
        return 'mist'
      case 711:
        return 'smoke'
      case 721:
        return 'haze'
      case 731:
        return 'dust'
      case 741:
        return 'fog'
      case 751:
        return 'sand'
      case 761:
        return 'dust'
      case 762:
        return 'ash'
      case 771:
        return 'squall'
      case 781:
        return 'tornado'
      default:
        return 'atmosphere'
    }
  } else if (code === 800) {
    return 'clear'
  } else if (code > 800 && code < 900) {
    return 'clouds'
  } else {
    return 'unknown'
  }
}

export const roundNumber = (num: number) => {
  return Math.round(num)
}
