<script lang="ts" setup>
import { mappedFilters, getIconName } from '../../../stores/helpers/list'
import { useListStore } from '../../../stores/list'
import type { MediaListStatusFilter } from '../../../stores/query/List'
import { useUserStore } from '../../../stores/user'
import FontAwesomeIcon from '../../FontAwesomeIcon.vue'

const user = useUserStore()
const list = useListStore()

defineEmits<{
  (event: 'pick', filter: MediaListStatusFilter): void
}>()

const fixSize = (filter: MediaListStatusFilter) => {
  if (filter === 'PAUSED') return 13
  else if (
    filter === 'PLANNING' ||
    filter === 'REPEATING' ||
    filter === 'COMPLETED'
  )
    return 18
  else return 16
}
</script>

<template>
  <div class="chooser">
    <div
      class="status"
      v-for="(value, key, i) in mappedFilters"
      :key="i"
      :class="{ 'status-selected': list.filter === key }"
      @click="$emit('pick', key)"
    >
      <FontAwesomeIcon :icon="getIconName(key)" :width="fixSize(key)" />
      <span class="status-text">
        {{
          typeof value === 'string'
            ? value
            : user.dataset === 'anime'
            ? value.anime
            : value.manga
        }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chooser {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.status {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;

  padding: 0.5rem 1rem 0.3rem 1rem;
  border-radius: 6px;

  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-accent);
  }
}

.status-text {
  padding-top: 0.2rem;
}

.status-selected {
  font-weight: 500;
  color: var(--color-accent);
}
</style>
