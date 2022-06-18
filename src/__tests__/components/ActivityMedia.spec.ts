import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ActivityMedia from '../../components/Overview/ActivityMedia.vue'
import type { MediaDiff } from '../../stores/helpers/activities'

describe('ActivityMedia', () => {
  it('renders media properly', () => {
    const media: MediaDiff = {
      id: 20,
      title: {
        romaji: 'SPYxFAMILY',
      },
      coverImage: {
        medium: 'dummy',
      },
      progress: 10,
      type: 'ANIME',
    }

    const wrapper = shallowMount(ActivityMedia, {
      props: { media },
    })

    expect(wrapper.get('img').attributes()['src']).toBe('dummy')
    expect(wrapper.get('.item-title').text()).toBe('SPYxFAMILY')
  })
})
