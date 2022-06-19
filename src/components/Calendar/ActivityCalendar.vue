<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue'
import type { Day } from '../../stores/helpers/activities'
import { useUserStore } from '../../stores/user'
import CalendarDays from './CalendarDays.vue'
import FontAwesomeIcon from '../FontAwesomeIcon.vue'
import { months } from '../../lib/days'

const user = useUserStore()

const props = defineProps<{
  days: Map<number, Day>
}>()

const state = reactive({
  month: 5,
  year: 2022,
})

onBeforeMount(() => {
  const now = new Date()
  state.month = now.getMonth()
  state.year = now.getFullYear()
})

const previousMonth = () => {
  if (state.month === 0) {
    state.month = 11
    state.year--
  } else {
    state.month--
  }
}

const nextMonth = () => {
  if (state.month === 11) {
    state.month = 0
    state.year++
  } else {
    state.month++
  }
}
</script>

<template>
  <div class="calendar">
    <div class="header">
      <div class="header-text">Calendar</div>
      <span style="flex: 1" />
      <div class="header-month">{{ months[state.month] }} {{ state.year }}</div>
      <button
        class="header-control"
        @click="() => previousMonth()"
        title="Previous month"
      >
        <FontAwesomeIcon icon="angle-left" :width="9" />
      </button>
      <button
        class="header-control"
        @click="() => nextMonth()"
        title="Next month"
      >
        <FontAwesomeIcon icon="angle-right" :width="9" />
      </button>
    </div>
    <div class="days">
      <div class="day">Sun</div>
      <div class="day">Mon</div>
      <div class="day">Tue</div>
      <div class="day">Wed</div>
      <div class="day">Thu</div>
      <div class="day">Fri</div>
      <div class="day">Sat</div>
    </div>
    <CalendarDays :month="state.month" :year="state.year" :days="days" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: var(--color-background-secondary);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  display: flex;
  align-items: center;

  transition: background var(--theme-transition);
}

.header-text {
  font-weight: 500;
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

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 0.25rem;
  font-size: 0.96rem;
}

.day {
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid var(--color-background-border);
  padding: 0.75rem;
}
</style>
