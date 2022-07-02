<script lang="ts" setup>
defineProps<{
  alwaysPopup?: boolean
}>()

defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <div class="modal" :class="{ 'modal-top': alwaysPopup }">
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

.modal-top {
  margin-top: 0;
}

.modal-content {
  position: relative;
  z-index: 11;
}

@media (max-width: 768px) {
  .modal {
    position: fixed;
    bottom: 0;
    left: 10px;
    right: 10px;
  }
}
</style>
