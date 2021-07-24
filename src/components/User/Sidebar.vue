<template>
    <div class="sidebar">
        <router-link class="a" to="/"><Logo size="2em"></Logo></router-link>
        <MenuItem icon="user-circle" to="">Overview</MenuItem>
        <MenuItem icon="random" to="/random">Series chooser</MenuItem>
        <div class="category" v-if="state.mediaType != 'manga'">
            <span class="category-header">Anime</span>
            <MenuItem icon="list" to="/list/anime">List</MenuItem>
            <MenuItem icon="history" to="/history/anime">History</MenuItem>
        </div>
        <div class="category" v-if="state.mediaType != 'anime'">
            <span class="category-header">Manga</span>
            <MenuItem icon="book-open" to="/list/manga">List</MenuItem>
            <MenuItem icon="history" to="/history/manga">History</MenuItem>
        </div>
        <span class="tiny">Toggle light mode</span>
        <router-link to="/s/about">
            <span class="tiny">About</span>
        </router-link>
        <router-link to="/s/help">
            <span class="tiny">Help</span>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/store/store';

import Logo from '@/components/Home/Logo.vue';
import MenuItem from '@/components/User/Sidebar/MenuItem.vue';

@Options({
    components: { Logo, MenuItem }
})
export default class Sidebar extends Vue {
    state = store.state;
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: sticky;
    top: 0;
}

.a {
    color: inherit;
    display: block;
    padding: 15px;
}

.category-header {
    display: block;
    padding: 8px 8px;
    font-weight: 500;
    font-size: 1.2em;

    border-bottom: 1px solid var(--color-background-selected);
}

.tiny {
    display: inline-block;
    color: var(--color-text-secondary);
    font-size: 0.85em;
    cursor: pointer;
    padding-right: 12px;
    
    &:hover {
        text-decoration: underline var(--color-text-secondary);
    }
}
</style>