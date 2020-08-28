<template>
  <div class="component">
    <div class="component__title">
      <h1>Курица</h1>
    </div>
    <div class="component__items">
      <v-component-item 
        v-for="(item, index) in CHICKEN"
        :key="index"
        :item="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VComponentItem from "./v-component-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Chicken",
  components: {
    VComponentItem
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters(["CHICKEN"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
}
</script>

<style>

</style>