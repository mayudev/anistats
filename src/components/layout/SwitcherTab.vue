<script lang="ts" setup>
const props = defineProps<{
  to: Record<string, unknown>
}>()
</script>

<template>
  <RouterLink class="tab" :to="props.to"><slot /></RouterLink>
</template>

<style lang="scss" scoped>
.tab {
  padding: 0.5rem 1rem;
  border-radius: 20px;

  text-decoration: none;
  font-weight: 500;

  transition: opacity 200ms, color var(--theme-transition);
}

.trans .tab {
  transition: var(--theme-transition);
}

@media (min-width: 650px) {
  .tab:first-child {
    margin-left: 1rem;
  }
}

.router-link-exact-active {
  background: var(--color-background-secondary) !important;
}
</style>
