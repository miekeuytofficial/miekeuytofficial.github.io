<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import ArtPage from "./pages/ArtPage.vue";
import ThreeDPage from "./pages/ThreeDPage.vue";
import ComicPage from "./pages/ComicPage.vue";
import { ref } from "vue";
import Headbar from "./components/Headbar.vue";
const activeTab = ref();
function setActiveTab(e) {
  console.log("setActiveTab", e);
  activeTab.value = e;
}
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <Headbar @activeTab="setActiveTab" />
  <body>
    <ArtPage v-if="activeTab === 'Art'" />
    <ThreeDPage v-if="activeTab === '3D'" />
    <ComicPage v-if="activeTab === 'Comics'" />
  </body>
</template>

<style scoped>
body {
  min-width: 100vw;
  display: flex;
  flex-direction: column;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
