<template>
    <div class="main">
        <div>
            <Calendar></Calendar>
        </div>
        <DetailsContainer @loadRequest="load"></DetailsContainer>
        <!--<span v-for="(day, i) in state.activities" :key="i">
            {{ day.day.d }}
        </span>-->
    </div>
</template>

<script lang="ts">
import store from '@/store/store';

import { Options, Vue } from 'vue-class-component';
import DetailsContainer from '@/components/User/Details/DetailsContainer.vue';
import Calendar from '@/components/User/Calendar.vue';

@Options({
    components: { DetailsContainer, Calendar }
})
export default class Main extends Vue {
    state = store.state;

    load(): void {
        this.$emit('loadRequest');
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 15px;
}

button {
    align-self: flex-start;
}
</style>