<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`">
    <Project-details :id="id" />
    <Contact />
  </v-container>
</template>

<script>
import Contact from '@/components/Contact'
import ProjectDetails from '../components/ProjectDetails'

export default {
  components: {
    Contact,
    ProjectDetails
  },
  props: {
    id: String
  }
}
</script>
