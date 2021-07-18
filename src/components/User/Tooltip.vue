<template>
    <div class="tooltip">
        <div class="header">
            <div class="header-title">{{ prettyDate(day.day) }}</div>
            <span style="flex: 1"></span>
            <div class="prop" v-if="!state.animeOnly && day.chapters > 0">
                <div class="prop-value">{{ day.chapters }}</div>
                <div class="prop-desc" title="chapters">chap</div>
            </div>
            <div class="prop" v-if="!state.mangaOnly && day.episodes > 0">
                <div class="prop-value">{{ day.episodes }}</div>
                <div class="prop-desc" title="episodes">eps</div>
            </div>
            <div class="header-control" @click="close">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </div>
        </div>
        <div class="content">
            <SeriesItem v-for="(media, i) in day.media" :key="i" :media="media" tiny></SeriesItem>
        </div>
    </div>
</template>

<script lang="ts">
import { ActivityDay } from '@/interfaces/activity';
import { prettyDate } from '@/store/helpers';
import SeriesItem from '@/components/User/Details/SeriesItem.vue';

import { Options, Vue } from 'vue-class-component';
import store from '@/store/store';

@Options({
    props: {
        day: {} as ActivityDay
    },
    components: { SeriesItem }
})
export default class Tooltip extends Vue {
    state = store.state;
    day!: ActivityDay;
    prettyDate = prettyDate;

    close(): void {
        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
.tooltip {
    background: var(--color-background);
    border-radius: var(--radius);
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;

    background: var(--color-background-darker);
    border-radius: var(--radius);
}

.header-title {
    font-weight: 500;
    font-size: 1em;
}

.header-control {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 29px;
    height: 29px;

    text-align: center;
    border-radius: 3px;

    user-select: none;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background: var(--color-background-secondary);
    }

    &:active {
        opacity: 0.7;
    }
}

@media screen and (min-width: 901px) {
    .tooltip {
        width: 400px;
        box-shadow: 4px 8px 16px rgba(0,0,0,0.24)
    }
}
</style>