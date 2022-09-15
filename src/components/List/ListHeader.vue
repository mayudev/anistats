<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useListStore } from '../../stores/list'
import StatusChooser from './StatusChooser/StatusChooser.vue'

const list = useListStore()

const query = ref('')

watch(query, () => {
  list.setSearchQuery(query.value)
})
</script>

<template>
  <div class="header">
    <input class="search" type="text" placeholder="Search..." v-model="query" />
  </div>
  <StatusChooser @pick="list.switchStatusFilter" />
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;

  margin: 0.5rem;

  position: relative;
  z-index: 2;
}

.search {
  outline: none;
  border: none;
  font: inherit;

  display: block;
  width: 100%;

  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-background-border);

  padding: 0.7rem 1rem;
  border-radius: 6px;
  font-size: 1.2rem;
}

.trans .search {
  transition: var(--theme-transition);
}
</style>
