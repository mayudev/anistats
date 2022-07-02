<script lang="ts" setup>
import type { MediaListEntry, MediaListStatus } from '../../stores/query/List'
import { displayDate, displayFuzzyDate } from '../../lib/days'
import type { MediaEntry, MediaFormat } from '../../stores/query/Media'

defineProps<{
  list: MediaListEntry[]
}>()

const emit = defineEmits<{
  (event: 'pick', media: MediaEntry): void
}>()

const leave: MediaFormat[] = ['TV', 'ONA', 'OVA']
const displayFormat = (format: MediaFormat | null) => {
  if (!format) return ''

  if (format === 'TV_SHORT') return 'TV Short'
  if (format === 'ONE_SHOT') return 'One Shot'

  if (leave.indexOf(format) > -1) return format
  else return format[0].toUpperCase() + format.slice(1).toLowerCase()
}

const displayStatus = (status: MediaListStatus) => {
  return status[0].toUpperCase() + status.slice(1).toLowerCase()
}

const pickMedia = (media: MediaEntry) => {
  emit('pick', media)
}
</script>

<template>
  <table cellspacing="0">
    <thead>
      <th class="table-header table-header-title">Title</th>
      <th class="table-header">Type</th>
      <th class="table-header table-responsive-second">Added</th>
      <th class="table-header table-responsive">Completed</th>
      <th class="table-header table-responsive-second">Status</th>
    </thead>
    <tbody>
      <tr
        v-for="entry in list"
        :key="entry.id"
        class="table-row"
        @click="pickMedia(entry.media)"
      >
        <td class="table-data table-title">
          <img
            loading="lazy"
            class="table-image"
            :src="entry.media.coverImage.medium"
            width="24"
            height="24"
          />
          {{ entry.media.title.romaji }}
        </td>
        <td class="table-data">
          {{ displayFormat(entry.media.format) }}
        </td>
        <td class="table-data table-responsive-second">
          {{
            entry.createdAt === 0
              ? 'Unknown'
              : displayDate(new Date(entry.createdAt * 1000))
          }}
        </td>
        <td class="table-data table-responsive">
          {{ displayFuzzyDate(entry.completedAt) }}
        </td>
        <td class="table-data table-responsive-second">
          {{ displayStatus(entry.status) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
}
.table-row {
  cursor: pointer;
  transition: 0.2s;

  &:nth-child(even) {
    background: var(--color-background-secondary);
  }
  &:hover {
    color: var(--color-accent);
  }
}

.trans .table-row,
.table-header,
.table-data {
  transition: var(--theme-transition);
}

.table-header,
.table-data {
  border-bottom: 1px solid var(--color-background-secondary);
  padding: 0.5rem 0.1rem;
}

.table-title {
  display: flex;
  align-items: center;

  width: 100%;

  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
}

.table-image {
  min-width: 24px;
  width: 24px;
  height: 24px;

  margin: 0 0.75rem;
  border-radius: 6px;
  object-fit: cover;
}

.table-data:not(.table-title) {
  text-align: center;
}

.table-header {
  font-weight: 500;
}

.table-header-title {
  padding-left: 0.75rem;

  text-align: left;
  width: 100%;
}

.table-data:not(.table-title),
.table-header {
  min-width: 100px;
}

@media (max-width: 700px) {
  .table-responsive-second {
    display: none;
  }
}

@media (max-width: 600px) {
  .table-responsive {
    display: none;
  }
}
</style>
