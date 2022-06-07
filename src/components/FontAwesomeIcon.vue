<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { IconName } from '@fortawesome/fontawesome-svg-core'

const props = defineProps<{
  icon: string
  width: number
  type?: string
}>()

const definition = computed(() =>
  findIconDefinition({
    prefix: 'fas',
    iconName: props.icon as IconName,
  })
)

const width = computed(() => definition.value.icon[0])
const height = computed(() => definition.value.icon[1])
const svgPath = computed(() => definition.value.icon[4])
</script>

<template>
  <svg
    :style="{ width: props.width + 'px' }"
    xmlns="http://www.w3.org/2000/svg"
    :class="$props.class"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <path fill="currentColor" :d="(svgPath as string)" />
  </svg>
</template>
