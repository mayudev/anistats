<script lang="ts" setup>
import type { Day } from '../../stores/helpers/activities'
import ActivityMedia from '@/components/Overview/ActivityMedia.vue'
import { weekdays, displayDate } from '@/lib/days'
import NamedProp from '../layout/NamedProp.vue'
import { useUserStore } from '../../stores/user'
import { reactive, watch } from 'vue'
import ClickableIcon from '../layout/buttons/ClickableIcon.vue'

const props = defineProps<{
  timestamp: number
  day: Day
  closeable?: boolean
}>()

const emit = defineEmits<{
  (event: 'close'): void
}>()

const state = reactive({
  date: new Date(props.timestamp),
  selected: 0,
})

watch(props, () => {
  state.date = new Date(props.timestamp)
})

const user = useUserStore()

const close = () => {
  emit('close')
}
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-date">
        <div class="weekday">{{ weekdays[state.date.getDay()] }}</div>
        <div class="date">{{ displayDate(state.date) }}</div>
      </div>
      <span style="flex: 1" />
      <NamedProp
        v-if="user.dataset !== 'anime'"
        name="chapters"
        :value="day.totalChapters"
      />
      <NamedProp
        v-if="user.dataset !== 'manga'"
        name="episodes"
        :value="day.totalEpisodes"
      />
      <ClickableIcon
        class="button-wrapper"
        v-if="closeable"
        @click="() => close()"
        icon="xmark"
      />
    </div>
    <div class="media">
      <ActivityMedia
        v-for="media in day.media"
        :key="media.id"
        :media="media"
        @select="() => (state.selected = media.id)"
        :selected="closeable ? state.selected : 0"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  background: var(--color-background);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12.944px;

  transition: background var(--theme-transition);
}

.header {
  display: flex;
  align-items: center;

  background: var(--color-background-secondary);
  padding: 0.5rem 0.75rem;

  transition: background var(--theme-transition);
}

.weekday {
  font-size: 0.86rem;
  color: var(--color-text-secondary);
}

.date {
  font-weight: 500;
}

@media (max-width: 768px) {
  .media {
    max-height: 80vh;
    overflow-y: scroll;
  }
}
</style>
