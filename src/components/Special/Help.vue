<template>
  <div>
    <h3>How does it work?</h3>
    AniList has a small feature called "Activity". Each time you watch an
    episode, add something to your planning list, an activity is created.
    anistats takes adventage of that to count how many episodes you've seen on a
    specific day.
    <h3>Why it doesn't work?</h3>
    <h4>Activity Merge Time</h4>
    <img src="@/assets/merge.png" />
    <br />
    <b>It has to be set to 12 hours or less for anistats to work properly</b>
    (in most use cases). If you set it to 'Always', it produces
    <b>one activity per anime</b>, no matter how long it took you to watch it.
    For anistats, it's best if there is
    <b>at least one activity per anime per day.</b>
    <br />
    Note: changing it won't affect previous activities.
    <br /><br />
    Also, you have to add episodes using this little '+' symbol next to the
    episode count instead of setting it directly from the 'Edit' menu.
    <br />
    Let's say you've started a new series yesterday and watched 3 episodes so
    far. Today, after watching 3 next episodes, you set the episode count
    directly to '6'. AniList creates an activity saying that you've watched
    episode 6. anistats counts that as <b>one</b> episode.
    <br />
    If you click the '+' symbol three times instead, the activity says that
    you've watched episodes 4-6. anistats sees that correctly as 3 episodes.
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

h3,
h4,
b {
  font-weight: 500;
}
</style>
