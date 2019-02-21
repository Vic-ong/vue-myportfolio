<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`" class="homepage-title">
    <Introduction />
    <Projects :numberOfProjects=numberOfProjects />
    <Contact />
  </v-container>
</template>

<script>
import Introduction from '@/components/Introduction'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'

export default {
  components: {
    Introduction,
    Projects,
    Contact
  },
  data() {
    return {
      numberOfProjects: 4
    }
  }
}
</script>

<style>
.homepage-title {
  padding-top: 100px;
}
</style>
