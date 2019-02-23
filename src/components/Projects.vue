<template>
  <div id="projects">
    <div class="opening-text grey--text text--lighten-1">
      How Might We...
    </div>
    <div v-for="(project, index) in projectsTop" v-bind:key="index"
      class="card-container grey lighten-4">
      <v-hover>
      <v-flex xs12 slot-scope="{ hover }">
        <v-layout row>
          <v-flex xs6 v-if="index%2 === 0">
            <router-link :to="{ name: 'ProjectView', params: { id: project.id } }">
              <v-img
                :src="project.thumbnail_image"
                :height="cardAttr.img.height"
                :class="cardAttr.img.bgColor"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out primary v-card--reveal white--text"
                    style="height: 100%;"
                  >
                    see project
                  </div>
                </v-expand-transition>
              </v-img>
            </router-link>
          </v-flex>
          <v-flex xs6>
            <v-card flat class="transparent ma-5">
              <p class="project-type">CASE STUDY<span class="project-sector">{{ project.sector }}</span></p>
              <p class="project-name">{{ project.name }}</p>
              <p class="project-caption">{{ project.caption }}</p>
            </v-card>
          </v-flex>
          <v-flex xs6 v-if="index%2 !== 0">
            <router-link :to="{ name: 'ProjectView', params: { id: project.id } }">
              <v-img
                :src="project.thumbnail_image"
                :height="cardAttr.img.height"
                :class="cardAttr.img.bgColor"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out primary v-card--reveal white--text"
                    style="height: 100%;"
                  >
                    see project
                  </div>
                </v-expand-transition>
              </v-img>
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
      </v-hover>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'projects',
  props: {
    numberOfProjects: Number
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
      projectsTopFunc: 'projectsTop'
    }),
    projectsTop () {
      return this.projectsTopFunc(this.numberOfProjects)
    }
  }
}
</script>

<style scoped>
.opening-text {
  text-align: center;
  font-family: 'Handlee', cursive;
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 30px;
}
.content-icon {
  margin-bottom: 30px;
}
.project-type {
  font-size: 12px;
  font-weight: 700;
  color: grey;
}
.project-sector {
  color: black;
  padding-left:10px;
}
.project-name {
  font-size: 30px;
  font-weight: 700;
  padding-top: 40px;
}
.project-caption {
  font-size: 18px;
  line-height: 1.6;
  padding-top: 15px;
}
.v-card--reveal {
  font-size: 50px;
  align-items: center;
  justify-content: center;
  bottom: 0;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
