<template>
    <div class="special" @click="popupHide">
        <div class="dialog" @click="popupClick">
            <div class="header">
                <div class="header-title">{{ view[0].toUpperCase()+view.slice(1) }}</div>
                <span style="flex: 1"></span>
                <div class="header-control" @click="popupHide">
                    <font-awesome-icon icon="times"></font-awesome-icon>
                </div>
            </div>
            <div class="content">
                <component :is="view"></component>
            </div>
        </div>  
    </div>

</template>

<script lang="ts">
import About from '@/components/Special/About.vue';
import Help from '@/components/Special/Help.vue';

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        view: String
    },
    components: { About, Help },

    methods: {
        popupHide() {
            this.$emit('hide');
        },

        popupClick(e: MouseEvent) {
            e.stopPropagation();
        }
    }
})
</script>

<style lang="scss" scoped>
.special {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    position: fixed;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.5);
}

.dialog {
    max-width: 1080px;

    background: var(--color-background);
    border-radius: var(--radius);
    overflow: hidden;
}

// HEADER 
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;

    background: var(--color-background-darker);
    border-radius: var(--radius);
}

.header-title {
    font-weight: 500;
    font-size: 1em;
}

.header-control {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 36px;
    height: 36px;

    text-align: center;
    border-radius: 3px;

    user-select: none;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background: var(--color-background-secondary);
    }

    &:active {
        opacity: 0.7;
    }
}

a {
    color: inherit;
}

.content {
    max-height: 80vh;
    overflow-y: auto;
    padding: 0 16px 16px 16px;
}
</style>