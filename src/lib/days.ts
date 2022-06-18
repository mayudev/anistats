export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export function displayDate(date: Date): string {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const y = date.getFullYear()

  const dom = d >= 10 ? String(d) : '0' + String(d)
  const month = m >= 10 ? String(m) : '0' + String(m)

  return month + '/' + dom + '/' + y
}
