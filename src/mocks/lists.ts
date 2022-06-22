import type { MediaList } from '../stores/query/List'
import type { MediaType } from '../stores/query/Media'

export function mockList(type: MediaType) {
  if (type === 'MANGA') {
    return {
      MediaListCollection: {
        lists: [mangaPausedList, mangaCompletedList, mangaPlanningList],
      },
    }
  } else {
    return {
      MediaListCollection: {
        lists: [
          animePausedList,
          animeCompletedList,
          animeDroppedList,
          animePlanningList,
          animeCurrentList,
          animeCustomList,
        ],
      },
    }
  }
}

const animeCompletedList: MediaList = {
  name: 'Completed',
  isCustomList: false,
  status: 'COMPLETED',
  entries: [
    {
      id: 79520013,
      status: 'COMPLETED',
      progress: 12,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: 2019,
        month: 9,
        day: 23,
      },
      media: {
        id: 21659,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21659-mtAdYXBPnj8B.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21659-r1nnqXPIcl9D.png',
        },
        averageScore: 73,
        seasonYear: 2016,
        title: {
          romaji: 'Amaama to Inazuma',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 79520014,
      status: 'COMPLETED',
      progress: 13,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 6547,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/6547-YUUiSjKyxxeQ.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6547-3jWzWyXg34Et.png',
        },
        averageScore: 77,
        seasonYear: 2010,
        title: {
          romaji: 'Angel Beats!',
        },
        format: 'TV',
        episodes: 13,
        chapters: null,
      },
    },
    {
      id: 79520015,
      status: 'COMPLETED',
      progress: 11,
      createdAt: 0,
      startedAt: {
        year: 2019,
        month: 10,
        day: 1,
      },
      completedAt: {
        year: 2019,
        month: 10,
        day: 3,
      },
      media: {
        id: 9989,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/9989-pyr6rXlV1oAm.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx9989-hImMg6kCMm6I.jpg',
        },
        averageScore: 80,
        seasonYear: 2011,
        title: {
          romaji: 'Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.',
        },
        format: 'TV',
        episodes: 11,
        chapters: null,
      },
    },
    {
      id: 79520016,
      status: 'COMPLETED',
      progress: 12,
      createdAt: 0,
      startedAt: {
        year: 2019,
        month: 9,
        day: 25,
      },
      completedAt: {
        year: 2019,
        month: 9,
        day: 27,
      },
      media: {
        id: 11433,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/11433-Pce9apZ7W49V.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11433-KLEzZeK6D46g.jpg',
        },
        averageScore: 71,
        seasonYear: 2012,
        title: {
          romaji: 'Ano Natsu de Matteru',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 79520017,
      status: 'COMPLETED',
      progress: 26,
      createdAt: 0,
      startedAt: {
        year: 2019,
        month: 10,
        day: 11,
      },
      completedAt: {
        year: 2019,
        month: 10,
        day: 17,
      },
      media: {
        id: 66,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/66-9q6Y6bMBwqrX.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx66-1LTNhVTnttZv.png',
        },
        averageScore: 77,
        seasonYear: 2002,
        title: {
          romaji: 'Azumanga Daiou THE ANIMATION',
        },
        format: 'TV',
        episodes: 26,
        chapters: null,
      },
    },
    {
      id: 79520018,
      status: 'COMPLETED',
      progress: 13,
      createdAt: 0,
      startedAt: {
        year: 2019,
        month: 10,
        day: 29,
      },
      completedAt: {
        year: 2019,
        month: 10,
        day: 31,
      },
      media: {
        id: 6347,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/6347-ZDzk4GrlQdag.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6347-wmkZ4HD6EG8O.jpg',
        },
        averageScore: 71,
        seasonYear: 2010,
        title: {
          romaji: 'Baka to Test to Shoukanjuu',
        },
        format: 'TV',
        episodes: 13,
        chapters: null,
      },
    },
    {
      id: 79520019,
      status: 'COMPLETED',
      progress: 12,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: 2019,
        month: 9,
        day: 16,
      },
      media: {
        id: 97994,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/97994-3JZ05K3Idjco.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx97994-5k4ISEsvDl5x.png',
        },
        averageScore: 71,
        seasonYear: 2017,
        title: {
          romaji: 'Blend S',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 79520020,
      status: 'COMPLETED',
      progress: 23,
      createdAt: 0,
      startedAt: {
        year: 2020,
        month: 1,
        day: 27,
      },
      completedAt: {
        year: 2020,
        month: 1,
        day: 30,
      },
      media: {
        id: 2167,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/2167.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx2167-ubU2875AFRTH.jpg',
        },
        averageScore: 77,
        seasonYear: 2007,
        title: {
          romaji: 'CLANNAD',
        },
        format: 'TV',
        episodes: 23,
        chapters: null,
      },
    },
    {
      id: 79520021,
      status: 'COMPLETED',
      progress: 12,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: 2019,
        month: 9,
        day: 14,
      },
      media: {
        id: 21685,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21685-7qhjceISmSsv.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21685-bJOXiEOxIew0.jpg',
        },
        averageScore: 60,
        seasonYear: 2017,
        title: {
          romaji: 'Eromanga Sensei',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 79520022,
      status: 'COMPLETED',
      progress: 12,
      createdAt: 0,
      startedAt: {
        year: 2019,
        month: 11,
        day: 15,
      },
      completedAt: {
        year: 2019,
        month: 11,
        day: 16,
      },
      media: {
        id: 20668,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20668-hmoK9pH09pWT.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20668-33kB71bNr7N6.png',
        },
        averageScore: 77,
        seasonYear: 2014,
        title: {
          romaji: 'Gekkan Shoujo Nozaki-kun',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
  ],
}

const animePausedList: MediaList = {
  name: 'Paused',
  isCustomList: false,
  status: 'PAUSED',
  entries: [
    {
      id: 79520042,
      status: 'PAUSED',
      progress: 15,
      createdAt: 0,
      startedAt: {
        year: 2019,
        month: 11,
        day: 19,
      },
      completedAt: {
        year: 2019,
        month: 11,
        day: 22,
      },
      media: {
        id: 10165,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/10165.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx10165-1j2Qn8wIIn5S.png',
        },
        averageScore: 82,
        seasonYear: 2011,
        title: {
          romaji: 'Nichijou',
        },
        format: 'TV',
        episodes: 26,
        chapters: null,
      },
    },
    {
      id: 87508176,
      status: 'PAUSED',
      progress: 11,
      createdAt: 1576940060,
      startedAt: {
        year: 2020,
        month: 4,
        day: 3,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 100855,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/100855-wYz8OnxwESfV.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx100855-r8cXwdCschnX.jpg',
        },
        averageScore: 77,
        seasonYear: 2018,
        title: {
          romaji: 'Emiya-san Chi no Kyou no Gohan',
        },
        format: 'ONA',
        episodes: 13,
        chapters: null,
      },
    },
    {
      id: 105313976,
      status: 'PAUSED',
      progress: 2,
      createdAt: 1587681442,
      startedAt: {
        year: 2020,
        month: 12,
        day: 10,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 21701,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21701-zZxwVu9VbrzU.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21701-MHK32AXcplLw.jpg',
        },
        averageScore: 69,
        seasonYear: 2017,
        title: {
          romaji: 'Kuzu no Honkai',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 114293655,
      status: 'PAUSED',
      progress: 6,
      createdAt: 1591560769,
      startedAt: {
        year: 2021,
        month: 7,
        day: 11,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 26,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/26-FWJgAONj7etr.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx26-u2SawALYH3w3.jpg',
        },
        averageScore: 76,
        seasonYear: 2003,
        title: {
          romaji: 'TEXHNOLYZE',
        },
        format: 'TV',
        episodes: 22,
        chapters: null,
      },
    },
    {
      id: 117561559,
      status: 'PAUSED',
      progress: 4,
      createdAt: 1592934959,
      startedAt: {
        year: 2020,
        month: 8,
        day: 4,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 20541,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20541-n6cLsccx46Jp.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20541-vEenrRZqApRn.jpg',
        },
        averageScore: 66,
        seasonYear: 2014,
        title: {
          romaji: 'Mekakucity Actors',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
  ],
}

const animeDroppedList = {
  name: 'Dropped',
  isCustomList: false,
  status: 'DROPPED',
  entries: [
    {
      id: 83370790,
      status: 'DROPPED',
      progress: 3,
      createdAt: 1572790006,
      startedAt: {
        year: 2020,
        month: 1,
        day: 8,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 98292,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/n98292-QChutdQfKyme.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx98292-MjBqoQt8fjzF.png',
        },
        averageScore: 77,
        seasonYear: 2017,
        title: {
          romaji: 'NEW GAME!!',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 88869309,
      status: 'DROPPED',
      progress: 4,
      createdAt: 1578076687,
      startedAt: {
        year: 2020,
        month: 4,
        day: 2,
      },
      completedAt: {
        year: 2020,
        month: 4,
        day: 3,
      },
      media: {
        id: 6956,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/6956-V7ovHknjKRlc.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6956-Nxs7H25yHLNS.jpg',
        },
        averageScore: 74,
        seasonYear: 2010,
        title: {
          romaji: 'Working!!',
        },
        format: 'TV',
        episodes: 13,
        chapters: null,
      },
    },
    {
      id: 90101802,
      status: 'DROPPED',
      progress: 6,
      createdAt: 1578839141,
      startedAt: {
        year: 2020,
        month: 1,
        day: 31,
      },
      completedAt: {
        year: 2020,
        month: 2,
        day: 2,
      },
      media: {
        id: 101351,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/101351-gAmnBuRCb1U0.png',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101351-BLQTzvqejbEC.jpg',
        },
        averageScore: 66,
        seasonYear: 2018,
        title: {
          romaji: 'Happy Sugar Life',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 99389578,
      status: 'DROPPED',
      progress: 6,
      createdAt: 1585217757,
      startedAt: {
        year: 2020,
        month: 4,
        day: 3,
      },
      completedAt: {
        year: 2020,
        month: 6,
        day: 14,
      },
      media: {
        id: 109856,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/109856-rW8JlTsPbjey.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx109856-zDYLvuF4Vuno.jpg',
        },
        averageScore: 48,
        seasonYear: 2020,
        title: {
          romaji: 'LISTENERS',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 99389589,
      status: 'DROPPED',
      progress: 10,
      createdAt: 1585217774,
      startedAt: {
        year: 2020,
        month: 4,
        day: 4,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 109020,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/109020-TclHkkKtYgcQ.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx109020-sRBusiVXbsLH.jpg',
        },
        averageScore: 68,
        seasonYear: 2020,
        title: {
          romaji: 'Yesterday wo Utatte',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
  ],
}

const animePlanningList: MediaList = {
  name: 'Planning',
  isCustomList: false,
  status: 'PLANNING',
  entries: [
    {
      id: 79520033,
      status: 'PLANNING',
      progress: 1,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 107717,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/107717-xi8BDn9kucOI.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx107717-bixaW1NTGBra.jpg',
        },
        averageScore: 83,
        seasonYear: 2021,
        title: {
          romaji: 'Kobayashi-san Chi no Maidragon S',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 79520035,
      status: 'PLANNING',
      progress: 0,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 20954,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-f30bHMXa5Qoe.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20954-UMb6Kl7ZL8Ke.jpg',
        },
        averageScore: 88,
        seasonYear: 2016,
        title: {
          romaji: 'Koe no Katachi',
        },
        format: 'MOVIE',
        episodes: 1,
        chapters: null,
      },
    },
    {
      id: 79520036,
      status: 'PLANNING',
      progress: 7,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 1887,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1887-wsvLo25cHip4.png',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1887-4x8PSzcBKXGe.png',
        },
        averageScore: 74,
        seasonYear: 2007,
        title: {
          romaji: 'Lucky☆Star',
        },
        format: 'TV',
        episodes: 24,
        chapters: null,
      },
    },
    {
      id: 79520044,
      status: 'PLANNING',
      progress: 0,
      createdAt: 0,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 12355,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/12355.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx12355-wNsvhEsXEgrH.png',
        },
        averageScore: 84,
        seasonYear: 2012,
        title: {
          romaji: 'Ookami Kodomo no Ame to Yuki',
        },
        format: 'MOVIE',
        episodes: 1,
        chapters: null,
      },
    },
    {
      id: 80751611,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1570637405,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 98607,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/98607-Q03MKBUqyacC.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx98607-00IsY9yY7Aed.jpg',
        },
        averageScore: 61,
        seasonYear: 2017,
        title: {
          romaji: 'Anime-Gataris',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 80751662,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1570637581,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 99578,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/99578-8orFGgDq7NS8.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx99578-oO5KChtfhzln.png',
        },
        averageScore: 79,
        seasonYear: 2018,
        title: {
          romaji: 'Wotaku ni Koi wa Muzukashii',
        },
        format: 'TV',
        episodes: 11,
        chapters: null,
      },
    },
    {
      id: 80871770,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1570736816,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 21857,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21857-k7r362xG7420.png',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21857-haPDVD7DKDpg.jpg',
        },
        averageScore: 65,
        seasonYear: 2017,
        title: {
          romaji: 'Masamune-kun no Revenge',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 81154865,
      status: 'PLANNING',
      progress: 1,
      createdAt: 1570918173,
      startedAt: {
        year: 2020,
        month: 8,
        day: 28,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 488,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/488-t67Tzs0FkzUp.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx488-FwxcBNNqG6TC.png',
        },
        averageScore: 73,
        seasonYear: 2005,
        title: {
          romaji: 'Ichigo Mashimaro',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 81391729,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1571066508,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 112135,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/112135-VtUn87kDAadW.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx112135-SZwCaYm8WwR0.png',
        },
        averageScore: 74,
        seasonYear: 2019,
        title: {
          romaji: 'Kono Sekai no (Sara ni Ikutsumono) Katasumi ni',
        },
        format: 'MOVIE',
        episodes: 1,
        chapters: null,
      },
    },
    {
      id: 81525292,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1571156423,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 100382,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/100382-w7Lg2E31wTzO.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx100382-n1vAc0TMT8c2.png',
        },
        averageScore: 43,
        seasonYear: 2018,
        title: {
          romaji: 'Ore ga Suki nano wa Imouto dakedo Imouto ja Nai',
        },
        format: 'TV',
        episodes: 10,
        chapters: null,
      },
    },
    {
      id: 82505696,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1571932835,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 21708,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21708-IdnFN49kjwKS.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21708-al2koHBxr8du.jpg',
        },
        averageScore: 65,
        seasonYear: 2016,
        title: {
          romaji: 'Occultic;Nine',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 83102035,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1572553936,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 109089,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/109089-usL6o1ncaG2Q.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx109089-J0BeVxrAldAp.jpg',
        },
        averageScore: 63,
        seasonYear: 2019,
        title: {
          romaji: 'Chuubyou Gekihatsu Boy (TV)',
        },
        format: 'TV',
        episodes: 11,
        chapters: null,
      },
    },
    {
      id: 83598174,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1572981465,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 6512,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/6512-R3BfNFYjxbyd.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/6512.jpg',
        },
        averageScore: 67,
        seasonYear: 2009,
        title: {
          romaji: 'Nyan Koi!',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 83673475,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1573062835,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 11757,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx11757-Q9P2zjCPICq5.jpg',
        },
        averageScore: 68,
        seasonYear: 2012,
        title: {
          romaji: 'Sword Art Online',
        },
        format: 'TV',
        episodes: 25,
        chapters: null,
      },
    },
    {
      id: 83751107,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1573155899,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 21018,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21018-Y3v95sqyeMZ4.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21018-zt3HmKBFqPQT.png',
        },
        averageScore: 63,
        seasonYear: 2015,
        title: {
          romaji: 'Denpa Kyoushi',
        },
        format: 'TV',
        episodes: 24,
        chapters: null,
      },
    },
    {
      id: 83751184,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1573156023,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 20627,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20627-vcgaKcFdv5xH.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20627-qAzYOBmxk5iS.jpg',
        },
        averageScore: 63,
        seasonYear: 2015,
        title: {
          romaji: 'Seiken Tsukai no World Break',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 83987394,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1573371451,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 11843,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/11843-2GxMdvjHLn6v.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx11843-KK3X2ccAlUwI.jpg',
        },
        averageScore: 80,
        seasonYear: 2012,
        title: {
          romaji: 'Danshi Koukousei no Nichijou',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 84363059,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1573761245,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 104722,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/104722-2jefM83r4xfB.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx104722-XVscwgdGzfnO.jpg',
        },
        averageScore: 57,
        seasonYear: 2019,
        title: {
          romaji: 'Assassins Pride',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
  ],
}

const animeCurrentList: MediaList = {
  name: 'Watching',
  isCustomList: false,
  status: 'CURRENT',
  entries: [
    {
      id: 97968372,
      status: 'CURRENT',
      progress: 11,
      createdAt: 1584361711,
      startedAt: {
        year: 2022,
        month: 4,
        day: 8,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 116605,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/116605-qmByNsRP3c53.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx116605-uzDakXnaZ1OW.jpg',
        },
        averageScore: 75,
        seasonYear: 2022,
        title: {
          romaji: 'Date A Live IV',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
    {
      id: 195822996,
      status: 'CURRENT',
      progress: 12,
      createdAt: 1621171315,
      startedAt: {
        year: 2022,
        month: 4,
        day: 2,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 133891,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/133891-pm9Tjc86524z.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
        averageScore: 75,
        seasonYear: 2022,
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        format: 'TV',
        episodes: 13,
        chapters: null,
      },
    },
    {
      id: 233236265,
      status: 'CURRENT',
      progress: 11,
      createdAt: 1635710188,
      startedAt: {
        year: 2022,
        month: 4,
        day: 9,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 140960,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/140960-Z7xSvkRxHKfj.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png',
        },
        averageScore: 88,
        seasonYear: 2022,
        title: {
          romaji: 'SPY×FAMILY',
        },
        format: 'TV',
        episodes: 12,
        chapters: null,
      },
    },
  ],
}

const animeCustomList: MediaList = {
  name: 'Ngtd',
  isCustomList: true,
  status: null,
  entries: [
    {
      id: 195822996,
      status: 'CURRENT',
      progress: 12,
      createdAt: 1621171315,
      startedAt: {
        year: 2022,
        month: 4,
        day: 2,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 133891,
        type: 'ANIME',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/133891-pm9Tjc86524z.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
        averageScore: 75,
        seasonYear: 2022,
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        format: 'TV',
        episodes: 13,
        chapters: null,
      },
    },
  ],
}

const mangaPlanningList: MediaList = {
  name: 'Planning',
  isCustomList: false,
  status: 'PLANNING',
  entries: [
    {
      id: 86795467,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1576254619,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 96260,
        type: 'MANGA',
        bannerImage: null,
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/nx96260-KJ8Jy4H8rI8S.jpg',
        },
        averageScore: 69,
        seasonYear: null,
        title: {
          romaji: 'Toaru Idol no Accelerator-sama',
        },
        format: 'MANGA',
        episodes: null,
        chapters: 39,
      },
    },
    {
      id: 87339271,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1576770122,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 100664,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/100664-G1MIUsSTupjq.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/nx100664-uzN5998CDxPJ.jpg',
        },
        averageScore: 74,
        seasonYear: null,
        title: {
          romaji: 'Ijiranaide, Nagatoro-san',
        },
        format: 'MANGA',
        episodes: null,
        chapters: null,
      },
    },
    {
      id: 87881395,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1577302092,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 107729,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/107729-GBoshuvTTW4k.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx107729-WfgMoPuHroMk.png',
        },
        averageScore: 71,
        seasonYear: null,
        title: {
          romaji: 'Yochinouryoku Manga: Kuno Chiyo',
        },
        format: 'MANGA',
        episodes: null,
        chapters: 61,
      },
    },
    {
      id: 99302394,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1585161882,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 99943,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/99943-bs6PEAZgj1wy.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx99943-0tJ6oNhn3xet.png',
        },
        averageScore: 65,
        seasonYear: null,
        title: {
          romaji: 'Kanojo, Okarishimasu',
        },
        format: 'MANGA',
        episodes: null,
        chapters: null,
      },
    },
    {
      id: 107336547,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1588540659,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 54822,
        type: 'MANGA',
        bannerImage: null,
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx54822-RtRk8BhQz7R5.jpg',
        },
        averageScore: 72,
        seasonYear: null,
        title: {
          romaji: 'Trinity Seven: 7-nin no Mahoutsukai',
        },
        format: 'MANGA',
        episodes: null,
        chapters: null,
      },
    },
    {
      id: 112414794,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1590687770,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 97603,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/97603-cpPJQ0Zqqrwo.png',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/nx97603-KUjMCEWKJPKJ.jpg',
        },
        averageScore: 72,
        seasonYear: null,
        title: {
          romaji: 'Kakushigoto',
        },
        format: 'MANGA',
        episodes: null,
        chapters: 232,
      },
    },
    {
      id: 117865577,
      status: 'PLANNING',
      progress: 0,
      createdAt: 1593064935,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 114793,
        type: 'MANGA',
        bannerImage: null,
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/b114793-z0MzzIwgxGh6.jpg',
        },
        averageScore: 62,
        seasonYear: null,
        title: {
          romaji: 'Game-bu',
        },
        format: 'MANGA',
        episodes: null,
        chapters: 27,
      },
    },
  ],
}

const mangaCompletedList: MediaList = {
  name: 'Completed',
  isCustomList: false,
  status: 'COMPLETED',
  entries: [
    {
      id: 80421135,
      status: 'COMPLETED',
      progress: 77,
      createdAt: 1570391564,
      startedAt: {
        year: null,
        month: null,
        day: null,
      },
      completedAt: {
        year: 2019,
        month: 8,
        day: 25,
      },
      media: {
        id: 49671,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/49671-Bzall095eQZt.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/49671-tacqFCXxSr4s.jpg',
        },
        averageScore: 73,
        seasonYear: null,
        title: {
          romaji: "Angel Beats! Heaven's Door",
        },
        format: 'MANGA',
        episodes: null,
        chapters: 77,
      },
    },
    {
      id: 82505688,
      status: 'COMPLETED',
      progress: 57,
      createdAt: 1571932821,
      startedAt: {
        year: 2019,
        month: 11,
        day: 3,
      },
      completedAt: {
        year: 2019,
        month: 11,
        day: 30,
      },
      media: {
        id: 85489,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/n85489-BtBy3HULuQoE.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx85489-dbkIYbzwzWLb.jpg',
        },
        averageScore: 71,
        seasonYear: null,
        title: {
          romaji: 'Kyou no Cerberus',
        },
        format: 'MANGA',
        episodes: null,
        chapters: 70,
      },
    },
    {
      id: 85899425,
      status: 'COMPLETED',
      progress: 37,
      createdAt: 1575323353,
      startedAt: {
        year: 2020,
        month: 1,
        day: 15,
      },
      completedAt: {
        year: 2020,
        month: 5,
        day: 10,
      },
      media: {
        id: 42854,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/42854-c4PF6oEGaJeh.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/nx42854-YymcguScxjIP.png',
        },
        averageScore: 81,
        seasonYear: null,
        title: {
          romaji: 'Toaru Majutsu no Index',
        },
        format: 'NOVEL',
        episodes: null,
        chapters: 133,
      },
    },
    {
      id: 92767443,
      status: 'COMPLETED',
      progress: 28,
      createdAt: 1580679532,
      startedAt: {
        year: 2020,
        month: 2,
        day: 2,
      },
      completedAt: {
        year: 2020,
        month: 2,
        day: 11,
      },
      media: {
        id: 61651,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/61651-jhoIMOfr8bj1.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx61651-e6xpMtO9U0La.jpg',
        },
        averageScore: 74,
        seasonYear: null,
        title: {
          romaji: 'Toaru Majutsu no Index SS',
        },
        format: 'NOVEL',
        episodes: null,
        chapters: 28,
      },
    },
    {
      id: 97276869,
      status: 'COMPLETED',
      progress: 146,
      createdAt: 1583789460,
      startedAt: {
        year: 2020,
        month: 5,
        day: 14,
      },
      completedAt: {
        year: 2020,
        month: 10,
        day: 26,
      },
      media: {
        id: 67523,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/67523-zwoZYAR6qznL.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx67523-mzbSAv4NHsvY.jpg',
        },
        averageScore: 78,
        seasonYear: null,
        title: {
          romaji: 'Date A Live',
        },
        format: 'NOVEL',
        episodes: null,
        chapters: 146,
      },
    },
    {
      id: 108645318,
      status: 'COMPLETED',
      progress: 183,
      createdAt: 1589117130,
      startedAt: {
        year: 2020,
        month: 6,
        day: 26,
      },
      completedAt: {
        year: 2021,
        month: 5,
        day: 17,
      },
      media: {
        id: 54875,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/54875-wv1H2qsJLppY.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/nx54875-R5W0YqFTJnqO.jpg',
        },
        averageScore: 85,
        seasonYear: null,
        title: {
          romaji: 'Shinyaku Toaru Majutsu no Index',
        },
        format: 'NOVEL',
        episodes: null,
        chapters: 183,
      },
    },
    {
      id: 115614329,
      status: 'COMPLETED',
      progress: 4,
      createdAt: 1592084796,
      startedAt: {
        year: 2020,
        month: 6,
        day: 13,
      },
      completedAt: {
        year: 2020,
        month: 6,
        day: 19,
      },
      media: {
        id: 61649,
        type: 'MANGA',
        bannerImage: null,
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx61649-OLYzDuc5tODc.jpg',
        },
        averageScore: 66,
        seasonYear: null,
        title: {
          romaji: 'Toaru Majutsu no Index SP',
        },
        format: 'NOVEL',
        episodes: null,
        chapters: 4,
      },
    },
    {
      id: 119343401,
      status: 'COMPLETED',
      progress: 212,
      createdAt: 1593634059,
      startedAt: {
        year: 2020,
        month: 7,
        day: 6,
      },
      completedAt: {
        year: 2020,
        month: 7,
        day: 12,
      },
      media: {
        id: 86481,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/86481-RNhadG4l1a3m.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx86481-drBTspZ1CIwo.jpg',
        },
        averageScore: 80,
        seasonYear: null,
        title: {
          romaji: 'Tsurezure Children',
        },
        format: 'MANGA',
        episodes: null,
        chapters: 212,
      },
    },
  ],
}

const mangaPausedList: MediaList = {
  name: 'Paused',
  isCustomList: false,
  status: 'PAUSED',
  entries: [
    {
      id: 79804765,
      status: 'PAUSED',
      progress: 17,
      createdAt: 1569863407,
      startedAt: {
        year: 2019,
        month: 9,
        day: 27,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 37149,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/37149-C4A3glhijZot.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx37149-adyPcOhJRnxp.jpg',
        },
        averageScore: 79,
        seasonYear: null,
        title: {
          romaji: 'Toradora!',
        },
        format: 'NOVEL',
        episodes: null,
        chapters: 62,
      },
    },
    {
      id: 81516584,
      status: 'PAUSED',
      progress: 67,
      createdAt: 1571146470,
      startedAt: {
        year: 2019,
        month: 12,
        day: 9,
      },
      completedAt: {
        year: null,
        month: null,
        day: null,
      },
      media: {
        id: 107462,
        type: 'MANGA',
        bannerImage:
          'https://s4.anilist.co/file/anilistcdn/media/manga/banner/107462-JdEPvoews0Jq.jpg',
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx107462-aNPsVx2SY1tz.jpg',
        },
        averageScore: 77,
        seasonYear: null,
        title: {
          romaji: 'Machikado Mazoku',
        },
        format: 'MANGA',
        episodes: null,
        chapters: null,
      },
    },
  ],
}
