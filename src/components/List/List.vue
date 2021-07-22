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
            const raw: ActivityMedia[] = (this.$route.name == "AnimeList" ? this.state.animeList : this.state.mangaList);
            
            return raw;
        }
    },

    methods: {
        fetchData() {
            if(this.$route.name == "AnimeList") {
                if(this.state.animeList.length == 0) {
                    fetchMediaList("ANIME")
                    .then(list => {
                        store.setAnimeList(list);
                    })
                }
            } else if (this.$route.name == "MangaList") {
                if(this.state.mangaList.length == 0) {
                    fetchMediaList("MANGA")
                    .then(list => {
                        store.setMangaList(list);
                    })
                }
            }
        }
    }

})
</script>

<style lang="scss" scoped>

</style>