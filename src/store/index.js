import Vue from 'vue'
import Vuex from 'vuex'
import product from '../mock/products.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    products (state) {
      return state.products
    },
    cart (state) {
      return state.cart
    }
  },
  mutations: {
    getProductData (state) {
      state.products = product
    },
    addItemToCart (state, item) {
      const addedItem = state.cart.find(products => products.id === item.id)
      if (addedItem) {
        addedItem.qty++
      } else {
        state.cart.push({ ...item, qty: 1 })
      }
    },
    addQty (state, id) {
      const currentItem = state.cart.find(products => products.id === id)
      currentItem.qty++
    },
    reduceQty (state, id) {
      const currentItem = state.cart.find(products => products.id === id)
      if (currentItem.qty <= 1) {
        state.cart = state.cart.filter(products => products.id !== id)
      } else {
        currentItem.qty--
      }
    },
    removeItem (state, id) {
      state.cart = state.cart.filter(products => products.id !== id)
    }
  },
  actions: {
    getProducts ({ commit }) {
      commit('getProductData')
    },
    addToCart ({ commit }, item) {
      commit('addItemToCart', item)
    },
    addQty ({ commit }, id) {
      commit('addQty', id)
    },
    reduceQty ({ commit }, id) {
      commit('reduceQty', id)
    },
    removeItem ({ commit }, id) {
      commit('removeItem', id)
    }
  }
})
