import { fetchActivitiesFrom } from '../api/activities'
import { NoActivitiesError } from '../query/types'
import type { Dataset } from '../user'
import { parseActivities } from './activities'

export async function getActivitiesFromDay(
  userId: number,
  dataset: Dataset,
  dayTimestamp: number
) {
  const date = new Date(dayTimestamp)
  const begin = date.setHours(3, 0, 0, 0) // todo preference
  const end = date.setDate(date.getDate() + 1)

  const initial = await fetchActivitiesFrom(userId, begin / 1000, end / 1000)

  if (initial.activities.length === 0) throw new NoActivitiesError()

  const days = parseActivities(initial.activities, dataset)

  return days
}
