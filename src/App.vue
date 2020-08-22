<template>
  <div id="app">
    <v-header/>
    <v-main/>
  </div>
</template>

<script>
// import TestData from './components/TestData.vue'
import VHeader from "./components/v-header.vue";
import VMain from "./components/v-main.vue";
// import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    VHeader,
    VMain
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style>
</style>
