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
