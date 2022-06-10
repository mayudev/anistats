<script lang="ts" setup>
import FontAwesomeIcon from '../FontAwesomeIcon.vue'

defineProps<{
  icon: string
  alt: string
}>()
</script>

<template>
  <FontAwesomeIcon :icon="icon" :alt="alt" :width="14"></FontAwesomeIcon>
</template>
