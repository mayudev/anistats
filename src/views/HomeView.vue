<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLogo from '../components/layout/AppLogo.vue'
import SmallBadge from '../components/layout/SmallBadge.vue'
import FontAwesomeIcon from '../util/FontAwesomeIcon.vue'
</script>

<template>
  <main class="main">
    <SmallBadge error>beta</SmallBadge>
    <FontAwesomeIcon :width="16" icon="circle-half-stroke"></FontAwesomeIcon>
    <div>
      <RouterLink to="/">
        <AppLogo styled />
      </RouterLink>
    </div>
    <span>home page</span>
  </main>
</template>

<style lang="scss" scoped></style>
