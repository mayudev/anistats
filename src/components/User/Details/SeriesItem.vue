<template>
    <div class="item-wrapper">
        <div class="item" @click="toggleDisplay">
            <img class="image" :alt="'Cover image of '+media.title" :src="media.cover">
            <span class="title" :title="media.title">{{ media.title }}</span>
            <span style="flex: 1;"></span>
            <div class="prop">
                <span class="prop-value">{{ media.episodes }}</span>
                <span class="prop-desc">{{ media.type === 'ANIME' ? 'episodes' : 'chapters' }}</span>
            </div>
        </div>
        <transition name="details">
            <SeriesDetails v-if="details && !hide" :media="media"></SeriesDetails>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SeriesDetails from './SeriesDetails.vue';

export default defineComponent({
    props: {
        media: Object,
        hide: Boolean
    },

    components: { SeriesDetails },

    data() {
        return {
            details: false
        }
    },

    watch: {
        hide: function(val) {
            this.details = !val;
        }
    },

    methods: {
        toggleDisplay(): void {
            this.$emit('toggle');
            this.details = !this.details;
        }
    }

})
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;

    transition: .2s;
    cursor: pointer;

    padding: 10px 2px 10px 12px; 

    &:hover {
        background: var(--color-selected-background);
        color: var(--color-selected-text);
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

.details-enter-from, .details-leave-to {
    transform: scale(0.9);
    opacity: 0;
}
.details-enter-active, .details-leave-active {
    transition: .2s ease;
}
</style>