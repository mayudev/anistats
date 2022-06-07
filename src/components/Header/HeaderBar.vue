<script setup lang="ts">
import SmallBadge from '../layout/SmallBadge.vue'
import HeaderIcon from './HeaderIcon.vue'
</script>

<template>
  <nav>
    <SmallBadge error>beta</SmallBadge>
    <HeaderIcon icon="circle-half-stroke" alt="Toggle theme" />
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
}
</style>
