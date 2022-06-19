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

const state = reactive({
  begin: 0,
  beginTimestamp: 0,
  count: 30,
  max: 0,
})

onMounted(() => render())

watch(props, () => {
  console.log(`rerender ${props.month}/${props.year}`)
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
</script>

<template>
  <div class="days">
    <div
      class="day"
      v-for="index in state.count"
      :key="index"
      :style="index === 1 ? { gridColumn: state.begin } : {}"
    >
      <div
        class="day-background"
        :style="{ opacity: total(index) / state.max }"
      ></div>
      <span class="day-label"> {{ index }}</span>
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
}

.day-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: var(--color-accent-2);
  border-radius: 3px;
}

.day-label {
  z-index: 1;
}
</style>
