<script lang="ts" setup>
import type { MediaDiff } from '../../stores/helpers/activities'

defineProps<{
  media: MediaDiff
}>()
</script>

<template>
  <div>{{ media.title.romaji }} - {{ media.progress }} {{ media.type }}</div>
</template>
