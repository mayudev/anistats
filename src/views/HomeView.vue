<script setup lang="ts">
import HeaderBar from '../components/Header/HeaderBar.vue'
import UsernameInput from '../components/Username/UsernameInput.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const isError = ref(false)
const isLoading = ref(false)

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

/// submit is triggered when username/user profile URL is submitted
const submit = (input: string) => {
  // A profile URL was submitted
  if (input.startsWith('https://anilist.co')) {
    const url = new URL(input)
    if (url.pathname.startsWith('/user/')) {
      const username = url.pathname.split('/')[2]
      process(username)
    } else {
      showError('Invalid URL')
    }
  } else {
    // A username was submitted
    process(input)
  }
}

/// process initializes data fetching
const process = (username: string) => {
  isLoading.value = true
}
</script>

<template>
  <main class="main">
    <HeaderBar />

    <Transition name="error">
      <div v-if="isError">{{ errorMessage }}</div>
    </Transition>

    <UsernameInput
      :is-error="isError"
      :is-loading="isLoading"
      @errored="m => showError(m)"
      @submit="u => submit(u)"
    />
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
