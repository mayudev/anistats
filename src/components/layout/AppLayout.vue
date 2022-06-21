<script lang="ts" setup>
import AppFooter from './AppFooter.vue'
</script>

<template>
  <main class="container">
    <slot></slot>
    <span style="flex: 1" />
    <AppFooter />
  </main>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 1rem;
  min-height: 100vh;

  max-width: min(960px, 95vw);
  margin: auto;

  display: flex;
  flex-direction: column;
}

@media (min-width: 800px) {
  .container {
    padding-top: 20vh;
  }
}
</style>
