<script lang="ts" setup>
import FontAwesomeIcon from '../FontAwesomeIcon.vue'

const props = defineProps<{
  icon: string
}>()
</script>

<template>
  <button class="button">
    <FontAwesomeIcon :icon="props.icon" :width="12"></FontAwesomeIcon>
    <span class="button-text"><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0.25rem 3rem;
  border-radius: 6px;

  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  user-select: none;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-accent);
  }
}

.button-text {
  padding-top: 0.25rem;
}
</style>
