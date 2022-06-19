<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue'
import type { Day } from '../../stores/helpers/activities'
import { useUserStore } from '../../stores/user'
import CalendarDays from './CalendarDays.vue'

import ActivityDay from '../Overview/ActivityDay.vue'
import CalendarHeader from './CalendarHeader.vue'

const user = useUserStore()

defineProps<{
  days: Map<number, Day>
}>()

const popup = reactive<{
  timestamp: number
  day: Day | null
}>({
  timestamp: 0,
  day: null,
})

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

const showPopup = (timestamp: number) => {
  const day = user.days.get(timestamp)

  if (day) {
    popup.timestamp = timestamp
    popup.day = day
  }
}
</script>

<template>
  <div class="calendar">
    <CalendarHeader
      :month="state.month"
      :year="state.year"
      @previous="() => previousMonth()"
      @next="() => nextMonth()"
    />
    <div class="days">
      <div class="day">Sun</div>
      <div class="day">Mon</div>
      <div class="day">Tue</div>
      <div class="day">Wed</div>
      <div class="day">Thu</div>
      <div class="day">Fri</div>
      <div class="day">Sat</div>
    </div>
    <CalendarDays
      :month="state.month"
      :year="state.year"
      :days="days"
      @popup="timestamp => showPopup(timestamp)"
    />
    <div v-if="popup.day && popup.timestamp">
      <ActivityDay :day="popup.day" :timestamp="popup.timestamp" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
