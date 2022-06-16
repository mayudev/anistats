<script lang="ts" setup>
import SwitcherTab from '@/components/layout/SwitcherTab.vue'
</script>

<template>
  <div>
    <SwitcherTab as="link" :to="{ name: 'overview' }">Overview</SwitcherTab>
    <SwitcherTab as="link" :to="{ name: 'list' }">List</SwitcherTab>
  </div>
</template>

<style lang="scss" scoped></style>
