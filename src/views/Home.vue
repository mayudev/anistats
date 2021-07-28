<template>
  <div class="container">
    <Logo size="3em"></Logo>
    <span class="warning">anistats 2 is still in <span style="color: var(--color-text-blue)">beta</span> and may lack some features. For the previous version look <a href="https://pizza61.github.io/anistats">here</a>.</span>
    <transition name="errorfade">
      <span class="error" v-if="error.length > 0">{{ error }}</span>
    </transition>
    <input class="username" :class="{ usernameError: error.length > 0, pulse: loading }" placeholder="Enter username" type="text" v-model="username" @keyup.enter="send" />
    <div class="buttons">
      <div class="button-wrapper">
        <Button icon="cog" color="var(--color-text-gray)" @click="toggleSettings">Settings</Button>
      </div>
      <div class="button-wrapper">
        <Button @click="send" icon="chevron-right" color="var(--color-text-blue)">Continue</Button>
      </div>
    </div>
    <div class="settings">
      <transition name="settings" mode="out-in">
        <Settings v-if="settings"></Settings>
      </transition>
    </div>
    <footer>
      <Panel></Panel>
    </footer>
  </div>
</template>

<script lang="ts">
import Logo from '@/components/Home/Logo.vue';
import Button from '@/components/Button.vue';
import Settings from '@/components/Home/Settings.vue';
import Panel from '@/components/Home/Panel.vue';

import store from '@/store/store';
import { fetchUserData } from '@/store/api';

import { Options, Vue } from 'vue-class-component';
@Options({
  components: { Logo, Button, Settings, Panel }
})
export default class Home extends Vue {
  show: boolean = true;
  loading: boolean = false;
  settings: boolean = false;

  username: string = "";
  error: string = ""; // If it's empty, there is no error.
  state = store.state;

  mounted(): void {
    if(this.$route.query.error == "1") {
      this.showError("Something went wrong. Please try again");
    }
  }
  // Resolve username/link and redirect to next component for processing.
  send(): void {
    if(this.username.length < 2) {
      return this.showError("Hey, I said enter your username.")
    }

    if(this.username.startsWith("https://anilist.co")) { // The user entered a profile link.
      try {
        let url = new URL(this.username);
        if(url.pathname.startsWith("/user/")) {
          // If the link was correct, it should return the username. If it wasn't, the next component should return an error.
          let username = url.pathname.split("/")[2];
          this.process(username);
        } else {
          throw 'Invalid URL';
        }
      }
      catch (e)
      {
        this.showError(e);
      }
    } else { // The user entered something different (preferably the username)
      // Saving user settings to localStorage (if user chose to)
      if(this.state.saveSettings) {
        localStorage.setItem("updateHour", String(this.state.updateHour));
        localStorage.setItem("mediaType", this.state.mediaType);
      } else { // clear settings in case they were saved but user opted out of it
        localStorage.removeItem("updateHour");
        localStorage.removeItem("mediaType");
      }

      this.loading = true;
      this.process(this.username);
    }
  }

  process(username: string): void {
    fetchUserData(username)
    .then(resp => {
      store.destroy();
      store.setUserdata(resp);
      this.$router.push('/'+username);
    })
    .catch(() => {
      this.showError("Invalid username (or profile is private)");
    })
  }

  showError(e: string): void {
    this.loading = false;
    this.error = e;
    setTimeout(() => {
      this.error = "";
    }, 5000);
  }

  toggleSettings(): void {
    this.settings = !this.settings;
  }
}
</script>

<style lang="scss" scoped>


.username {
  width: 100%;
  padding: 10px;

  font-size: 3em;
  font-weight: 500;

  border-bottom: 3px solid var(--color-background-border);

  transition: border-bottom .5s;
}

.usernameError {
  border-bottom: 3px solid var(--color-text-red);
}

.buttons {
  justify-content: space-around;
  display: flex;
}
 
.button-wrapper {
  padding: 10px;
  flex-grow: 1;
  text-align: center;
  border-radius: var(--radius);
  
  &:hover {
    background: var(--color-background-border);
  }
}
// TRANSITIONS
.errorfade-enter-active, .errorfade-leave-active {
  transition: opacity 0.5s ease;
}

.errorfade-enter-from, .errorfade-leave-to {
  opacity: 0;
}

.pulse {
  animation: pulse 2s linear infinite;
}

.settings-enter-active, .settings-leave-active {
  transition: all .2s ease-out;
}

.settings-enter-from, .settings-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
