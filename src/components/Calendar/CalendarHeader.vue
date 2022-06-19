<script lang="ts" setup>
import FontAwesomeIcon from '../FontAwesomeIcon.vue'
import { months } from '../../lib/days'

const props = defineProps<{
  month: number
  year: number
}>()

const emit = defineEmits<{
  (event: 'previous'): void
  (event: 'next'): void
}>()
</script>

<template>
  <div class="header">
    <div class="header-text">Calendar</div>
    <span style="flex: 1" />
    <div class="header-month">{{ months[month] }} {{ year }}</div>
    <button
      class="header-control"
      @click="() => emit('previous')"
      title="Previous month"
    >
      <FontAwesomeIcon icon="angle-left" :width="9" />
    </button>
    <button
      class="header-control"
      @click="() => emit('next')"
      title="Next month"
    >
      <FontAwesomeIcon icon="angle-right" :width="9" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: var(--color-background-secondary);
  border-radius: 6px;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  transition: background var(--theme-transition);
  font-weight: 500;
}

.header-text {
  font-size: 1.2rem;
}

.header-control {
  background: inherit;
  color: inherit;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 1rem;
  transition: color 0.2s, background var(--theme-transition);
  cursor: pointer;

  &:first-of-type {
    margin-left: 1rem;
  }

  &:hover {
    color: var(--color-accent);
  }
}

.header-month {
  font-size: 1rem;
}
</style>
