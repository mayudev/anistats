<template>
    <Loading v-if="loading"></Loading>
    <div class="view" v-else>
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="content">
            <router-view @loadRequest="loadEarlierActivities"></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { compareDates, fetchActivity, fetchUserData } from '@/store/api';
import store from '@/store/store';

import Loading from '@/components/User/Loading.vue';
import Sidebar from '@/components/User/Sidebar.vue';

import { ActivityDate, ActivityDay, ActivityMedia } from '@/interfaces/activity';

import { Options, Vue } from "vue-class-component";

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
@Options({
    components: { Loading, Sidebar }
})
export default class User extends Vue {
    loading: boolean = true;
    lock: boolean = false;
    currentPage: number = 1;
    lastPage: number = 0;
    state = store.state;

    preloadedActivities: ActivityDay[] = [];

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
        } else {
            this.loadActivites();
        }
    }

    unmounted(): void {
        // Destroy the state
        store.destroy();
        console.log("State destroyed");
    }

    // Load and parse user's activities (only used for the first time)
    loadActivites(): void {
        fetchActivity(this.state.userData.id, this.currentPage)
        .then(resp => {
            this.lastPage = resp.data.Page.pageInfo.lastPage;
            const activities = this.parseActivities(resp.data.Page.activities);

            // Preload next page of user's activites.
            // It's because next page may contain activity from the last day on the first page, and it's better to display it together. Also for better user experience.
            this.preloadActivites(activities)
            .then(preloaded => {
                this.preloadedActivities = preloaded;

                store.appendActivities(activities);
                this.loading = false;
            })
            
        })
    }

    loadEarlierActivities(): void {
        // Lock so the user can't smash the button and break it.
        if(this.lock) return;
        this.lock = true;
        this.currentPage++;

        const activities = store.appendActivities(this.preloadedActivities);
        this.preloadActivites(activities)
        .then(preloaded => {
            this.preloadedActivities = preloaded;

            this.lock = false;
        })
    }

    // Load the next page of user's activities and save for later use.
    async preloadActivites(activities: ActivityDay[]): Promise<ActivityDay[]> {
        if(this.currentPage == this.lastPage) return []; // Reached the end, nothing to preload.

        const nextPage = await fetchActivity(this.state.userData.id, this.currentPage + 1);
        const preloadedActivities = this.parseActivities(nextPage.data.Page.activities);

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
    }

    parseActivities(activities: any): ActivityDay[] {
        const days: ActivityDay[] = [];

        activities.forEach((a: any) => {
            const timestamp = new Date(a.createdAt * 1000); // Convert AniList time to js time

            if(timestamp.getHours() < this.state.updateHour) { // Couting late night as previous day (user can choose a specific hour in settings)
                // Make the activity appear the previous day. For example: July 3 => July 2. The setDate function does month conversion and all for us.
                timestamp.setDate(timestamp.getDate() - 1);
            }

            const activityDateObject: ActivityDate = {
                d: timestamp.getDate(),
                m: timestamp.getMonth() + 1, // converts to human-readable format (January as 1, not 0)
                y: timestamp.getFullYear(),
                weekday: weekdays[timestamp.getDay()],
                time: timestamp.getTime()
            }

            // Determining watched episodes (or read chapters) count
            let episodes = 0;
            let chapters = 0;
            let range;
            
            switch(a.status) {
                case 'watched episode':
                case 'rewatched episode':
                    range = a.progress.split(' - ');
                    if(range.length == 2) {
                        episodes = parseInt(range[1]) - parseInt(range[0]) + 1;
                    }
                    else episodes = 1;
                    break;
                case 'read chapter':
                case 'reread chapter':
                    range = a.progress.split(' - ');
                    if(range.length == 2) {
                        chapters = parseInt(range[1]) - parseInt(range[0]) + 1;
                    }
                    else chapters = 1;
                    break;
                case 'completed':
                    if(a.media.type == 'ANIME') episodes = 1;
                    else chapters = 1;
                    break;
                default:
                    return;
            }

            // Parsing media
            const media: ActivityMedia = {
                id: a.media.id,
                type: a.media.type,
                title: a.media.title.romaji,
                cover: a.media.coverImage.medium,
                episodes: (episodes ? episodes : chapters),
            }

            // Look for other activities in particular day and append our data to it (because one day = one activity object)
            const sameDay: ActivityDay | undefined = days.find(x => compareDates(x.day, activityDateObject)); // is there any more efficient way to do this?
            
            // If it found something
            if(sameDay) {
                sameDay.episodes += episodes; // Append our episode count to the entire day's episode count
                sameDay.chapters += chapters;

                // Checking if there's another activity for the same anime/manga on this day.
                const mediaObject = sameDay.media.find(x => x.id == media.id && x.type == media.type);
                if(mediaObject) {
                    if(mediaObject.type == 'ANIME') {
                        mediaObject.episodes += episodes;
                    } else {
                        mediaObject.episodes += chapters; // There is no need for distinction between chapters and episodes in a single media object.
                    }
                } else {
                    sameDay.media.push(media);
                }
            }
            else { // We have to create an object for the day here.
                days.push({
                    day: activityDateObject,
                    episodes,
                    chapters,
                    media: (media ? [media] : [])
                })
            }
        })

        return days;
    }
}

</script>

<style lang="scss" scoped>
.view {
    display: grid;
    grid-template-columns: 20% 80%;

    max-width: 1280px;
    margin: auto;
}

.content {
    margin: 12.944px 10px;
    //margin: 0 10px;
}
</style>