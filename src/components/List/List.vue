<template>
    <div>
        <div v-for="(media, i) in list" :key="i">{{ media.title }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from '@/store/store';
import { fetchMediaList } from "@/store/lists";
import { ActivityMedia } from "@/interfaces/activity";

export default defineComponent({
    data() {
        return {
            state: store.state
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
            if(this.$route.name == "AnimeList") {
                return this.state.animeList;
            } else if (this.$route.name == "MangaList") {
                return this.state.mangaList;
            } else {
                return [];
            }
        }
    },

    methods: {
        fetchData() {
            if(this.$route.name == "AnimeList") {
                if(this.state.animeList.length == 0) {
                    fetchMediaList("ANIME")
                    .then(list => {
                        store.setAnimeList(list)
                        console.dir(this.state.animeList);
                    })
                }
            } else if (this.$route.name == "MangaList") {
                if(this.state.mangaList.length == 0) {
                    fetchMediaList("MANGA")
                    .then(list => {
                        store.setMangaList(list);
                        console.dir(list);
                    })
                }
            }
        }
    }

})
</script>

<style lang="scss" scoped>

</style>