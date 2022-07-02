<script lang="ts" setup>
import HeaderBar from '../components/Header/HeaderBar.vue'
</script>

<template>
  <main>
    <HeaderBar />
    <div class="notfound">
      <h1>Page not found!</h1>
      <RouterLink to="/">Return</RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.notfound {
  h1 {
    font-weight: 500;
  }

  a {
    font-size: 1.5rem;
  }
}
</style>
