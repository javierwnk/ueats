<template>
  <div>
      <category-list-component />
  </div>
</template>

<script>
import CategoryListComponent from '@/components/CategoryListComponent.vue'
export default {
    name: "HomeView",
    components: {  CategoryListComponent },
    data() {
        return {
            products: []
        }
    }
    
}
</script>

<style>

</style>