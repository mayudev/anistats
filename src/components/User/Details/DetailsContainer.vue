<template>
    <div class="details">
        <div class="title">
            Timeline
        </div>
        <div class="group" v-for="(day, i) in state.activities" :key="i">
            <div class="group-header">
                <div class="date-group">
                    <span class="weekday">{{ day.day.weekday }}</span>
                    <span class="date">{{ prettyDate(day.day) }}</span>
                </div>
                
                <span style="flex: 1"></span>
                <div class="prop" v-if="state.mediaType != 'anime'">
                    <div class="prop-value">{{ day.chapters }}</div>
                    <div class="prop-desc">chapters</div>
                </div>
                <div class="prop" v-if="state.mediaType != 'manga'">
                    <div class="prop-value">{{ day.episodes }}</div>
                    <div class="prop-desc">episodes</div>
                </div>
            </div>
            <SeriesItem v-for="(media, i) in day.media" :key="i" :media="media"></SeriesItem>
        </div>
        <button class="button group" @click="$emit('loadRequest')">
            More...
        </button>
    </div>
</template>

<script lang="ts">
import store from '@/store/store';
import { prettyDate } from '@/store/helpers';

import SeriesItem from './SeriesItem.vue';

import { defineComponent } from 'vue';

export default defineComponent({
    components: { SeriesItem },

    data() {
        return {
            state: store.state,
            prettyDate
        }
    }
})
</script>

<style lang="scss" scoped>
@media screen and (min-width: 901px) {
    .details {
        padding: 12.944px;
        background: var(--color-selected-background);
        border-left: 1px solid var(--color-background-border);
    }
}

@media screen and (max-width: 900px) {
    .details {
        margin: 12.944px 10px;
    }
}

.title {
    margin-bottom: 12.944px;
    font-weight: 500;
    font-size: 1.2em;
}

.group {
    box-shadow: 0 4px 10px rgba(0,0,0,.25);
    background: var(--color-background);
    border-radius: var(--radius);
    overflow: hidden;

    margin-bottom: 12.944px;
}

.group-header {
    background: var(--color-background-darker);
    border-radius: var(--radius);

    display: flex;
    align-items: center;

    padding: 8px 12.944px;
}

.weekday {
    display: block;
    font-size: 0.86em;
    padding-right: 3px;
    color: var(--color-text-secondary);
}

.date {
    display: block;
    font-weight: 500;
}

.button {
    appearance: none;
    font: inherit;
    color: inherit;
    outline: none;
    border: none;
    display: block;

    background: var(--color-background-darker);
    border-radius: var(--radius);
    text-align: center;
    padding: 12px;
    width: 100%;
    font-weight: 500;

    transition: .2s;
    cursor: pointer;

    &:hover {
        background: var(--color-selected-background);
        color: var(--color-selected-text);
    }
}
</style>