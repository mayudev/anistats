<script lang="ts" setup>
import { useListStore } from '../../stores/list'
import type { MediaListEntry } from '../../stores/query/List'
import ScrollObserver from './ScrollObserver.vue'
import AwesomeButton from '../layout/buttons/AwesomeButton.vue'
import ListTable from './ListTable.vue'
import type { MediaEntry } from '../../stores/query/Media'
import { reactive } from 'vue'
import ModalBackdrop from '../layout/ModalBackdrop.vue'
import AppModal from '../layout/AppModal.vue'
import ListDetails from './ListDetails.vue'

defineProps<{
  list: MediaListEntry[]
}>()

const listStore = useListStore()

const intersect = () => {
  listStore.nextPage()
}

const details = reactive<{
  show: boolean
  media: MediaEntry | null
}>({
  show: false,
  media: null,
})

const pick = (media: MediaEntry) => {
  details.show = false
  console.log(media)

  details.media = media
  details.show = true
}

const closeModal = () => {
  details.show = false
}
</script>

<template>
  <div>
    <Transition name="backdrop">
      <ModalBackdrop v-if="details.show" @close="() => closeModal()" />
    </Transition>

    <Transition name="modal">
      <ListDetails
        v-if="details.show && details.media"
        :media="details.media"
        @close="() => closeModal()"
      />
    </Transition>

    <ListTable :list="list" @pick="pick" />

    <div class="center" v-if="list.length === 0">No items.</div>

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

  margin: 1rem 0;
}
</style>
