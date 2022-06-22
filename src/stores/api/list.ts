import { listQuery, type MediaListCollection } from '../query/List'
import type { MediaType } from '../query/Media'
import { apiRequest } from './api'

export async function fetchList(
  userId: number,
  type: MediaType
): Promise<MediaListCollection> {
  const resp = await apiRequest<MediaListCollection, 'MediaListCollection'>(
    listQuery,
    {
      userId,
      type,
      chunk: 1,
    }
  )

  return resp.data.MediaListCollection
}
