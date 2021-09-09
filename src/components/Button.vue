<template>
    <button class="btn">
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
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    appearance: none;
    font: inherit;
    color: inherit;
    background: none;
    outline: none;
    border: none;

    transition: .2s;
    cursor: pointer;

    span {
        padding-top: 5px;
    }
}
</style>