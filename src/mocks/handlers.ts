import { graphql, HttpResponse } from 'msw'
import type { MediaType } from '../stores/query/Media'
import { mockActivities, mockMediaActivities } from './activities'
import { mockList } from './lists'

export const handlers = [
  graphql.query('UserData', ({ variables }) => {
    const { username } = variables

    // return res(ctx.errors([{ message: 'Mock error' }]))

    return HttpResponse.json({
      data: {
        User: {
          id: 123,
          name: username,
          avatar: {
            medium: '/favicon.png',
          },
        },
      },
    })
  }),

  graphql.query('UserActivities', ({ variables }) => {
    const { page } = variables
    return HttpResponse.json({ data: mockActivities(page) })
  }),

  graphql.query('MediaActivities', ({ variables }) => {
    return HttpResponse.json({ data: mockMediaActivities() })
  }),

  graphql.query('MediaList', ({ variables }) => {
    const { type } = variables as { type: MediaType }

    return HttpResponse.json({ data: mockList(type) })
  }),
]
