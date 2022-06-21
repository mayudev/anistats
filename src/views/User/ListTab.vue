<script lang="ts" setup>
import { useUserStore } from '../../stores/user'
import SelectType from '../../components/layout/List/SelectType.vue'

const user = useUserStore()
</script>

<template>
  <div v-if="user.dataset === 'both'">
    <SelectType />
  </div>
</template>
