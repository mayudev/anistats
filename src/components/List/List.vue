<template>
    <div class="list">
        <div class="controls">
            <div class="controls-search">
                <input class="controls-input" type="text" v-model="query" placeholder="Search..." />
            </div>
        </div>
        <table cellspacing="0">
            <thead>
                <tr>
                    <th class="tableHeader tableHeader-title">Title</th>
                    <th class="tableHeader tableHeader-regular">Type</th>
                    <th class="tableHeader tableHeader-regular">Added</th>
                    <th class="tableHeader tableHeader-regular">Completed</th>
                    <th class="tableHeader tableHeader-regular">Status</th>
                    <th class="tableHeader"></th>
                </tr>
            </thead>
            <div class="loading" v-if="loading">
                Loading...
            </div>
            <tbody v-else>
                <tr v-for="(media, i) in list" :key="i" class="tableRow">
                    <td class="tableData tableData-title">
                        <img v-lazyload class="tableData-image" :data-src="media.cover" width="24" height="24" loading="lazy" />
                        <span>{{ media.title }}</span>
                    </td>
                    <td class="tableData tableData-regular">{{ prettyFormat(media.format) }}</td>
                    <td class="tableData tableData-regular">{{ prettyDate(media.added) }}</td>
                    <td class="tableData tableData-regular">{{ prettyDate(media.completed) }}</td>
                    <td class="tableData tableData-regular">{{ prettyStatus(media.status) }}</td>
                    <td class="tableData tableData-icon">
                        <div class="tableData-iconWrapper" :style="{ color: resolveColor(media.status) }">
                            <font-awesome-icon :icon="resolveIcon(media.status)" fixed-width />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from '@/store/store';
import { fetchMediaList } from "@/store/lists";
import { ActivityMedia } from "@/interfaces/activity";
import { prettyDate } from "@/store/helpers";

export default defineComponent({
    data() {
        return {
            state: store.state,
            loading: true,
            prettyDate: prettyDate,
            displayCover: -1,
            query: ""
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
            
            const queryFilter: ActivityMedia[] = raw.filter(item => item.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
            return queryFilter;
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

</style>