<template>
    <div class="container">
        <Logo size="3em"></Logo>
        <div class="loading">Loading...</div>
    </div>
</template>

<script lang="ts">
import Logo from '@/components/Home/Logo.vue';

import { Options, Vue } from "vue-class-component";

@Options({
    components: { Logo }
})
export default class Loading extends Vue {

}
</script>

<style lang="scss" scoped>
.loading {
    font-size: 3em;
    font-weight: 500;
    padding: 10px;
    border-bottom: 3px solid;

    animation: pulse 2s linear infinite;
}
</style>