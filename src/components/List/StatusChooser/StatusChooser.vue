<script lang="ts" setup>
import { mappedFilters, getIconName } from '../../../stores/helpers/list'
import { useListStore } from '../../../stores/list'
import type { MediaListStatusFilter } from '../../../stores/query/List'
import { useUserStore } from '../../../stores/user'

const user = useUserStore()
const list = useListStore()

defineEmits<{
  (event: 'pick', filter: MediaListStatusFilter): void
}>()
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
  overflow-x: scroll;
  margin: 0.5rem;
}

.status {
  display: flex;
  justify-content: space-between;

  align-items: center;

  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 400;

  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-accent);
  }
}

.trans .status-selected {
  transition: var(--theme-transition);
}

.status-selected {
  background: var(--color-background-secondary);
  color: var(--color-accent);
}
</style>
