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
          <a
            class="header-title"
            target="_blank"
            ref="noreferrer"
            :href="`https://anilist.co/${media.type.toLowerCase()}/${media.id}`"
            >{{ media.title.romaji }}</a
          >
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

.content {
  z-index: 10;
  width: min(95vw, 640px);

  border-radius: 6px;
  overflow: hidden;

  background: var(--color-background);
}

.header {
  width: 100%;
  height: 190px;

  background-size: cover;
  background-position: center;

  color: white;
}

.header-top {
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
}

.header-icon {
  align-self: flex-start;
}

.header-title {
  position: relative;
  z-index: 12;

  font-size: 1.2rem;

  color: inherit;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
