export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function displayDate(date: Date): string {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const y = date.getFullYear()

  const dom = d >= 10 ? String(d) : '0' + String(d)
  const month = m >= 10 ? String(m) : '0' + String(m)

  return month + '/' + dom + '/' + y
}

export function daysInMonth(month: number, year: number): number {
  switch (month) {
    case 1:
      return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28
    case 8:
    case 3:
    case 5:
    case 10:
      return 30
    default:
      return 31
  }
}
