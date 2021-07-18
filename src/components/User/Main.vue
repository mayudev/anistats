<template>
    <div class="main">
        <transition name="popup">
            <div class="popup" v-if="showTooltip" @click="popupHide"></div>
        </transition>
        
        <div>
            <Calendar @popup="showPopup" @error="showError" @dynamicPopup="fetchPopup"></Calendar>
            <transition name="easein">
                <div v-if="showTooltip" class="tooltip" :style="{ top: tooltipY+'px', left: tooltipX+'px' }">
                    <Tooltip :day="tooltipActivities" @close="popupHide"></Tooltip>
                </div>
            </transition>
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
import Tooltip from '@/components/User/Tooltip.vue';

import { ActivityDay } from '@/interfaces/activity';

@Options({
    components: { DetailsContainer, Calendar, Tooltip }
})
export default class Main extends Vue {
    state = store.state;

    showTooltip: boolean = false;
    tooltipX: number = 0;
    tooltipY: number = 0;
    tooltipActivities: ActivityDay = {} as ActivityDay;

    load(): void {
        this.$emit('loadRequest');
    }

    showPopup(e: { activities: ActivityDay, event: MouseEvent }): void {
        this.showTooltip = false;
        
        this.tooltipX = e.event.pageX - 200;
        this.tooltipY = e.event.pageY + 20;
        this.tooltipActivities = e.activities;
        
        this.showTooltip = true;
    }

    fetchPopup(e: any): void {
        //console.log(e);
    }

    showError(e: any): void {
        //console.log(e);
    }

    popupHide(): void {
        this.showTooltip = false;
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-columns: 50% 50%;
}

.tooltip {
    position: absolute;
    z-index: 2;
}

button {
    align-self: flex-start;
}

.popup {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

// transition


@media screen and (max-width: 900px) {
    .tooltip { 
        left: 0 !important;
        right: 0;
        top: auto !important;
        bottom: 0;

        margin: 5px;
    }

    .popup {
        z-index: 2;
        background: rgba(0,0,0,.7);
    }

    .easein-enter-from, .easein-leave-to {
        transform: translateY(50vw);
        opacity: 0;
    }

    .easein-enter-active, .easein-leave-active {
        transition: .3s ease;
    }

    .popup-enter-from, .popup-leave-to {
        opacity: 0;
    }

    .popup-enter-active, .popup-leave-active {
        transition: .3s ease-in-out;
    }
}

@media screen and (min-width: 901px) {
    .easein-enter-from {
        transform: translateX(-20px);
    }

    .easein-enter-active {
        transition: .2s;
    }
}
</style>