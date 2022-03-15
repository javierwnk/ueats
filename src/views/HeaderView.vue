<template>
  <header>
      <div class="logo">
          <img src="../assets/logo.svg" alt="Uber Eats Logo">
      </div>

      <div class="searchBar">
          <input type="search" placeholder="Buscar">
      </div>

      <nav>
          <router-link v-for="option in options" :to="option.path" :key="option.index">{{option.name}}</router-link>
      </nav>
      
  </header>
</template>

<script>
export default {
    name: "HeaderView",
    data() {
        return {
            options: [{name: "Login", path: "/login"}, {name: "Sign Up", path: "/singup"}, {name: "Delivery", path: "/delivery"}, {name: "Cart", path: "/cart"}]
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
    }

    .searchBar {
        background-color: #EEEEEE;
    }


</style>