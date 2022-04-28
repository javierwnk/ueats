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
                  <td><img :src="product.image" :alt="product.name"></td>
                  <td>{{product.name}}</td>
                  <td>${{product.price}}</td>
                  <td>{{product.qty}}</td>
                  <td><button @click="deleteItem(product.id)"><b-icon icon="trash"></b-icon></button></td>
              </tr>
              <tr>
                  <td>Total:</td>
                  <td>${{orderTotal}}</td>
              </tr>
          </tbody>
      </table>
      <form action=""  v-if="cart.length != 0">

          <p>Complete your address details and complete your order</p>

          <label for="name">Address</label>
            <input
            type="address" 
            name="address" 
            id="address"
            placeholder="Address"
            >

          <button @click="makeOrder">Make order</button>
      </form>

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
           this.cart.forEach(product => total += Number(product.price))
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
        display: grid;
        grid-template-areas: "resume form";
        column-gap: 32px;
    }

    table {
        grid-area: resume;
    }

    table button {
        width: 80px;
        border: 0;
        background: transparent;
    }

    form {
        grid-area: form;
        background: rgb(249, 249, 249);
        border-radius: 50px;
        padding: 24px;
        display: flex;
        flex-flow: column wrap;
        row-gap: 12px;
    }

    form p {
        text-align: center;
    }

    form input {
        background: transparent;
        border: 0;
        border-bottom: 1px solid rgb(206, 206, 206);
    }

    form input:focus, form button:focus {
        outline: none;
    }

    form button {
        background: black;
        color: white;
        border: 0;
        border-radius: 500px;

        height: 40px;
    }

    label {
        display: none;
    }

    th {
        text-align: center;
    }
    
    td {
        padding: 20px;
    }

    td img {
        width: 200px;

    }
</style>