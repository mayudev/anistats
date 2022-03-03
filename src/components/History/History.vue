<template>
  <div class="history">
    <transition name="popup-backdrop">
      <div class="popup-backdrop" v-if="showPopup" @click="popupHide">
        <transition appear name="popup">
          <Popup :media="popupMedia" @close="popupHide"></Popup>
        </transition>
      </div>
    </transition>
    <div class="loading" v-if="loading">Loading...</div>
    <div v-else>
      <div class="header header-desktop">
        <div class="month"></div>
        <div class="month">Jan</div>
        <div class="month">Feb</div>
        <div class="month">Mar</div>
        <div class="month">Apr</div>
        <div class="month">May</div>
        <div class="month">Jun</div>
        <div class="month">Jul</div>
        <div class="month">Aug</div>
        <div class="month">Sep</div>
        <div class="month">Oct</div>
        <div class="month">Nov</div>
        <div class="month">Dec</div>
      </div>
      <div class="header header-mobile">
        <div class="month"></div>
        <div class="month" v-for="i in 12" :key="i">{{ i }}</div>
      </div>
      <div class="row" v-for="year in years" :key="year">
        <div class="col-year">{{ year.year }}</div>
        <div
          class="col"
          v-for="(month, i) in 12"
          :key="i"
          @click="load(month, year.year)"
        >
          <div
            class="col-bg"
            :style="{
              opacity: year.months[i] ? getOpacity(year.months[i].count) : 0,
            }"
          ></div>
          <div class="col-label">
            {{ year.months[i] ? year.months[i].count : 0 }}
          </div>
        </div>
      </div>
      <div class="missing" v-if="unknownCount">
        There are {{ unknownCount }} titles with unknown completed date.
      </div>
      <div class="details">
        <div class="details-content" v-if="selectedMonth && selectedYear">
          <div class="details-title">
            {{ $route.name == "AnimeHistory" ? "Anime" : "Manga" }} completed in
            {{ monthNames[selectedMonth - 1] }} of {{ selectedYear }} ({{
              selected.length
            }})
          </div>
          <div class="details-list">
            <div
              class="details-entry"
              v-for="entry in selected"
              :key="entry.id"
              @click="popupShow(entry)"
            >
              <img class="entry-image" :src="entry.cover" />
              <div class="entry-title">
                {{ entry.title }}
              </div>
            </div>
          </div>
        </div>
        <div v-else>Choose a month above to see details on it.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ActivityMedia } from "@/interfaces/activity";
import { fetchMediaList } from "@/store/lists";
import store, { monthNames } from "@/store/store";
import { defineComponent } from "vue";

import Popup from "@/components/List/Popup.vue";

interface Year {
  year: number;
  months: {
    count: number;
  }[];
}

export default defineComponent({
  components: { Popup },
  data() {
    return {
      state: store.state,
      loading: false,
      monthNames,

      years: [] as Year[],
      unknownCount: 0,
      max: 0,

      showPopup: false,
      popupMedia: {} as ActivityMedia,

      selected: [] as ActivityMedia[],
      selectedMonth: 0,
      selectedYear: 0,
    };
  },

  created() {
    this.fetchData();
  },

  watch: {
    $route: "fetchData",
  },

  computed: {
    list(): ActivityMedia[] {
      const filtered: ActivityMedia[] =
        this.$route.name == "AnimeHistory"
          ? this.state.animeList
          : this.state.mangaList;

      return filtered;
    },
  },

  methods: {
    fetchData() {
      this.clear();
      this.loading = true;
      if (this.$route.name == "AnimeHistory") {
        if (this.state.animeList.length == 0) {
          fetchMediaList("ANIME").then((list) => {
            store.setAnimeList(list);
            this.parseData();
          });
        } else {
          this.parseData();
        }
      } else if (this.$route.name == "MangaHistory") {
        if (this.state.mangaList.length == 0) {
          fetchMediaList("MANGA").then((list) => {
            store.setMangaList(list);
            this.parseData();
          });
        } else {
          this.parseData();
        }
      }
    },

    parseData() {
      let currentYear = new Date().getFullYear();

      let progress = true;

      while (progress) {
        const zeros = this.checkYear(currentYear);
        if (zeros < 12) {
          currentYear--;
        } else {
          const lesser = this.list.filter(
            (x) =>
              x.completed && x.completed?.y < currentYear && x.completed?.y != 0
          );
          if (lesser.length == 0) {
            progress = false;
            this.years.pop(); // the last, empty year is appended to array of years, so we have to remove it manually here.
          } else {
            currentYear--;
          }
        }

        if (currentYear < 2000) {
          progress = false;
        }
      }

      this.unknownCount = this.list.filter(
        (x) => x.status == "COMPLETED" && x.completed?.y == 0
      ).length;

      this.loading = false;
    },

    checkYear(year: number): number {
      let zeroCount = 0;
      for (let i = 1; i < 13; i++) {
        const targetYear = this.years.find((m) => m.year == year);
        const filtered = this.list.filter(
          (x) => x.completed?.m == i && x.completed?.y == year
        );

        if (filtered.length == 0) zeroCount++;
        if (filtered.length > this.max) this.max = filtered.length;
        if (targetYear) {
          targetYear.months[i - 1] = {
            count: filtered.length,
          };
        } else {
          const obj: Year = {
            year: year,
            months: [],
          };

          obj.months[i - 1] = {
            count: filtered.length,
          };

          this.years.push(obj);
        }
      }

      return zeroCount;
    },

    popupShow(media: ActivityMedia) {
      this.showPopup = true;
      this.popupMedia = media;
    },

    popupHide() {
      this.showPopup = false;
    },

    load(month: number, year: number) {
      const matches = this.list.filter(
        (entry) => entry.completed?.m == month && entry.completed?.y == year
      );
      this.selectedMonth = month;
      this.selectedYear = year;
      this.selected = matches;
    },

    clear() {
      this.years = [];
      this.max = 0;
      this.unknownCount = 0;

      this.selected = [];
      this.selectedMonth = 0;
      this.selectedYear = 0;
    },

    getOpacity(count: number): number {
      const ratio = count / this.max;

      return ratio;
    },
  },
});
</script>

<style lang="scss" scoped>
.row,
.header {
  display: grid;
  grid-template-columns: repeat(13, 1fr);
}

.col,
.col-year {
  margin: 3px;

  border-radius: 4px;
  text-align: center;
  font-weight: 500;

  display: flex;
  justify-content: center;

  cursor: pointer;
  position: relative;

  transition: 0.2s;

  border: 1px solid transparent;
}

.col:hover {
  border: 1px solid var(--color-selected-text);
}

.col-bg {
  background: var(--color-background-day);
  position: absolute;
  border-radius: 4px;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 0;
}

.col-label {
  z-index: 1;
}

.missing {
  margin: 10px;
  font-weight: 500;
  text-align: center;
}

.details {
  margin: 10px;
}

.details-entry {
  display: flex;
  align-items: center;

  margin: 10px;

  transition: 0.2s;

  &:hover {
    color: var(--color-text-blue);
  }
}

.entry-image {
  width: 32px;
  height: 32px;
  min-width: 32px;

  border-radius: var(--radius);
  object-fit: cover;

  margin: 0 12px;
}

.entry-title {
  cursor: pointer;
}

.month {
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid var(--color-background-border);
}
@media screen and (min-width: 651px) {
  .col,
  .col-year {
    padding: 12px 12px 8px 12px;
  }

  .month {
    padding: 12px;
  }

  .header-mobile {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .col-label {
    visibility: hidden;
  }

  .header-desktop {
    display: none;
  }

  .month {
    font-size: 0.86em;
  }

  .month:first-child {
    width: 40px;
    margin: 3px;
  }
}
</style>
