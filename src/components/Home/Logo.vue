<template>
    <div class="logo" :style="{ fontSize: size }">
        <span class="blue">ani</span>
        <span>stats</span>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        size: String
    }
})
export default class Logo extends Vue {
    size!: string
}
</script>

<style lang="scss" scoped>
.logo {
    user-select: none;
}

.blue {
    color: #3391c0;
}
</style>