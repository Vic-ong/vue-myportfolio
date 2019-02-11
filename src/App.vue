<template>
  <v-app>
    <!-- TABLET RESOLUTION AND ABOVE -->
    <v-toolbar v-if="!$vuetify.breakpoint.xs"
      flat app scroll-off-screen
      :scroll-threshold=50
      color="transparent"
      class="mt-3 pl-3 pr-3"
    >
      <v-hover>
        <router-link :to="{ name: 'Projects' }" slot-scope="{ hover }">
          <v-icon
            :size="hover ? 40 : 30"
            color="primary"
          >
            fa-candy-cane
          </v-icon>
        </router-link>
      </v-hover>
      <v-spacer></v-spacer>
      <router-link
        v-for="(item, i) in menu"
        v-bind:key="i"
        :to="{ name: item.router }"
      >
        <v-hover>
          <div slot-scope="{ hover }">
            <span :class="`${hover ? 'primary' : 'secondary'}--text mr-5 subheading`">
              {{ item.title }}
            </span>
          </div>
        </v-hover>
      </router-link>
    </v-toolbar>

    <app-mobile v-if="$vuetify.breakpoint.xs"
      :menu="menu"
    >
      Current Page
    </app-mobile>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppMobile from './AppMobile.vue'

export default {
  name: 'App',
  components: {
    AppMobile
  },
  data () {
    return {
      menu: [
        { title: 'Projects', router: 'Projects' },
        { title: 'About', router: 'About' }
      ]
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
.v-btn {
  text-transform: none;
}
</style>
