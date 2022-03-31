<template>
  <header>
    <div class="logo">
      <sidebar-component />

      <router-link to="/">
        <img src="../assets/logo.svg" alt="Uber Eats Logo" />
      </router-link>
    </div>

    <div class="middle">
      <div class="types">
        <b-button-group>
          <b-button class="active">Delivery</b-button>
          <b-button>Pickup</b-button>
          <b-button>Dine-in</b-button>
        </b-button-group>
      </div>

      <div class="location">
        <location-icon-component />
        <p>Gold Coast • Now</p>
      </div>
    </div>

    <div class="searchBar">
      <b-icon-search class="h6 icon"></b-icon-search>
      <input type="search" placeholder="Food, groceries, drinks, etc" />
    </div>

    <nav>
      <router-link class="cartItem" to="/cart"
        ><b-icon-cart-fill class="cartIcon"></b-icon-cart-fill>Cart •
        <counter-component
      /></router-link>
      <router-link
        v-for="option in options"
        :to="option.path"
        :key="option.index"
        >{{ option.name }}</router-link
      >
    </nav>
  </header>
</template>

<script>
import CounterComponent from "@/components/CounterComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import LocationIconComponent from "@/components/LocationIconComponent.vue";

export default {
  name: "HeaderView",
  components: {
    CounterComponent,
    SidebarComponent,
    LocationIconComponent,
  },
  data() {
    return {
      options: [{ name: "Sign Up", path: "/singup" }],
    };
  },
};
</script>

<style scoped>
header {
  height: 96px;
  width: 100%;
  border-bottom: 2px solid #e2e2e2;
  display: grid;
  grid-template-areas: "logo middle search search search search search nav";
  align-content: center;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: logo;
}

.logo a img {
  width: 146px;
}

.middle {
  display: flex;
  column-gap: 24px;
  align-items: center;
  grid-area: middle;
}

.location {
  height: 48px;

  display: flex;
  align-items: center;
  background: #eee;
  border-radius: 500px;
  font-size: 14px;
  font-weight: 500;
  column-gap: 10px;
  padding: 8px 12px;
}

.location:hover {
  background: #e2e2e2;
  cursor: pointer;
}

.location p {
  margin: 0;
}

.searchBar {
  background-color: #eeeeee;
  border-radius: 500px;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  grid-area: search;
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
  font-weight: 500;
}

nav {
  width: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 16px;
  margin: 0 auto;
  grid-area: nav;
}

nav a {
  font-weight: 500;
  color: #000;
  background: #eee;
  border-radius: 500px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 12px;
  font-size: 14px;
}

nav a:hover {
  text-decoration: none;
  background: #e2e2e2;
  cursor: pointer;
}

.cartItem:hover {
  background: rgb(51, 51, 51);
}

.cartItem {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 500px;
  padding: 8px 12px;
  width: 100px;
  height: 36px;
  color: #ffffff;
  background: #000;
  font-weight: 400;
  font-size: 14px;
}

.types {
  height: 48px;
  border-radius: 500px;
  background: #eee;
}

.btn-group {
  display: flex;
  column-gap: 5px;
  align-content: center;
  border-radius: 500px;
}

.btn-secondary {
  height: 48px;
  background-color: transparent;
  border: 0;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  border-radius: 500px;
}

button.btn.active.btn-secondary {
  background-color: #fff;
  color: #000;
  border-radius: 500px;
  border: 4px solid #eeeeee;
}
</style>