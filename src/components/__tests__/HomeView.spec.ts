import { describe, it, vitest, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from '../../stores/counter'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
          }),
        ],
      },
    })

    const store = useCounterStore()

    store.increment()
    store.increment()
    store.increment()
    store.increment()

    expect(store.increment).toHaveBeenCalledTimes(4)

    expect(wrapper.text()).toContain(store.counter)
  })
})
