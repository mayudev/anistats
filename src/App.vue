<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap');

:root {// DARK MODE (default) COLORS
  --color-background: #272c38;
  --color-background-border: #343946;
  --color-background-darker: #2d3340;
  --color-background-light: #3a404f;

  --color-text: white;
  --color-text-blue: #49a5f2;
  --color-text-gray: #d3d3d3;
  --color-text-red: #b33737;

  --shadow-default: 0px 0px 4px rgba(30, 30, 30, 0.7);
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
  height: 100vh;

  max-width: 800px;
  margin: auto;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
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
