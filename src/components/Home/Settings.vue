<template>
    <div class="settings">
        <div class="section">
            <div class="setting" v-for="(setting, i) in settings" :key="i">
                <div class="setting-header">
                    <div class="setting-name">{{ setting.name }}</div>
                    <div class="setting-desc">{{ setting.desc }}</div>
                </div>
                <div class="setting-switch">
                    <SettingsSwitcher :options="setting.options" :default="setting.default" @selection="handleSelect($event, i)"></SettingsSwitcher>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import SettingsSwitcher from './SettingsSwitcher.vue';

import store from '@/store/store';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: { SettingsSwitcher }
})
export default class Settings extends Vue {
    state = store.state;

    settings: any[] = [
        {
            name: "Stats type",
            desc: "Choose which type of media you want to be displayed.",
            options: ["Both", "Anime", "Manga"],
            default: this.state.mediaType
        },
        {
            name: "Beginning of a new day",
            desc: "You may choose to count late night as previous day.",
            options: ["12am", "1am", "2am", "3am", "4am", "6am"],
            default: (this.state.updateHour == 0 ? '12am' : this.state.updateHour+'am')
        }
    ]

    created(): void {
        this.settings[0].default = this.state.mediaType[0].toUpperCase()+this.state.mediaType.slice(1);
    }
    
    handleSelect(e: string, i: number): void {
        let val = e.toLowerCase();
        if(i == 0) {
            this.state.mediaType = val;
        } else if (i == 1) {
            if (e == '12am') this.state.updateHour = 0;
            else this.state.updateHour = Number(e.slice(0, -2));
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
    .setting {
        flex-direction: column;
    }

    .setting-switch {
        margin-top: 10px;
    }
}
.setting {
    display: flex;
    justify-content: space-between;

    margin: 10px;
}

.setting-name {
    display: blocl;
    font-weight: 500;
}

.setting-desc {
    display: block;
    font-size: 0.86em;
    color: var(--color-text-secondary);
}
</style>