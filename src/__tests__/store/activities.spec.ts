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
]

describe('parseActivities', () => {
  it('parses activities correctly', () => {
    const parsed = parseActivities(dataset)

    const keys = Array.from(parsed.keys())
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const day = parsed.get(keys[0])!

    expect(day.totalEpisodes).toBe(10)
    expect(day.media).toHaveLength(2)
    expect(day.media[0].progress).toBe(1)
    expect(day.media[1].progress).toBe(9)
  })
})
