<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useListStore } from '../../stores/list'
import ListStatusChooser from './ListStatusChooser.vue'

const list = useListStore()

const query = ref('')

watch(query, () => {
  list.setSearchQuery(query.value)
})
</script>

<template>
  <div class="header">
    <ListStatusChooser />
    <input class="search" type="text" placeholder="Search..." v-model="query" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;

  margin: 1rem;
}

.search {
  outline: none;
  border: none;
  color: inherit;
  font: inherit;

  width: min(100%, 400px);
  background: var(--color-background-secondary);
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);

  padding: 0.7rem 1rem;
  border-radius: 6px;
  font-size: 1.2rem;
}
</style>
