<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import HeaderBar from '../components/Header/HeaderBar.vue'
import LoadingSpinner from '../components/layout/LoadingSpinner.vue'
import UserHeader from '../components/User/UserHeader.vue'
import { useUserStore } from '../stores/user'
undefined

const isLoading = ref(true)

const user = useUserStore()

const props = defineProps<{
  username: string
}>()

onMounted(async () => {
  try {
    if (user.userData?.name !== props.username) {
      await user.$reset()
      await user.fetchUser(props.username)
    }

    if (user.activities.length === 0) {
      await user.fetchActivities()
    }

    isLoading.value = false
  } catch (e) {
    // TODO proper error handling
    alert('something went wrong')
  }
})
</script>

<template>
  <div>
    <HeaderBar />
    <main class="user">
      <UserHeader />
      <LoadingSpinner v-if="isLoading" :width="72" :border-width="8" />
      <RouterView v-else></RouterView>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.user {
  animation: appear 0.4s;
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
