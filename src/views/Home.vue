<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'pa-5'}`">
    <Projects />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Projects from '../components/Projects'

export default {
  components: {
    Projects
  },
  created () {
    this.getUsers('vic-ong-2019')
  },
  methods: {
    ...mapActions('users', {
      getUsers: 'getUsers'
    })
  }
}
</script>
