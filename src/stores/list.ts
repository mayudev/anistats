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
  filter: MediaListStatus
}

export const useListStore = defineStore('list', {
  state: (): Store => ({
    animeList: [],
    mangaList: [],

    status: 'idle',
    filter: 'CURRENT',
  }),
  getters: {
    list: state => {
      const user = useUserStore()

      let list
      if (user.dataset === 'anime') list = state.animeList
      else if (user.dataset === 'manga') list = state.mangaList
      else return []

      return list
        .filter(entry => entry.status === state.filter)
        .sort((a, b) =>
          a.media.title.romaji.localeCompare(b.media.title.romaji)
        )
        .slice(0, 20)
    },
  },
  actions: {
    switchStatusFilter(filter: MediaListStatus) {
      this.filter = filter
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
