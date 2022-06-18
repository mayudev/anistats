<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import {
  parseActivities,
  type Day,
  type MediaDiff,
} from '../../stores/helpers/activities'
import { useUserStore } from '../../stores/user'
import { fetchMediaActivities } from '../../stores/api/media'
import ActivityChart from '../../components/Overview/ActivityChart.vue'
import { findPlanningDate } from '../../stores/helpers/media'
import { displayDate } from '../../lib/days'

const user = useUserStore()

const props = defineProps<{
  media: MediaDiff
}>()

const state = reactive<{
  loading: boolean
  activities: Map<number, Day> | null
  planning: number
}>({
  loading: false,
  activities: null,
  planning: 0,
})

onMounted(async () => {
  const raw = await fetchMediaActivities(user.userData!.id, props.media.id)

  state.planning = findPlanningDate(raw.data.Page.activities)

  const days = parseActivities(raw.data.Page.activities.reverse(), 'both')
  state.activities = days
})
</script>

<template>
  <div v-if="state.activities && state.activities.size > 0">
    <div class="header">
      <div class="header-title">Planned since</div>
      <div class="header-value">
        {{ displayDate(new Date(state.planning)) }}
      </div>
    </div>
    <ActivityChart
      :name="`media-${media.id}`"
      :days="state.activities"
      :property="media.type === 'ANIME' ? 'totalEpisodes' : 'totalChapters'"
      :height="100"
    />
  </div>
  <div v-else-if="state.activities?.size === 0">No activity found</div>
  <!-- TODO -->
  <div v-else>Loading...</div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
}

.header-title {
  font-size: 0.95rem;
  font-weight: 500;
}

.header-value {
  font-size: 0.86rem;
  color: var(--color-text-secondary);
}
</style>