<script lang="ts" setup>
import { onMounted, reactive, watch } from 'vue'
import { daysInMonth } from '@/lib/days'
import type { Day } from '../../stores/helpers/activities'
import { useUserStore } from '../../stores/user'
import { computed } from '@vue/reactivity'

const user = useUserStore()

const props = defineProps<{
  month: number
  year: number
  days: Map<number, Day>
}>()

const emit = defineEmits<{
  (event: 'popup', timestamp: number): void
}>()

const state = reactive({
  begin: 0,
  beginTimestamp: 0,
  count: 30,
  max: 0,
})

onMounted(() => render())

watch(props, () => {
  render()
})

const render = () => {
  const begin = new Date(props.year, props.month, 1)
  state.beginTimestamp = begin.setHours(12, 0, 0, 0)

  state.begin = begin.getDay() + 1

  const count = daysInMonth(props.month, props.year)
  state.count = count

  state.max = Math.max.apply(
    Math,
    Array.from(props.days.values()).map(x => x.totalEpisodes + x.totalChapters)
  )
}

const relativeTimestamp = (index: number) => {
  return state.beginTimestamp + 86400000 * (index - 1)
}

const total = (index: number): number => {
  const day = props.days.get(relativeTimestamp(index))

  if (!day) return 0

  if (user.dataset === 'anime') return day.totalEpisodes
  else if (user.dataset === 'manga') return day.totalChapters
  else return day.totalEpisodes + day.totalChapters
}

type ActivityDay = {
  index: number
  timestamp: number
  total: number
  disabled: boolean
  future: boolean
}

const timestamps = computed(() => {
  const timestamps: ActivityDay[] = []
  const keys = Array.from(props.days.keys())

  const now = new Date().setHours(24, 0, 0, 0)

  for (let i = 1; i <= state.count; i++) {
    const timestamp = relativeTimestamp(i)
    timestamps.push({
      index: i,
      timestamp,
      total: total(i),
      disabled: timestamp < keys[keys.length - 1] || timestamp > keys[0],
      future: timestamp > now,
    })
  }

  return timestamps
})

const handleClick = (day: ActivityDay) => {
  emit('popup', day.timestamp)
}
</script>

<template>
  <div class="days">
    <div
      class="day"
      v-for="day in timestamps"
      :key="day.index"
      :class="{ 'day-disabled': day.disabled, 'day-future': day.future }"
      :style="day.index === 1 ? { gridColumn: state.begin } : {}"
      @click="() => handleClick(day)"
    >
      <div
        class="day-background"
        :style="{ opacity: day.total / state.max }"
      ></div>
      <span class="day-label"> {{ day.index }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.day {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 8px 12px 6px 12px;
  margin: 2px;
  border-radius: 4px;

  cursor: pointer;
  user-select: none;

  opacity: 0.9;
  transition: transform 0.2s;

  &:not(.day-future):hover {
    opacity: 1;
    transform: scale(1.1);
  }
}

.day-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: var(--color-accent-2);
  border-radius: 4px;
}

.day-label {
  z-index: 1;

  font-weight: 500;
}

.day-disabled {
  opacity: 0.5;
}

.day-future {
  opacity: 0.2;

  cursor: default;
}
</style>
