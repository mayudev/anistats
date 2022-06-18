<script lang="ts" setup>
import type { MediaDiff } from '../../stores/helpers/activities'
import NamedProp from '../layout/NamedProp.vue'

const props = defineProps<{
  media: MediaDiff
}>()

const propName =
  (props.media.type === 'ANIME' ? 'episode' : 'chapter') +
  (props.media.progress > 1 ? 's' : '')
</script>

<template>
  <div class="item">
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
</style>