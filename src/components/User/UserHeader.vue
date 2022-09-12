<script lang="ts" setup>
import { useUserStore } from '../../stores/user'
import UserTabSwitcher from './UserTabSwitcher.vue'
import UserDatasetSwitcher from './UserDatasetSwitcher.vue'
import ClickableIcon from '../layout/buttons/ClickableIcon.vue'
import { ref } from 'vue'

const user = useUserStore()

const showSwitcher = ref(false)
</script>

<template>
  <nav class="header">
    <img class="header-image" :src="user.userData?.avatar.medium" />
    <span class="header-username">{{ user.userData?.name }}</span>
    <div class="header-tabs">
      <span class="header-row">
        <UserTabSwitcher />
        <ClickableIcon
          class="expand"
          :icon="showSwitcher ? 'angle-up' : 'angle-down'"
          @click="() => (showSwitcher = !showSwitcher)"
        />
      </span>
      <UserDatasetSwitcher
        class="expandable"
        :class="{ 'expandable-show': showSwitcher }"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  border-radius: 6px;
  padding: 0.5rem 0.25rem;
}

@media (min-width: 800px) {
  .header {
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    background: var(--color-background);
    border: 1px solid var(--color-background-border);

    z-index: 3;
    position: sticky;
    top: 1rem;
  }
}

.trans .header {
  transition: var(--theme-transition);
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 650px) {
  .header {
    display: flex;
    align-items: center;
  }

  .header-tabs {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .expand {
    display: none;
  }
}

@media not all and (min-width: 650px) {
  .expandable {
    display: none;
  }

  .expandable-show {
    display: block;
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
