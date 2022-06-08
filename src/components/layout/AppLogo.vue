<script setup lang="ts">
const props = defineProps<{
  styled?: boolean
}>()
</script>

<template>
  <span :class="{ styled: props.styled }">
    <span class="accent">ani</span>
    <span class="regular">stats</span>
  </span>
</template>

<style lang="scss" scoped>
.styled {
  font-size: 2em;
  user-select: none;
}
.accent {
  color: var(--color-logo);
}

.regular {
  color: var(--color-text);
  transition: color var(--theme-transition);
}
</style>
