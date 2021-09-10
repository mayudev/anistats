<template>
    <div class="calendar">
        <div class="header">
            <div class="header-title">Calendar</div>
            <span style="flex: 1;"></span>
            <span class="header-month">{{ displayMonth }} {{ y }}</span>
            <div class="header-control" @click="update(-1)">
                <font-awesome-icon icon="chevron-left"></font-awesome-icon>
            </div>
            <div class="header-control" @click="update(1)">
                <font-awesome-icon icon="chevron-right"></font-awesome-icon>
            </div>
        </div>
        <div class="display">
            <div class="weekdays">
                <div class="weekday">Sun</div>
                <div class="weekday">Mon</div>
                <div class="weekday">Tue</div>
                <div class="weekday">Wed</div>
                <div class="weekday">Thu</div>
                <div class="weekday">Fri</div>
                <div class="weekday">Sat</div>
            </div>
            <div class="days">
                <div class="day" 
                    v-for="(day, i) in days" :key="i" 
                    :style="(day.n == 1 ? { gridColumn: firstWeekday+1 } : '')" 
                    @click="handleClick($event, day)"
                    :title="`${displayMonth} ${day.n}, ${y}\nClick to see activities on this day.${day.notLoaded || day.notYetHappened ? '\nIf you want to have colored background here, click Load more button below until it appears.' : ''}`">
                    <div class="day-bg" :style="{ opacity: getOpacity(day.episodes) }"></div>
                    <div class="day-label" :style="{ opacity: (day.notLoaded || day.notYetHappened ? '0.5' : '' ) }">{{ day.n }}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
// MESS WARNING
// using normal syntax because I'm dumb or 'vue-class-component' sucks and doesn't work with vue 3
// (as much as I'm tempted to assume the former, it turns out that it's the latter)

import { defineComponent } from 'vue';
import store from '@/store/store';
import { ActivityDay } from '@/interfaces/activity';

export default defineComponent({
    data() {
        return {
            state: store.state,
            days: [] as any,

            y: 2021,
            m: 0 as number,

            displayMonth!: "",
            firstWeekday!: 0,
            max: 0
        }
    },

    mounted: function(): void {
        const now = new Date();

        this.m = now.getMonth();
        this.y = now.getFullYear();

        this.loadMonth(this.m, this.y);
    },

    computed: {
        activities(): ActivityDay[] {
            return this.state.activities
        }
    },

    watch: {
        activities() {
            this.loadMonth(this.m - 1, this.y)
        }
    },
    
    methods: {
        loadMonth(m: number, y: number): void { // m is NOT human-readable (Jan = 0) as opposed to this.m
            // Clear current display
            this.days.length = 0;

            // Load the first day of the month
            let firstDay = new Date(y, m, 1);

            // Get day of the week of the first day
            this.firstWeekday = firstDay.getDay();

            // Figure out how many days there are in this month
            const count = this.daysInMonth(m, y);

            // Figure out on which day the user has watched most episodes (used for colors)
            this.max = Math.max.apply(Math, this.state.activities.map(x => x.episodes + x.chapters)); // TODO episode/chapter distinction

            const latestActivity = this.state.activities[0];
            let latestDay: number = 32;

            const lastActivity = this.state.activities[this.state.activities.length - 1]; 
            let lastDay: number = 0; // last day number currently present in activities array
            
            if(lastActivity.day.m == m+1 && lastActivity.day.y == y) {
                lastDay = lastActivity.day.d;
            } else if (lastActivity.day.m > m+1 && lastActivity.day.y == y) {
                lastDay = 32;
            } else if (lastActivity.day.y > y) {
                lastDay = 32;
            }

            if(latestActivity.day.m == m+1 && latestActivity.day.y == y) {
                latestDay = latestActivity.day.d;
            } else if (latestActivity.day.m < m+1 && latestActivity.day.y == y) {
                latestDay = 0;
            } else if (latestActivity.day.y < y) {
                latestDay = 0;
            }

            for (let i = 1; i <= count; i++) {
                const activities = this.state.activities.find(x => x.day.d == i && x.day.m == m+1 && x.day.y == y);
                this.days.push({
                    n: i,
                    activities,
                    notLoaded: !activities && i < lastDay,
                    notYetHappened: i > latestDay,
                    //empty: !activities && (i < lastDay || i > latestDay),
                    episodes: (activities ? activities.episodes + activities.chapters : 0)
                })
            }

            // Change displayed date
            this.m = m+1;
            this.y = y;
            this.displayMonth = new Intl.DateTimeFormat('default', { month: 'long' }).format(firstDay);
        },

        // handleClick: show popup containing activities on a specific day
        handleClick(event: MouseEvent, day: any) { // TODO get rid of any
            if(day.activities) { // the day has activities loaded
                this.$emit('popup', {
                    event,
                    activities: day.activities
                })
            } else if (!day.activities && !day.notLoaded) { // the day has no activities, but is within loaded range
                this.$emit('error', "There are no activities present on this day.")
            } else if (!day.notYetHappened) { // the day is not within loaded range
                this.$emit('dynamicPopup', {
                    event,
                    d: day.n,
                    m: this.m,
                    y: this.y
                })
            }
        },

        update(change: number): void {
            if(change > 0) {
                if (this.m + 1 > 12) {
                    this.y++;
                    this.loadMonth(0, this.y)
                } else {
                    this.loadMonth(this.m, this.y);
                }
            } else {
                if (this.m - 1 < 1) {
                    this.y--;
                    this.loadMonth(11, this.y);
                } else {
                    this.loadMonth(this.m-2, this.y);
                }
            }
        },

        daysInMonth(m: number, y: number): number {
            switch (m) {
                case 1 :
                    return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
                case 8 : case 3 : case 5 : case 10 :
                    return 30;
                default :
                    return 31
            }
        },

        getOpacity(count: number): number {
            const ratio = count / this.max;

            if (ratio == 0) return 0;
            else if (ratio < 0.15) return 0.15;
            else return ratio;
        }
    }
})
</script>

<style lang="scss" scoped>
.calendar {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

    border-radius: var(--radius);
    padding-bottom: 4px;

    margin-bottom: 12.944px;
}

@media screen and (min-width: 901px) {
    .calendar {
        margin-right: 5px;
    }
}

.header {
    display: flex;
    align-items: center;
    padding: 10px 16px;

    background: var(--color-background-darker);
    border-radius: var(--radius);
}

.header-title {
    font-weight: 500;
    font-size: 1.2em;
}

.header-month {
    padding: 3px 12px;
    margin: 0 3px;
    font-weight: 500;
    text-align: center;
    background: var(--color-background-darker);
    border-radius: 3px;
}

.header-control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 29px;

    text-align: center;
    border-radius: 3px;

    user-select: none;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background: var(--color-selected-background);
        color: var(--color-selected-text);
    }

    &:active {
        opacity: 0.7;
    }
}

.days, .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    margin: 0 5px;
    font-size: .89em;
}

.day {
    padding: 12px 12px 8px 12px;
    margin: 2px;
    border: 1px solid transparent;

    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    
    display: flex;
    justify-content: center;

    cursor: pointer;
    user-select: none;

    position: relative;
    transition: border .2s, opacity .2s;


    &:hover {
        border: 1px solid var(--color-background-day);
    }

    &:active {
        opacity: 0.8;
    }
}

.weekday {
    text-align: center;
    font-weight: 600;

    border-bottom: 1px solid var(--color-background-border);
    padding: 12px;
}

.day-bg {
    background: var(--color-background-day);
    position: absolute;
    border-radius: 4px;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 0;

    //transition: all .2s ease;
}

.day-label {
    z-index: 1;
}
</style>