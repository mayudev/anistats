<template>
    <div class="logo" :style="{ fontSize: size }">
        <span class="blue">ani</span>
        <span>stats</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        size: String
    }
})
</script>

<style lang="scss" scoped>
.logo {
    user-select: none;
}

.blue {
    color: #3391c0;
}
</style>