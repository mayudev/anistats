<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import ActivityTimeline from '@/components/Overview/ActivityTimeline.vue'
import DataRange from '@/components/Overview/DataRange.vue'

const user = useUserStore()
</script>

<template>
  <p>overview tab</p>
  <main>
    <div>
      <DataRange :timestamp="user.lastDayTimestamp" />
    </div>
    <div>
      <ActivityTimeline :days="user.days" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
