import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UsernameInput from '../../components/Home/UsernameInput.vue'

describe('UsernameInput', () => {
  it('renders properly and triggers an event on enter key', async () => {
    const wrapper = shallowMount(UsernameInput)
    const input = wrapper.find('input')

    await input.setValue('username')

    expect(input.element.value).toBe('username')

    input.trigger('keyup.enter')

    expect(wrapper.emitted()).toHaveProperty('submit')
  })

  it('triggers an error on incorrect input', async () => {
    const wrapper = shallowMount(UsernameInput)
    const input = wrapper.find('input')

    input.trigger('keyup.enter')

    expect(wrapper.emitted()).toHaveProperty('errored')
  })
})
