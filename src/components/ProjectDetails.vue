<template>
  <div id="project-details">
    <v-img contain
      :src="project.thumbnail_image"
      :height="picAttr.height"
      :class="picAttr.bgColor"
      :position="picAttr.position"
    >
      <p class="project-name">{{ project.name }}</p>
    </v-img>
    <div class="summaries-container">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs5 class="summary-container">
            <p class="summary-title primary--text">THE CHALLENGE</p>
            <p class="summary-content">{{ project.challenge }}</p>
          </v-flex>
          <v-flex xs5 class="summary-container">
            <p class="summary-title primary--text">THE OUTCOME</p>
            <p class="summary-content">{{ project.outcome }}</p>
          </v-flex>
          <v-flex xs2 class="summary-container">
            <p class="summary-title primary--text">TIMELNE</p>
            <p class="summary-content">{{ project.timeline }}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'project-details',
  props: {
    id: String
  },
  created () {
    this.getProjects(this.id)
  },
  data () {
    return {
      picAttr: { height: '500px', bgColor: 'transparent', position: 'left' }
    }
  },
  computed: {
    ...mapGetters('projects', {
      project: 'project'
    })
  },
  methods: {
    ...mapActions('projects', {
      getProjects: 'getProjects'
    })
  }
}
</script>

<style scoped>
.project-name {
  font-size: 40px;
  font-weight: 700;
  position: relative;
}
.content-divider {
  margin: 30px;
}
.summaries-container {
  padding-top: 50px;
}
.summary-container {
  padding: 20px;
}
.summary-title {
  font-size: 14px;
  font-weight: 700;
  color: grey;
}
.summary-content {
  font-size: 14px;
  line-height: 1.5;
}
</style>
