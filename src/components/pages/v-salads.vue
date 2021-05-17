<template>
  <div class="component">
    <div class="component__title">
      <h1>Салаты</h1>
    </div>
    <div class="component__items">
      <v-component-item 
        v-for="(item, index) in SALADS"
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
  name: "Salads",
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
    this.GET_SALADS();
  },
  computed: {
    ...mapGetters(["SALADS"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART", "GET_SALADS"]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
}
</script>

<style>

</style>