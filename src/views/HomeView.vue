<template>
  <div>
      <product-list-component v-for="list in lists" :key="list.index" :title="list.title" :products="list.products" />
  </div>
</template>

<script>
import ProductListComponent from '@/components/ProductListComponent.vue'
export default {
    name: "HomeView",
    components: { ProductListComponent },
    data() {
        return {
            lists: [{title: "In a Rush?", products: [{
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
            }]},
            {title: "National Brands", products: [{
                id: 1,
                name: "Couchfood Combo",
                price: 5.99,
                freeShipping: false,
                deliveryTime: "15-25 min",
                image: "products/1"
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
                id: 3,
                name: "Subway Sandwich",
                price: 6.00,
                freeShipping: true,
                deliveryTime: "20-35 min",
                image: "products/3"
            },
            {
                id: 6,
                name: "Foodary Combo",
                price: 7.99,
                freeShipping: false,
                deliveryTime: "10-15 min",
                image: "products/6"
            }]}]
        }
    }
}
</script>

<style>

</style>