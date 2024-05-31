export function getTimeFromOffset(timezoneOffset: number) {
  const d = new Date()
  const localTime = d.getTime()
  const localOffset = d.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  return new Date(utc + 1000 * timezoneOffset).toDateString()
}
