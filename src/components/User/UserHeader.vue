<script lang="ts" setup>
import { useUserStore } from '../../stores/user'
import UserTabSwitcher from './UserTabSwitcher.vue'
import UserDatasetSwitcher from './UserDatasetSwitcher.vue'

const user = useUserStore()
</script>

<template>
  <nav class="header">
    <img class="header-image" :src="user.userData?.avatar.medium" />
    <span class="header-username">{{ user.userData?.name }}</span>
    <UserTabSwitcher />
    <span style="flex: 1" />
    <UserDatasetSwitcher />
  </nav>
</template>

<style lang="scss" scoped>
.header {
  border-radius: 6px;
  padding: 0.8rem;
}

@media (min-width: 600px) {
  .header {
    display: flex;
    align-items: center;
  }
}

.header-username {
  font-size: 1.2rem;
}

.header-image {
  width: 32px;
  border-radius: 50%;

  margin-right: 0.6rem;
}

.link {
  display: flex;

  height: 24px;
  margin-right: 1rem;
  margin-left: 0.4rem;
}
</style>
