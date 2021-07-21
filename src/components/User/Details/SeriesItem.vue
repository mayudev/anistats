<template>
    <div class="item">
        <img class="image" :alt="'Cover image of '+media.title" :src="media.cover">
        <span class="title" :title="media.title">{{ media.title }}</span>
        <span style="flex: 1;"></span>
        <div class="prop">
            <span class="prop-value">{{ media.episodes }}</span>
            <span class="prop-desc">{{ media.type === 'ANIME' ? 'episodes' : 'chapters' }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ActivityMedia } from '@/interfaces/activity';

@Options({
    props: {
        media: {} as ActivityMedia
    }
})
export default class SeriesItem extends Vue {
    media!: ActivityMedia;
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;

    transition: .2s;
    cursor: pointer;

    padding: 10px 2px 10px 12px; 

    &:hover {
        background: var(--color-background-darker);
        color: var(--color-text-blue);
    }
}

.image {
    object-fit: cover;
    border-radius: 3px;
    min-width: 36px;
    width: 36px;
    height: 36px;

    margin-right: 12px;
}

.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>