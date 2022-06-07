<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    &copy;
    <a
      class="link-transparent"
      target="_blank"
      rel="noreferrer"
      href="https://mayu.gay"
      >mayudev</a
    >
    {{ currentYear }};
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/mayudev/anistats"
      >source</a
    >
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin: 1rem 0;
}
.link-transparent {
  color: var(--color-text);
}
</style>
