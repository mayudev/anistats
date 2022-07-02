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

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease, opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
