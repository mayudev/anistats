<template>
    <div v-if="loading">
        <CheapLoading></CheapLoading>
    </div>
    <div class="entries" v-else>
        <div class="entry header">
            <div class="entry-date">
                {{ added }}
            </div>
            <div class="entry-value">
                Added
            </div>
        </div>
        <div class="entry" v-for="(day, i) in activities" :key="i">
            <div class="entry-date">
                {{ prettyDate(day.day)}}
            </div>
            <div class="entry-prop">
                <span class="entry-value">{{ media.type == 'ANIME' ? day.episodes : day.chapters }}</span>
                <span class="entry-desc">{{ media.type == 'ANIME' ? ' episodes' : ' chapters' }}</span>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import store, { weekdays } from '@/store/store';

import { ActivityDate, ActivityDay, ActivityMedia } from '@/interfaces/activity';
import CheapLoading from '@/components/CheapLoading.vue';

import { Options, Vue } from 'vue-class-component';
import { fetchMedia } from '@/store/api';
import { findAddedDate, prettyDate } from '@/store/helpers';

@Options({
    props: {
        media: {} as ActivityMedia
    },
    components: { CheapLoading }
})
export default class SeriesDetails extends Vue {
    media!: ActivityMedia;
    state = store.state;
    prettyDate = prettyDate;

    activities: ActivityDay[] = [];
    added: string = "Unknown";

    loading: boolean = true;

    mounted(): void {
        fetchMedia(this.state.userData.id, this.media.id)
        .then(resp => {
            const rawActivities = resp.data.Page.activities;
            this.activities = store.parseActivities(rawActivities);

            if(typeof this.media.added == 'undefined') {
                this.added = findAddedDate(rawActivities);   
            } else {
                this.added = (this.media.added.time == 0 ? 'Unknown' : prettyDate(this.media.added));
            }

            this.loading = false;
        })
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    padding: 8px;
    border-bottom: 1px solid var(--color-background-selected);

    font-weight: 500;
}

.entry {
    display: flex;
    align-items: center;
    justify-content: space-between;

    //border-bottom: 1px solid var(--color-background-border);
    padding: 8px;
}

.entry:nth-child(even) {
    background: var(--color-background-darker);
}

.entry:last-child {
    border-bottom: none;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
}

.entry-date {
    font-size: .86em;
}

.entry-prop {
    display: flex;
}

.entry-value {
    margin-right: 3.24px;
}

.entry-desc {
    color: var(--color-text-secondary);
    font-size: .86em;
}
</style>