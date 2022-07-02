<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue'
import { applyTheme, getTheme } from './lib/theme'

applyTheme(getTheme())
</script>

<template>
  <AppLayout>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/transitions.css';
</style>
