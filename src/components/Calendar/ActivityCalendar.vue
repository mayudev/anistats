<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue'
import type { Day } from '../../stores/helpers/activities'
import { useUserStore } from '../../stores/user'
import { getActivitiesFromDay } from '../../stores/helpers/calendar'

import CalendarDays from './CalendarDays.vue'
import ActivityDay from '../Overview/ActivityDay.vue'
import CalendarHeader from './CalendarHeader.vue'
import AppModal from '../layout/AppModal.vue'
import ModalBackdrop from '../layout/ModalBackdrop.vue'
import LoadingSpinner from '../layout/LoadingSpinner.vue'
import ErrorMessage from '../layout/ErrorMessage.vue'
import AwesomeButton from '../layout/buttons/AwesomeButton.vue'
import { NoActivitiesError } from '../../stores/query/types'

const user = useUserStore()

defineProps<{
  days: Map<number, Day>
}>()

const popup = reactive<{
  timestamp: number
  day: Day | null
  show: boolean
  loading: boolean
}>({
  timestamp: 0,
  day: null,
  show: false,
  loading: false,
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

const switchYear = (year: number) => {
  state.year = year
}

const showPopup = async (timestamp: number) => {
  const day = user.days.get(timestamp)

  if (day) {
    popup.show = true

    popup.timestamp = timestamp
    popup.day = day
  } else {
    if (timestamp > Date.now() || !user.userData) return
    else {
      popup.show = true
      popup.loading = true
      try {
        const act = await getActivitiesFromDay(
          user.userData.id,
          user.dataset,
          timestamp
        )

        popup.timestamp = timestamp
        popup.day = Array.from(act.values())[0]
      } catch (e: unknown) {
        if (e instanceof NoActivitiesError) {
          console.log('noactivities')
        } else {
          popup.show = false
        }
      }
    }
  }

  popup.loading = false
}

const closePopup = () => {
  popup.show = false
  popup.day = null
  popup.timestamp = 0
}
</script>

<template>
  <div class="calendar">
    <CalendarHeader
      :month="state.month"
      :year="state.year"
      @previous="() => previousMonth()"
      @next="() => nextMonth()"
      @switch="y => switchYear(y)"
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
    <Transition name="backdrop">
      <ModalBackdrop v-if="popup.show" @close="() => closePopup()" />
    </Transition>

    <Transition name="modal">
      <AppModal v-if="popup.show" @close="() => closePopup()">
        <div class="center" v-if="popup.loading">
          <LoadingSpinner :width="24" :border-width="2" />
        </div>
        <ActivityDay
          v-else-if="popup.day"
          :day="popup.day"
          :timestamp="popup.timestamp"
          closeable
          @close="() => closePopup()"
        />
        <div class="center" v-else>
          <ErrorMessage message="No activities found." />
          <AwesomeButton @click="() => closePopup()" icon="xmark" :size="12"
            >Close</AwesomeButton
          >
        </div>
      </AppModal>
    </Transition>
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

.trans .day {
  transition: border-bottom var(--theme-transition);
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0.5rem;
}
</style>
