<script lang="ts" setup>
import { useUserStore } from '../../stores/user'
import SelectType from '../../components/layout/List/SelectType.vue'
import { useListStore } from '../../stores/list'
import { onMounted } from 'vue'

const user = useUserStore()
const list = useListStore()

onMounted(() => {
  list.fetchMediaList('MANGA')
})
</script>

<template>
  <div v-if="user.dataset === 'both'">
    <SelectType />
  </div>
</template>
