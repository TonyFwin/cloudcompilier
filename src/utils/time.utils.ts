import { DateTime } from 'luxon'

export const timeFromDateString = (dateString: string) => {
  const dt = DateTime.fromSQL(dateString)
  return dt.toLocaleString(DateTime.TIME_SIMPLE)
}

export const dateTimeFromTimeStamp = (timeStamp: number) => {
  const ts = Number(timeStamp)
  const dt = DateTime.fromSeconds(ts)
  return `${dt.toFormat('T ccc')}, ${dt.toFormat('d MMM yy')}`
}
