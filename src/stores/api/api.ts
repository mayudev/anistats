import type { Response } from '../query/types'

type Variables = {
  [k: string]: string | number
}

const API_URL = 'https://graphql.anilist.co'

export async function apiRequest<T, K extends string>(
  query: string,
  variables: Variables
): Promise<Response<T, K>> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw response.status
  }

  const result = await response.json()
  return result
}
