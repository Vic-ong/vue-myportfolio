<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`" class="homepage-title">
    <Introduction />
    <Projects />
    <Footer />
  </v-container>
</template>

<script>
import Introduction from '@/components/Introduction'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export default {
  components: {
    Introduction,
    Projects,
    Footer
  }
}
</script>

<style>
.homepage-title {
  padding-top: 100px;
}
</style>
