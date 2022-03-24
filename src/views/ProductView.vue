<template>
  <div class="container">
    <h2>{{product.name}}</h2>
    <img :src="product.image" :alt="product.name">
    <p>Price: ${{product.price}}</p>
    <p>Delivery Time: {{product.description}}</p>
    <button @click="addToCart">Buy now</button>
  </div>
</template>

<script>
export default {
    name: "ProductView",
    data() {
        return {
            product: []
        }
    },
    beforeMount() {
        let url = "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/products/" + this.$route.params.id;

        fetch(url)
        .then((response) => response.json())
        .then((data) => (this.product = data));
    },
    methods: {
        addToCart() {
            let cart = []
            if (localStorage.getItem("cart")){
                cart = JSON.parse(localStorage.getItem("cart"))
            }

            cart.push(this.product)
            localStorage.setItem("cart", JSON.stringify(cart))
            alert("Producto agregado")
        }
    }

}
</script>

<style scoped>
    .container {
        margin-top: 30px;
    }
</style>