<script lang="ts" setup>
import type { MediaEntry } from '../../stores/query/Media'
import MediaDetails from '../Overview/MediaDetails.vue'
import ClickableIcon from '../layout/buttons/ClickableIcon.vue'

defineProps<{
  media: MediaEntry
}>()

defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <div class="modal">
    <div class="backdrop" @click="$emit('close')"></div>
    <div class="content">
      <div
        class="header"
        :style="{ backgroundImage: `url(${media.bannerImage})` }"
      >
        <div class="header-top">
          <img class="header-image" :src="media.coverImage.medium" />

          <a
            class="header-title"
            target="_blank"
            ref="noreferrer"
            :href="`https://anilist.co/${media.type.toLowerCase()}/${media.id}`"
            >{{ media.title.romaji }}</a
          >
          <span style="flex: 1" />
          <span class="header-icon">
            <ClickableIcon icon="xmark" @click="$emit('close')" />
          </span>
        </div>
      </div>
      <MediaDetails :media="media" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal,
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  z-index: 11;
}

@media (max-width: 640px) {
  .modal {
    align-items: flex-end;
    margin-bottom: 10px;
  }
}

.content {
  z-index: 10;
  width: min(95vw, 640px);

  border-radius: 6px;
  overflow: hidden;

  background: var(--color-background);
}

.header {
  width: 100%;
  height: 140px;

  background-size: cover;
  background-position: center;

  color: white;

  box-shadow: 1px 1px 31px black inset;
}

.header-image {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  object-fit: cover;

  width: auto;
  height: 110px;
}

.header-top {
  display: flex;
  align-items: flex-start;

  padding: 1rem;
}

.header-icon {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
}

.header-title {
  background: rgba(0, 0, 0, 0.7);
  margin: 0 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  position: relative;
  z-index: 12;

  font-size: 1rem;
  font-weight: 500;

  color: inherit;
}

.header-title,
.header-icon,
.header-image {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
