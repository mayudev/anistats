<script lang="ts" setup>
import { useListStore } from '../../stores/list'
import type { MediaListEntry } from '../../stores/query/List'
import ScrollObserver from './ScrollObserver.vue'
import AwesomeButton from '../layout/buttons/AwesomeButton.vue'
import ListTable from './ListTable.vue'
defineProps<{
  list: MediaListEntry[]
}>()

const listStore = useListStore()

const { nextPage } = useListStore()

const intersect = () => {
  nextPage()
}
</script>

<template>
  <div>
    <ListTable :list="list" />

    <ScrollObserver @intersect="intersect" />

    <div class="center">
      <AwesomeButton
        icon="arrows-rotate"
        @click="intersect"
        v-if="listStore.hasNextPage"
        >Show more</AwesomeButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
