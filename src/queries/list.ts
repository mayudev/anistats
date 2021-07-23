// listQuery: returns all user's lists containing anime or manga.
export const listQuery: string = `query ($userId: Int, $type: MediaType, $chunk: Int) {
    MediaListCollection (userId: $userId, type: $type, chunk: $chunk) {
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
                type
                bannerImage
                coverImage {
                  medium
                }
                averageScore
                seasonYear
                title {
                  romaji
                }
                format
                episodes
                chapters
              }
            }
          }
        }
      }`;
