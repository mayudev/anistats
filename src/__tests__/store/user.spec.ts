import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { mockActivities } from '../../mocks/activities'
import { useUserStore } from '../../stores/user'

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches user information', async () => {
    const user = useUserStore()
    const username = 'testing'

    await user.fetchUser(username)

    expect(user.userData?.name).toBe(username)
    expect(user.userData?.id).toBe(123)
  })

  it('fetches activities', async () => {
    const user = useUserStore()

    user.$patch({
      userData: {
        id: 123,
        name: 'whatever',
        avatar: {},
      },
    })

    const mockPage1 = mockActivities(1)
    const mockPage2 = mockActivities(2)

    // initial fetch
    await user.fetchActivities()

    expect(user.activities).toEqual(mockPage1.Page.activities)
    expect(user.cachedActivities).toEqual(mockPage2.Page.activities)

    // fetch another page
    await user.fetchActivities()

    expect(user.activities).toHaveLength(
      mockPage1.Page.activities.length + mockPage2.Page.activities.length
    )

    expect(user.activities).toEqual(
      mockPage1.Page.activities.concat(mockPage2.Page.activities)
    )

    const mockPage3 = mockActivities(3)

    expect(user.cachedActivities).toEqual(mockPage3.Page.activities)

    // fetch another page
    await user.fetchActivities()

    expect(user.activities).toHaveLength(
      mockPage1.Page.activities.length +
        mockPage2.Page.activities.length +
        mockPage3.Page.activities.length
    )

    const mockPage4 = mockActivities(4)

    expect(user.cachedActivities).toEqual(mockPage4.Page.activities)
  })
})
