<script setup lang="ts">
import { useUserStore } from '../../stores/user'
import ActivityTimeline from '@/components/Overview/ActivityTimeline.vue'
import DataRange from '@/components/Overview/DataRange.vue'
import ActivityChart from '../../components/Overview/ActivityChart.vue'

const user = useUserStore()
</script>

<template>
  <p>overview tab</p>
  <main>
    <div>
      <DataRange :timestamp="user.lastDayTimestamp" />
      <div class="chart-container">
        <div class="chart-header">Episodes watched</div>
        <ActivityChart
          v-if="user.dataset !== 'manga'"
          name="anime"
          :days="user.days"
          property="totalEpisodes"
        />
      </div>
      <div class="chart-container">
        <div class="chart-header">Chapters read</div>
        <ActivityChart
          v-if="user.dataset !== 'anime'"
          name="manga"
          :days="user.days"
          property="totalChapters"
        />
      </div>
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

.chart-container {
  box-shadow: 0 5 3px rgba(0, 0, 0, 0.25);
  margin-bottom: 12px;
  margin-right: 0.5rem;
}

.chart-header {
  background: var(--color-background-secondary);
  border-radius: 6px;
  padding: 0.5rem 1rem;

  font-weight: 500;
  font-size: 1.2rem;
}
</style>
