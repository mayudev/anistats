import useSWRV, { type IConfig } from 'swrv'
import type { ResponseWithMedia } from '../query/Media'
import { mediaActivitiesQuery } from '../query/MediaActivities'
import { apiRequest } from './api'

const swrvConfig: IConfig = {
  revalidateOnFocus: false,
  dedupingInterval: 3600000,
}

export async function fetchMediaActivities(userId: number, mediaId: number) {
  const variables = {
    page: 1,
    perPage: 50,
    mediaId,
    userId,
  }

  const { data, mutate } = useSWRV(
    `${userId}/media/${mediaId}`,
    () => apiRequest(mediaActivitiesQuery, variables),
    swrvConfig
  )

  if (typeof data.value === 'undefined') await mutate()

  return data.value as ResponseWithMedia
}
