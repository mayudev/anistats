<script lang="ts" setup>
import type { Day } from '../../stores/helpers/activities'
import ActivityDay from '@/components/Overview/ActivityDay.vue'
import ErrorMessage from '../layout/ErrorMessage.vue'
import { useUserStore } from '../../stores/user'
import LoadMoreButton from '../layout/buttons/LoadMoreButton.vue'

defineProps<{
  days: Map<number, Day>
}>()

const user = useUserStore()
</script>

<template>
  <div v-if="days.size > 0">
    <ActivityDay
      v-for="day in days"
      :key="day[0]"
      :timestamp="day[0]"
      :day="day[1]"
    />
    <div class="button">
      <LoadMoreButton
        @click="() => user.fetchActivities()"
        v-if="!user.finished"
      ></LoadMoreButton>
    </div>
  </div>
  <ErrorMessage
    v-else
    message="No data found!"
    message2="Try changing the filters above or loading more data."
  />
</template>

<style lang="scss">
.error {
  text-align: center;
}

.error-text {
  display: block;
}

.button {
  display: flex;
  justify-content: center;
}
</style>
