<script lang="ts" setup>
defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: relative;
  margin-top: 12px;

  z-index: 11;
}

.modal-content {
  position: relative;
  z-index: 11;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
.backdrop-enter-active,
.backdrop-leave-active {
  transition: 0.2s ease;
}
</style>
