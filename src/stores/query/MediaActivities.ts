import { mediaFragment } from './UserActivities'

export const mediaActivitiesQuery = `
${mediaFragment}
query MediaActivities($userId: Int, $mediaId: Int, $page: Int, $perPage: Int) {
  Media(id: $mediaId) {
    id
    title {
      romaji
    }
    coverImage {
      large
    }
    bannerImage
    episodes
  }
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage,
      hasNextPage,
      perPage
    }
    activities(sort: ID_DESC, mediaId: $mediaId, userId: $userId) {
      __typename
      ...Media
    }
  }
}
`
