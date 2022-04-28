import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/",
    cartCounter: 0,
    users: [],
    categories: [],
    restaurants: [],
    product: [],
    cart: []  
  },
  getters: {
  },
  mutations: {
    pasteUsers(state, users) {
      state.users = users
    },
    pasteCategories(state, categories) {
      state.categories = categories
    },
    pasteRestaurants(state, restaurants) {
      state.restaurants = restaurants
    },
    pasteProduct(state, product) {
      state.product = product
    },
    addToCart(state, product) {

      if(localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))

        const value = state.cart.findIndex(element => element.id == product.id)

        if(value != -1) {
          state.cart[0].qty += product.qty
        } else {
          state.cart.push(product)
        }

      } else {
        state.cart = [product]
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))

      let totalQty = 0;
      state.cart.forEach(item => totalQty += item.qty)
      state.cartCounter = totalQty
    }
  },
  actions: {
    async getUsers( { commit }) {
      const response = await fetch(this.state.url + "users")
      const users = await response.json()
      
      commit('pasteUsers', users)
    },
    async getCategories({ commit }) {
      const response = await fetch(this.state.url + "categories")
      const categories = await response.json()

      commit('pasteCategories', categories)
    },
    async getRestaurants ({ commit }) {
      const response = await fetch(this.state.url + "restaurants")
      const restaurants = await response.json()

      commit('pasteRestaurants', restaurants)
    },
    async getProduct ({commit}, id) {
      const response = await fetch(this.state.url + "restaurants/" + id)
      const product = await response.json()

      commit('pasteProduct', product)
    }
  },
  modules: {
  }
})
