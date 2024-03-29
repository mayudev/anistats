import type { FuzzyDate } from '../stores/query/types'

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
  const m = months[date.getMonth()].slice(0, 3)
  const y = date.getFullYear()

  const dom = String(d)
  const month = String(m)

  return month + ' ' + dom + ', ' + y
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

export function displayFuzzyDate(date: FuzzyDate): string {
  if (!date.day || !date.month || date.month <= 0) return 'Unknown'

  return months[date.month - 1].slice(0, 3) + ' ' + date.day + ', ' + date.year
}
