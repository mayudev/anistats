import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).__mswStop = worker.stop
