import {
  userActivitiesQuery,
  type UserActivitiesResponse,
} from '../query/UserActivities'
import { apiRequest } from './api'

export async function fetchActivities(
  userId: number,
  page: number
): Promise<UserActivitiesResponse> {
  const resp = await apiRequest<UserActivitiesResponse, 'Page'>(
    userActivitiesQuery,
    {
      userId,
      page,
      perPage: 50,
      type: 'MEDIA_LIST',
    }
  )

  return resp.data.Page
}
