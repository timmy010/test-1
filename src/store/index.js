import Vue from 'vue';
import Vuex from 'vuex';
import products from '../data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amount: 1,
    cartProducts: products,
  },
  mutations: {
    updateCartProductAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((product) => product.id === productId);

      if (item) {
        item.amount = amount;
      }
    },
  },
  getters: {
    cartTotalPrice(state) {
      return state.cartProducts.reduce((acc, item) => (item.price * item.amount) + acc, 0);
    },
  },
});
