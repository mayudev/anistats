<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const root = ref<HTMLDivElement | null>(null)

const emit = defineEmits<{
  (event: 'intersect'): void
}>()

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit('intersect')
    }
  })

  observer.observe(root.value!)
})

onUnmounted(() => {
  console.log('byeby')

  observer.disconnect()
})
</script>

<template>
  <div class="root" ref="root"></div>
</template>
