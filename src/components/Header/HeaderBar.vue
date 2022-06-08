<script setup lang="ts">
import { applyTheme, getTheme, saveTheme } from '../../lib/theme'
import SmallBadge from '../layout/SmallBadge.vue'
import HeaderIcon from './HeaderIcon.vue'

const switchTheme = () => {
  const currentTheme = getTheme()

  if (currentTheme === 'light') {
    applyTheme('dark')
    saveTheme('dark')
  } else {
    applyTheme('light')
    saveTheme('light')
  }
}
</script>

<template>
  <nav>
    <SmallBadge error>beta</SmallBadge>
    <HeaderIcon
      @click="switchTheme"
      icon="circle-half-stroke"
      alt="Toggle theme"
    />
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
}
</style>
