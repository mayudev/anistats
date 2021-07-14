import { reactive } from "vue";

export default {
    debug: true,

    state: reactive({
        userData: {
            id: 0,
            username: "",
            avatar: ""
        },
        activities: [],
        updateHour: 3,
    }),

    setUserdata(obj: any): void {
        this.state.userData.id = obj.data.User.id;
        this.state.userData.username = obj.data.User.name;
        this.state.userData.avatar = obj.data.User.avatar.medium;
    }
}