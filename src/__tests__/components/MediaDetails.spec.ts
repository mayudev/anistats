import { createTestingPinia } from '@pinia/testing'
import { flushPromises, shallowMount } from '@vue/test-utils'
import { describe, it, vitest } from 'vitest'
import MediaDetails from '../../components/Overview/MediaDetails.vue'
import type { MediaDiff } from '../../stores/helpers/activities'

describe('MediaDetails', () => {
  it('renders properly', async () => {
    const media: MediaDiff = {
      id: 123,
      coverImage: {},
      progress: 1,
      title: {
        romaji: 'Natsu no Arashi!',
      },
      type: 'ANIME',
    }

    const wrapper = shallowMount(MediaDetails, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
            initialState: {
              user: {
                userData: {
                  id: 123,
                },
              },
            },
          }),
        ],
      },
      props: {
        media,
      },
    })

    await flushPromises()

    // No idea
  })
})
