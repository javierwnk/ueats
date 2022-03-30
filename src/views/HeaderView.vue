<template>
  <header>
      <div class="logo">

          <sidebar-component />

          <router-link to="/">
            <img src="../assets/logo.svg" alt="Uber Eats Logo">
          </router-link>
      </div>

      <div class="searchBar">
          <b-icon-search class="h6 icon"></b-icon-search>
          <input type="search" placeholder="Search">
      </div>

      <nav>
          <router-link class="cartItem" to="/cart"><b-icon-cart-fill class="cartIcon"></b-icon-cart-fill>Cart • <counter-component /></router-link>
          <router-link v-for="option in options" :to="option.path" :key="option.index">{{option.name}}</router-link>
      </nav>
      
  </header>
</template>

<script>
import CounterComponent from '@/components/CounterComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
export default {
    name: "HeaderView",
    components: {
        CounterComponent,
        SidebarComponent
    },
    data() {
        return {
            options: [ {name: "Sign Up", path: "/singup"}]
        }
    }
}
</script>

<style scoped>
    header {
        height: 96px;
        width: 100%;
        border-bottom: 2px solid #E2E2E2;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-content: center;
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo a img {
        width: 200px;
    }

    .searchBar {
        background-color: #EEEEEE;
        border-radius: 500px;
        height: 48px;
        display: flex;
        align-items: center;
    }

    .icon {
        margin: 0px 18px;
    }

    input {
        width: 88%;
        height: 100%;
        border: 0;
        background: transparent;
        outline: none;
    }

    nav {      
        display: flex;
        justify-content: space-around;
        align-items: center;
        column-gap: 16px;
        margin: 0 24px;
    }

    nav a {
    font-weight: bold;
    color: #000;
    background: #eee;
    border-radius: 500px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 500px;
    padding: 8px 12px;

    }
    /* Esta clase podemos cambiarle el estilo a los enlaces */
    nav a.router-link-exact-active, nav a:hover {
        color: #42b983;
        text-decoration: none;
    }    
    
    .cartItem {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 500px;
        padding: 8px 12px;
        width: 100px;
        height: 36px;
        color: #FFFFFF;
        background: #000;
        font-weight: 400;
        font-size: 14px;
    }
    


</style>