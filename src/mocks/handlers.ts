import { graphql } from 'msw'

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
]
