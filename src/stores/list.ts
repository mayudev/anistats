import { defineStore } from 'pinia'
import { fetchList } from './api/list'
import { processLists } from './helpers/list'
import type { MediaListEntry, MediaListStatus } from './query/List'
import type { MediaType } from './query/Media'
import { useUserStore } from './user'

type Status = 'idle' | 'busy' | 'error'

interface Store {
  animeList: MediaListEntry[]
  mangaList: MediaListEntry[]

  status: Status
  filter: MediaListStatus | 'ALL'

  page: number
  listLength: number
}

const pageSize = 5

export const useListStore = defineStore('list', {
  state: (): Store => ({
    animeList: [],
    mangaList: [],

    status: 'idle',
    filter: 'CURRENT',

    page: 0,
    listLength: 0,
  }),
  getters: {
    list: state => {
      const user = useUserStore()

      let list
      if (user.dataset === 'anime') list = state.animeList
      else if (user.dataset === 'manga') list = state.mangaList
      else return []

      list = list
        .filter(entry => entry.status === state.filter)
        .sort((a, b) =>
          a.media.title.romaji.localeCompare(b.media.title.romaji)
        )

      state.listLength = list.length

      return list.slice(0, pageSize + state.page * pageSize)
    },
  },
  actions: {
    switchStatusFilter(filter: MediaListStatus) {
      this.resetPage()
      this.filter = filter
    },
    resetPage() {
      this.page = 0
    },
    nextPage() {
      if (this.page > this.listLength / pageSize) return
      this.page++
    },
    async fetchMediaList(type: MediaType) {
      const user = useUserStore()

      if (!user.userData) {
        this.status = 'error'
        return
      }

      this.status = 'busy'

      const lists = await fetchList(user.userData.id, type)

      const entries = processLists(lists)

      if (type === 'ANIME') this.animeList = entries
      else this.mangaList = entries

      this.status = 'idle'
    },
  },
})
