import type { HistoryMonth } from '../query/history'
import type { MediaListEntry, MediaListStatus } from '../query/List'

export function getHistory(entries: MediaListEntry[], status: MediaListStatus) {
  const years = new Map<number, HistoryMonth[]>()

  let unknownCount = 0
  let maxCount = 1

  const completed = entries.filter(x => x.status === status)

  completed.forEach(entry => {
    if (!entry.completedAt.month || !entry.completedAt.year) {
      unknownCount++
      return
    }

    const year = years.get(entry.completedAt.year)

    if (!year) {
      years.set(entry.completedAt.year, [
        {
          month: entry.completedAt.month,
          count: 1,
        },
      ])
    } else {
      const month = year.find(month => month.month === entry.completedAt.month)

      if (!month) {
        year.push({
          month: entry.completedAt.month,
          count: 1,
        })
      } else {
        month.count++

        if (month.count > maxCount) maxCount = month.count
      }
    }
  })

  return { years, unknownCount, maxCount }
}
