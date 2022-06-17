<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import ActivityTimeline from '@/components/Overview/ActivityTimeline.vue'

const user = useUserStore()
</script>

<template>
  <p>overview tab</p>
  <main>
    <div>left</div>
    <div>
      <ActivityTimeline :days="user.days" />
    </div>
  </main>
  <button @click="() => user.fetchActivities()">fetch</button>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
