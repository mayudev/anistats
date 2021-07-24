<template>
    <div class="history">
        <div class="loading" v-if="loading">
            Loading...
        </div>
        <div v-else>
            <div class="row" v-for="year in years" :key="year">
                <div class="col-year">{{ year.year }}</div>
                <div class="col" v-for="(month, i) in year.months" :key="i">
                    {{ year.months[i] ? year.months[i].count : 0 }} - 
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ActivityMedia } from '@/interfaces/activity';
import { fetchMediaList } from '@/store/lists';
import store from '@/store/store';
import { defineComponent } from 'vue';

interface Year {
    year: number;
    months: {
        count: number;
    }[];
}

export default defineComponent({
    data() {
        return {
            state: store.state,
            loading: false,

            years: [] as Year[],
            unknownCount: 0
        }
    },

    created() {
        this.fetchData();
    },

    watch: {
        '$route': 'fetchData'
    },

    computed: {
        list(): ActivityMedia[] {
            const filtered: ActivityMedia[] = (this.$route.name == "AnimeHistory" ? this.state.animeList : this.state.mangaList);

            return filtered;
        }
    },

    methods: {
        fetchData() {
            this.clear();
            this.loading = true;
            if(this.$route.name == "AnimeHistory") {
                if(this.state.animeList.length == 0) {
                    fetchMediaList("ANIME")
                    .then(list => {
                        store.setAnimeList(list);
                        this.parseData();
                    })
                } else {
                    this.parseData();
                }
            } else if (this.$route.name == "MangaHistory") {
                if(this.state.mangaList.length == 0) {
                    fetchMediaList("MANGA")
                    .then(list => {
                        store.setMangaList(list);
                        this.parseData();
                    })
                } else {
                    this.parseData();
                }
            }
        },

        parseData() {
            const years: Year[] = [];
            const listYears = this.list.filter(x => x.status == "COMPLETED").map(x => ({ y: x.completed?.y, m: x.completed?.m }));
            listYears.forEach(year => {
                if(typeof year.m == undefined || typeof year.y == undefined) return;
                if(year.y == 0 || year.m == 0) return this.unknownCount += 1;

                const targetYear = years.find(m => m.year == year.y);
                if(targetYear) {
                    if(targetYear.months[year.m as number - 1]) {
                        targetYear.months[year.m as number - 1].count++;
                    } else {
                        targetYear.months[year.m as number - 1] = {
                            count: 1
                        }
                    }
                } else {
                    const obj: Year = {
                        year: year.y as number,
                        months: []
                    }

                    obj.months[year.m as number - 1] = {
                        count: 1
                    }

                    years.push(obj);
                }

                
            })

            const sortedYears = years.sort((a, b) => b.year - a.year);
            this.years = sortedYears;
            this.loading = false;
        },

        clear() {
            this.years = [];
            this.unknownCount = 0;
        }
    }
})
</script>

<style lang="scss" scoped>
.row {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
}

.col-year {
    font-weight: 500;
}

.col {
    padding: 5px;
}
</style>