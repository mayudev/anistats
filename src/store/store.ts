import { ActivityDay } from "@/interfaces/activity";
import { reactive } from "vue";

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
        animeOnly: false,
        mangaOnly: false
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
    }
}