<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '../buttons/IconButton.vue'

defineProps<{
  isError?: boolean
  isLoading?: boolean
}>()

const emit = defineEmits<{
  (e: 'errored', value: string): void
  (e: 'submit', value: string): void
}>()

const username = ref('')

const submit = () => {
  // Check username length
  if (username.value.length < 2) {
    emit('errored', 'Username too short')
  } else {
    emit('submit', username.value)
  }
}
</script>

<template>
  <div class="container">
    <input
      class="username-input"
      :class="{ error: isError, loading: isLoading }"
      placeholder="Enter username"
      type="text"
      v-model="username"
      @keyup.enter="() => submit()"
    />
    <IconButton icon="angle-right" @click="() => submit()">Continue</IconButton>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
.username-input {
  all: unset;
  box-sizing: border-box;
  flex-grow: 1;

  padding: 10px;
  font-size: 2em;
  font-weight: 300;

  border-bottom: 3px solid var(--color-background-border);
  transition: border-bottom 0.5s;
}
.username-submit {
  all: unset;
  text-align: center;
}
.error {
  border-color: var(--color-error);
}
.loading {
  animation: loading 0.5s ease infinite alternate;
}

@keyframes loading {
  from {
    border-color: transparent;
  }
  to {
    border-color: var(--color-accent);
  }
}
</style>
