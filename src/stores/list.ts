import { defineStore } from 'pinia'
import { fetchList } from './api/list'
import { processLists } from './helpers/list'
import type { MediaListEntry, MediaListStatusFilter } from './query/List'
import type { MediaType } from './query/Media'
import { useUserStore } from './user'

type Status = 'idle' | 'busy' | 'error'

interface Store {
  animeList: MediaListEntry[]
  mangaList: MediaListEntry[]

  status: Status
  filter: MediaListStatusFilter
  query: string

  page: number
  hasNextPage: boolean
}

const pageSize = 5

export const useListStore = defineStore('list', {
  state: (): Store => ({
    animeList: [],
    mangaList: [],

    status: 'idle',
    filter: 'ALL',
    query: '',

    page: 0,
    hasNextPage: false,
  }),
  getters: {
    list: state => {
      const user = useUserStore()

      // Pick relevant list
      let list
      if (user.dataset === 'anime') list = state.animeList
      else if (user.dataset === 'manga') list = state.mangaList
      else return []

      // Filter status
      if (state.filter !== 'ALL') {
        list = list.filter(entry => entry.status === state.filter)
      }

      // Filter by search query and sort
      list = list
        .filter(
          entry =>
            entry.media.title.romaji.toLowerCase().indexOf(state.query) > -1
        )
        .sort((a, b) =>
          a.media.title.romaji.localeCompare(b.media.title.romaji)
        )

      const itemCount = pageSize + state.page * pageSize
      state.hasNextPage = list.length > itemCount

      return list.slice(0, itemCount)
    },
  },
  actions: {
    switchStatusFilter(filter: MediaListStatusFilter) {
      this.resetPage()
      this.filter = filter
    },
    resetPage() {
      this.page = 0
    },
    nextPage() {
      if (!this.hasNextPage) return
      this.page++
    },
    setSearchQuery(query: string) {
      this.query = query.toLowerCase()
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
