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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/store';

import Logo from '@/components/Home/Logo.vue';
import MenuItem from '@/components/User/Sidebar/MenuItem.vue';
import { toggleTheme } from '@/store/helpers';

export default defineComponent({
    components: { Logo, MenuItem },

    data() {
        return {
            state: store.state
        }
    },

    methods: {
        emitToggle(): void {
            this.$emit('toggle');
        },

        toggleTheme(): void {
            toggleTheme();
        }
    }
})
</script>

<style lang="scss" scoped>
.sidebar {
    position: sticky;
    top: 0;
    background: var(--color-background);
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
    padding: 5px;
    margin: 0 5px;
    font-weight: 500;
}

@media screen and (max-width: 1020px) {
    .sidebar {
        width: 100%;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2)
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