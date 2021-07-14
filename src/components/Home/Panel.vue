<template>
    <div class="panel">
        <span class="button">
            <router-link to="/s/help">
                <Button icon="question-circle">Help</Button>
            </router-link>
        </span>
        <span class="button">
            <Button icon="lightbulb">Light mode</Button>
        </span>
        <span class="button">
            <router-link to="/s/about">
                <Button icon="info">About</Button>
            </router-link> 
        </span>
    </div>
</template>

<script lang="ts">
import Button from '@/components/Button.vue';

import { Options, Vue } from 'vue-class-component';

@Options({
    components: { Button }
})
export default class Panel extends Vue {

}
</script>

<style lang="scss" scoped>
.panel {
    background: #3391c0;
    box-shadow: var(--shadow-default);
    border-radius: 6px;
}

.button {
    display: inline-block;
    padding: 5px;
    text-align: center;
}

a {
    color: inherit;
}

@media screen and (min-width: 500px) {
    .panel {
        margin-bottom: 20px;
    }
    .button {
        width: 150px;
    }
}

@media not screen and (min-width: 500px) {
    .panel {
        width: 100%;
        text-align: center;
        border-radius: 0;
    }

    .button {
        padding: 10px;
    }
}
</style>