<template>
  <router-view/>
</template>

<script lang="ts">
import store from '@/store/store';
import { defineComponent } from 'vue';
import { toggleTheme } from './store/helpers';

export default defineComponent({
    data() {
        return {
            state: store.state,
        }
    },

    created(): void {
      // Load saved settings to state
      const updateHour = localStorage.getItem("updateHour");
      const mediaType = localStorage.getItem("mediaType");

      if (updateHour && mediaType) {
        store.saveSettings(true);
        store.setSettings({
          updateHour: Number(updateHour),
          mediaType
        })
      }

      const theme = localStorage.getItem("theme")
      if(theme == "light") {
        toggleTheme();
      }
    },

    mounted(): void {
      this.$nextTick().then(() => {
        //document.body.classList.add('site-theme-light');
      })
    }
})

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap');

:root {// DARK MODE (default) COLORS
  --color-background: #0b1622;
  --color-background-secondary: #151f2e;
  --color-background-border: #151f2e;
  --color-background-darker: #151f2e;
  --color-background-day: #236f95;

  --color-selected-background: #2981ae2b;
  --color-selected-text: #34bbff;

  --color-text: white;
  --color-text-secondary: #cbd3e3;
  --color-text-blue: #49a5f2;
  --color-text-gray: #d3d3d3;
  --color-text-red: #b33737;

  --shadow-default: 0 0 10px rgba(0,0,0,.25);
  --radius: 6px;
}

.site-theme-light {
  --color-background: #edf1f5;
  --color-background-secondary: #cecece;
  --color-background-border: #c7c7c7;
  --color-background-darker: white;
  --color-background-day: #4a9bc4;

  --color-selected-background: #3391c0;
  --color-selected-text: white;

  --color-text: #222;
  --color-text-secondary: #333;
  --color-text-blue: #4090d1;
  --color-text-gray: #666;
  --color-text-red: #b33737;

}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Jost', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--color-text);
  background: var(--color-background);
  margin: 0;
}

a {
    text-decoration: none;
    color: #65a9c4;
}

input {
  outline: none;
  border: none;
  background: none;
  font: inherit;
  display: block;
  color: var(--color-text-input);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 800px;
  margin: auto;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
}

.prop {
    display: flex;
    align-items: center;
    margin: 0 10px;
}

.prop-value {
    margin-right: 6.47px;
    font-size: 1.4em;
}

.prop-desc {
    font-size: .76em;
    color: var(--color-text-secondary);
}

// TRANSITIONS
.popup-backdrop {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;

    z-index: 2;
    background: rgba(0,0,0,.7);
    
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-backdrop-enter-from, .popup-backdrop-leave-to {
    opacity: 0;
}

.popup-backdrop-enter-active, .popup-backdrop-leave-active {
    transition: .1s ease-in-out;
}

.popup-enter-from, .popup-leave-to {
    transform: scale(0.9);
}

.popup-enter-active, .popup-leave-active {
    transition: .2s ease;
}

@media screen and (max-width: 900px) {
    .popup-backdrop {
        align-items: flex-end;
    };
}

// MEDIA
@media screen and (max-width: 800px) {
  .container {
    padding: 10px;
  }
}

@keyframes pulse {
  0%, 100% {
     border-bottom-color: var(--color-background-border);
  }

  50% {
    border-bottom-color: var(--color-text-blue);
  }
}
</style>
