<script lang="ts" setup>
import { useUserStore } from '../../stores/user'
import UserHeaderIcon from './UserHeaderIcon.vue'

const user = useUserStore()
</script>

<template>
  <nav class="header">
    <RouterLink to="/" class="link">
      <UserHeaderIcon icon="angle-left" alt="Back" />
    </RouterLink>
    <img class="header-image" :src="user.userData?.avatar.medium" />
    <span>{{ user.userData?.name }}</span>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  background: var(--color-background-secondary);
  border-radius: 6px;

  font-weight: 500;
  font-size: 1.2rem;

  padding: 0.8rem;
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
