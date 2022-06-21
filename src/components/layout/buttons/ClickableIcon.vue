<script lang="ts" setup>
import FontAwesomeIcon from '../../FontAwesomeIcon.vue'

const props = defineProps<{
  icon: string
  size?: number
}>()
</script>

<template>
  <button class="button">
    <FontAwesomeIcon :icon="props.icon" :width="size || 12"></FontAwesomeIcon>
  </button>
</template>

<style lang="scss" scoped>
.button {
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 3px;
  width: 29px;
  height: 29px;

  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  user-select: none;

  &:hover {
    background: var(--color-background);
    color: var(--color-accent);
  }

  &:active {
    transform: scale(0.8);
  }
}

.button-wrapper {
  margin-left: 0.5rem;
}
</style>
