<template>
  <transition name="modal">
    <div class="order modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <label for="telephone" class="order-form__group">
              Номер телефона
              <input
                type="tel"
                name="telephone"
                v-mask="'+7(###) ###-##-##'"
                v-model="telephone"
                class="order-form__input"
                :class="{ error: errors.length }"
                placeholder="+7(999) 999-99-99"
              />
            </label>
            <input class="order__button" type="submit" value="Заказать" @click="orderSubmit" />
            <div class="quick-order">
              * Достаточно лишь указать свой номер телефона и оператор вам
              перезвонит, что бы уточнить все детали
            </div>
            <button class="order-form__close" @click="orderClose">✖</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { mask } from "vue-the-mask";
import axios from "axios";

export default {
  name: "VOrder",
  data() {
    return {
      errors: [],
      telephone: null,
      order: [],
      promoArray: [],
    };
  },
  props: {
    promoCode: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  directives: { mask },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["ADD_TELEPHONE_TO_CART"]),
    orderClose() {
      this.$emit("orderClose");
    },
    orderSubmit: async function(e) {
      if (this.telephone) {
        await this.order.unshift(this.CART)
        await this.order.push(this.telephone)
        await this.promoArray.push(this.promoCode)
        await this.order.push(this.promoArray)
        await axios.post('/mail.php', this.order)
        await this.$emit("orderSuccess");
      }
      this.errors = [];
      if (!this.telephone) {
        this.errors.push("Пожалуйста укажите свой номер телефона");
      }
      e.preventDefault();
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: top;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.order-form {
  position: relative;
}
.order-form__wrapper {
  padding: 20px;
}
.order-form__close {
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
}
.quick-order {
  font-size: 14px;
  margin: 20px;
}
.order-form__close:focus {
  outline: none;
}
.order-form__group {
  display: flex;
  flex-direction: column;
}
.order-form__input {
  margin: 10px 0;
  padding: 10px 5px;
  border: none;
  border-bottom: 3px solid #888;
  font-size: 1rem;
  font-family: TT Norms Medium;
  transition: ease 0.5s;
}
.order-form__input:focus {
  outline: none;
  border-color: #f0c013;
  background-color: #f1f1f1;
}
.error {
  border-color: red;
  background-color: rgba(255, 0, 0, 0.2);
  position: relative;
}
.order-form__submit {
  padding: 20px;
  background-color: #f0c013;
}
@media (max-width: 495px) {
  .modal-container {
    width: 350px;
  }
}
</style>
