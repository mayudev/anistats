<script lang="ts" setup>
import { useUserStore, type Dataset } from '../../../stores/user'

const user = useUserStore()

const pick = (type: Dataset) => {
  user.switchDataset(type)
}
</script>

<template>
  <div class="select">
    <div class="select-message">Select which list you want to see:</div>
    <div class="select-buttons">
      <button class="button-anime" @click="() => pick('anime')">Anime</button>
      <button class="button-manga" @click="() => pick('manga')">Manga</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 1rem;
}

.select-message {
  font-size: 1.5rem;
}

.select-buttons {
  display: flex;
}

button {
  font: inherit;
  color: inherit;
  background: inherit;

  border: none;
  outline: none;

  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 20px;

  font-weight: 500;
  font-size: 1rem;

  transition: transform 200ms, background var(--theme-transition);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
}
.button-anime {
  color: var(--color-blue);
  background: var(--c-blue-bg);
}

.button-manga {
  color: var(--color-orange);
  background: var(--c-orange-bg);
}
</style>
