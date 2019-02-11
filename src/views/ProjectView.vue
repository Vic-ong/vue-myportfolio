<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'pa-5'}`">
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
