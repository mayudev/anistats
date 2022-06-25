<script lang="ts" setup></script>

<template>
  <article class="landing">
    <p class="heading">Extended statistics for your AniList profile</p>
    <p>
      <strong>anistats</strong> shows you various stats about your anime and
      manga.
    </p>
    <p>
      Thanks to the <strong>Activity</strong> feature on AniList, you can trace
      your anime watching history even a few years back! - as long as you didn't
      have Activity Merge Time set to Always - more info in
      <RouterLink to="help">help</RouterLink>
    </p>
    <p>
      Statistics are based on <strong>public</strong> data available on your
      profile. This means your profile <strong>has to be public</strong> for it
      to work.
    </p>
    <p>anistats is not affiliated with AniList.</p>
  </article>
</template>

<style lang="scss" scoped>
.heading {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--color-accent);
}
.landing {
  text-align: center;
}
</style>
