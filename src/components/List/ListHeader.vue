<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useListStore } from '../../stores/list'
import StatusChooserButton from './StatusChooser/StatusChooserButton.vue'
import StatusChooser from './StatusChooser/StatusChooser.vue'

const list = useListStore()

const query = ref('')
const showChooser = ref(false)

watch(query, () => {
  list.setSearchQuery(query.value)
})
</script>

<template>
  <div class="header">
    <StatusChooserButton @click="showChooser = !showChooser" />
    <input class="search" type="text" placeholder="Search..." v-model="query" />
  </div>
  <Transition name="picker">
    <StatusChooser v-if="showChooser" @pick="list.switchStatusFilter" />
  </Transition>
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
  color: inherit;
  font: inherit;

  width: min(100%, 400px);
  background: var(--color-background-secondary);
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);

  padding: 0.7rem 1rem;
  border-radius: 6px;
  font-size: 1.2rem;
}

// Transition
.picker-enter-from,
.picker-leave-to {
  transform: scale(0.9);
  opacity: 0;
}

.picker-enter-active,
.picker-leave-active {
  transition: 0.2s ease;
}
</style>
