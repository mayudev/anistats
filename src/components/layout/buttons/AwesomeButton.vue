<script lang="ts" setup>
import FontAwesomeIcon from '../../FontAwesomeIcon.vue'

defineProps<{
  icon: string
  size?: number
}>()
</script>

<template>
  <button class="button" @click="$emit('click')">
    <FontAwesomeIcon :icon="icon" :width="size || 16" />
    <span class="button-text"><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  outline: none;
  border: none;
  font: inherit;
  color: inherit;
  background: var(--color-background-secondary);

  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 500;

  transition: 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: var(--color-background-border);
  }
}

.button-text {
  margin-left: 0.5rem;
}
</style>
