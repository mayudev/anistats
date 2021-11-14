<template>
    <Loading v-if="loading"></Loading>
    <div class="view" v-else>
        <div class="sidebar-wrapper" :class="{ 'sidebar-hide-mobile': !showSidebar }">
            <Sidebar @special="toggleSpecial($event)" @toggle="toggleSidebar"></Sidebar>

        </div>
        <div class="content">
            <div class="mobile-header">
                <div class="mobile-icon" @click="toggleSidebar">
                    <font-awesome-icon icon="bars" size="lg" />  
                </div>
                <router-link class="a" to="/"><Logo size="1.8em"></Logo></router-link>
            </div>
            <router-view @loadRequest="loadEarlierActivities"></router-view>
        </div>

        <transition name="popup-backdrop">
            <Special v-if="showSpecial" :view="specialView" @hide="showSpecial = false"></Special>
        </transition>
    </div>
</template>

<script lang="ts">
import { compareDates, fetchActivity, fetchUserData } from '@/store/api';
import store from '@/store/store';

import Loading from '@/components/User/Loading.vue';
import Sidebar from '@/components/User/Sidebar.vue';
import Logo from '@/components/Home/Logo.vue';
import Special from '@/views/Special.vue';

import { ActivityDay } from '@/interfaces/activity';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    components: { Loading, Sidebar, Logo, Special },

    data() {
        return {
            loading: true,
            lock: false,
            lastPage: 0,
            state: store.state,

            showSidebar: false,
            showSpecial: false,
            specialView: '',
            
            preloadedActivities: [] as ActivityDay[],
        }
    },

    mounted(): void {
        // Checking if this page is visited directly (no userData in state)
        // or from the main page (userData set.)
        // If there is no userData, the component has to fetch and set it on its own.
        if(!this.state.userData.id) {
            fetchUserData(this.$route.params.user as string)
            .then(resp => {
                store.setUserdata(resp);
                this.loadActivites();
            })
            .catch(() => {
                this.$router.push({ path: '/', query: { error: 1 }});
            })
        } else if (this.state.activities.length == 0) {
            this.loadActivites();
        } else {
            this.loading = false;
        }
    },

    methods: {
        // Load and parse user's activities (only used for the first time)
        loadActivites(): void {
            fetchActivity(this.state.userData.id, this.state.currentPage, this.state.mediaType)
            .then(resp => {
                this.lastPage = resp.data.Page.pageInfo.lastPage;
                const activities = store.parseActivities(resp.data.Page.activities);

                if(activities.length == 0) {
                    return this.$router.push({ path: '/', query: { error: 1 }});
                }
                // Preload next page of user's activites.
                // It's because next page may contain activity from the last day on the first page, and it's better to display it together. Also for better user experience.
                this.preloadActivites(activities)
                .then(preloaded => {
                    store.setPreloadedActivities(preloaded);

                    store.appendActivities(activities);
                    this.loading = false;
                })
                
            })
        },

        loadEarlierActivities(): void {
            // Lock so the user can't smash the button and break it.
            if(this.lock) return;
            this.lock = true;
            store.incrementCurrentPage();

            const activities = store.appendActivities(this.state.preloadedActivities);
            this.preloadActivites(activities)
            .then(preloaded => {
                store.setPreloadedActivities(preloaded);

                this.lock = false;
            })
        },

        // Load the next page of user's activities and save for later use.
        async preloadActivites(activities: ActivityDay[]): Promise<ActivityDay[]> {
            if(this.state.currentPage == this.lastPage) return []; // Reached the end, nothing to preload.

            const nextPage = await fetchActivity(this.state.userData.id, this.state.currentPage + 1, this.state.mediaType);
            const preloadedActivities = store.parseActivities(nextPage.data.Page.activities);

            // Looking for duplicates
            // We want to give user a complete summary of a particular day, but sometimes it's continued on the second page.
            // That's why, to complete a particular day, we have to look if it's mentioned on the preloaded page and move (remove from preloaded, add to current) it to currently displayed activities (activities)
            const duplicates = preloadedActivities.filter(x => compareDates(x.day, activities[activities.length - 1].day));
            duplicates.forEach(dup => {
                // Remove from preloaded
                const indexToRemove = preloadedActivities.indexOf(dup);
                preloadedActivities.splice(indexToRemove, 1);

                // Add to current
                // Find the last element (last day present on current page) and "merge" it with dup
                const old = activities[activities.length - 1];
                old.media = old.media.concat(dup.media);
                old.episodes += dup.episodes;
                old.chapters += dup.chapters;
            });

            return preloadedActivities;
        },

        toggleSidebar(): void {
            this.showSidebar = !this.showSidebar
        },

        toggleSpecial(name: string): void {
            this.specialView = name;
            this.showSpecial = true;
        }
    }
})

</script>

<style lang="scss" scoped>
.a {
    color: inherit;
}

.mobile-header {
    display: flex;
    align-items: center;
    padding: 8px;
}

.mobile-icon {
    padding: 10px;
    margin-right: 8px;

    border-radius: var(--radius);
    transition: .2s;

    &:hover {
        background: var(--color-background-darker)
    }
}


@media screen and (max-width: 1020px) {
    .sidebar-wrapper {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 4;

        display: flex;

        visibility: visible;
        opacity: 1;
        transition: opacity .2s ease-out, visibility .2s;
    }

    .sidebar-backdrop {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.7);
        flex-grow: 2;
    }

    .sidebar-hide-mobile {
        visibility: hidden;
        opacity: 0;
    }
}
@media screen and (min-width: 1021px) {
    .mobile-header {
        display: none;
    }

    .view {
        display: grid;
        grid-template-columns: 20% 80%;

        max-width: 1280px;
        margin: auto;
    }

    .sidebar-backdrop {
        display: none;
    }
}

@keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>