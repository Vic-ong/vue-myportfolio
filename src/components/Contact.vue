<template>
  <div id="contact" :style="containerStyle">
    <v-divider v-if="showDivider" class="pb-5"></v-divider>
    <div>
    <v-flex>
      <v-layout row class="mb-3">
        <v-spacer/>
        <v-hover v-for="(media, index) in medias" v-bind:key="index">
          <a :href="media.link" target="_blank" slot-scope="{ hover }">
            <v-icon
              class="media-container"
              :class="spacingBetweenIcons"
              :color="hover ? media.color : 'grey darken-2'"
              :size="iconSize"
            >
              {{ media.icon }}
            </v-icon>
          </a>
        </v-hover>
        <v-spacer/>
      </v-layout>
      <v-layout row>
        <v-spacer/>
        <p class="grey--text text--lighten-1" :class="textClass">
          All rights reserved © {{ currentYear }}
        </p>
        <v-spacer/>
      </v-layout>
    </v-flex>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    },
    showDivider: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      medias: [
        { name: 'LinkedIn', icon: 'fab fa-linkedin', color: 'blue', link: 'https://linkedin.com/in/vickong' },
        { name: 'GitHub', icon: 'fab fa-github', color: 'black', link: 'https://github.com/Vic-ong' },
        { name: 'Email', icon: 'fa-envelope', color: 'orange', link: 'mailto:vickyocc53@gmail.com' }
      ]
    }
  },
  computed: {
    currentYear () {
      const today = new Date()
      return today.getFullYear()
    },
    spacingBetweenIcons () {
      let pl = `pl-${this.small ? '3' : '4'}`
      let pr = `pr-${this.small ? '3' : '4'}`
      return {
        [pl]: true,
        [pr]: true
      }
    },
    containerStyle () {
      return {
        paddingTop: `${this.small ? '50' : '70'}px`,
        paddingBottom: `${this.small ? '10' : '30'}px`
      }
    },
    iconSize () {
      return this.small ? 25 : 35
    },
    textClass () {
      return `${this.small ? 'small' : 'footer'}-text`
    }
  }
}
</script>

<style scoped>
.contact-container {
  padding-top: 70px;
  padding-bottom: 30px;
}
.media-container {
  transition: all .2s ease-out;
}
.media-container:hover {
  transform: scale(1.4);
}
.footer-text {
  font-size: 17px;
  margin-top: 10px;
}
.small-text {
  font-size: 12px;
}
</style>
