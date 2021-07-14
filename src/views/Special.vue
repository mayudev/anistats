<template>
    <div class="container">
        <router-link to="/"><Logo size="3em"></Logo></router-link>
        <div class="content">
            <router-view></router-view>
        </div>
        
        <footer>
            <Panel></Panel>
        </footer>
    </div>
</template>

<script lang="ts">
import Logo from '@/components/Home/Logo.vue';
import Panel from '@/components/Home/Panel.vue';

import { Options, Vue } from "vue-class-component";

@Options({
    components: { Logo, Panel }
})
export default class Special extends Vue { }
</script>

<style lang="scss" scoped>
a {
    color: inherit;
}

.content {
    padding-bottom: 62px;
}
</style>