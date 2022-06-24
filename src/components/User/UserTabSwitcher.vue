<script lang="ts" setup>
import SwitcherTab from '@/components/layout/SwitcherTab.vue'
</script>

<template>
  <div class="tabs">
    <SwitcherTab as="link" :to="{ name: 'overview' }">Overview</SwitcherTab>
    <SwitcherTab as="link" :to="{ name: 'list' }">List</SwitcherTab>
    <SwitcherTab as="link" :to="{ name: 'history' }">History</SwitcherTab>
  </div>
</template>

<style lang="scss" scoped>
@media not all and (min-width: 650px) {
  .tabs {
    margin: 1rem 0;
  }
}
</style>
