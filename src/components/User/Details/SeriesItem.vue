<template>
    <div class="item" :class="[media.type, (tiny ? 'tiny' : '')]">
        <img class="image" :alt="'Cover image of '+media.title" :src="media.cover">
        <span class="title" :title="media.title">{{ media.title }}</span>
        <span style="flex: 1;"></span>
        <div class="prop">
            <span class="prop-value">{{ media.episodes }}</span>
            <span class="prop-desc">{{ media.type === 'ANIME' ? episodes : chapters }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ActivityMedia } from '@/interfaces/activity';

@Options({
    props: {
        media: {} as ActivityMedia,
        tiny: Boolean
    }
})
export default class SeriesItem extends Vue {
    media!: ActivityMedia;
    tiny!: boolean;
    
    get episodes(): string {
        return (this.tiny ? 'eps' : 'episodes')
    }

    get chapters(): string {
        return (this.tiny ? 'chap' : 'chapters')
    }
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;

    transition: .2s;
    cursor: pointer;

    &:hover {
        background: var(--color-background-darker);
        color: var(--color-text-blue);
    }
}

.item:not(.tiny) {
    padding: 10px 2px 10px 12px; 
}

.tiny {
    padding: 5px 1px 5px 8px;
}

.image {
    object-fit: cover;
    border-radius: 3px;
}

.image:not(.tiny) {
    min-width: 36px;
    width: 36px;
    height: 36px;

    margin-right: 12px;
}

.tiny .image {
    min-width: 24px;
    width: 24px;
    height: 24px;

    margin-right: 8px;
}

.title:not(.tiny) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tiny .title {
    overflow: hidden;
}
</style>