import type { Images } from './types'

const userDataQuery = `
  query UserData($username: String) {
    User(name: $username) {
      id
      name
      avatar {
        medium
      }
    }
  }
`

interface UserData {
  id: number
  name: string
  avatar: Images
}

export { userDataQuery, type UserData }
