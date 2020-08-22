<template>
  <div class="products__all-list">
    <sets/>
    <rolls/>
    <chicken/>
    <salads/>
  </div>
</template>

<script>
import Sets from "./v-sets";
import Rolls from "./v-rolls";
import Chicken from "./v-chicken";
import Salads from "./v-salads";

export default {
  name: "VAllProducts",
  components: {
    Sets,
    Rolls,
    Chicken,
    Salads
  }
}
</script>

<style>

</style>