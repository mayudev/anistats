<script lang="ts" setup>
defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
}
</style>
