<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import HeaderBar from '../components/Header/HeaderBar.vue'
import LoadingSpinner from '../components/layout/LoadingSpinner.vue'
import UserHeader from '../components/User/UserHeader.vue'
import { useListStore } from '../stores/list'
import { useUserStore } from '../stores/user'
import ErrorMessage from '../components/layout/ErrorMessage.vue'
import { NoActivitiesError } from '../stores/query/types'

const isLoading = ref(true)
const errorMessage = ref('')

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
    if (e instanceof NoActivitiesError) {
      errorMessage.value = 'This user has no activities.'
    } else if (e === 404) {
      errorMessage.value = 'User not found or is private.'
    } else {
      errorMessage.value = 'An unknown error occurred. Please try again.'
    }

    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <HeaderBar />
    <div class="center" v-if="isLoading">
      <LoadingSpinner primary :width="48" :border-width="4" />
    </div>
    <ErrorMessage v-else-if="errorMessage" :message="errorMessage" />
    <main class="user" v-else>
      <UserHeader />
      <div class="user-content">
        <RouterView v-slot="{ Component, route }">
          <Transition :name="route.meta.transitionName" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.user {
  animation: appear 0.4s;
}

.user-content {
  overflow-x: hidden;
}

.center {
  display: flex;
  justify-content: center;

  margin: 1rem;
}
</style>
