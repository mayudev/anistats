import { setupServer } from 'msw/node'
import { handlers } from '../mocks/handlers'
import { afterAll, beforeAll, vi } from 'vitest'

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

vi.mock('@fortawesome/fontawesome-svg-core', () => {
  return {
    findIconDefinition: vi.fn(() => ({
      icon: [1, 2, 3, 'a', 'b'],
    })),
  }
})
