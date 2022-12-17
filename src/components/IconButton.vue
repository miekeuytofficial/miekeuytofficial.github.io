<template>
  <button>
    <div class="button-body">
      <span class="material-symbols-outlined"> {{ props.icon }} </span>
      <span class="button-text">{{ props.text }}</span>
    </div>
  </button>
</template>

<script setup>
// import { defineProps } from "vue"
const props = defineProps({ icon: String, text: String });
</script>

<style scoped>
.button-body {
  display: flex;
  flex-direction: column;
  padding-inline: 1vw;
  padding: 0.5vw;
  font-size: 14px;
}
button {
  /* min-width: 10vw; */
  max-width: 12rem;
  border-radius: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  margin-inline: 1vw;
  margin-top: 2vw;
  padding: 0;
}
.material-symbols-outlined {
  font-size: xx-large;
  margin-top: 1rem;
}
button:hover .button-text {
  opacity: 1;
}
.button-text {
  opacity: 0;
}
</style>
