<template>
    <div class="pager">
        <button class="pager-button pager-arrow" @click="$emit('set', current-1)">
            <font-awesome-icon icon="chevron-left"></font-awesome-icon>
        </button>
        <button class="pager-button" v-for="i in max" :key="i" @click="$emit('set', i-1)" :class="{ selected: current == i-1 }">
            {{ i }}
        </button>
        <button class="pager-button pager-arrow" @click="$emit('set', current+1)">
            <font-awesome-icon icon="chevron-right"></font-awesome-icon>
        </button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        current: Number,
        max: Number
    }
})
export default class Pagination extends Vue {
    current!: number;
    max!: number;
}
</script>

<style lang="scss" scoped>
.pager {
    display: flex;
    justify-content: center;
}

.pager-button {
    appearance: none;
    outline: none;
    border: none;
    color: inherit;
    background: inherit;
    font: inherit;

    padding: 8px;
    margin: 4px 2px;

    text-align: center;
    border-radius: 3px;

    font-weight: 500;

    cursor: arrow;

    transition: background .2s ease;

    &:not(.selected):hover {
        background: var(--color-selected-background);
    }
}

.pager-arrow {
    padding: 8px 24px;
    margin: 4px;
    background: var(--color-background-darker);
}

.selected {
    background: var(--color-selected-background);
    color: var(--color-selected-text)
}
</style>