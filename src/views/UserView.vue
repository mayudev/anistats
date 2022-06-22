<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import HeaderBar from '../components/Header/HeaderBar.vue'
import LoadingSpinner from '../components/layout/LoadingSpinner.vue'
import UserHeader from '../components/User/UserHeader.vue'
import { useListStore } from '../stores/list'
import { useUserStore } from '../stores/user'

const isLoading = ref(true)

const user = useUserStore()
const list = useListStore()

const props = defineProps<{
  username: string
}>()

onMounted(async () => {
  try {
    if (user.userData?.name !== props.username) {
      await user.$reset()
      await list.$reset()
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
      <div class="center" v-if="isLoading">
        <LoadingSpinner :width="72" :border-width="8" />
      </div>
      <RouterView v-else></RouterView>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.user {
  animation: appear 0.4s;
}

.center {
  display: flex;
  justify-content: center;
}

@keyframes appear {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
