<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`" class="about-page-offset">
    <Biography />
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer'
import Biography from '@/components/Biography'

export default {
  components: {
    Footer,
    Biography
  }
}
</script>

<style>
.about-page-offset {
  position: relative;
  top: -100px;
}
</style>
