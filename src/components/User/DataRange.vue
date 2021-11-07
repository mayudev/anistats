<template>
    <div class="datarange">
        <div class="header-title">Data range</div>
        <span style="flex: 1;"></span>
        <div class="header-button" @click="$emit('loadRequest')">
            <font-awesome-icon icon="redo-alt"></font-awesome-icon>
            <span class="button-label">Load more</span>
        </div>
        <span class="breaker"></span>
        <span class="header-range">{{ lastLoadedDay }} - today</span>
        <!--<span class="spacer"></span>
        <div class="header-button">
            <font-awesome-icon icon="question-circle"></font-awesome-icon>
        </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/store';
import { prettyDate } from '@/store/helpers';

export default defineComponent({
    data() {
        return {
            state: store.state
        }
    },

    computed: {
        lastLoadedDay(): string {
            return prettyDate(this.state.activities[this.state.activities.length-1].day);
        }
    }
})
</script>

<style lang="scss" scoped>
.datarange {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0 8px;
    margin-bottom: 12.944px;
    border-radius: var(--radius);
}

.header-title {
    font-weight: 500;
    font-size: 1.2em;
    padding: 8px 0;
}

.header-range {
    font-weight: 500;
    margin: 0 6px;
}

.header-button {
    padding: 8px;
    
    border-radius: var(--radius);
    background: var(--color-selected-background);
    color: var(--color-selected-text);
    font-weight: 500;

    transition: background .2s ease;
    cursor: pointer;
    user-select: none;

    &:hover {
        background: var(--color-background-border);
    }
}

.button-label {
    margin-left: 6px;
}

@media screen and (max-width: 600px) {
    .breaker {
        display: block;
        height: 0;
        width: 100%;
    }

    .spacer {
        flex: 1;
    }

    .header-title {
        padding: 0;
    }

    .header-button {
        background: inherit;
    }

    .header-range {
        font-weight: normal;
        margin: 0;
    }
}
</style>