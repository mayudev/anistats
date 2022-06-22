<script lang="ts" setup>
import { useListStore } from '../../stores/list'
import type { MediaListEntry } from '../../stores/query/List'
import ScrollObserver from './ScrollObserver.vue'
defineProps<{
  list: MediaListEntry[]
}>()

const { nextPage } = useListStore()

const intersect = () => {
  nextPage()
}
</script>

<template>
  <div class="observer">
    <li v-for="entry in list" :key="entry.id">
      {{ entry.media.title.romaji }}
    </li>
    <ScrollObserver @intersect="intersect" />
    <button @click="intersect">load more</button>
  </div>
</template>

<style lang="scss" scoped></style>
