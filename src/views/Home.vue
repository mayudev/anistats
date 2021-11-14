<template>
  <div class="container">
    <Logo size="2em"></Logo>
    <span class="warning">anistats 2 is still in <span style="color: var(--color-text-blue)">beta</span> and may lack some features. For the previous version look <a href="https://pizza61.github.io/anistats">here</a>.</span>
    <transition name="errorfade">
      <span class="error" v-if="error.length > 0">{{ error }}</span>
    </transition>
    <div class="input">
      <div class="button-wrapper desktop">
        <Button icon="cog" @click="toggleSettings">Settings</Button>
      </div>
      <input class="username" :class="{ usernameError: error.length > 0, pulse: loading }" placeholder="Enter username" type="text" v-model="username" @keyup.enter="send" />
      <div class="button-wrapper desktop">
        <Button @click="send" icon="chevron-right">Continue</Button>
      </div>
    </div>
    <div class="buttons mobile">
      <div class="button-wrapper">
        <Button icon="cog" @click="toggleSettings">Settings</Button>
      </div>
      <div class="button-wrapper">
        <Button @click="send" icon="chevron-right">Continue</Button>
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
import { defineComponent } from 'vue';

import Logo from '@/components/Home/Logo.vue';
import Button from '@/components/Button.vue';
import Settings from '@/components/Home/Settings.vue';
import Panel from '@/components/Home/Panel.vue';

import store from '@/store/store';
import { fetchUserData } from '@/store/api';

export default defineComponent({
  components: { Logo, Button, Settings, Panel },

  data() {
    return {
      show: true,
      loading: false,
      settings: false,

      username: "",
      error: "",
      state: store.state
    }
  },

  mounted(): void {
    if(this.$route.query.error == "1") {
      this.showError("Something went wrong. Please try again");
    }
  },

  methods: {
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
    },

    process(username: string): void {
      // Checking if the user data is already loaded. If it is, it means that the user is revisitng the page so there's no need to fetch anything again
      if(this.state.userData.username == username && this.state.activities.length > 0) {
        this.$router.push('/'+username);
      } else {
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
    },

    showError(e: string): void {
      this.loading = false;
      this.error = e;
      setTimeout(() => {
        this.error = "";
      }, 5000);
    },

    toggleSettings(): void {
      this.settings = !this.settings;
    }
  }

})
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  margin: 10px 0;

}
.username {
  padding: 10px;

  font-size: 2em;
  font-weight: 500;

  border-bottom: 3px solid var(--color-background-border);

  transition: border-bottom .5s;

  &::placeholder {
    color: var(--color-text-secondary);
  }
}

.usernameError {
  border-bottom: 3px solid var(--color-text-red);
}

.buttons {
  justify-content: space-around;
  display: flex;
}
 
.button-wrapper {
  flex-grow: 1;
  border-radius: var(--radius);
  color: var(--color-text-secondary);
  padding: 6px;

  transition: background .2s;
  
  &:hover {
    background: var(--color-selected-background);
    color: var(--color-selected-text);
  }
}

@media screen and (max-width: 620px) {
  .desktop {
    display: none;
  }

  .username {
    width: 100%;
  }
}

@media screen and (min-width: 621px) {
  .mobile {
    display: none;
  }

  .button-wrapper {
    margin: 0 6px;
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
