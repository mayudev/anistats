<script lang="ts" setup>
import FontAwesomeIcon from '../../FontAwesomeIcon.vue'

defineProps<{
  icon: string
}>()
</script>

<template>
  <button class="button" @click="$emit('click')">
    <FontAwesomeIcon :icon="icon" :width="16" />
    <span class="button-text"><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  outline: none;
  border: none;
  font: inherit;
  color: inherit;
  background: transparent;

  display: flex;
  align-items: center;

  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;

  transition: 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-blue);
  }

  &:active {
    background: var(--color-background-border);
  }
}

.button-text {
  margin-left: 1rem;
}

.trans .button {
  transition: var(--theme-transition);
}
</style>
