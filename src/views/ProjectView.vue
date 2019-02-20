<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`">
    <Project-details :id="id" />
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer'
import ProjectDetails from '../components/ProjectDetails'

export default {
  components: {
    Footer,
    ProjectDetails
  },
  props: {
    id: String
  }
}
</script>
