import { afterAll, beforeAll, vi } from 'vitest'
import fetch from 'node-fetch'
import { server } from '../mocks/server'

vi.mock('@fortawesome/fontawesome-svg-core', () => {
  return {
    library: {
      add: vi.fn(() => void 0),
    },
    findIconDefinition: vi.fn(() => ({
      icon: [1, 2, 3, 'a', 'b'],
    })),
  }
})

vi.mock('../mocks/browser.ts', () => {
  return {
    setupWorker: vi.fn(() => void 0),
  }
})

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

vi.stubGlobal('fetch', fetch)
