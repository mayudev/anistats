import type { Media } from './Media'
import type { PageInfo } from './types'

export const mediaFragment = `
fragment Media on ListActivity {
  id
  media {
    id
    type
    title {
      romaji
    }
    coverImage {
      medium
    }
  }
  type
  createdAt
  status
  progress
}
`

export const userActivitiesQuery = `
${mediaFragment}
query UserActivities($userId: Int, $page: Int, $perPage: Int, $type: ActivityType, $from: Int, $to: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    activities(userId: $userId, sort: ID_DESC, type: $type, createdAt_greater: $from, createdAt_lesser: $to) {
      __typename
      ...Media
    }
  }
}
`

type ActivityType = 'ANIME_LIST' | 'MANGA_LIST'

export interface UserActivity {
  __typename: string
  id: number
  media: Media
  type: ActivityType
  createdAt: number
  status: string
  progress: string | null
}

export interface UserActivitiesResponse {
  pageInfo: PageInfo
  activities: UserActivity[]
}
