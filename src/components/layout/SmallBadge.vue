<script lang="ts" setup>
const props = defineProps<{
  error?: boolean
}>()
</script>

<template>
  <div class="badge" :class="{ error: props.error }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  user-select: none;

  padding: 2px 8px;
  border-radius: 24px;

  transition: color 200ms, background 200ms;
}

.error {
  background: var(--color-error);
}
</style>
