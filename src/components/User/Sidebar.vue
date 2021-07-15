<template>
    <div class="sidebar">
        <router-link to="/"><Logo size="2em"></Logo></router-link>
        <MenuItem to="">Overview</MenuItem>
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
a {
    color: inherit;
}
</style>