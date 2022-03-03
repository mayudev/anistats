<template>
  <div class="settings">
    <div class="section">
      <div class="setting" v-for="(setting, i) in settings" :key="i">
        <div class="setting-header">
          <div class="setting-name">{{ setting.name }}</div>
          <div class="setting-desc">{{ setting.desc }}</div>
        </div>
        <div class="setting-switch">
          <SettingsSwitcher
            :options="setting.options"
            :default="setting.default"
            @selection="handleSelect($event, i)"
          ></SettingsSwitcher>
        </div>
      </div>
    </div>

    <Switch name="save" :model-value="save" @update:model-value="toggleSave"
      >Save those settings for later
    </Switch>
  </div>
</template>

<script lang="ts">
import SettingsSwitcher from "./SettingsSwitcher.vue";
import Switch from "@/components/Switch.vue";

import store from "@/store/store";
import { defineComponent } from "vue";

export default defineComponent({
  components: { SettingsSwitcher, Switch },

  data() {
    return {
      state: store.state,
      save: false,
      settings: [
        {
          name: "Stats type",
          desc: "Choose which type of media you want to be displayed.",
          options: ["both", "anime", "manga"],
        },
        {
          name: "Beginning of a new day",
          desc: "You may choose to count late night as previous day.",
          options: ["12am", "1am", "2am", "3am", "4am", "6am"],
        },
        {
          name: "Date format",
          desc: "Default uses your system default. Universal looks like: 2022-03-03",
          options: ["default", "universal"],
        },
      ] as any[],
    };
  },

  created(): void {
    this.settings[0].default = this.state.mediaType;
    this.settings[1].default =
      this.state.updateHour == 0 ? "12am" : this.state.updateHour + "am";
    this.settings[2].default = this.state.dateFormat;

    this.save = this.state.saveSettings;
  },

  methods: {
    handleSelect(e: string, i: number): void {
      let val = e.toLowerCase();
      if (i == 0) {
        store.setSettings({ mediaType: val });
      } else if (i == 1) {
        if (e == "12am") store.setSettings({ updateHour: 0 });
        else store.setSettings({ updateHour: Number(e.slice(0, -2)) });
      } else if (i == 2) {
        store.setSettings({ dateFormat: val });
      }
    },

    toggleSave(e: boolean): void {
      this.save = e;
      store.saveSettings(e);
    },
  },
});
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
