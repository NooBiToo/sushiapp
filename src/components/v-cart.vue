<template>
  <div class="cart" :class="{ cart_open: isActive }">
    <div class="cart__title" @click="openCart">
      <h2>Корзина</h2>
      <div class="cart__count">
        <span class="cart__count_circle" v-if="CART.length">{{
          CART.length
        }}</span>
        <span v-if="!CART.length">пуста</span>
      </div>
      <div class="close-icon" v-if="isActive">
        <img src="/assets/icons/arrow-back.svg" alt="go to Back button">
      </div>
    </div>
    <div class="cart__main">
      <div class="cart__items" v-if="CART.length">
        <v-cart-item
          v-for="(item, index) in CART"
          :key="index"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>
      <div class="cart__null" v-if="!CART.length">
        Вы ещё ничего не выбрали
      </div>
      <template v-if="CART.length">
        <div class="cart__summa">
          <div class="summa__text">
            Сумма заказа:
          </div>
          <div class="summa__value">{{ cartTotalCost }}</div>
        </div>
        <div class="cart__promo-code">
          <input
            type="text"
            class="promo-code__input"
            placeholder="Промокод"
            v-mask="'AAA-AAA'"
            v-model="promoCode"
          />
          <button class="promo-code__button" @click="usePromo">
            Применить
          </button>
        </div>
        <div class="order">
          <button type="button" class="order__button" @click="goToOrder">
            Оформить заказ
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import VCartItem from "./v-cart-item";
import { mapActions, mapGetters } from "vuex";
import { mask } from "vue-the-mask";

export default {
  name: "VCart",
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      isActive: false,
      promo: [
        {
          code: "VER-SAL",
          discount: "10",
        },
        {
          code: "FRE-ROL",
          discount: "25",
        },
      ],
      promoCode: '',
      promoDiscount: '',
      promoData: {},
    };
  },
  directives: { mask },
  components: {
    VCartItem,
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function(sum, el) {
          return sum + el;
        });
      }
      if (this.promoDiscount.length) {
        result = result - (result / 100 * this.promoDiscount);
      }
      return parseInt(result);
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    goToOrder() {
      this.$emit("goToOrder");
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    openCart() {
      if (this.window.width <= 1600) {
        this.isActive = !this.isActive;
      }
    },
    usePromo() {
      for (let promoCode of this.promo) {
        if (this.promoCode == promoCode.code) {
          this.promoDiscount = promoCode.discount;
          this.promoData = promoCode
          this.$emit('promoData' ,promoCode);
        }
      }
    }
  },
};
</script>

<style>
.cart {
  margin-left: 5px;
  background-color: #fff;
  height: max-content;
  max-width: 325px;
  width: 325px;
  position: sticky;
}
@media (min-width: 1600px) {
  .cart {
    top: 51px;
  }
}

.cart__items {
  height: auto;
  overflow-y: auto;
  padding: 20px;
  max-height: 500px;
  display: grid;
  grid-gap: 20px;
}

.cart__title {
  padding: 20px;
  font-family: TT Norms Medium;
  font-size: 1.3rem;
  border-bottom: 2px solid #efefef;
}
.cart__count {
  display: none;
}
.cart__null {
  color: #888;
  padding: 20px;
}

.cart__summa {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0px 20px;
  border-top: 1px dashed #000;
}

.summa__value {
  font-size: 1.1rem;
  font-weight: 600;
}

.summa__value:after {
  content: "₽";
  margin-left: 2px;
}

.cart__promo-code {
  padding: 20px;
}
.promo-code__input {
  border: 1px solid #888;
  border-radius: 5px 0 0 5px;
  padding: 5px;
  background-color: #efefef;
  border-right-style: none;
}
.promo-code__button {
  border: 1px solid #888;
  border-radius: 0 5px 5px 0;
  padding: 5px;
  background-color: rgb(255, 255, 255);
  border-left-style: none;
  cursor: pointer;
  transition: 0.3s;
}
.promo-code__button:hover {
  background-color: #fcd83c;
}
.promo-code__button:active {
  transform: scale(1.1);
}
.promo-code__input:focus,
.promo-code__button:focus {
  outline: none;
}

.order {
  margin-bottom: 20px;
}

.order__button {
  display: block;
  padding: 10px 25px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  background-color: #fcd83c;
  transition: 0.3s;
}

.order__button:hover {
  border: none;
  background-color: #f0c013;
}

.order__button:active {
  transform: scale(0.9);
}

.order__button:focus {
  outline: none;
}
@media (max-width: 1600px) {
  .cart {
    position: fixed;
    left: 0;
    bottom: calc(-100% + 53px);
    width: 100%;
    min-width: 100%;
    margin: 0;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .3s;
  }
  .cart_open {
    bottom: 0;
  }
  .cart__main {
    padding: 20px;
    bottom: -1900px;
    position: absolute;
    width: 100%;
    transition: 0.5s;
    bottom: 0;
    position: relative;
    height: calc(100% - 57px);
    width: 600px;
  }
  .cart__title {
    display: flex;
    justify-content: center;
    background-color: #fcd83c;
    padding: 15px;
    width: 100%;
  }
  .cart__title:hover {
    cursor: pointer;
  }
  .cart__title:active {
    background-color: #f0c013;
  }
  .cart__count {
    display: block;
    margin-left: 10px;
  }
  .cart__count_circle {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 1px solid #000;
    border-radius: 50%;
    position: relative;
    font-size: 0.9rem;
  }
  .close-icon {
    position: absolute;
    top: 10px;
    left: 5px;
    width: 25px;
    height: auto;
  }
  .close-icon__icon {
    width: 25px;
    height: auto;
  }
  .cart__items {
    padding: 0;
    max-height: calc(100% - 170px);
    height: calc(100% - 170px);
    grid-gap: 0;
    grid-auto-rows: max-content;
  }
  .cart-item {
    padding: 15px 0;
    justify-content: center;
    align-items: flex-start;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  .cart-item div {
    justify-content: center;
    display: flex;
    justify-self: center;
  }
  .cart__promo-code {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
}
@media (max-width: 776px) {
  .cart__main {
    padding: 0;
    width: 100%;
  }
  .cart-item {
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-gap: 10px;
  }
}
@media (max-width: 495px) {
  .cart {
    bottom: calc(-100% + 45px);
  }
  .cart__main {
    height: calc(100% - 47px);
  }
  .cart-item {
    grid-template-columns: 1fr 3fr 1fr 1fr;
    grid-gap: 0px;
  }
  .cart__title {
    padding: 10px;
    font-size: 1.2rem;
  }
  .cart_open {
    bottom: 0;
  }
}
</style>
