<script lang="ts" setup>
import { ref } from 'vue'
import FontAwesomeIcon from '../FontAwesomeIcon.vue'
import { months } from '../../lib/days'
import { computed } from '@vue/reactivity'

const showPicker = ref(true)

defineProps<{
  month: number
  year: number
}>()

const emit = defineEmits<{
  (event: 'previous'): void
  (event: 'next'): void
  (event: 'switch', to: number): void
}>()

const years = computed(() => {
  const year = new Date().getFullYear()
  return [year - 3, year - 2, year - 1, year]
})

const toggleYearPicker = () => {
  showPicker.value = !showPicker.value
}

const switchYear = (year: number) => {
  emit('switch', year)
}
</script>

<template>
  <div class="header">
    <div class="header-text">Calendar</div>
    <span style="flex: 1" />
    <span class="header-month">{{ months[month] }}</span>
    <span>&nbsp;</span>
    <span
      class="header-year"
      @click="() => toggleYearPicker()"
      title="Click to pick year"
      >{{ year }}</span
    >
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
  <Transition name="picker">
    <div class="picker" v-if="showPicker">
      <div
        class="picker-year"
        v-for="y in years"
        :key="y"
        :class="{ 'picker-active': year === y }"
        @click="() => switchYear(y)"
      >
        {{ y }}
      </div>
    </div>
  </Transition>
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

  z-index: 2;
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

.header-year {
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }
}

.picker {
  display: flex;
}

.picker-year {
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 6px;
  font-weight: 500;

  flex-grow: 1;
  text-align: center;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--color-background-secondary);
  }
}

.picker-active {
  background: var(--color-background-secondary);
  color: var(--color-accent);
}

// Transition
.picker-enter-from,
.picker-leave-to {
  margin-top: -50px;
  opacity: 0;
}

.picker-enter-active,
.picker-leave-active {
  transition: 0.2s ease;
}
</style>
