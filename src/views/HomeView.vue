<template>
  <div>
      <category-list-component />

      <main>
          <div class="filterContainer">
              <h2>All restaurants</h2>
          </div>

          <div class="productContainer">
              <product-list-component />
          </div>
      </main>
  </div>
</template>

<script>
import CategoryListComponent from '@/components/CategoryListComponent.vue'
import ProductListComponent from '@/components/ProductListComponent.vue'

export default {
    name: "HomeView",
    components: {  CategoryListComponent, ProductListComponent },
    data() {
        return {
            products: []
        }
    }
    
}
</script>

<style scoped>

main {
    width: 95%;
    margin: 0 auto;
    padding: 48px 0;

    display: grid;
    grid-template-areas: "filter content";
    grid-template-columns: 280px auto;
}

.filterContainer {
    grid-area: filter;
   height: fit-content;

   position: sticky;
   top: 20px;


}

h2 {
    font-size: 28px;
    font-weight: 700;
}

.productContainer {
    grid-area: content;
}
</style>