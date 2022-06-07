<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLogo from '../components/layout/AppLogo.vue'
import HeaderBar from '../components/Header/HeaderBar.vue'
</script>

<template>
  <main class="main">
    <HeaderBar />
    <div>
      <RouterLink to="/">
        <AppLogo styled />
      </RouterLink>
    </div>
    <span>home page</span>
  </main>
</template>

<style lang="scss" scoped></style>
