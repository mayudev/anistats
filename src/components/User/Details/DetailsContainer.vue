<template>
    <div class="details">
        <div class="group" v-for="(day, i) in state.activities" :key="i">
            <div class="group-header">
                <div class="date-group">
                    <span class="weekday">{{ day.day.weekday }}</span>
                    <span class="date">{{ prettyDate(day.day) }}</span>
                </div>
                
                <span style="flex: 1"></span>
                <div class="prop" v-if="!state.animeOnly">
                    <div class="prop-value">{{ day.chapters }}</div>
                    <div class="prop-desc">chapters</div>
                </div>
                <div class="prop" v-if="!state.mangaOnly">
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

import { Options, Vue } from 'vue-class-component';

@Options({
    components: { SeriesItem }
})
export default class DetailsContainer extends Vue {
    state = store.state;
    prettyDate = prettyDate 
}
</script>

<style lang="scss" scoped>
.group {
    box-shadow: 0 4px 10px rgba(0,0,0,.25);
    border-radius: var(--radius);
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
        background: var(--color-background-selected);
    }
}
</style>