<template>
  <div class="component">
    <div class="component__title">
      <h1>Роллы</h1>
    </div>
    <div class="component__items">
      <v-component-item 
        v-for="(item, index) in ROLLS"
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
  name: "Rolls",
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
    this.GET_ROLLS();
  },
  computed: {
    ...mapGetters(["ROLLS"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART", "GET_ROLLS"]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
};
</script>

<style></style>
