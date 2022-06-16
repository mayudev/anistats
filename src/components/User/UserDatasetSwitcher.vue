<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>
<template>
  <div>
    <button
      class="tab"
      :class="{ both: user.dataset === 'both' }"
      @click="() => user.switchDataset('both')"
    >
      Both
    </button>
    <button
      class="tab"
      :class="{ anime: user.dataset === 'anime' }"
      @click="() => user.switchDataset('anime')"
    >
      Anime
    </button>
    <button
      class="tab"
      :class="{ manga: user.dataset === 'manga' }"
      @click="() => user.switchDataset('manga')"
    >
      Manga
    </button>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  padding: 0.5rem 1rem;
  border-radius: 20px;

  text-decoration: none;
  font-weight: 500;

  transition: opacity 200ms, color var(--theme-transition);
  cursor: pointer;
}

button {
  all: unset;
  cursor: pointer;
}

button:focus {
  text-decoration: underline;
}

.both {
  color: var(--color-pink);
  background: var(--c-pink-bg);
}

.anime {
  color: var(--color-blue);
  background: var(--c-blue-bg);
}

.manga {
  color: var(--color-orange);
  background: var(--c-orange-bg);
}
</style>
