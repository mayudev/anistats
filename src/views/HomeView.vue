<script setup lang="ts">
import HeaderBar from '../components/Header/HeaderBar.vue'
import UsernameInput from '../components/Home/UsernameInput.vue'
import LoadingSpinner from '../components/layout/LoadingSpinner.vue'
import { useUserStore } from '../stores/user'
import { ref } from 'vue'
import router from '../router'
import { useListStore } from '../stores/list'
import HomeLanding from '../components/Home/HomeLanding.vue'

const isError = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const user = useUserStore()
const list = useListStore()

/// showError shows an error and hides it after a timeout
const showError = (message: string) => {
  isLoading.value = false
  isError.value = true
  errorMessage.value = message

  setTimeout(() => {
    isError.value = false
    errorMessage.value = ''
  }, 2000)
}

/// submit is triggered when username/user profile URL is submitted
const submit = (input: string) => {
  // Do not continue if loading is in progress
  if (isLoading.value) return

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
const process = async (username: string) => {
  isLoading.value = true

  try {
    if (user.userData?.name !== username) {
      await user.$reset()
      await list.$reset()
      await user.fetchUser(username)
    }

    if (user.userData) {
      router.push('/user/' + user.userData.name)
    } else {
      throw 600
    }
  } catch (error) {
    const code = error as number

    switch (code) {
      case 404:
        showError('User not found or is private')
        break
      default:
        showError('Something went wrong')
    }
  }
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

    <div class="spinner" v-if="isLoading">
      <LoadingSpinner primary :width="48" :border-width="4" />
    </div>

    <HomeLanding />
  </main>
</template>

<style lang="scss" scoped>
@media not all and (min-width: 800px) {
  .main {
    padding-top: 30vh;
  }
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem;
}
</style>
