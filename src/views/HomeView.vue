<script setup lang="ts">
import HeaderBar from '../components/Header/HeaderBar.vue'
import { RouterView } from 'vue-router'
import UsernameInput from '../components/Username/UsernameInput.vue'
import { ref } from 'vue'

const isError = ref(false)
const errorMessage = ref('')

/// showError shows an error and hides it after a timeout
const showError = (message: string) => {
  isError.value = true
  errorMessage.value = message

  setTimeout(() => {
    isError.value = false
    errorMessage.value = ''
  }, 2000)
}
</script>

<template>
  <main class="main">
    <HeaderBar />

    <Transition name="error">
      <div v-if="isError">{{ errorMessage }}</div>
    </Transition>

    <UsernameInput :is-error="isError" @errored="m => showError(m)" />
  </main>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped>
.error-enter-from,
.error-leave-to {
  opacity: 0;
  margin-top: -26px;
}

.error-enter-active,
.error-leave-active {
  transition: 0.5s ease;
}
</style>
