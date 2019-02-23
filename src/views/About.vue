<template>
  <v-container :class="`${$vuetify.breakpoint.xs ? '' : 'main-container'}`" class="about-page-offset">
    <Biography />
    <Contact showDivider small />
  </v-container>
</template>

<script>
import Contact from '@/components/Contact'
import Biography from '@/components/Biography'

export default {
  components: {
    Contact,
    Biography
  }
}
</script>

<style>
.about-page-offset {
  position: relative;
  top: -20px;
}
</style>
