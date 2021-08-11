<template>
    <div class="sidebar">
        <div class="header">
            <div class="header-icon" @click="emitToggle">
                <font-awesome-icon icon="bars" size="lg" />
            </div>
        </div>
        <router-link class="a" to="/"><Logo size="2em"></Logo></router-link>
        <MenuItem @click="emitToggle" icon="user-circle" to="">Overview</MenuItem>
        <div class="category" v-if="state.mediaType != 'manga'">
            <span class="category-header">Anime</span>
            <MenuItem @click="emitToggle" icon="list" to="/list/anime">List</MenuItem>
            <MenuItem @click="emitToggle" icon="history" to="/history/anime">History</MenuItem>
        </div>
        <div class="category" v-if="state.mediaType != 'anime'">
            <span class="category-header">Manga</span>
            <MenuItem @click="emitToggle" icon="book-open" to="/list/manga">List</MenuItem>
            <MenuItem @click="emitToggle" icon="history" to="/history/manga">History</MenuItem>
        </div>
        <span class="tiny" @click="toggleTheme">Toggle light mode</span>
        <router-link @click="emitToggle" to="/s/about">
            <span class="tiny">About</span>
        </router-link>
        <router-link @click="emitToggle" to="/s/help">
            <span class="tiny">Help</span>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/store/store';

import Logo from '@/components/Home/Logo.vue';
import MenuItem from '@/components/User/Sidebar/MenuItem.vue';
import { toggleTheme } from '@/store/helpers';

@Options({
    components: { Logo, MenuItem }
})
export default class Sidebar extends Vue {
    state = store.state;

    emitToggle(): void {
        this.$emit('toggle');
    }

    toggleTheme(): void {
        toggleTheme();
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: sticky;
    top: 0;
    background: var(--color-background);

    //animation: appear .2s cubic-bezier(0.6, 0.05, 0.28, 0.91);
}

.header {
    padding: 8px;
}

.header-icon {
    padding: 10px;
    margin-right: 8px;

    border-radius: var(--radius);
    transition: .2s;

    &:hover {
        background: var(--color-background-darker)
    }
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
    background: var(--color-background-darker);
    color: var(--color-text-secondary);
    font-size: 0.85em;
    cursor: pointer;
    padding: 12px;
    margin: 3px;
    border-radius: var(--radius);
    
    &:hover {
        text-decoration: underline var(--color-text-secondary);
    }
}

@media screen and (max-width: 1020px) {
    .sidebar {
        min-width: 300px;
    }

    .menuitem {
        padding: 12px 10px;
        margin: 3px;
    }

    .a {
        display: none;
    }
}

@media screen and (min-width: 1021px) {
    .header {
        display: none;
    }
}

@keyframes appear {
    from {
        transform: translateX(-300px);

    }

    to {
        transform: translateX(0px);
    }
}
</style>