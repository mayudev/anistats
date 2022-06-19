<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import type { Day, MediaDiff } from '../../stores/helpers/activities'
import { useUserStore } from '../../stores/user'
import ActivityChart from '../../components/Overview/ActivityChart.vue'
import { findMediaActivities } from '../../stores/helpers/media'
import { displayDate } from '../../lib/days'
import FontAwesomeIcon from '@/components/FontAwesomeIcon.vue'
import LoadingSpinner from '@/components/layout/LoadingSpinner.vue'

const user = useUserStore()

const props = defineProps<{
  media: MediaDiff
}>()

const state = reactive<{
  loading: boolean
  days: Map<number, Day> | null
  planning: number
}>({
  loading: false,
  days: null,
  planning: 0,
})

onMounted(async () => {
  if (!user.userData) return

  const { days, plannedSince } = await findMediaActivities(
    user.userData.id,
    props.media.id
  )
  state.days = days
  state.planning = plannedSince
})
</script>

<template>
  <div v-if="state.days && state.days.size > 0">
    <div class="header">
      <div class="header-title">Planned since</div>
      <div class="header-value">
        {{ displayDate(new Date(state.planning)) }}
      </div>
    </div>
    <ActivityChart
      :name="`media-${media.id}`"
      :days="state.days"
      :property="media.type === 'ANIME' ? 'totalEpisodes' : 'totalChapters'"
      :height="100"
    />
  </div>
  <div class="error" v-else-if="state.days?.size === 0">
    <FontAwesomeIcon icon="triangle-exclamation" :width="24" />
    <span class="error-text">No activity found.</span>
  </div>
  <div class="loading" v-else>
    <LoadingSpinner :width="24" :border-width="2" />
  </div>
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

.error,
.loading {
  margin: 10px;
}

.loading {
  display: flex;
  justify-content: center;
}
</style>
