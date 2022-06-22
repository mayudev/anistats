import type { MediaEntry } from './Media'
import type { FuzzyDate } from './types'

export const listQuery = `
query MediaList($userId: Int, $type: MediaType, $chunk: Int) {
  MediaListCollection(userId: $userId, type: $type, chunk: $chunk, forceSingleCompletedList: true) {
    lists {
      name
      isCustomList
      entries {
        id
        status
        progress
        createdAt
        startedAt {
          year
          month
          day
        }
        completedAt {
          year
          month
          day
        }
        media {
          id
          type
          bannerImage
          coverImage {
            medium
          }
          averageScore
          seasonYear
          title {
            romaji
          }
          format
          episodes
          chapters
        }
      }
    }
  }
}`

export interface MediaListCollection {
  lists: MediaList[]
}

export type MediaListStatus =
  | 'CURRENT'
  | 'PLANNING'
  | 'COMPLETED'
  | 'DROPPED'
  | 'PAUSED'
  | 'REPEATING'

export interface MediaList {
  name: string
  isCustomList: boolean
  status: MediaListStatus | null
  entries: MediaListEntry[]
}

export interface MediaListEntry {
  id: number
  status: MediaListStatus
  progress: number | null
  createdAt: number
  startedAt: FuzzyDate
  completedAt: FuzzyDate
  media: MediaEntry
}
