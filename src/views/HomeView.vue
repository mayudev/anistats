<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const hey = ref(0)
const state = useCounterStore()

function increment() {
  hey.value++
}
</script>

<template>
  <main>
    <p>{{ hey }} {{ state.counter }}</p>
    <button @click="increment">increment</button>
    <button @click="state.increment">increment state</button>
  </main>
</template>
