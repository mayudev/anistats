import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vitest } from 'vitest'
import ActivityDay from '../../components/Overview/ActivityDay.vue'
import type { Day } from '../../stores/helpers/activities'

describe('ActivityDay', () => {
  it('renders date properly', () => {
    const timestamp = new Date(2022, 5, 18).getTime()
    const day: Day = {
      media: [],
      totalEpisodes: 2,
      totalChapters: 10,
    }

    const wrapper = shallowMount(ActivityDay, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
          }),
        ],
      },
      props: {
        timestamp,
        day,
      },
    })

    expect(wrapper.find('.weekday').text()).toBe('Saturday')
    expect(wrapper.find('.date').text()).toBe('6/18/2022')
  })
})
