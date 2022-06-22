import type { UserActivitiesResponse } from './UserActivities'

export type MediaType = 'ANIME' | 'MANGA'

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

export type MediaFormat =
  | 'TV'
  | 'TV_SHORT'
  | 'MOVIE'
  | 'SPECIAL'
  | 'OVA'
  | 'ONA'
  | 'MUSIC'
  | 'MANGA'
  | 'NOVEL'
  | 'ONE_SHOT'

export interface MediaEntry extends Media {
  bannerImage: string | null
  episodes: number | null
  chapters: number | null
  averageScore: number | null
  seasonYear: number | null
  format: MediaFormat | null
}

export interface ResponseWithMedia {
  data: {
    Page: UserActivitiesResponse
    Media: MediaFull
  }
}
