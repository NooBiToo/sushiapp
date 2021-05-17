<template>
  <div class="products__all-list">
    <v-sets />
    <v-rolls />
    <v-chicken />
    <v-salads />
  </div>
</template>

<script>
import VSets from "./v-sets";
import VRolls from "./v-rolls";
import VChicken from "./v-chicken";
import VSalads from "./v-salads";

export default {
  name: "VAllProducts",
  components: {
    VSets,
    VRolls,
    VChicken,
    VSalads
  },
}
</script>

<style>

</style>