<script lang="ts" setup>
import HeaderBar from '../components/Header/HeaderBar.vue'
</script>

<template>
  <main class="help">
    <HeaderBar />
    <article>
      <h4>How does it work?</h4>
      <p>
        AniList has a feature called <strong>Activity</strong>. Each time you
        watch an episode or add something to your planning list, an activity is
        created. anistats takes advantage of that to show you a history of your
        activities.
      </p>
      <h4>Activity Merge Time</h4>
      <p>
        At some point, AniList has introduced an option to customize the
        activity merge time. Many users set it to <i>Always</i> to increase
        aesthetics of their profile. Unfortunately,
        <strong>this makes anistats unreliable.</strong>
        If you have never touched the option, it should be set to 12 hours,
        which is completely fine.
      </p>
      <p>
        Unfortunately, if you change it now, it won't affect your old
        activities. However, new activities will be affected, so you may use
        anistats reliably from now on.
      </p>
      <p>
        However, anistats offers a section called <strong>History</strong> which
        doesn't use Activity to determine data. You may still find some
        interesting stats in there!
      </p>
      <h4>About anistats</h4>
      <p>
        anistats is licensed under the GNU Affero General Public License v3.0.
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mayudev/anistats"
          >Source code is available on GitHub.</a
        >
      </p>
    </article>
  </main>
</template>

<style lang="scss" scoped></style>
