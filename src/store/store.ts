import { ActivityDate, ActivityDay, ActivityMedia } from "@/interfaces/activity";
import { reactive } from "vue";
import { compareDates, fetchList } from "./api";

export const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const monthNames = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

export default {
    debug: true,

    state: reactive({
        userData: {
            id: 0,
            username: "",
            avatar: ""
        },
        activities: [] as ActivityDay[],
        updateHour: 3,
        mediaType: 'both',
        saveSettings: false,
        animeList: [] as ActivityMedia[],
        mangaList: [] as ActivityMedia[]
    }),

    setUserdata(obj: any): void {
        this.state.userData.id = obj.data.User.id;
        this.state.userData.username = obj.data.User.name;
        this.state.userData.avatar = obj.data.User.avatar.medium;
    },

    appendActivities(activities: ActivityDay[]): ActivityDay[] {
        this.state.activities = this.state.activities.concat(activities);
        return this.state.activities;
    },

    destroy(): void {
        this.state.activities = [];
        this.state.animeList = [];
        this.state.mangaList = [];
    },

    saveSettings(e: boolean): void {
        this.state.saveSettings = e;
    },

    setSettings(o: {
        updateHour?: number,
        mediaType?: string
    }): void {
        if (typeof o.updateHour != undefined) this.state.updateHour = o.updateHour as number;
        if (o.mediaType) this.state.mediaType = o.mediaType;
    },

    setAnimeList(list: ActivityMedia[]): void {
        this.state.animeList = list;
    },

    setMangaList(list: ActivityMedia[]): void {
        this.state.mangaList = list;
    },

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