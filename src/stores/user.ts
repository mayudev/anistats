import { defineStore } from 'pinia'
import { apiRequest } from './api/api'
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
  },
})
