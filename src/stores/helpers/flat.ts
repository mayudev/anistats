import type { MediaDiff } from './activities'

export function flattenMedia(mediaArray: MediaDiff[]): MediaDiff[] {
  const flattened: MediaDiff[] = []

  for (const media of mediaArray) {
    const existing = flattened.find(m => m.id === media.id)

    if (existing) {
      existing.progress += media.progress
    } else {
      flattened.push(media)
    }
  }

  return flattened
}
