<template>
  <div class="chart-container">
    <div class="header">
      <div class="header-title"><slot></slot></div>
    </div>
    <ActivityChart
      :height="height"
      :row="row"
      :id="id"
      :activities="state.activities"
    ></ActivityChart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import store from "@/store/store";

import ActivityChart from "./ActivityChart.vue";

export default defineComponent({
  components: { ActivityChart },
  props: {
    row: String,
    id: String,
    height: Number,
  },
  data() {
    return {
      state: store.state,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart-container {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

  border-radius: var(--radius);

  margin-bottom: 12.944px;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px 16px;

  background: var(--color-background-darker);
  border-radius: var(--radius);
}

.header-title {
  font-weight: 500;
  font-size: 1.2em;
}
</style>
