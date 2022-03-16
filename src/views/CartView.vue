<template>
  <div class="container">
      <p v-if="cart.length == 0">No hay items en el carrito</p>
      <table v-if="cart.length != 0">
          <thead>
              <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="product in cart" :key="product.index">
                  <td><img :src="require(`@/assets/${product.image}.png`)" :alt="product.name"></td>
                  <td>{{product.name}}</td>
                  <td>${{product.price}}</td>
                  <td>1</td>
                  <td><button @click="deleteItem(product.id)">Delete</button></td>
              </tr>
              <tr>
                  <td>Total:</td>
                  <td>{{orderTotal}}</td>
              </tr>
          </tbody>
      </table>

      <button @click="makeOrder">Make order</button>
  </div>
</template>

<script>
export default {
    name: "CartView",
    data() {
        return {
            cart: [],
        }
    },
    methods: {
        makeOrder() {
            alert("Your order was made")
            this.cart = []
            localStorage.setItem("cart", null)
        },
        deleteItem(id) {
            this.cart.splice(this.cart.findIndex(product => product.id == id), 1)
            localStorage.setItem("cart", JSON.stringify(this.cart))
        }
    },
    computed: {
        orderTotal() {
           let total = 0
           this.cart.forEach(product => total += product.price)
            return total
        }
    },
    beforeMount() {
        if(localStorage.getItem("cart") != null || localStorage.getItem("cart") != undefined){
            this.cart = JSON.parse(localStorage.getItem("cart"))

        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 30px;
    }
    
    td {
        padding: 20px;
    }
</style>