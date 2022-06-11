import { describe, expect, it, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import HomeView from '../../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('HomeView', () => {
  it('renders spinner on loading', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
            stubActions: false,
          }),
          router,
        ],
      },
    })

    const input = wrapper.find('input')
    await input.setValue('username')

    expect(input.element.value).toBe('username')

    input.trigger('keyup.enter')

    await nextTick()
    wrapper.get('.spinner')
  })
})
