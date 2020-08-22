<template>
  <div class="main">
    <div class="products">
      <router-view/>
    </div>
    <v-cart />
  </div>
</template>

<script>
import VCart from "./v-cart"
export default {
  name: "VMain",
  components: {
    VCart
  }

}
</script>

<style>
.main {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr max-content;
}
</style>