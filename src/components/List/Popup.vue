<template>
    <div class="popup" @click="$event.stopPropagation()">
        <div class="header" :style="{ backgroundImage: 'url('+media.banner+')' }">
            <img class="header-image" :src="media.cover">
            <a :href="'https://anilist.co/'+media.type.toLowerCase()+'/'+media.id" target="_blank" rel="nofollow"><div class="header-title">{{ media.title }}</div></a>
            <span style="flex: 1"></span>
            <div class="header-control" @click="close">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </div>
        </div>
        <div class="content">
            <SeriesDetails :media="media"></SeriesDetails>
        </div>
    </div>
</template>

<script lang="ts">
import store from '@/store/store';
import { defineComponent } from 'vue';

import SeriesDetails from '@/components/User/Details/SeriesDetails.vue';

export default defineComponent({
    props: {
        media: {}
    },

    components: { SeriesDetails },
    
    data() {
        return {
            state: store.state
        }
    },

    methods: {
        close(): void {
            this.$emit('close');
        }
    }
})
</script>

<style lang="scss" scoped>
.popup {
    background: var(--color-background);
    border-radius: var(--radius);

    z-index: 2;
    overflow: hidden;
}

.header {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 16px;

    background: var(--color-background-darker);
    border-radius: var(--radius);

    height: 100px;
    background-size: cover;
}

.header-image {
    width: auto;
    height: 80px;
    object-fit: cover;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--radius);
    margin-right: 6px;
}

a {
    color: inherit;
}

.header-title {
    font-weight: 500;
    font-size: 1em;

    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    padding: 8px;
    border-radius: var(--radius);
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

    margin-left: 6px;

    &:hover {
        background: var(--color-background-secondary);
    }

    &:active {
        opacity: 0.7;
    }
}

.header-title, .header-control {
    background: rgba(0, 0, 0, 0.4);
}

.content {
    max-height: 70vh;
    overflow-y: auto;
}

@media screen and (max-width: 900px) {
    .popup {
        margin: 10px;
        width: 100%;
    }
}

@media screen and (min-width: 901px) {
    .popup {
        min-width: 500px;
        max-width: 960px;
    }
}
</style>