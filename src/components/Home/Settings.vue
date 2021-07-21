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

        <Switch name="save" :model-value="save" @update:model-value="toggleSave">Save those settings for later</Switch>
    </div>
</template>

<script lang="ts">
import SettingsSwitcher from './SettingsSwitcher.vue';
import Switch from '@/components/Switch.vue';

import store from '@/store/store';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: { SettingsSwitcher, Switch }
})
export default class Settings extends Vue {
    state = store.state;
    save: boolean = false;

    settings: any[] = [
        {
            name: "Stats type",
            desc: "Choose which type of media you want to be displayed.",
            options: ["both", "anime", "manga"]
        },
        {
            name: "Beginning of a new day",
            desc: "You may choose to count late night as previous day.",
            options: ["12am", "1am", "2am", "3am", "4am", "6am"]
        }
    ]

    created(): void {
        this.settings[0].default = this.state.mediaType;
        this.settings[1].default = this.state.updateHour == 0 ? '12am' : this.state.updateHour+'am';

        this.save = this.state.saveSettings;
    }
    
    handleSelect(e: string, i: number): void {
        let val = e.toLowerCase();
        if(i == 0) {
            this.state.mediaType = val;
        } else if (i == 1) {
            if (e == '12am') store.setSettings({ updateHour: 0 });
            else store.setSettings({ updateHour: Number(e.slice(0, -2)) });
        }
    }

    toggleSave(e: boolean) {
        this.save = e;
        store.saveSettings(e);
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