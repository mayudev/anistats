import { defineStore } from 'pinia'
import { fetchList } from './api/list'
import { processLists } from './helpers/list'
import type { MediaListEntry } from './query/List'
import type { MediaType } from './query/Media'
import { useUserStore } from './user'

type Status = 'idle' | 'busy' | 'error'

interface Store {
  animeList: MediaListEntry[]
  mangaList: MediaListEntry[]

  status: Status
}

export const useListStore = defineStore('list', {
  state: (): Store => ({
    animeList: [],
    mangaList: [],

    status: 'idle',
  }),

  actions: {
    async fetchMediaList(type: MediaType) {
      const user = useUserStore()

      if (!user.userData) {
        this.status = 'error'
        return
      }

      this.status = 'busy'

      const lists = await fetchList(user.userData.id, type)

      const entries = processLists(lists)

      console.dir(entries)
    },
  },
})
