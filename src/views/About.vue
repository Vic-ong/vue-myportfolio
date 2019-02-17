<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`">
    <Biography />
    <Profile />
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer'
import Biography from '@/components/Biography'
import Profile from '@/components/Profile'

export default {
  components: {
    Footer,
    Biography,
    Profile
  }
}
</script>
