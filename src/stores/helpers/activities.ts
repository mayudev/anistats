import type { Media } from '../query/Media'
import type { UserActivity } from '../query/UserActivities'

export interface Day {
  media: MediaDiff[]
  totalEpisodes: number
  totalChapters: number
}

interface MediaDiff extends Media {
  progress: number
}

export function parseActivities(activities: UserActivity[]): Map<number, Day> {
  const days: Map<number, Day> = new Map()

  for (const activity of activities) {
    const timestamp = new Date(activity.createdAt * 1000)

    if (shouldBePreviousDay(timestamp.getHours(), 3)) {
      // f.e 28/09/2021 2:00
      timestamp.setDate(timestamp.getDate() - 1) // => 27/09/2021
    }

    // Set timestamp to 12 PM on a particular day to make all
    // activites from a day have the same hour
    const dayTimestamp = timestamp.setHours(12, 0, 0, 0)

    const progress = parseStatus(activity.status, activity.progress)

    if (days.has(dayTimestamp)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const day = days.get(dayTimestamp)!
      day.totalEpisodes += progress.diff || 0

      const existingMedia = day.media.find(
        media => media.id === activity.media.id
      )
      if (existingMedia) {
        existingMedia.progress += progress.diff || 0
      } else {
        day.media.push({
          ...activity.media,
          progress: progress.diff || 0,
        })
      }
    } else {
      days.set(dayTimestamp, {
        totalEpisodes: progress.diff || 0,
        totalChapters: 0,
        media: [
          {
            ...activity.media,
            progress: progress.diff || 0,
          },
        ],
      })
    }
  }

  return days
}

/**
 * shouldBePreviousDay accounts for late night activities.
 * For example, if the beginning of day is set to 3 AM,
 * activities that took place at 2 AM should be appended
 * to the previous day.
 *
 * @param hour Hour of the activity
 * @param boundaryHour Hour set as "the beginning of day"
 * @returns if activity should be considered as from the previous day
 */
function shouldBePreviousDay(hour: number, boundaryHour: number): boolean {
  return hour < boundaryHour
}

type Status = 'progress' | 'completed' | 'planning' | 'unknown'

type Progress = {
  status: Status
  diff: number | null
}

/**
 * parses activity status + progress and returns a Progress object
 * @param status Status name string
 * @param progress Progress string
 * @returns Parsed Progress object
 */
function parseStatus(status: string, progress: string | null): Progress {
  let range: string[] | undefined

  switch (status) {
    case 'watched episode':
    case 'rewatched episode':
    case 'read chapter':
    case 'reread chapter':
      range = progress?.split(' - ')
      if (range?.length === 2) {
        const diff = parseInt(range[1]) - parseInt(range[0]) + 1
        return {
          status: 'progress',
          diff,
        }
      } else {
        return {
          status: 'progress',
          diff: 1,
        }
      }
    case 'completed':
    case 'rewatched':
      return {
        status: 'completed',
        diff: 1,
      }
    default:
      return {
        status: 'unknown',
        diff: null,
      }
  }
}
