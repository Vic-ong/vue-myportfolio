<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`">
    <Introduction />
    <Projects />
    <Footer />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Introduction from '@/components/Introduction'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export default {
  components: {
    Introduction,
    Projects,
    Footer
  },
  created () {
    this.getUsers('vic-ong-2019')
  },
  computed: {
  },
  methods: {
    ...mapActions('users', {
      getUsers: 'getUsers'
    })
  }
}
</script>

