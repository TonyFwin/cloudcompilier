import { DateTime } from 'luxon'

export function getDateStringOffset(timezoneOffset: number) {
  const d = new Date()
  const localTime = d.getTime()
  const localOffset = d.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  return new Date(utc + 1000 * timezoneOffset).toDateString()
}

export function timeFromDateString(dateString: string) {
  const dt = DateTime.fromSQL(dateString)
  return dt.toLocaleString(DateTime.TIME_SIMPLE)
}
