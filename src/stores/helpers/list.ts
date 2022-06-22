import type {
  MediaListCollection,
  MediaListEntry,
  MediaListStatusFilter,
} from '../query/List'

export function processLists(
  collection: MediaListCollection
): MediaListEntry[] {
  const entries = collection.lists
    .filter(list => !list.isCustomList)
    .map(list => list.entries)
    .flat(1)

  return entries
}

export function getIconName(filter: MediaListStatusFilter) {
  switch (filter) {
    case 'ALL':
      return 'asterisk'
    case 'COMPLETED':
      return 'check'
    case 'CURRENT':
      return 'play'
    case 'DROPPED':
      return 'stop'
    case 'PAUSED':
      return 'pause'
    case 'PLANNING':
      return 'clock'
    case 'REPEATING':
      return 'rotate-right'
    default:
      return 'asterisk'
  }
}

export const mappedFilters: Record<
  MediaListStatusFilter,
  | string
  | {
      anime: string
      manga: string
    }
> = {
  ALL: 'All',
  COMPLETED: 'Completed',
  CURRENT: {
    anime: 'Watching',
    manga: 'Reading',
  },
  DROPPED: 'Dropped',
  PAUSED: 'Paused',
  PLANNING: 'Planning',
  REPEATING: {
    anime: 'Rewatching',
    manga: 'Rereading',
  },
}
