<template>
  <div>
      <product-list-component v-for="product in products" :key="product.index" :product="product" />
  </div>
</template>

<script>
import ProductListComponent from '@/components/ProductListComponent.vue'
export default {
    name: "HomeView",
    components: { ProductListComponent },
    data() {
        return {
            products: []
        }
    },
    beforeCreate() {
        let url = "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/products";

        fetch(url)
        .then((response) => response.json())
        .then((data) => (this.products = data));
  },
}
</script>

<style>

</style>