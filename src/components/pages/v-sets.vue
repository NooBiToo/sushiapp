<template>
  <div class="component">
    <div class="component__title">
      <h1>Наборы</h1>
    </div>
    <div class="component__items component__items-sets">
      <v-component-item 
        v-for="(item, index) in SETS"
        :key="index"
        :item="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VComponentItem from "./v-component-item.vue"
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sets",
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
  mounted() {
    this.GET_SETS();
  },
  computed: {
    ...mapGetters(["SETS"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART", "GET_SETS"]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
};
</script>

<style></style>
