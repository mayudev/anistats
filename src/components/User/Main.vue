<template>
    <div class="main">
        <transition name="popup-backdrop">
            <div class="popup" v-if="showTooltip" @click="popupHide"></div>
        </transition>
        
        <div class="left">
            <DataRange></DataRange>
            <Calendar @popup="showPopup" @error="showError" @dynamicPopup="fetchPopup"></Calendar>
            <div class="tooltipct">
                <transition name="easein" mode="in-out">
                    <div v-if="showTooltip" class="tooltip">
                        <Tooltip :day="tooltipActivities" @close="popupHide" :loading="popupLoading"></Tooltip>
                    </div>
            </transition>
            </div>
            
        </div>
        <DetailsContainer @loadRequest="load"></DetailsContainer>
    </div>
</template>

<script lang="ts">
import store from '@/store/store';

import { Options, Vue } from 'vue-class-component';
import DetailsContainer from '@/components/User/Details/DetailsContainer.vue';
import Calendar from './Calendar.vue';
import DataRange from './DataRange.vue'
import Tooltip from './Tooltip.vue';

import { ActivityDay } from '@/interfaces/activity';
import { fetchActivity } from '@/store/api';

@Options({
    components: { DetailsContainer, Calendar, Tooltip, DataRange }
})
export default class Main extends Vue {
    state = store.state;

    showTooltip: boolean = false;
    tooltipActivities: ActivityDay = {} as ActivityDay;

    popupLoading: boolean = false;

    load(): void {
        this.$emit('loadRequest');
    }

    // Show popup using already loaded data
    showPopup(e: { activities: ActivityDay, event: MouseEvent }): void {
        this.showTooltip = false;
        this.tooltipActivities = e.activities;
        
        this.showTooltip = true;
    }

    // Show popup having loaded data
    fetchPopup(e: { event: MouseEvent, d: number, m: number, y: number}): void {
        this.popupLoading = true;
        this.showTooltip = true;
        let date = new Date(e.y, e.m-1, e.d);

        // Get timestamp of the beginning and the end of this day.
        // Converting to AniList time and adding hours according to user's preferences.
        const begin = (date.getTime()/1000)+this.state.updateHour*3600;
        const end = begin+86400; // add 24 hours to the beginning timestamp
        
        fetchActivity(this.state.userData.id, 1, this.state.mediaType, begin, end)
        .then(resp => {
            const activities = store.parseActivities(resp.data.Page.activities);
            this.tooltipActivities = activities[0];

            if(activities.length == 0) this.showTooltip = false;
            else this.popupLoading = false;
        })
    }

    showError(e: any): void {
        console.log(e);
    }

    popupHide(): void {
        this.showTooltip = false;
    }
}
</script>

<style lang="scss" scoped>
.left {
    margin: 12.944px 10px;
}
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
        grid-template-columns: 55% 45%;
    }

    .tooltipct {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>