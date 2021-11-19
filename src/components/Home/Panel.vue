<template>
    <div class="footer-wrapper">
        <div class="footer">
            <span class="footer-link" @click="lightMode">Toggle theme</span>
            <span class="footer-link" @click="toggleSpecial('about')">About</span>
            <span class="footer-link" @click="toggleSpecial('help')">Help</span>
        </div>
    </div>
</template>

<script lang="ts">
import { toggleTheme } from '@/store/helpers';
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        lightMode(): void {
            toggleTheme();
        },

        toggleSpecial(e: string): void {
            this.$emit('special', e)
        }
    }
})
</script>

<style lang="scss" scoped>
.footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timestamp {
    color: var(--color-text-gray);
    font-size: 0.86em;
}
.footer-link {
    display: inline-block;
    background: var(--color-background-darker);
    color: var(--color-text-secondary);
    font-size: 0.85em;
    cursor: pointer;
    padding: 12px;
    margin: 12px 3px;
    border-radius: var(--radius);
    
    &:hover {
        text-decoration: underline var(--color-text-secondary);
    }
}
</style>