<template>
    <div class="loading">
        Loading...
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Name extends Vue {

}
</script>

<style lang="scss" scoped>
.loading {
    font-weight: 500;
    padding: 10px 16px;
}
</style>