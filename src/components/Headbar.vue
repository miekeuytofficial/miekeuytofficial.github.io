<template>
  <div class="headbar">
    <span class="headbar-body">
      <IconButton icon="brush" text="Art" @click="emitMe('Art')" />
      <IconButton icon="view_in_ar" text="3d" @click="emitMe('3D')" />
      <IconButton icon="auto_stories" text="Comics" @click="emitMe('Comics')" />
    </span>
  </div>
</template>

<script setup>
import IconButton from "./IconButton.vue";
const emit = defineEmits({ activeTab: String });
function emitMe(e) {
  console.log(e);
  emit("activeTab", e);
}
</script>

<style lang="css">
#app {
  padding: 0;
}
.headbar {
  /* display: flex; */
  background-color: gray;
  /* height: 12vh; */
  /* width: -webkit-fill-available; */
  position: fixed;
  width: 100vw;
}
.headbar-body {
  display: flex;
  /* width: inherit;
  justify-content: space-around;
  align-items: center; */
  /* width: 100vw; */
  justify-content: space-around;
}
</style>
