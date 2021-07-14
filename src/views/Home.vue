<template>
  <div class="container">
    <Logo size="3em"></Logo>
    <transition name="errorfade">
      <span class="error" v-if="error.length > 0">{{ error }}</span>
    </transition>
    <input class="username" :class="{ usernameError: error.length > 0, pulse: loading }" placeholder="Enter username" type="text" v-model="username" @keyup.enter="send" />
    <div class="buttons">
      <Button icon="cog" color="var(--color-text-gray)">Settings</Button>
      <Button @click="send" icon="chevron-right" color="var(--color-text-blue)">Continue</Button>
    </div>
    <footer>
      <Panel></Panel>
    </footer>
  </div>
</template>

<script lang="ts">
import Logo from '@/components/Home/Logo.vue';
import Button from '@/components/Button.vue';
import Panel from '@/components/Home/Panel.vue';

import store from '@/store/store';
import { fetchUserData } from '@/store/api';

import { Options, Vue } from 'vue-class-component';
@Options({
  components: { Logo, Button, Panel }
})
export default class Home extends Vue {
  show: boolean = true;
  loading: boolean = false;

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
      this.loading = true;
      this.process(this.username);
    }
  }

  process(username: string): void {
    fetchUserData(username)
    .then(resp => {
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
  padding: 10px;
  justify-content: space-around;
  display: flex;
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
</style>
