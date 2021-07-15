<template>
    <router-link :to="'/'+$route.params.user+to">
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        to: String,
        label: String
    }
})
export default class Name extends Vue {
    to!: string;
    label!: string;
}
</script>

<style lang="scss" scoped>

</style>