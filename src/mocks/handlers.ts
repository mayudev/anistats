import { graphql } from 'msw'
import type { MediaType } from '../stores/query/Media'
import { mockActivities, mockMediaActivities } from './activities'
import { mockList } from './lists'

export const handlers = [
  graphql.query('UserData', (req, res, ctx) => {
    const { username } = req.variables

    // return res(ctx.errors([{ message: 'Mock error' }]))

    return res(
      ctx.data({
        User: {
          id: 123,
          name: username,
          avatar: {
            medium: '',
          },
        },
      })
    )
  }),

  graphql.query('UserActivities', (req, res, ctx) => {
    const { page } = req.variables
    return res(ctx.data(mockActivities(page)))
  }),

  graphql.query('MediaActivities', (req, res, ctx) => {
    return res(ctx.data(mockMediaActivities()))
  }),

  graphql.query('MediaList', (req, res, ctx) => {
    const { type } = req.variables as { type: MediaType }

    return res(ctx.data(mockList(type)))
  }),
]
