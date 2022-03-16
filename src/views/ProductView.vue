<template>
  <div class="container">
    <h2>{{product.name}}</h2>
    <img :src="require(`@/assets/${product.image}.png`)" :alt="product.name">
    <p>Price: ${{product.price}}</p>
    <p v-if="product.freeShipping"> Free Shipping  • </p>
    <p>Delivery Time: {{product.deliveryTime}}</p>
    <button @click="addToCart">Buy now</button>
  </div>
</template>

<script>
export default {
    name: "ProductView",
    data() {
        return {
            products: [{
                id: 1,
                name: "Couchfood Combo",
                price: 5.99,
                freeShipping: false,
                deliveryTime: "15-25 min",
                image: 'products/1'
            },
            {
                id: 2,
                name: "Everyday Combo",
                price: 2.99,
                freeShipping: false,
                deliveryTime: "15-25 min",
                image: 'products/2'
            },
            {
                id: 3,
                name: "Subway Sandwich",
                price: 6.00,
                freeShipping: true,
                deliveryTime: "20-35 min",
                image: "products/3"
            },
            {
                id: 4,
                name: "JJ's Combo",
                price: 10,
                freeShipping: true,
                deliveryTime: "15-25 min",
                image: "products/4"
            },
            {
                id: 5,
                name: "Ice Cream",
                price: 2.99,
                freeShipping: false,
                deliveryTime: "10-20 min",
                image: "products/5"
            },
            {
                id: 6,
                name: "Foodary Combo",
                price: 7.99,
                freeShipping: false,
                deliveryTime: "10-15 min",
                image: "products/6"
            }],
            product: []
        }
    },
    beforeMount() {
        this.product = this.products.find(product => product.id == this.$route.params.id)
    },
    methods: {
        addToCart() {
            let cart = []
            if (localStorage.getItem("cart")){
                cart = JSON.parse(localStorage.getItem("cart"))
            }

            cart.push(this.product)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }

}
</script>

<style scoped>
    .container {
        margin-top: 30px;
    }
</style>