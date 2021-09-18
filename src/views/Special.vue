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
import { defineComponent } from 'vue';

export default defineComponent({
    components: { Logo, Panel }
})
</script>

<style lang="scss" scoped>
a {
    color: inherit;
}

.content {
    padding-bottom: 62px;
}
</style>