<script lang="ts" setup>
import { useListStore } from '@/stores/list'
import { computed } from '@vue/reactivity'
import { getIconName } from '@/stores/helpers/list'
import FontAwesomeIcon from '@/components/FontAwesomeIcon.vue'

const list = useListStore()

defineEmits<{
  (event: 'click'): void
}>()

const icon = computed(() => {
  return getIconName(list.filter)
})
</script>

<template>
  <div class="container">
    <button
      class="chooser-button"
      title="Filter by status..."
      @click="$emit('click')"
    >
      <FontAwesomeIcon :icon="icon" :width="16" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-right: 1rem;

  position: relative;
}

.chooser-button {
  font: inherit;
  outline: none;
  border: none;

  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);
  background: var(--color-background-secondary);
  border-radius: 6px;

  color: inherit;

  display: flex;
  align-items: center;
  padding: 0 1.4rem;
  height: 100%;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }
}
</style>
