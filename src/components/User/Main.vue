<template>
    <div class="main">
        <transition name="popup">
            <div class="popup" v-if="showTooltip" @click="popupHide"></div>
        </transition>
        
        <div>
            <Calendar @popup="showPopup" @error="showError" @dynamicPopup="fetchPopup"></Calendar>
            <div class="tooltipct">
                <transition name="easein" mode="in-out">
                    <div v-if="showTooltip" class="tooltip">
                        <Tooltip :day="tooltipActivities" @close="popupHide"></Tooltip>
                    </div>
            </transition>
            </div>
            
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
        
        //this.tooltipX = e.event.pageX - 200;
        //this.tooltipY = e.event.pageY + 20;
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
.tooltip {
    z-index: 2;
    flex-grow: 1;
    max-width: 100%;
}

.tooltipct {
    z-index: 2;
}

button {
    align-self: flex-start;
}

.popup {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

// POPUP

.popup {
    z-index: 2;
    background: rgba(0,0,0,.7);
}

.popup-enter-from, .popup-leave-to {
    opacity: 0;
}

.popup-enter-active, .popup-leave-active {
    transition: .1s ease-in-out;
}

// transitions

.easein-enter-from, .easein-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.easein-enter-active, .easein-leave-active {
    transition: .2s ease;
}

@media screen and (max-width: 900px) {
    .tooltipct {
        position: fixed;
        bottom: 10px;
        left: 10px;
        right: 10px;
    }
}

@media screen and (min-width: 901px) {
    .main {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .tooltipct {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>