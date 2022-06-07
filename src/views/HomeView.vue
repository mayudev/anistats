<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLogo from '../components/layout/AppLogo.vue'
import SmallBadge from '../components/layout/SmallBadge.vue'
</script>

<template>
  <main class="main">
    <SmallBadge error>beta</SmallBadge>
    <div>
      <RouterLink to="/">
        <AppLogo styled />
      </RouterLink>
    </div>
    <span>home page</span>
  </main>
</template>

<style lang="scss" scoped></style>
