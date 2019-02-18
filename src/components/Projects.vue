<template>
  <div id="projects">
    <div v-for="(project, index) in projects" v-bind:key="index"
      class="card-container grey lighten-4">
      <v-flex xs12>
        <v-layout row>
          <v-flex xs6 v-if="index%2 === 0">
            <v-img
              :src="project.imgPath"
              :height="cardAttr.img.height"
              :class="cardAttr.img.bgColor"
            ></v-img>
          </v-flex>
          <v-flex xs6>
            <v-card flat class="transparent ma-5">
              <h1>{{ project.title }}</h1>
            </v-card>
          </v-flex>
          <v-flex xs6 v-if="index%2 !== 0">
            <v-img
              :src="project.imgPath"
              :height="cardAttr.img.height"
              :class="cardAttr.img.bgColor"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-flex>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'projects',
  created () {
    this.getProjects()
  },
  data () {
    return {
      cardAttr: {
        img: {
          height: '500px',
          bgColor: 'grey'
        }
      }
    }
  },
  computed: {
    ...mapGetters('projects', {
      projectsall: 'projects'
    }),
    projects () {
      return [
        { title: 'Health Care Facility Licensure System', icon: 'fa-laptop-medical', imgPath: 'https://image.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147846297.jpg' },
        { title: 'Student Success Predictor', icon: 'fa-graduation-cap', imgPath: 'https://image.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147857787.jpg' },
        { title: 'Resources Management Tool', icon: 'fa-rocket', imgPath: 'https://image.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147855146.jpg' }
      ]
    }
  },
  methods: {
    ...mapActions('projects', {
      getProjects: 'getProjects'
    })
  }
}
</script>

<style>
.content-icon {
  margin-bottom: 30px;
}
</style>
