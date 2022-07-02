<script lang="ts" setup>
defineProps<{
  name: string
  value: string | number
}>()
</script>

<template>
  <div class="prop">
    <div class="prop-value">{{ value }}</div>
    <div class="prop-name">{{ name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.prop {
  display: flex;
  align-items: center;

  &:nth-child(even) {
    margin-left: 1rem;
  }
}

.prop-value {
  font-size: 1.4rem;
  margin-right: 0.35rem;
}

.prop-name {
  font-size: 0.76rem;
  color: var(--color-text-secondary);
}

.trans .prop-name {
  transition: var(--theme-transition);
}
</style>
