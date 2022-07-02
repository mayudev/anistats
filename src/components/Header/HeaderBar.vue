<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLogo from '../../components/layout/AppLogo.vue'
import { applyTheme, getTheme, saveTheme } from '../../lib/theme'
import router from '../../router'
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

/// opens the '/help' page or closes it if it's already open
const switchHelp = () => {
  if (router.currentRoute.value.path === '/help') {
    router.go(-1)
  } else {
    router.push('/help')
  }
}
</script>

<template>
  <nav>
    <SmallBadge error>beta</SmallBadge>
    <HeaderIcon
      @click="() => switchTheme()"
      icon="circle-half-stroke"
      alt="Toggle theme"
    />
    <HeaderIcon
      @click="() => switchHelp()"
      icon="circle-question"
      alt="Help"
    ></HeaderIcon>
    <HeaderIcon
      icon="code"
      alt="Source code"
      href="https://github.com/mayudev/anistats"
    ></HeaderIcon>
  </nav>
  <div>
    <RouterLink to="/">
      <AppLogo styled />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
}
</style>
