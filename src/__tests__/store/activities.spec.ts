import { describe, expect, it } from 'vitest'
import { parseActivities } from '../../stores/helpers/activities'
import type { UserActivity } from '../../stores/query/UserActivities'

const dataset: UserActivity[] = [
  {
    __typename: 'ListActivity',
    id: 406934499,
    media: {
      id: 6712,
      type: 'ANIME',
      title: {
        romaji: 'Natsu no Arashi!: Akinai-chuu',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6712-Ij76UPxFEuDC.png',
      },
    },
    type: 'ANIME_LIST',
    createdAt: 1655312172,
    status: 'watched episode',
    progress: '1',
  },
  {
    __typename: 'ListActivity',
    id: 406934425,
    media: {
      id: 5597,
      type: 'ANIME',
      title: {
        romaji: 'Natsu no Arashi!',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/5597.jpg',
      },
    },
    type: 'ANIME_LIST',
    createdAt: 1655312163,
    status: 'completed',
    progress: null,
  },
  {
    __typename: 'ListActivity',
    id: 406934421,
    media: {
      id: 5597,
      type: 'ANIME',
      title: {
        romaji: 'Natsu no Arashi!',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/5597.jpg',
      },
    },
    type: 'ANIME_LIST',
    createdAt: 1655312162,
    status: 'watched episode',
    progress: '5 - 12',
  },
  {
    __typename: 'ListActivity',
    id: 212432111,
    media: {
      id: 4224,
      type: 'ANIME',
      title: {
        romaji: 'Toradora!',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/4224.jpg',
      },
    },
    type: 'ANIME_LIST',
    createdAt: 1654312162,
    status: 'watched episode',
    progress: '1 - 3',
  },
  {
    __typename: 'ListActivity',
    id: 23321213,
    media: {
      id: 5597,
      type: 'ANIME',
      title: {
        romaji: 'Natsu no Arashi!',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/5597.jpg',
      },
    },
    type: 'ANIME_LIST',
    createdAt: 1654312162,
    status: 'watched episode',
    progress: '1 - 4',
  },
]

const mangaDataset: UserActivity[] = [
  {
    __typename: 'ListActivity',
    id: 23321213,
    media: {
      id: 5597,
      type: 'ANIME',
      title: {
        romaji: 'Natsu no Arashi!',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/5597.jpg',
      },
    },
    type: 'ANIME_LIST',
    createdAt: 1653345664,
    status: 'watched episode',
    progress: '1 - 4',
  },
  {
    __typename: 'ListActivity',
    id: 123,
    media: {
      id: 111233,
      type: 'MANGA',
      title: {
        romaji: 'Yofukashi no Uta',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx111233-QU3BW8uqCvcN.jpg',
      },
    },
    type: 'MANGA_LIST',
    createdAt: 1653345664,
    status: 'read chapter',
    progress: '1 - 2',
  },
  {
    __typename: 'ListActivity',
    id: 123456,
    media: {
      id: 111233,
      type: 'MANGA',
      title: {
        romaji: 'Yofukashi no Uta',
      },
      coverImage: {
        medium:
          'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx111233-QU3BW8uqCvcN.jpg',
      },
    },
    type: 'MANGA_LIST',
    createdAt: 1643345664,
    status: 'read chapter',
    progress: '5 - 6',
  },
]

describe('parseActivities', () => {
  it('parses activities correctly', () => {
    const parsed = parseActivities(dataset)

    const keys = Array.from(parsed.keys())
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const day1 = parsed.get(keys[0])!

    expect(day1.totalEpisodes).toBe(10)
    expect(day1.media).toHaveLength(2)
    expect(day1.media[0].progress).toBe(1)
    expect(day1.media[1].progress).toBe(9)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const day2 = parsed.get(keys[1])!
    expect(day2.totalEpisodes).toBe(7)
    expect(day2.media[0].progress).toBe(3)
    expect(day2.media[0].title.romaji).toBe('Toradora!')
    expect(day2.media[1].progress).toBe(4)
  })

  it('counts episodes and chapters separately', () => {
    const parsed = parseActivities(mangaDataset)

    const keys = Array.from(parsed.keys())

    const day1 = parsed.get(keys[0])!
    const day2 = parsed.get(keys[1])!

    expect(day1.totalEpisodes).toBe(4)
    expect(day1.totalChapters).toBe(2)
  })
})
