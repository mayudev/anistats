<script lang="ts" setup>
import type { Day } from '../../stores/helpers/activities'
import ActivityDay from '@/components/Overview/ActivityDay.vue'
import FontAwesomeIcon from '@/components/FontAwesomeIcon.vue'

defineProps<{
  days: Map<number, Day>
}>()
</script>

<template>
  <div v-if="days.size > 0">
    <ActivityDay
      v-for="day in days"
      :key="day[0]"
      :timestamp="day[0]"
      :day="day[1]"
    />
  </div>
  <div class="error" v-else>
    <FontAwesomeIcon icon="triangle-exclamation" :width="32" />
    <span class="error-text">No data found!</span>
    <span class="error-text"
      >Try changing the filters above or loading more data.</span
    >
  </div>
</template>

<style lang="scss" scoped>
.error {
  text-align: center;
}

.error-text {
  display: block;
}
</style>
