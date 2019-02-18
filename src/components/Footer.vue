<template>
  <div id="footer">
    <div class="footer-container">
    <v-flex>
      <v-layout row class="mb-3">
        <v-spacer/>
        <v-hover v-for="(media, index) in medias" v-bind:key="index">
          <a :href="media.link" target="_blank" slot-scope="{ hover }">
            <v-icon
              class="pr-3 pl-3 media-container"
              :color="hover ? media.color : 'grey darken-2'"
              :size="media.size"
            >
              {{ media.icon }}
            </v-icon>
          </a>
        </v-hover>
        <v-spacer/>
      </v-layout>
      <v-layout row>
        <v-spacer/>
        <span class="caption">All rights reserved © 2019</span>
        <v-spacer/>
      </v-layout>
    </v-flex>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      medias: [
        { name: 'LinkedIn', icon: 'fab fa-linkedin', color: 'blue', link: 'https://linkedin.com/in/vickong', size: 25 },
        { name: 'GitHub', icon: 'fab fa-github', color: 'black', link: 'https://github.com/Vic-ong', size: 25 },
        { name: 'Email', icon: 'fa-envelope', color: 'orange', link: 'mailto:vickyocc53@gmail.com', size: 23 }
      ]
    }
  },
  computed: {},
  methods: {
  }
}
</script>

<style scoped>
.footer-container {
  padding-top: 60px;
  padding-bottom: 30px;
}
.media-container {
  transition: all .2s ease-out;
}
.media-container:hover {
  transform: scale(1.4);
}
</style>
