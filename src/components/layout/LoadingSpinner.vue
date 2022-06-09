<script lang="ts" setup>
const props = defineProps<{
  width: number
  borderWidth: number
  primary?: boolean
}>()

const color = props.primary ? 'var(--color-accent)' : 'var(--color-text)'
</script>

<template>
  <div
    class="spinner"
    :style="{
      width: width + 'px',
      height: width + 'px',
      border: borderWidth + 'px solid transparent',
      borderRight: borderWidth + 'px solid ' + color,
      borderLeft: borderWidth + 'px solid ' + color,
    }"
  ></div>
</template>

<style lang="scss" scoped>
.spinner {
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
