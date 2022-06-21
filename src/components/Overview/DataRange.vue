<script lang="ts" setup>
import { displayDate } from '../../lib/days'
import { useUserStore } from '../../stores/user'
import AwesomeButton from '../layout/buttons/AwesomeButton.vue'

const user = useUserStore()

defineProps<{
  timestamp: Date
}>()
</script>

<template>
  <div class="range">
    <span class="range-title">Data range</span>
    <span style="flex: 1" />
    <span class="range-text">{{ displayDate(timestamp) }} - today</span>
    <AwesomeButton
      v-if="!user.finished"
      @click="() => user.fetchActivities()"
      icon="arrows-rotate"
      >Load more</AwesomeButton
    >
  </div>
</template>

<style lang="scss" scoped>
.range {
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  padding: 0 0.5rem;
  margin-bottom: 12px;
  border-radius: 6px;
}

.range-title {
  font-weight: 500;
}

.range-text {
  margin-right: 0.5rem;
}
</style>
