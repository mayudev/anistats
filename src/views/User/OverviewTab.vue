<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import ActivityTimeline from '@/components/Overview/ActivityTimeline.vue'
import DataRange from '@/components/Overview/DataRange.vue'
import ActivityChart from '../../components/Overview/ActivityChart.vue'
import ActivityCalendar from '../../components/Calendar/ActivityCalendar.vue'

const user = useUserStore()
</script>

<template>
  <main>
    <div class="left">
      <DataRange :timestamp="user.lastDayTimestamp" />
      <div class="chart-container">
        <ActivityCalendar :days="user.days" />
      </div>
      <div class="chart-container" v-if="user.dataset !== 'manga'">
        <div class="chart-header">Episodes watched</div>
        <ActivityChart
          name="anime"
          :days="user.days"
          property="totalEpisodes"
        />
      </div>
      <div class="chart-container" v-if="user.dataset !== 'anime'">
        <div class="chart-header">Chapters read</div>
        <ActivityChart
          name="manga"
          :days="user.days"
          property="totalChapters"
        />
      </div>
    </div>
    <div class="right">
      <ActivityTimeline :days="user.days" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@media (min-width: 800px) {
  main {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .left {
    margin-right: 0.5rem;
  }

  .right {
    margin-left: 0.5rem;
  }
}

.chart-container {
  box-shadow: 0 5 3px rgba(0, 0, 0, 0.25);
  margin-bottom: 12px;
}

.chart-header {
  background: var(--color-background-secondary);
  border-radius: 6px;
  padding: 0.5rem 1rem;

  font-weight: 500;
  font-size: 1.2rem;

  transition: background var(--theme-transition);
}
</style>
