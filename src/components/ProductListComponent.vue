<template>
  <div class="container">

      <div class="restaurantContainer">

        <router-link :to="{name: 'details', params: {id: restaurant.id}}" class="restaurantCard" v-for="restaurant in restaurants" :key="restaurant.id">
            <img :src="restaurant.image" :alt="restaurant.name">
            <div class="firstLine">
                <p>{{restaurant.name}}</p>
            </div>
            <div class="secondLine">
                <p>${{restaurant.price}}</p>
            </div>
      </router-link>

      </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "ProductList",
    methods: {
        ...mapActions([
            "getRestaurants"
        ])
    },
    computed: {
        ...mapState([
            "restaurants"
        ])
    },
    beforeMount() {
        this.getRestaurants()
    }
}
</script>

<style scoped>

.restaurantContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 24px;
}

.restaurantCard {
    height: 188px;
}

.restaurantCard img {
    width: 100%;
    height: 128px;
}

p {
    color: black;
}

</style>