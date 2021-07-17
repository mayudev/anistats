<template>
    <div class="sidebar">
        <router-link class="a" to="/"><Logo size="2em"></Logo></router-link>
        <MenuItem icon="user-circle" to="">Overview</MenuItem>
        <MenuItem icon="list" to="/list/anime">Anime list</MenuItem>
        <MenuItem icon="book-open" to="/list/manga">Manga list</MenuItem>
        <MenuItem icon="random" to="/random">Series chooser</MenuItem>
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

import Logo from '@/components/Home/Logo.vue';
import MenuItem from '@/components/User/Sidebar/MenuItem.vue';

@Options({
    components: { Logo, MenuItem }
})
export default class Sidebar extends Vue {

}
</script>

<style lang="scss" scoped>
.a {
    color: inherit;
    display: block;
    padding: 15px;
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