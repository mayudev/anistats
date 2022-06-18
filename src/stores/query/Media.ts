import type { UserActivitiesResponse } from './UserActivities'

type MediaType = 'ANIME' | 'MANGA'

interface Title {
  romaji: string
}

interface Image {
  medium?: string
  large?: string
}

export interface Media {
  id: number
  type: MediaType
  title: Title
  coverImage: Image
}

export interface MediaFull extends Media {
  bannerImage: string | null
  episodes?: number
}

export interface ResponseWithMedia {
  data: {
    Page: UserActivitiesResponse
    Media: MediaFull
  }
}
