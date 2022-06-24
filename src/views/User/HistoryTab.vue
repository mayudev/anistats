<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { getHistory } from '../../stores/helpers/history'
import { useListStore } from '../../stores/list'
import { useUserStore } from '../../stores/user'
import type { HistoryMonth } from '../../stores/query/history'
import LoadingSpinner from '../../components/layout/LoadingSpinner.vue'
import HistoryEntry from '../../components/History/HistoryEntry.vue'
import type { MediaListEntry } from '../../stores/query/List'
import ListContainer from '../../components/List/ListContainer.vue'
import { months } from '../../lib/days'

const user = useUserStore()
const list = useListStore()

const state = reactive<{
  busy: boolean
  error: boolean
  years: Map<number, HistoryMonth[]> | null
  range: number[]
  unknown: number
  max: number
}>({
  busy: false,
  error: false,
  years: null,
  range: [],
  unknown: 0,
  max: 0,
})

const details = reactive<{
  show: boolean
  title: string
  entries: MediaListEntry[]
}>({
  show: false,
  title: '',
  entries: [],
})

onMounted(() => {
  ensureList()
})

user.$subscribe(() => {
  ensureList()
})

const ensureList = async () => {
  state.busy = true
  details.show = false

  if (user.dataset !== 'manga') {
    // 'anime' or 'both'
    if (list.animeList.length === 0) await list.fetchMediaList('ANIME')
  }

  if (user.dataset !== 'anime') {
    // 'manga' or 'both'
    if (list.mangaList.length === 0) await list.fetchMediaList('MANGA')
  }

  parseData()
}

const parseData = () => {
  const history = getHistory(list.rawList, 'COMPLETED')

  const years = Array.from(history.years.keys())

  const from = new Date().getFullYear()
  const until = Math.min(...years)

  if (until > from || until < 2000) {
    state.error = true
  }

  let range = []
  for (let i = from; i >= until; i--) {
    range.push(i)
  }

  state.range = range

  state.unknown = history.unknownCount
  state.max = history.maxCount
  state.years = history.years
  state.busy = false
}

const getMonth = (m: number, y: number) => {
  const month = state.years?.get(y)?.find(x => x.month === m)
  if (!month) return 0
  else return month.count
}

const handleClick = (month: number, year: number) => {
  const target = state.years?.get(year)?.find(m => m.month === month)
  if (!target) console.log('oof')

  const entries = list.rawList.filter(
    entry =>
      entry.status === 'COMPLETED' &&
      entry.completedAt.month === month &&
      entry.completedAt.year === year
  )

  if (entries.length > 0) {
    details.entries = entries.sort((a, b) =>
      a.media.title.romaji.localeCompare(b.media.title.romaji)
    )
    details.title = months[month - 1] + ' ' + year
    details.show = true
  }
}
</script>

<template>
  <div class="center" v-if="list.status === 'busy' || state.busy">
    <LoadingSpinner :width="24" :border-width="2" />
  </div>

  <div v-else-if="state.error">An error occurred.</div>

  <div v-else>
    <div class="calendar">
      <div class="header row">
        <div class="month"></div>
        <div class="month">Jan</div>
        <div class="month">Feb</div>
        <div class="month">Mar</div>
        <div class="month">Apr</div>
        <div class="month">May</div>
        <div class="month">Jun</div>
        <div class="month">Jul</div>
        <div class="month">Aug</div>
        <div class="month">Sep</div>
        <div class="month">Oct</div>
        <div class="month">Nov</div>
        <div class="month">Dec</div>
      </div>
      <div class="year row" v-for="year in state.range" :key="year">
        <div class="month">{{ year }}</div>
        <HistoryEntry
          class="month"
          v-for="month in 12"
          :key="month"
          :count="getMonth(month, year)"
          :max="state.max"
          @clicked="() => handleClick(month, year)"
        />
      </div>
    </div>
    <div class="center" v-if="state.unknown > 0">
      There are {{ state.unknown }} entries with unknown completed date.
    </div>
    <Transition name="details">
      <div v-if="details.show && details.entries">
        <div class="details-title">{{ details.title }}</div>
        <ListContainer :list="details.entries" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;

  margin: 1rem;
}

.row {
  display: grid;
  grid-template-columns: repeat(13, 1fr);

  min-width: 650px;
}

.header .month {
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid var(--color-background-border);
}

.month {
  padding: 0.5rem;
  margin: 0.125rem;

  border-radius: 4px;
  text-align: center;
  font-weight: 500;

  position: relative;
  border: 1px solid transparent;
}
.calendar {
  overflow-x: scroll;
}

.details-title {
  margin: 1rem;
  text-align: center;

  font-weight: 500;
}

.details-enter-from,
.details-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.details-enter-active,
.details-leave-active {
  transition: 0.2s ease;
}
</style>
