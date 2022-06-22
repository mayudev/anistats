<script lang="ts" setup>
import { useListStore } from '../../stores/list'
import { computed } from '@vue/reactivity'
import { getIconName, mappedFilters } from '../../stores/helpers/list'
import FontAwesomeIcon from '../FontAwesomeIcon.vue'
import { useUserStore } from '../../stores/user'

const list = useListStore()
const user = useUserStore()

const icon = computed(() => {
  return getIconName(list.filter)
})
</script>

<template>
  <div class="container">
    <button class="chooser-button" title="Filter by status...">
      <FontAwesomeIcon :icon="icon" :width="16" />
    </button>
    <div class="dropdown">
      <!-- <ListStatusItem
        v-for="(filter, key, i) in mappedFilters"
        :key="i"
        :icon="getIconName(key)"
      >
        {{
          typeof filter === 'string'
            ? filter
            : user.dataset === 'anime'
            ? filter.anime
            : filter.manga
        }}
      </ListStatusItem> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-right: 1rem;

  position: relative;
}

.dropdown {
  position: absolute;
  margin-top: 0.25rem;

  border-radius: 6px;
  overflow: hidden;

  min-width: 150px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
}

.chooser-button {
  display: block;

  font: inherit;
  outline: none;
  border: none;

  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);
  background: var(--color-background-secondary);
  border-radius: 6px;

  color: inherit;

  display: flex;
  padding: 0 1.4rem;
  height: 100%;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }
}
</style>
