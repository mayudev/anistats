<template>
    <div>
        <button @click="load">Load!</button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Main extends Vue {
    load(): void {
        this.$emit('loadRequest');
    }
}
</script>

<style lang="scss" scoped>

</style>