<template>
  <div v-if="loading">
    <CheapLoading></CheapLoading>
  </div>
  <div class="entries" v-else>
    <div class="header">
      <div class="tip-name">Planned since</div>
      <div class="tip-value">
        {{ added }}
      </div>
    </div>
    <ActivityChart
      :height="100"
      :id="media.id + '' + stamp"
      :row="media.type == 'ANIME' ? 'episodes' : 'chapters'"
      :activities="activities"
    ></ActivityChart>
    <!--<div class="entry" v-for="(day, i) in activities" :key="i">
            <div class="entry-date">
                {{ prettyDate(day.day)}}
            </div>
            <div class="entry-prop">
                <span class="entry-value">{{ media.type == 'ANIME' ? day.episodes : day.chapters }}</span>
                <span class="entry-desc">{{ media.type == 'ANIME' ? ' episodes' : ' chapters' }}</span>
            </div>
        </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/store";

import { ActivityDay } from "@/interfaces/activity";
import CheapLoading from "@/components/CheapLoading.vue";
import ActivityChart from "@/components/User/ActivityChart.vue";

import { fetchMedia } from "@/store/api";
import { findAddedDate, prettyDate } from "@/store/helpers";

export default defineComponent({
  props: {
    media: {} as any,
    stamp: String,
  },

  components: { CheapLoading, ActivityChart },

  data() {
    return {
      state: store.state,
      prettyDate,

      activities: [] as ActivityDay[],
      added: "Unknown",

      loading: true,
    };
  },

  mounted(): void {
    fetchMedia(this.state.userData.id, this.media.id).then((resp) => {
      const rawActivities = resp.data.Page.activities;
      this.activities = store.parseActivities(rawActivities).reverse();

      if (typeof this.media.added == "undefined") {
        this.added = findAddedDate(rawActivities);
      } else {
        this.added =
          this.media.added.time == 0 ? "Unknown" : prettyDate(this.media.added);
      }

      this.loading = false;
    });
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid var(--color-selected-text);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tip-value {
  font-size: 0.95em;
  font-weight: 500;
}

.tip-name {
  color: var(--color-text-secondary);
  font-size: 0.86em;
}
</style>
