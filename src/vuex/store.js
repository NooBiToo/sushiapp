import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    error: false,
    preload: true,
    sets: [],
    rolls: [],
    chicken: [],
    salads: [],
    cart: [],
  },
  actions: {
    GET_ROLLS({ commit }) {
      return axios(
        "https://spreadsheets.google.com/feeds/list/1HptcoHp0yRgoLyJkGvgqYHCk6Kn_Stbufrkoug0vUtU/2/public/values?alt=json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          commit("SET_ROLLS_TO_VUEX", response.data.feed.entry);
        })
        .catch((error) => {
          console.log("Exception: ", error);
          commit("SET_ERROR", error.true);
        });
    },
    GET_SETS({ commit }) {
      return axios(
        "https://spreadsheets.google.com/feeds/list/1HptcoHp0yRgoLyJkGvgqYHCk6Kn_Stbufrkoug0vUtU/1/public/values?alt=json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          commit("SET_SETS_TO_VUEX", response.data.feed.entry);
        })
        .catch((error) => {
          console.log("Exception: ", error);
          commit("SET_ERROR", error.true);
        });
    },
    GET_CHICKEN({ commit }) {
      return axios(
        "https://spreadsheets.google.com/feeds/list/1HptcoHp0yRgoLyJkGvgqYHCk6Kn_Stbufrkoug0vUtU/3/public/values?alt=json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          commit("SET_CHICKEN_TO_VUEX", response.data.feed.entry);
        })
        .catch((error) => {
          console.log("Exception: ", error);
          commit("SET_ERROR", error.true);
        });
    },
    GET_SALADS({ commit }) {
      return axios(
        "https://spreadsheets.google.com/feeds/list/1HptcoHp0yRgoLyJkGvgqYHCk6Kn_Stbufrkoug0vUtU/4/public/values?alt=json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          commit("SET_SALADS_TO_VUEX", response.data.feed.entry);
        })
        .catch((error) => {
          console.log("Exception: ", error);
          commit("SET_ERROR", error.true);
        });
    },
    ADD_TO_CART({ commit }, item) {
      commit("SET_CART", item);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
  },
  mutations: {
    SET_DATA_TO_VUEX: (state, data) => {
      state.data = data;
      state.preload = false;
    },
    SET_SETS_TO_VUEX: (state, sets) => {
      state.sets = sets;
    },
    SET_ROLLS_TO_VUEX: (state, rolls) => {
      state.rolls = rolls;
    },
    SET_CHICKEN_TO_VUEX: (state, chicken) => {
      state.chicken = chicken;
    },
    SET_SALADS_TO_VUEX: (state, salads) => {
      state.salads = salads;
    },
    SET_CART: (state, item) => {
      if (state.cart.length) {
        let isItemExists = false;
        state.cart.map(function(cart_item) {
          if (cart_item.gsx$name.$t + cart_item.gsx$id.$t === item.gsx$name.$t + item.gsx$id.$t) {
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
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    SET_ERROR: (state, error) => {
      state.error = !error;
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  getters: {
    ERROR(state) {
      return state.error;
    },
    DATA(state) {
      return state.data;
    },
    SETS(state) {
      return state.sets;
    },
    ROLLS(state) {
      return state.rolls;
    },
    CHICKEN(state) {
      return state.chicken;
    },
    SALADS(state) {
      return state.salads;
    },
    CART(state) {
      return state.cart;
    },
    PRELOAD(state) {
      return state.preload;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
