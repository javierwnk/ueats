<template>
  <div>
    <b-icon-list v-b-toggle.sidebar-backdrop class="iconDropdown"></b-icon-list>

    <b-sidebar
      id="sidebar-backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2 sidebarContent">
        <div>
          <router-link to="/signup" class="signUpBtn">Sign up</router-link>

          <ul>
            <li><router-link to="/">Create a business account</router-link></li>
            <li><router-link to="/">Add your restaurant</router-link></li>
            <li><router-link to="/">Sign up to deliver</router-link></li>
          </ul>
        </div>

        <div>
          <div class="infoApp">
            <img src="../assets/applogo.svg" alt="Uber Eats App Logo" />
            <p>There's more to love in the app</p>
          </div>

          <div class="os">
            <a href=""><apple-logo-component /> iPhone</a>
            <a href=""><android-logo-component /> Android</a>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import AppleLogoComponent from "@/components/AppleLogoComponent.vue";
import AndroidLogoComponent from './AndroidLogoComponent.vue';

export default {
  components: { AppleLogoComponent, AndroidLogoComponent },
  name: "SidebarComponente",
  data() {
    return {
      variant: "dark",
    };
  },
};
</script>

<style scoped>
.iconDropdown {
  font-size: 1.9rem;
  margin-right: 32px;
}

.sidebarContent {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 100%;
}

.signUpBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background: #000;
  color: #fff;
  outline: none;
  border: 0;
  font-size: 18px;
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 32px 0 0 0;
  padding: 0;
}

ul li {
  margin-top: 16px;
}

ul li a {
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 14px;
}

.infoApp {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-content: center;
  column-gap: 24px;
  line-height: 16px;
}

.infoApp img {
  max-width: 56px;
}

.infoApp p {
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
}

.os {
    display: flex;
    flex-flow: row wrap;
    margin: 16px 0 46px 0;
}

.os a {
    height: 40px;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 8px;
    background: #eee;
    border-radius: 500px;
    color: #000;
    font-weight: 700;
    margin-right: 12px;
}

.os a:hover {
  background: #E2E2E2;
  text-decoration: none;
}

.os a svg {
    height: 20px;
}
</style>