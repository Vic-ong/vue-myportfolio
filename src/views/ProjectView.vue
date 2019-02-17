<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`">
    <Project-details />
  </v-container>
</template>

<script>
import ProjectDetails from '../components/ProjectDetails'

export default {
  components: {
    ProjectDetails
  }
}
</script>
