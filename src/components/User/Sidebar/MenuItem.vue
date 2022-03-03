<template>
  <router-link :to="'/' + $route.params.user + to" class="menuitem">
    <font-awesome-icon :icon="icon" size="lg" fixed-width />
    <span class="label">
      <slot></slot>
    </span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: String,
    icon: String,
  },
});
</script>

<style lang="scss" scoped>
.menuitem {
  background: inherit; // no idea why it's needed
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;

  border-radius: 5px;
  transition: background 0.1s;

  &:not(.router-link-exact-active):hover {
    background: var(--color-selected-background);
    color: white;
  }
}

.router-link-exact-active {
  background: var(--color-selected-background);
  color: var(--color-selected-text);
}

.label {
  padding-left: 15px;
  font-weight: 500;
}

a {
  color: inherit;
}
</style>
