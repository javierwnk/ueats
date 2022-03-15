<template>
  <v-app>
    <header-view></header-view>
    <login-view></login-view>
  </v-app>
</template>

<script>

import LoginView from '@/views/LoginView.vue'
import HeaderView from '@/views/HeaderView.vue';

export default {
  name: 'App',
  components: {
    LoginView,
    HeaderView
  }
};
</script>
