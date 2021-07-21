// Returns information about one entry (anime/manga), along with user's activities connected with it.
export const mediaQuery: string = `query ($userId: Int, $mediaId: Int, $page: Int, $perPage: Int) {
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
        lastPage
        hasNextPage
        perPage
      }
      activities(sort: ID_DESC, mediaId: $mediaId, userId: $userId) {
        __typename
        ... on ListActivity {
          id
          media {
            id
            type
            title {
              romaji
            }
            coverImage {
              medium
            }
          }
          type
          createdAt
          status
          progress
        }
      }
    }
  }
  `