<template>
    <div class="list">
        <transition name="popup-backdrop">
            <div class="popup-backdrop" v-if="showPopup" @click="popupHide">
                <transition appear name="popup">
                    <Popup :media="popupMedia" @close="popupHide"></Popup>
                </transition>
            </div>
        </transition>
        <div class="controls">
            <div class="controls-search">
                <input class="controls-input" type="text" v-model="query" placeholder="Search..." />
            </div>
            <div class="controls-filterGroup" v-for="(filter, i) in filteredFilters" :key="i">
                <span class="filter-name">{{ filter.name }}: </span>
                <button class="filter-button" title="Click to toggle" :class="{ selected: filter.checked.indexOf(value.key) > -1 }" v-for="(value, j) in filter.values" :key="j" @click="toggleFilter(i, value.key)">{{ typeof value.name === 'undefined' ? ($route.name == "AnimeList" ? value.animeName : value.mangaName) : value.name }}</button>
            </div>
        </div>
        <table cellspacing="0">
            <thead>
                <tr>
                    <th class="tableHeader tableHeader-title">Title</th>
                    <th class="tableHeader tableHeader-regular">Type</th>
                    <th class="tableHeader tableHeader-regular table-responsive">Added</th>
                    <th class="tableHeader tableHeader-regular table-responsive">Completed</th>
                    <th class="tableHeader tableHeader-regular table-responsive2">Status</th>
                    <th class="tableHeader"></th>
                </tr>
            </thead>
            <div class="loading" v-if="loading">
                Loading...
            </div>
            <tbody v-else>
                <tr v-for="(media) in list" :key="media.id" class="tableRow" @click="popupShow(media)">
                    <td class="tableData tableData-title">
                        <img v-lazyload class="tableData-image" :data-src="media.cover" width="24" height="24" loading="lazy" />
                        <span>{{ media.title }}</span>
                    </td>
                    <td class="tableData tableData-regular">{{ prettyFormat(media.format) }}</td>
                    <td class="tableData tableData-regular table-responsive">{{ prettyDate(media.added) }}</td>
                    <td class="tableData tableData-regular table-responsive">{{ prettyDate(media.completed) }}</td>
                    <td class="tableData tableData-regular table-responsive2">{{ prettyStatus(media.status) }}</td>
                    <td class="tableData tableData-icon">
                        <div class="tableData-iconWrapper" :style="{ color: resolveColor(media.status) }">
                            <font-awesome-icon :icon="resolveIcon(media.status)" fixed-width />
                        </div>
                    </td>
                </tr>
                <div class="loading" v-if="list.length == 0">
                    No results found. Maybe try changing the filters?
                </div>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import store from '@/store/store';
import { fetchMediaList } from "@/store/lists";
import { prettyDate } from "@/store/helpers";

import { ActivityMedia } from "@/interfaces/activity";
import { Filter } from '@/interfaces/filters';

import Popup from './Popup.vue';

export default defineComponent({
    components: { Popup },
    data() {
        return {
            state: store.state,
            prettyDate: prettyDate,

            loading: true,
            displayCover: -1,

            showPopup: false,
            popupMedia: {} as ActivityMedia,

            query: "",
            filters: [
                {
                    name: "Status",
                    key: "status",
                    type: "both",
                    values: [
                        {
                            animeName: "Watching",
                            mangaName: "Reading",
                            key: "CURRENT"
                        },
                        {
                            animeName: "Rewatching",
                            mangaName: "Rereading",
                            key: "REPEATING"
                        },
                        {
                            name: "Completed",
                            key: "COMPLETED"
                        },
                        {
                            name: "Planning",
                            key: "PLANNING"
                        },
                        {
                            name: "Dropped",
                            key: "DROPPED"
                        },
                        {
                            name: "Paused",
                            key: "PAUSED"
                        }
                    ],
                    checked: ["COMPLETED", "CURRENT", "REPEATING"]
                },
                {
                    name: "Type",
                    key: "format",
                    type: "anime",
                    values: [
                        {
                            name: "TV",
                            key: "TV"
                        },
                        {
                            name: "TV Short",
                            key: "TV_SHORT"
                        },
                        {
                            name: "Movie",
                            key: "MOVIE"
                        },
                        {
                            name: "Special",
                            key: "SPECIAL"
                        },
                        {
                            name: "OVA",
                            key: "OVA"
                        },
                        {
                            name: "ONA",
                            key: "ONA"
                        },
                        {
                            name: "Music",
                            key: "MUSIC"
                        }
                    ],
                    checked: ["TV", "TV_SHORT", "MOVIE", "SPECIAL", "OVA", "ONA", "MUSIC"]
                },
                {
                    name: "Type",
                    key: "format",
                    type: "manga",
                    values: [
                        {
                            name: "Manga",
                            key: "MANGA"
                        },
                        {
                            name: "Light novel",
                            key: "NOVEL"
                        },
                        {
                            name: "One shot",
                            key: "ONE_SHOT"
                        }
                    ],
                    checked: ["MANGA", "NOVEL", "ONE_SHOT"]
                }
            ]
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
            const raw: ActivityMedia[] = (this.$route.name == "AnimeList" ? this.state.animeList : this.state.mangaList);
            
            let filtered: ActivityMedia[] = raw.filter(item => item.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
            
            this.filteredFilters.forEach(filter => {
                filtered = filtered.filter((x: any) => filter.checked.indexOf(x[filter.key]) > -1)
            })

            return filtered;
        },
        filteredFilters(): Filter[] {
            return this.filters.filter(filter => {
                if(this.$route.name == "AnimeList" && filter.type == "manga") return false;
                else if(this.$route.name == "MangaList" && filter.type == "anime") return false;
                else return true;
            });
        }
    },

    directives: {
        lazyload: {
            mounted(el): any {
                el.src = el.dataset.src;
            }
        }
    },

    methods: {
        fetchData() {
            // TODO move into seperate function
            this.loading = true;
            if(this.$route.name == "AnimeList") {
                if(this.state.animeList.length == 0) {
                    fetchMediaList("ANIME")
                    .then(list => {
                        this.loading = false;
                        store.setAnimeList(list);
                    })
                } else {
                    this.loading = false;
                }
            } else if (this.$route.name == "MangaList") {
                if(this.state.mangaList.length == 0) {
                    fetchMediaList("MANGA")
                    .then(list => {
                        this.loading = false;
                        store.setMangaList(list);
                    })
                } else {
                    this.loading = false;
                }
            }
        },
        popupShow(media: ActivityMedia) {
            this.showPopup = true;
            this.popupMedia = media;
        },
        popupHide() {
            this.showPopup = false;
        },
        toggleFilter(index: number, key: string) {
            const indexof = this.filteredFilters[index].checked.indexOf(key);
            if(indexof > -1) {
                this.filteredFilters[index].checked.splice(indexof, 1);
            } else {
                this.filteredFilters[index].checked.push(key);
            }
        },
        prettyFormat(format: string) {
            if(!format) return '';
            else if(format == 'TV_SHORT') return 'TV Short';
            else if(["TV", "OVA", "ONA"].indexOf(format) > -1) return format; 
            else return format[0] + format.slice(1).replace("_", " ").toLowerCase();
        },
        prettyStatus(status: string) {
            return status[0] + status.slice(1).toLowerCase();
        },
        resolveIcon(status: string) {
            switch(status) {
                case 'CURRENT':
                case 'REPEATING':
                    return 'play'
                case 'DROPPED':
                    return 'stop'
                case 'PAUSED':
                    return 'pause'
                case 'COMPLETED':
                    return 'check'
                default:
                    return 'clock'
                }
        },
        resolveColor(status: string) {
            switch(status) {
                case 'CURRENT':
                    return '#2f754e'
                case 'DROPPED':
                    return '#a44646'
                case 'PAUSED':
                    return '#ad8015'
                case 'COMPLETED':
                    return '#14699b'
                default:
                    return '#595f6e'
            }
        }
    }
})
</script>

<style lang="scss" scoped>
// CONTROLS
.controls-input {
    width: 100%;
    padding: 10px;

    font-size: 2em;
    border-bottom: 3px solid var(--color-background-border);
}

.filter-name {
    padding: 4px;
}

.filter-button {
    appearance: none;
    font: inherit;
    color: inherit;
    background: var(--color-background-secondary);
    outline: none;
    border: none;

    transition: .2s;
    cursor: pointer;

    font-weight: 500;

    padding: 4px 12px;
    margin: 4px;
    border-radius: var(--radius);
}

.selected {
    text-decoration: underline;
    background: var(--color-background-selected);
    color: white;
}
// TABLE
.tableHeader {
    text-align: left;
}

.tableRow {
    cursor: pointer;
    transition: .2s;

    &:nth-child(even) {
        background: var(--color-background-darker);
    }

    &:hover {
        color: var(--color-text-blue);
    }
}

.tableData, .tableHeader {
    border-bottom: 2px solid var(--color-background-border);
    //font-size: .9em;
    padding: .5em 1em;
}

.tableData-title, .tableData-statusWrapper {
    display: flex;
    align-items: center;
}

.tableData-image {
    width: 24px;
    height: 24px;
    min-width: 24px;
    
    margin-right: 12px;
    border-radius: 6px;
    object-fit: cover;
}

.tableData-regular {
    text-align: center;
}

.tableData-iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.tableHeader-title {
    width: 100%;
}

.tableHeader-regular {
    min-width: 96px;
    text-align: center;
}

.loading {
    padding: 12px;
}

// RESPONSIVITY


@media screen and (max-width: 780px) {
    .table-responsive {
        display: none;
    }
}

@media screen and (max-width: 472px) {
    .table-responsive2 {
        display: none;
    }
}

@media screen and (max-width: 650px) {
    .controls-filterGroup {
        padding: 10px;
        border-bottom: 3px solid var(--color-background-selected);
    }

    .filter-name {
        display: block;
        font-weight: 500;
    }
}
</style>