<template>
  <div>
    <v-toolbar v-if="!$vuetify.breakpoint.xs"
      flat app scroll-off-screen
      :scroll-threshold=50
      color="transparent"
      class="mt-3 pl-3 pr-3"
    >
      <router-link :to="{ name: 'Projects' }">
        <v-icon class="menu-icon" :style="navMenuIconStyles" :size="30">
          fa-candy-cane
        </v-icon>
      </router-link>
      <v-spacer></v-spacer>
      <router-link
        v-for="(item, i) in menu"
        v-bind:key="i"
        :to="{ name: item.router }"
      >
        <div class="menu-text mr-5" :style="navMenuTextStyles">
          <span>
            {{ item.title }}
          </span>
        </div>
      </router-link>
    </v-toolbar>

    <!-- Mobile view -->
    <v-toolbar v-else>
      <h1>Current Page</h1>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { title: 'Projects', router: 'Projects' },
        { title: 'About', router: 'About' }
      ]
    }
  },
  computed: {
    navMenuIconStyles () {
      return {
        '--color': this.$vuetify.theme.primary,
        '--color-after': this.$vuetify.theme.secondary,
        '--scale-after': 1.4
      }
    },
    navMenuTextStyles () {
      return {
        '--transition-length': '0.25s',
        '--color': this.$vuetify.theme.primaryDark,
        '--color-after': this.$vuetify.theme.primary,
        '--size': '16px',
        '--size-after': '20px'
      }
    }
  }
}
</script>

<style scoped>
.menu-icon {
  color: var(--color);
}
.menu-icon:hover {
  transform: scale(var(--scale-after));
}
.menu-text {
  font-size: var(--size);
  color: var(--color);

  -webkit-transition: color var(--transition-length), font-size var(--transition-length);
  -moz-transition: color var(--transition-length), font-size var(--transition-length);
  -o-transition: color var(--transition-length), font-size var(--transition-length);
  transition: color var(--transition-length), font-size var(--transition-length);
}
.menu-text:hover {
  font-size: var(--size-after);
  color: var(--color-after);
}
</style>
