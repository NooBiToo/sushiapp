"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    data: {},
    error: false,
    preload: true,
    sets: [],
    rolls: [],
    chicken: [],
    salads: [],
    cart: []
  },
  actions: {
    GET_DATA: function GET_DATA(_ref) {
      var commit = _ref.commit;
      return (0, _axios["default"])("/data/data.json", {
        method: "GET"
      }).then(function (response) {
        commit("SET_DATA_TO_VUEX", response.data);
        commit("SET_SETS_TO_VUEX", response.data.Наборы);
        commit("SET_ROLLS_TO_VUEX", response.data.Роллы);
        commit("SET_CHICKEN_TO_VUEX", response.data.Курица);
        commit("SET_SALADS_TO_VUEX", response.data.Салаты);
      })["catch"](function (error) {
        console.log("Exception: ", error);
        commit("SET_ERROR", error["true"]);
      });
    },
    ADD_TO_CART: function ADD_TO_CART(_ref2, item) {
      var commit = _ref2.commit;
      commit("SET_CART", item);
    },
    DELETE_FROM_CART: function DELETE_FROM_CART(_ref3, index) {
      var commit = _ref3.commit;
      commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_CART_ITEM: function INCREMENT_CART_ITEM(_ref4, index) {
      var commit = _ref4.commit;
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM: function DECREMENT_CART_ITEM(_ref5, index) {
      var commit = _ref5.commit;
      commit("DECREMENT", index);
    }
  },
  mutations: {
    SET_DATA_TO_VUEX: function SET_DATA_TO_VUEX(state, data) {
      state.data = data;
      state.preload = false;
    },
    SET_SETS_TO_VUEX: function SET_SETS_TO_VUEX(state, sets) {
      state.sets = sets;
    },
    SET_ROLLS_TO_VUEX: function SET_ROLLS_TO_VUEX(state, rolls) {
      state.rolls = rolls;
    },
    SET_CHICKEN_TO_VUEX: function SET_CHICKEN_TO_VUEX(state, chicken) {
      state.chicken = chicken;
    },
    SET_SALADS_TO_VUEX: function SET_SALADS_TO_VUEX(state, salads) {
      state.salads = salads;
    },
    SET_CART: function SET_CART(state, item) {
      if (state.cart.length) {
        var isItemExists = false;
        state.cart.map(function (cart_item) {
          if (cart_item.name + cart_item.id === item.name + item.id) {
            isItemExists = true;
            cart_item.quantity++;
          }
        });

        if (!isItemExists) {
          state.cart.push(item);
        }
      } else {
        state.cart.push(item);
      }
    },
    REMOVE_FROM_CART: function REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    },
    SET_ERROR: function SET_ERROR(state, error) {
      state.error = !error;
    },
    INCREMENT: function INCREMENT(state, index) {
      state.cart[index].quantity++;
    },
    DECREMENT: function DECREMENT(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    }
  },
  getters: {
    ERROR: function ERROR(state) {
      return state.error;
    },
    DATA: function DATA(state) {
      return state.data;
    },
    SETS: function SETS(state) {
      return state.sets;
    },
    ROLLS: function ROLLS(state) {
      return state.rolls;
    },
    CHICKEN: function CHICKEN(state) {
      return state.chicken;
    },
    SALADS: function SALADS(state) {
      return state.salads;
    },
    CART: function CART(state) {
      return state.cart;
    },
    PRELOAD: function PRELOAD(state) {
      return state.preload;
    }
  },
  plugins: [(0, _vuexPersistedstate["default"])()]
});
var _default = store;
exports["default"] = _default;