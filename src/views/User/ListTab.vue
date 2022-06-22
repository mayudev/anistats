<script lang="ts" setup>
import { useUserStore } from '../../stores/user'
import SelectType from '../../components/List/SelectType.vue'
import { useListStore } from '../../stores/list'
import { onMounted } from 'vue'
import LoadingSpinner from '../../components/layout/LoadingSpinner.vue'
import ListContainer from '../../components/List/ListContainer.vue'
import ListHeader from '../../components/List/ListHeader.vue'

const user = useUserStore()
const list = useListStore()

onMounted(() => {
  ensureList()
})

user.$subscribe(() => {
  ensureList()
})

const ensureList = async () => {
  list.resetPage()

  if (user.dataset === 'anime') {
    if (list.animeList.length === 0) await list.fetchMediaList('ANIME')
  } else if (user.dataset === 'manga') {
    if (list.mangaList.length === 0) await list.fetchMediaList('MANGA')
  }
}
</script>

<template>
  <div v-if="user.dataset === 'both'">
    <SelectType />
  </div>
  <div v-else>
    <ListHeader />
    <button @click="() => list.switchStatusFilter('CURRENT')">current</button>
    <button @click="() => list.switchStatusFilter('PLANNING')">planning</button>
    <button @click="() => list.switchStatusFilter('COMPLETED')">
      completed
    </button>
    <div class="center" v-if="list.status === 'busy'">
      <LoadingSpinner :width="24" :border-width="2" />
    </div>
    <div v-else>
      <ListContainer :list="list.list" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
