import { graphql } from 'msw'
import { mockActivities } from './activities'

export const handlers = [
  graphql.query('UserData', (req, res, ctx) => {
    const { username } = req.variables

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
]
