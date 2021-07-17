<template>  
    <router-link :to="'/'+$route.params.user+to">
        <div class="menuitem">
            <font-awesome-icon :icon="icon" size="lg" fixed-width />
            <span class="label">
                <slot></slot>
            </span>
        </div>
    </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        to: String,
        icon: String
    }
})
export default class Name extends Vue {
    to!: string;
    icon!: string;
}
</script>

<style lang="scss" scoped>
.menuitem {
    background: inherit; // no idea why it's needed
    padding: 10px;
    margin: 5px;
    display: flex;
    align-items: center;

    border-radius: 5px;
    transition: background .1s;

    &:not(.router-link-exact-active):hover {
        background: var(--color-background-hover);
    }
}

.router-link-exact-active {
    background: var(--color-background-selected);
}

.label {
    padding-left: 15px;
    font-weight: 500;
}

a {
    color: inherit;
}
</style>