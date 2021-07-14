<template>
    <button class="btn" :style="{ color }">
        <font-awesome-icon v-if="icon" :icon="icon" size="lg" fixed-width />
        <span><slot></slot></span>
    </button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        icon: String,
        color: String
    }
})
export default class Button extends Vue {
    icon!: string;
    color!: string;
}
</script>

<style lang="scss" scoped>
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    appearance: none;
    font: inherit;
    color: inherit;
    background: none;
    outline: none;
    border: none;

    transition: .2s;
    cursor: pointer;

    span {
        margin-left: 5px;
        font-size: 1.2em;
        font-weight: 500;
    }
}
</style>