type MediaType = 'ANIME' | 'MANGA'

interface Title {
  romaji: string
}

interface Image {
  medium?: string
}

export interface Media {
  id: number
  type: MediaType
  title: Title
  coverImage: Image
}
