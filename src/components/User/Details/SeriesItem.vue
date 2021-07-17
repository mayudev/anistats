<template>
    <div class="item" :class="media.type">
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

.ANIME {
    //border-left: 2px solid var(--color-text-blue);
}

.MANGA {
    //border-left: 2px solid var(--color-text-red);
}
.image {
    min-width: 36px;
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 3px;

    margin-right: 12px;
}

.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>