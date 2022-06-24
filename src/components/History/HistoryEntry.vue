<script lang="ts" setup>
defineProps<{
  count: number
  max: number
}>()
</script>

<template>
  <div class="month" :class="{ 'month-disabled': count === 0 }">
    <div class="month-background" :style="{ opacity: count / max }"></div>
    <span class="month-label">{{ count }}</span>
  </div>
</template>

<style lang="scss" scoped>
.month {
  cursor: pointer;

  opacity: 0.9;
  transition: transform 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
}

.month-disabled {
  opacity: 0.5;
}

.month-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: var(--color-accent-2);
  border-radius: 4px;
}

.month-label {
  position: relative;
  z-index: 1;
}
</style>
