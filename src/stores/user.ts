import { defineStore } from 'pinia'
import { fetchActivities } from './api/activities'
import { apiRequest } from './api/api'
import { parseActivities } from './helpers/activities'
import type { UserActivity } from './query/UserActivities'
import { userDataQuery, type UserData } from './query/UserData'

type Dataset = 'both' | 'anime' | 'manga'

interface Store {
  userData: UserData | null
  dataset: Dataset
  currentPage: number
  activities: UserActivity[]
  cachedActivities: UserActivity[]
}

export const useUserStore = defineStore('user', {
  state: (): Store => ({
    userData: null,
    dataset: 'both',

    currentPage: 1,
    activities: [],
    cachedActivities: [],
  }),
  getters: {
    days: state => {
      const days = parseActivities(state.activities)

      return days
    },
  },
  actions: {
    switchDataset(dataset: Dataset) {
      this.dataset = dataset
    },
    async fetchUser(username: string) {
      const resp = await apiRequest<UserData, 'User'>(userDataQuery, {
        username,
      })

      this.userData = resp.data.User
    },
    async fetchActivities() {
      if (!this.userData) throw 'No user data'

      // Initial fetch
      if (this.currentPage === 1) {
        const initial = await fetchActivities(this.userData.id, 1)
        this.activities = initial.activities

        const cached = await fetchActivities(this.userData.id, 2)
        this.cachedActivities = cached.activities

        this.currentPage += 2
      } else {
        this.activities = this.activities.concat(this.cachedActivities)

        const newActivities = await fetchActivities(
          this.userData.id,
          this.currentPage
        )

        this.cachedActivities = newActivities.activities

        this.currentPage++
      }
    },
  },
})
