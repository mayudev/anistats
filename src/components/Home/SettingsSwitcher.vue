<template>
    <div class="switches">
        <div class="switch" v-for="(option, i) in options" :key="i" :class="{ selected: option == chosen }" @click="select(option)">{{ capitalize(option) }}</div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        options: Array,
        default: String
    }
    
})
export default class SettingsSwitcher extends Vue {
    cho: [] = [];
    default!: string;
    chosen: string = "";

    capitalize(option: string): string {
        return option[0].toUpperCase() + option.slice(1);
    }

    mounted(): void {
        this.chosen = this.default;
    }
    
    select(option: string): void {
        this.chosen = option;
        this.$emit('selection', option);
    }
}
</script>

<style lang="scss" scoped>
.switches {
    display: flex;
}

.switch {
    display: inline-block;
    background: var(--color-background-border);
    padding: 8px 12px;

    transition: .2s;
    user-select: none;

    &:first-child {
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }

    &:last-child {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }

    &:not(.selected):hover {
        background: var(--color-background-hover);
    }
}

.selected {
    background: var(--color-background-selected);
}

</style>