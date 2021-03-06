import { defineStore } from 'pinia'
import { fetchActivities } from './api/activities'
import { apiRequest } from './api/api'
import { parseActivities, parseActivitiesForOneDay } from './helpers/activities'
import { flattenMedia } from './helpers/flat'
import { NoActivitiesError } from './query/types'
import type { UserActivity } from './query/UserActivities'
import { userDataQuery, type UserData } from './query/UserData'

export type Dataset = 'both' | 'anime' | 'manga'

interface Store {
  userData: UserData | null
  dataset: Dataset
  boundaryHour: number

  busy: boolean
  finished: boolean

  currentPage: number
  activities: UserActivity[]
  cachedActivities: UserActivity[]
}

export const useUserStore = defineStore('user', {
  state: (): Store => ({
    userData: null,
    dataset: 'both',
    boundaryHour: 3,

    busy: false,
    finished: false,

    currentPage: 1,
    activities: [],
    cachedActivities: [],
  }),
  getters: {
    days: state => {
      const days = parseActivities(state.activities, state.dataset)

      const keys = Array.from(days.keys())
      const lastDayKey = keys[keys.length - 1]

      if (state.cachedActivities) {
        const lookahead = parseActivitiesForOneDay(
          state.cachedActivities,
          lastDayKey,
          state.dataset
        )

        if (lookahead.media.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const lastDay = days.get(lastDayKey)!
          lastDay.totalEpisodes += lookahead.totalEpisodes
          lastDay.media = flattenMedia(lastDay.media.concat(lookahead.media))
        }
      }

      return days
    },
    lastDayTimestamp: state => {
      const timestamp = new Date(
        state.activities[state.activities.length - 1].createdAt * 1000
      )

      if (timestamp.getHours() < state.boundaryHour) {
        timestamp.setDate(timestamp.getDate() - 1)
      }

      return timestamp
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

      if (this.busy) return
      this.busy = true

      // Initial fetch
      if (this.currentPage === 1) {
        const initial = await fetchActivities(this.userData.id, 1)

        if (initial.activities.length === 0) {
          throw new NoActivitiesError()
        }

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

        if (
          !newActivities.activities ||
          newActivities.activities.length === 0
        ) {
          this.finished = true
          return
        }

        this.cachedActivities = newActivities.activities

        this.currentPage++
      }

      this.busy = false
    },
  },
})
