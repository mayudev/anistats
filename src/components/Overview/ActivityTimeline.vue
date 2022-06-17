<script lang="ts" setup>
import type { Day } from '../../stores/helpers/activities'
import ActivityDay from '@/components/Overview/ActivityDay.vue'

defineProps<{
  days: Map<number, Day>
}>()
</script>

<template>
  <div>
    <ActivityDay
      v-for="day in days"
      :key="day[0]"
      :timestamp="day[0]"
      :day="day[1]"
    />
  </div>
</template>
