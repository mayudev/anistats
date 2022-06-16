<script setup lang="ts">
import { useUserStore } from '../../stores/user'

const user = useUserStore()
</script>

<template>
  <p>overview tab</p>
  <div>
    <div v-for="activity in user.days" :key="activity[0]">
      {{ activity[1].totalEpisodes }} - {{ new Date(activity[0]) }}
      <div v-for="media in activity[1].media" :key="media.id">
        {{ media.title }} - {{ media.progress }}
      </div>
    </div>
  </div>
  <button @click="() => user.fetchActivities()">fetch</button>
</template>

<style lang="scss" scoped></style>
