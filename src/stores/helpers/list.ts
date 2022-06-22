import type { MediaListCollection, MediaListEntry } from '../query/List'

export function processLists(
  collection: MediaListCollection
): MediaListEntry[] {
  const entries = collection.lists
    .filter(list => !list.isCustomList)
    .map(list => list.entries)
    .flat(1)

  return entries
}
