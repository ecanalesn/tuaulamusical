<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    WhatsAppButton
  },
  mounted() {
    // Initialize WOW.js for animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init()
    }
  },
  watch: {
    '$route'() {
      // scroll is handled by router/index.js
    }
  }
}
</script>

<style>
/* Global Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: white;
  scroll-behavior: auto !important;
}

body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: white;
}

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  flex: 1;
  min-height: calc(100vh - 100px);
  width: 100%;
}

/* Scrollbar con fondo blanco consistente */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* Para Firefox */
html {
  scrollbar-width: thin;
  scrollbar-color: #ccc white;
}
</style>
