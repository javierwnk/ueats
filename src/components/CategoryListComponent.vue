<template>

<div>
 <ul>
      <li v-for="category in categories" :key="category.name">
          <router-link class="categoryItem" to="">
          <div>
              <img :src="require(`@/assets/categories/${category.image}`)" alt="">
          </div>
          <p>{{category.name}}</p>
          </router-link>
      </li>
  </ul>

  <div class="spacer"></div>
</div>
 
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "CategoryList",
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions([
            "getCategories"
        ])
    },
    computed: {
        ...mapState([
            "categories"
        ])
    },
    created() {
        this.getCategories()
    } 
}
</script>

<style scoped>
    ul {
        width: 90%;
        height: 121px;
        list-style-type: none;

        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        overflow-y: hidden;
        row-gap: 200px;
        
        padding: 20px 0;
        margin: 0 auto 15px auto;
    }

    li a {
        width: 80px;
        height: 84px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
    } 

    li a div {
        height: 60px;
        width: 60px;
        border-radius: 500px;
    } 

    li a div:hover {
        background-color: #eee;
    }  
    
    li a div img {
        width: 100%;
    }

    li a p {
        font-size: 14px;
        font-weight: 500;
        color: #000;
        margin-top: 2px;
        margin-bottom: 0;
        text-align: center;
    }
    
    .spacer {
        width: 95%;
        height: 1px;
        border: 1px solid #eee;
        margin: 0 auto;
    }  
</style>