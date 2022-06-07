<script lang="ts" setup>
import FontAwesomeIcon from '../FontAwesomeIcon.vue'

const props = defineProps<{
  icon: string
  alt: string
}>()
</script>

<template>
  <button :title="alt" :aria-label="alt" class="icon-button">
    <FontAwesomeIcon :width="16" :icon="props.icon"></FontAwesomeIcon>
  </button>
</template>

<style lang="scss" scoped>
.icon-button {
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
}
</style>
