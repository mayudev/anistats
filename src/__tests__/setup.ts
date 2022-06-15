import { afterAll, beforeAll, vi } from 'vitest'
import fetch from 'node-fetch'
import { server } from '../mocks/server'

vi.mock('@fortawesome/fontawesome-svg-core', () => {
  return {
    findIconDefinition: vi.fn(() => ({
      icon: [1, 2, 3, 'a', 'b'],
    })),
  }
})

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

vi.stubGlobal('fetch', fetch)
