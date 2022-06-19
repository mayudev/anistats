import type { MediaFull } from '../stores/query/Media'
import type { PageInfo } from '../stores/query/types'
import type { UserActivity } from '../stores/query/UserActivities'

const pages: UserActivity[][] = [
  [
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
      status: 'plans to watch',
      progress: null,
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
      id: 406614543,
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
      createdAt: 1655245805,
      status: 'watched episode',
      progress: '2 - 4',
    },
    {
      __typename: 'ListActivity',
      id: 406163471,
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
      createdAt: 1655157785,
      status: 'watched episode',
      progress: '1',
    },
    {
      __typename: 'ListActivity',
      id: 406087045,
      media: {
        id: 6802,
        type: 'ANIME',
        title: {
          romaji: 'So Ra No Wo To',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6802-MmsfM8KAgZuR.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1655145866,
      status: 'watched episode',
      progress: '1',
    },
  ],
  [
    {
      __typename: 'ListActivity',
      id: 406086784,
      media: {
        id: 610,
        type: 'ANIME',
        title: {
          romaji: 'Popotan',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx610-wWsIgl5dWqPs.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1655145841,
      status: 'completed',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 406086775,
      media: {
        id: 610,
        type: 'ANIME',
        title: {
          romaji: 'Popotan',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx610-wWsIgl5dWqPs.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1655145840,
      status: 'watched episode',
      progress: '7 - 11',
    },
    {
      __typename: 'ListActivity',
      id: 405691949,
      media: {
        id: 610,
        type: 'ANIME',
        title: {
          romaji: 'Popotan',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx610-wWsIgl5dWqPs.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1655071037,
      status: 'watched episode',
      progress: '4 - 6',
    },
    {
      __typename: 'ListActivity',
      id: 405056238,
      media: {
        id: 140960,
        type: 'ANIME',
        title: {
          romaji: 'SPY×FAMILY',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654964452,
      status: 'watched episode',
      progress: '10',
    },
  ],
  [
    {
      __typename: 'ListActivity',
      id: 404989157,
      media: {
        id: 610,
        type: 'ANIME',
        title: {
          romaji: 'Popotan',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx610-wWsIgl5dWqPs.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654953035,
      status: 'watched episode',
      progress: '2 - 3',
    },
    {
      __typename: 'ListActivity',
      id: 404989131,
      media: {
        id: 133891,
        type: 'ANIME',
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654953030,
      status: 'watched episode',
      progress: '11',
    },
    {
      __typename: 'ListActivity',
      id: 404747726,
      media: {
        id: 610,
        type: 'ANIME',
        title: {
          romaji: 'Popotan',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx610-wWsIgl5dWqPs.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654901193,
      status: 'watched episode',
      progress: '1',
    },
    {
      __typename: 'ListActivity',
      id: 404736540,
      media: {
        id: 2993,
        type: 'ANIME',
        title: {
          romaji: 'Rosario to Vampire',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/2993.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654899202,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 404736472,
      media: {
        id: 1760,
        type: 'ANIME',
        title: {
          romaji: 'Golgo 13',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b1760-PmH18u0MQNPB.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654899188,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 404736438,
      media: {
        id: 101001,
        type: 'ANIME',
        title: {
          romaji: 'Asobi Asobase',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101001-UERCW0UGi0P7.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654899179,
      status: 'plans to watch',
      progress: null,
    },
  ],
  [
    {
      __typename: 'ListActivity',
      id: 404568625,
      media: {
        id: 116605,
        type: 'ANIME',
        title: {
          romaji: 'Date A Live IV',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx116605-uzDakXnaZ1OW.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654870441,
      status: 'watched episode',
      progress: '10',
    },
    {
      __typename: 'ListActivity',
      id: 401859728,
      media: {
        id: 140960,
        type: 'ANIME',
        title: {
          romaji: 'SPY×FAMILY',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654361197,
      status: 'watched episode',
      progress: '9',
    },
    {
      __typename: 'ListActivity',
      id: 401804378,
      media: {
        id: 133891,
        type: 'ANIME',
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654351775,
      status: 'watched episode',
      progress: '10',
    },
    {
      __typename: 'ListActivity',
      id: 401383902,
      media: {
        id: 116605,
        type: 'ANIME',
        title: {
          romaji: 'Date A Live IV',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx116605-uzDakXnaZ1OW.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1654266681,
      status: 'watched episode',
      progress: '9',
    },
  ],
  [
    {
      __typename: 'ListActivity',
      id: 398734831,
      media: {
        id: 140960,
        type: 'ANIME',
        title: {
          romaji: 'SPY×FAMILY',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653755121,
      status: 'watched episode',
      progress: '8',
    },
    {
      __typename: 'ListActivity',
      id: 398734827,
      media: {
        id: 133891,
        type: 'ANIME',
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653755120,
      status: 'watched episode',
      progress: '9',
    },
    {
      __typename: 'ListActivity',
      id: 398263182,
      media: {
        id: 116605,
        type: 'ANIME',
        title: {
          romaji: 'Date A Live IV',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx116605-uzDakXnaZ1OW.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653662496,
      status: 'watched episode',
      progress: '8',
    },
    {
      __typename: 'ListActivity',
      id: 396685929,
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
      progress: '109 - 115',
    },
    {
      __typename: 'ListActivity',
      id: 396635919,
      media: {
        id: 21196,
        type: 'ANIME',
        title: {
          romaji: 'Koutetsujou no Kabaneri',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21196-2PfPfIDrxKki.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653337821,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 395949358,
      media: {
        id: 13267,
        type: 'ANIME',
        title: {
          romaji: 'Shinryaku!! Ika Musume OVA',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/13267.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653218905,
      status: 'completed',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 395949353,
      media: {
        id: 13267,
        type: 'ANIME',
        title: {
          romaji: 'Shinryaku!! Ika Musume OVA',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/13267.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653218904,
      status: 'watched episode',
      progress: '2',
    },
    {
      __typename: 'ListActivity',
      id: 395701734,
      media: {
        id: 13267,
        type: 'ANIME',
        title: {
          romaji: 'Shinryaku!! Ika Musume OVA',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/13267.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653170814,
      status: 'watched episode',
      progress: '1',
    },
  ],
  [
    {
      __typename: 'ListActivity',
      id: 395567198,
      media: {
        id: 140960,
        type: 'ANIME',
        title: {
          romaji: 'SPY×FAMILY',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653151187,
      status: 'watched episode',
      progress: '7',
    },
    {
      __typename: 'ListActivity',
      id: 395543934,
      media: {
        id: 133891,
        type: 'ANIME',
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653147536,
      status: 'watched episode',
      progress: '8',
    },
    {
      __typename: 'ListActivity',
      id: 395126203,
      media: {
        id: 137337,
        type: 'ANIME',
        title: {
          romaji: 'Non Non Biyori: Nonstop - Bukatsu wo Ganbatta',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx137337-5iTk3YEYoZyS.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653063248,
      status: 'completed',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 395126135,
      media: {
        id: 116605,
        type: 'ANIME',
        title: {
          romaji: 'Date A Live IV',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx116605-uzDakXnaZ1OW.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653063234,
      status: 'watched episode',
      progress: '7',
    },
    {
      __typename: 'ListActivity',
      id: 395049666,
      media: {
        id: 601,
        type: 'ANIME',
        title: {
          romaji: 'Nekojiru-sou',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b601-mNOmYLLYEPIT.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653047338,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 395049277,
      media: {
        id: 2154,
        type: 'ANIME',
        title: {
          romaji: 'Tekkon Kinkreet',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx2154-R7xZo22O9FjK.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653047238,
      status: 'plans to watch',
      progress: null,
    },
  ],
  [
    {
      __typename: 'ListActivity',
      id: 395049140,
      media: {
        id: 875,
        type: 'ANIME',
        title: {
          romaji: 'Mind Game',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx875-kvQVUKDPcAKl.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653047209,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 395048262,
      media: {
        id: 371,
        type: 'ANIME',
        title: {
          romaji: 'Cardcaptor Sakura Movie',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx371-sdrIzrI5qXl3.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1653046979,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 393428707,
      media: {
        id: 149118,
        type: 'ANIME',
        title: {
          romaji: 'Enen no Shouboutai: San no Shou',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx149118-TvIeHTB1M6nT.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652722929,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 392469039,
      media: {
        id: 140960,
        type: 'ANIME',
        title: {
          romaji: 'SPY×FAMILY',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652549648,
      status: 'watched episode',
      progress: '6',
    },
    {
      __typename: 'ListActivity',
      id: 392397647,
      media: {
        id: 149028,
        type: 'ANIME',
        title: {
          romaji: 'Watashi no Yuri wa Oshigoto desu!',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx149028-S1pML6EoM92Q.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652538075,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 392395109,
      media: {
        id: 133891,
        type: 'ANIME',
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652537624,
      status: 'watched episode',
      progress: '7',
    },
    {
      __typename: 'ListActivity',
      id: 391966287,
      media: {
        id: 116605,
        type: 'ANIME',
        title: {
          romaji: 'Date A Live IV',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx116605-uzDakXnaZ1OW.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652451858,
      status: 'watched episode',
      progress: '6',
    },
    {
      __typename: 'ListActivity',
      id: 391956617,
      media: {
        id: 148969,
        type: 'ANIME',
        title: {
          romaji: 'Kubo-san wa Mob wo Yurusanai',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx148969-GbMxdZGzmRMT.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652449943,
      status: 'plans to watch',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 390431382,
      media: {
        id: 1482,
        type: 'ANIME',
        title: {
          romaji: 'D.Gray-man',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1482-3IT5wm5AK9tF.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652135453,
      status: 'paused watching',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 390431317,
      media: {
        id: 1482,
        type: 'ANIME',
        title: {
          romaji: 'D.Gray-man',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1482-3IT5wm5AK9tF.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652135437,
      status: 'watched episode',
      progress: '18 - 25',
    },
    {
      __typename: 'ListActivity',
      id: 389972087,
      media: {
        id: 1482,
        type: 'ANIME',
        title: {
          romaji: 'D.Gray-man',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1482-3IT5wm5AK9tF.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1652048971,
      status: 'watched episode',
      progress: '14 - 17',
    },
    {
      __typename: 'ListActivity',
      id: 389424646,
      media: {
        id: 1482,
        type: 'ANIME',
        title: {
          romaji: 'D.Gray-man',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1482-3IT5wm5AK9tF.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1651957470,
      status: 'watched episode',
      progress: '8 - 13',
    },
    {
      __typename: 'ListActivity',
      id: 389312641,
      media: {
        id: 140960,
        type: 'ANIME',
        title: {
          romaji: 'SPY×FAMILY',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140960-Yl5M3AiLZAMq.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1651941604,
      status: 'watched episode',
      progress: '5',
    },
    {
      __typename: 'ListActivity',
      id: 389258124,
      media: {
        id: 67109,
        type: 'MANGA',
        title: {
          romaji: 'Yokokuhan',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/37109.jpg',
        },
      },
      type: 'MANGA_LIST',
      createdAt: 1651932633,
      status: 'plans to read',
      progress: null,
    },
    {
      __typename: 'ListActivity',
      id: 389257646,
      media: {
        id: 133891,
        type: 'ANIME',
        title: {
          romaji: 'Love Live! Nijigasaki Gakuen School Idol Doukoukai 2',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx133891-VzjX5rquZqd0.png',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1651932538,
      status: 'watched episode',
      progress: '6',
    },
    {
      __typename: 'ListActivity',
      id: 388970175,
      media: {
        id: 1482,
        type: 'ANIME',
        title: {
          romaji: 'D.Gray-man',
        },
        coverImage: {
          medium:
            'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1482-3IT5wm5AK9tF.jpg',
        },
      },
      type: 'ANIME_LIST',
      createdAt: 1651871827,
      status: 'watched episode',
      progress: '5 - 7',
    },
  ],
]

const media: {
  Media: MediaFull
  Page: {
    pageInfo: PageInfo
    activities: UserActivity[]
  }
} = {
  Media: {
    id: 5597,
    type: 'ANIME',
    title: {
      romaji: 'Natsu no Arashi!',
    },
    coverImage: {
      large:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/5597.jpg',
    },
    bannerImage: null,
    episodes: 13,
  },
  Page: {
    pageInfo: {
      total: 5,
      currentPage: 1,
      lastPage: 1,
      hasNextPage: false,
      perPage: 50,
    },
    activities: [
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
        id: 406614543,
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
        createdAt: 1655245805,
        status: 'watched episode',
        progress: '2 - 4',
      },
      {
        __typename: 'ListActivity',
        id: 406163471,
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
        createdAt: 1655157785,
        status: 'watched episode',
        progress: '1',
      },
      {
        __typename: 'ListActivity',
        id: 110552133,
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
        createdAt: 1234567890,
        status: 'plans to watch',
        progress: null,
      },
    ],
  },
}

export function mockActivities(page: number) {
  return {
    Page: {
      pageInfo: {
        total: 5000,
        currentPage: 1,
        lastPage: 100,
        hasNextPage: true,
        perPage: 50,
      },
      activities: pages[page - 1],
    },
  }
}

export function mockMediaActivities() {
  return media
}
