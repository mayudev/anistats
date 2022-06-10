<script lang="ts" setup>
import HeaderBar from '../components/Header/HeaderBar.vue'
import LoadingSpinner from '../components/layout/LoadingSpinner.vue'

defineProps<{
  username: string
}>()
</script>

<template>
  <div>
    <HeaderBar />
    <main class="user">
      username: {{ username }} <LoadingSpinner :width="70" :border-width="10" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.user {
  animation: appear 1s;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
