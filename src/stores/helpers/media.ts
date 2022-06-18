import type { UserActivity } from '../query/UserActivities'

export function findPlanningDate(activities: UserActivity[]): number {
  const plan = activities.find(x => x.status.startsWith('plans'))

  if (!plan) return 0
  else return plan.createdAt * 1000
}
