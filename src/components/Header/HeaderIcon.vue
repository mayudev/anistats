<script lang="ts" setup>
import FontAwesomeIcon from '../FontAwesomeIcon.vue'

const props = defineProps<{
  icon: string
  alt: string
  href?: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :title="alt"
    :aria-label="alt"
    :href="href"
    target="_blank"
    rel="noreferrer"
    class="icon-button"
  >
    <FontAwesomeIcon :width="18" :icon="props.icon"></FontAwesomeIcon>
  </component>
</template>

<style lang="scss" scoped>
.icon-button {
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 50%;

  height: 18px;

  cursor: pointer;
  transition: background var(--theme-transition) ease-out, color 0.2s ease-out;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-accent);
  }
}
</style>
