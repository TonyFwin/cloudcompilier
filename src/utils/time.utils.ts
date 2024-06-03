import { DateTime } from 'luxon'

export const timeFromDateString = (dateString: string) => {
  const dt = DateTime.fromSQL(dateString)
  return dt.toLocaleString(DateTime.TIME_SIMPLE)
}

export const dateTimeFromOffset = (timeStamp: number) => {
  const dt = DateTime.fromSeconds(timeStamp)
  return `${dt.toFormat('T ccc')}, ${dt.toFormat('d MMM yy')}`
}
