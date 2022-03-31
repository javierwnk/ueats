<template>
  <v-app>
    <header-view></header-view>
    <router-view />
  </v-app>

  
</template>

<script>

import HeaderView from '@/views/HeaderView.vue';


export default {
  name: 'App',
  components: {
    HeaderView
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a:hover {
  text-decoration: none;
}
</style>