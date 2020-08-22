<template>
  <div class="cart">
    <div class="cart__title">
      <h2>Корзина</h2>
    </div>
    <div class="cart__main">
      <div class="cart__null">
        Вы ещё ничего не выбрали
      </div>
      <div class="cart__items">
        <v-cart-item />
      </div>
      <div class="cart__summa">
        <div class="summa__text">
          Сумма заказа: 
        </div>
        <div class="summa__value">1080</div>
      </div>
    </div>
  </div>
</template>

<script>
import VCartItem from "./v-cart-item"
export default {
  name: "VCart",
  components: {
    VCartItem
  }
}
</script>

<style lang="sass">
.cart
  margin-left: 5px
  background-color: #fff
  height: max-content
  max-width: 325px
  width: 325px
  &__title
    padding: 20px
    font-family: TT Norms Medium
    font-size: 1.3rem
    border-bottom: 2px solid #efefef
  &__main
    padding: 20px
  &__null
    color: #888
    padding-bottom: 20px
  &__summa
    display: flex
    justify-content: space-between
    padding-top: 20px
    border-top: 1px dashed #000

.summa
  &__value
    font-size: 1.1rem
    font-weight: 600
    &:after
      content: '₽'
      margin-left: 2px

</style>