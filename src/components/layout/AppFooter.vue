<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="content">
      &copy;
      <a
        class="link-transparent"
        target="_blank"
        rel="noreferrer"
        href="https://mayu.gay"
        >mayudev</a
      >
      {{ currentYear }}
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  text-align: center;

  font-size: 0.86rem;
}

.content {
  display: inline-block;

  padding: 0.5rem;
  margin: 1rem 0;

  text-shadow: 1px 1px 9px pink;
}
.link-transparent {
  color: var(--color-text);
}
</style>
