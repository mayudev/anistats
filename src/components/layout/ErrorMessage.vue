<script lang="ts" setup>
import FontAwesomeIcon from '@/components/FontAwesomeIcon.vue'

defineProps<{
  iconSize?: number
  message: string
  message2?: string
}>()
</script>

<template>
  <div class="error">
    <FontAwesomeIcon icon="triangle-exclamation" :width="iconSize || 32" />
    <span class="error-text">{{ message }}</span>
    <span class="error-text">{{ message2 }}</span>
  </div>
</template>

<style lang="scss">
.error {
  text-align: center;
}

.error-text {
  display: block;
}
</style>
