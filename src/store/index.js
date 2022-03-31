import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/",
    cartCounter: 0,
    users: [],
    categories: [],
    restaurants: []    
  },
  getters: {
  },
  mutations: {
    pasteCategories(state, categories) {
      state.categories = categories
    },
    pasteRestaurants(state, restaurants) {
      state.restaurants = restaurants
    },
    updateCartQty(state) {
      let qty = 0
      let cart = JSON.parse(localStorage.getItem('cart'))
      cart.forEach(product => qty += product.qty)
      state.cartCounter = qty
    }
  },
  actions: {
    async getUsers() {
      const response = await fetch(this.state.url + "users")
      const users = await response.json()
      this.users = users
      // commit("pasteUsers", users)
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
    }
  },
  modules: {
  }
})
