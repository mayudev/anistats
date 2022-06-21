<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { MediaDiff } from '../../stores/helpers/activities'
import NamedProp from '../layout/NamedProp.vue'
import MediaDetails from './MediaDetails.vue'

const props = defineProps<{
  media: MediaDiff
  selected?: number
}>()

const emit = defineEmits<{
  (event: 'select'): void
}>()

const displayDetails = ref(false)

const toggleDetails = () => {
  emit('select')

  displayDetails.value = !displayDetails.value
}

watch(props, newProps => {
  if (newProps.selected !== 0 && newProps.selected !== props.media.id) {
    displayDetails.value = false
  }
})

const propName =
  (props.media.type === 'ANIME' ? 'episode' : 'chapter') +
  (props.media.progress > 1 ? 's' : '')
</script>

<template>
  <div class="item" @click="() => toggleDetails()">
    <img
      :src="media.coverImage.medium"
      loading="lazy"
      :alt="`Cover image for ${media.title.romaji}`"
      class="item-image"
    />
    <span class="item-title">
      {{ media.title.romaji }}
    </span>
    <span style="flex: 1" />
    <NamedProp :name="propName" :value="media.progress" />
  </div>
  <Transition name="details">
    <MediaDetails v-if="displayDetails" :media="media" />
  </Transition>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  padding: 10px 12px;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-accent);
  }
}

.item-image {
  object-fit: cover;
  border-radius: 3px;
  min-width: 36px;
  width: 36px;
  height: 36px;
  margin-right: 12px;
}

.item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// Transition
.details-enter-from,
.details-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.details-enter-active,
.details-leave-active {
  transition: 0.2s ease;
}
</style>
