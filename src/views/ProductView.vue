<template>
  <div class="container">
      <h2>{{product.name}}</h2>
      <img :src="product.image" :alt="product.name" width="250px">
      <p>$ {{product.price}}</p>
        <button @click="qty++">+</button>
        <input type="number" name="qty" id="qty" :value="qty">
        <button @click="qty > 1 ? qty-- : qty = 1 ">-</button>
        <br>
        <br>
      <button @click="loadCart(product)">Add to cart</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: "ProductView",
    data() {
        return {
            qty: 1
        }
    },
    computed: {
        ...mapState([
            "product"
        ])
    },
    methods: {
        ...mapActions([
            "getProduct",
            "updateCartQty"
        ]),
        ...mapMutations([
            "addToCart"
        ]),
        loadCart(prod) {
            let product = {...prod, qty: this.qty}
            this.addToCart(product)
        }
    },
    beforeMount() {
        this.getProduct(this.$route.params.id)
    }
}
</script>

<style>

</style>