<template>
  <div id="app">
    <v-header />
    <v-main />
  </div>
</template>

<script>
// import TestData from './components/TestData.vue'
import VHeader from "./components/v-header.vue";
import VMain from "./components/v-main.vue";

export default {
  name: "App",
  components: {
    VHeader,
    VMain,
  },
  data() {
    return {};
  }
};
</script>

<style>
.body {
  box-sizing: border-box;
  overflow-y: scroll;
}
.body::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
.body::-webkit-scrollbar-track {
  background: #fff;
}
.body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
</style>
