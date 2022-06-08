<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue'
import { applyTheme, getTheme } from './lib/theme'

applyTheme(getTheme())
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<style>
@import '@/assets/base.css';
</style>
