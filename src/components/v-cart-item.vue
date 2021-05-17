<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img
        :src="'/assets/images/' + cart_item_data.gsx$image.$t"
        :alt="cart_item_data.gsx$name.$t"
      />
    </div>
    <div class="cart-item__info">
      <div class="cart-item__name">{{ cart_item_data.gsx$name.$t }}</div>
      <div class="cart-item__quantity">
        <div
          class="cart-item__quantity-button"
          @click="decrementItem"
          v-visible="cart_item_data.quantity > 1"
        >
          <img src="@/assets/icons/minus.svg" alt="minus">
        </div>
        <div class="cart-item__quantity-value">
          {{ cart_item_data.quantity }}
        </div>
        <div class="cart-item__quantity-button" @click="incrementItem">
          <img src="@/assets/icons/plus.svg" alt="plus">
        </div>
      </div>
    </div>
    <div class="summa__value">{{ cart_item_data.gsx$price.$t }}</div>
    <div class="cart-item__delete">
      <button class="cart-item__deleteButton" @click="deleteFromCart">
        ✖
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VCartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
  mounted() {
    if (this.cart_item_data.quantity == null) {
      this.$set(this.cart_item_data, "quantity", 1);
    } else {
      this.$set(this.cart_item_data, "quantity", this.cart_item_data.quantity);
    }
  },
};
</script>

<style>
.cart-item {
  display: grid;
  grid-template-columns: 2fr 5fr 1fr 1fr;
  grid-gap: 5px;
  align-items: self-start;
}
.cart-item:nth-last-child(1) {
  padding-bottom: 10px;
}
.cart-item__image {
  width: 55px;
  height: auto;
}

.cart-item__image img {
  width: 100%;
  height: auto;
}

.cart-item__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}

.cart-item__name {
  font-family: TT Norms Medium;
  text-align: center;
}

.cart-item__quantity {
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.cart-item__delete {
  justify-self: end;
}
.cart-item__quantity-button {
  cursor: pointer;
  /* border: 1px solid #f0c013; */
  height: 18px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  /* color: #f0c013; */
}

.cart-item__quantity-value {
  margin: 0 10px;
}

.cart-item__deleteButton {
  display: block;
  background-color: transparent;
  font-size: 22px;
  cursor: pointer;
  position: relative;
  top: -5px;
  width: 15px;
  transition: 0.3s;
  color: #ff6555;
  border: none;
}

.cart-item__deleteButton:hover {
  color: #f0c013;
}

.cart-item__deleteButton:focus {
  outline: none;
}

.cart-item__deleteButton:active {
  transform: scale(0.9);
}
</style>
