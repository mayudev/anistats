// listQuery: returns all user's lists containing anime or manga.
export const listQuery: string = `query ($id: Int, $type: MediaType, $chunk: Int) {
    MediaListCollection (userId: $id, type: $type, chunk: $chunk) {
        lists {
            name
            isCustomList
            entries {
              id
              status
              progress
              createdAt
              startedAt {
                year
                month
                day
              }
              completedAt {
                year
                month
                day
              }
              media {
                id
                coverImage {
                  medium
                }
                averageScore
                bannerImage
                seasonYear
                title {
                  romaji
                }
                format
                episodes
              }
            }
          }
        }
      }`;
