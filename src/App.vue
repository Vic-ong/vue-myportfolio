<template>
  <v-app>
    <div class="white">
      <navigation-bar />
      <v-content>
        <router-view />
      </v-content>
    </div>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
.v-btn {
  text-transform: none;
}
.main-container {
  padding-top: 50px;
  padding-left: 150px;
  padding-right: 150px;
}
</style>
