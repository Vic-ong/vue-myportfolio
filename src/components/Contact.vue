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
    type: {
      type: String,
      default: 'footer'
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
    containerStyle () {
      if (this.type === 'footer') {
        return {
          paddingTop: '70px',
          paddingBottom: '30px'
        }
      } else if (this.type === 'small') {
        return {
          paddingTop: '50px',
          paddingBottom: '10px'
        }
      }
    },
    spacingBetweenIcons () {
      if (this.type === 'footer') {
        return {
          'pl-4': true,
          'pr-4': true
        }
      } else if (this.type === 'small') {
        return {
          'pl-3': true,
          'pr-3': true
        }
      }
    },
    iconSize () {
      if (this.type === 'footer') {
        return 35
      } else if (this.type === 'small') {
        return 25
      }
    },
    textClass () {
      if (this.type === 'footer') {
        return 'footer-text'
      } else if (this.type === 'small') {
        return 'small-text'
      }
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
