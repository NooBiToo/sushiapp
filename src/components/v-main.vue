<template>
  <div class="main">
    <v-success 
      v-if="showSuccess"
      @successClose="successClose" />
    <router-view />
    <v-cart @goToOrder="goToOrder" @promoData="promoData" />
    <v-order
      @orderClose="orderClose"
      @orderSuccess="orderSuccess"
      :promoCode="this.promo"
      v-if="showModal"
    />
  </div>
</template>

<script>
import VCart from "./v-cart"
import VOrder from "./v-order.vue"
import VSuccess from "./v-success.vue"

export default {
  name: "VMain",
  data() {
    return {
      showModal: false,
      showSuccess: false,
      promo: {},
    }
  },
  components: {
    VCart,
    VOrder,
    VSuccess
  },
  methods: {
    goToOrder() {
      this.showModal = true;
    },
    orderClose() {
      this.showModal = false;
    },
    orderSuccess() {
      this.showModal = false;
      this.showSuccess = true;
    },
    successClose() {
      this.showSuccess = false
    },
    promoData(data) {
      this.promo = data
    }
  },

}
</script>

<style>
.main {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr max-content;
}
@media (max-width: 1600px) {
  .main {
    margin-bottom: 40px;
  }
}
@media (max-width: 900px) {
  .main {
    margin-top: 75px;
  }
}
@media (max-width: 550px) {
  .main {
    margin-top: 80px;
  }
}
</style>
