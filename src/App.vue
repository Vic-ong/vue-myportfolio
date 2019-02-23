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
import { mapActions } from 'vuex'
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  created () {
    this.getUsers('vic-ong-2019')
    this.getInterests()
    this.getProjects()
  },
  methods: {
    ...mapActions('users', {
      getUsers: 'getUsers'
    }),
    ...mapActions('interests', {
      getInterests: 'getInterests'
    }),
    ...mapActions('projects', {
      getProjects: 'getProjects'
    })
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
