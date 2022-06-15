import { defineStore } from 'pinia'
import { apiRequest } from './api/api'
import {
  userActivitiesQuery,
  type UserActivitiesResponse,
} from './query/UserActivities'
import { userDataQuery, type UserData } from './query/UserData'

interface Store {
  userData: UserData | null
}

export const useUserStore = defineStore('user', {
  state: (): Store => ({
    userData: null,
  }),
  actions: {
    async fetchUser(username: string) {
      const resp = await apiRequest<UserData, 'User'>(userDataQuery, {
        username,
      })

      this.userData = resp.data.User
    },
    async fetchActivities(page: number) {
      if (!this.userData) throw 's'

      const resp = await apiRequest<UserActivitiesResponse, 'Page'>(
        userActivitiesQuery,
        {
          userId: this.userData?.id,
          page,
          perPage: 50,
          type: 'MEDIA_LIST',
        }
      )

      console.dir(resp)
    },
  },
})
