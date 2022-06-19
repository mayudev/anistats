import { fetchMediaActivities } from '../api/media'
import type { UserActivity } from '../query/UserActivities'
import { parseActivities } from './activities'

export async function findMediaActivities(userId: number, mediaId: number) {
  const raw = await fetchMediaActivities(userId, mediaId)
  const plannedSince = findPlanningDate(raw.data.Page.activities)

  const days = parseActivities(
    Array.from(raw.data.Page.activities).reverse(),
    'both'
  )

  return { days, plannedSince }
}

export function findPlanningDate(activities: UserActivity[]): number {
  const plan = activities.find(x => x.status.startsWith('plans'))

  if (!plan) return 0
  else return plan.createdAt * 1000
}
