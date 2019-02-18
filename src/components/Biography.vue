<template>
  <div id="biography">
    <div class="bio-profilepic-container">
      <v-img contain
        :src="myprofile.profile_pic"
        :height="picAttr.height"
        :class="picAttr.bgColor"
        :position="picAttr.position"
      >
        <div class="bio-caption-container bio-caption-offset">
          <p class="bio-title">A Passion to Create Meaningful Systems</p>
        </div>
        <v-icon medium class="bio-title-icon bio-caption-offset">fa-bolt</v-icon>
        <div class="bio-about-container bio-caption-offset">
          <p class="bio-about">
            I am an interdisciplinary designer currently based in Honolulu and Orlando—while I do hope to expand to other cities as well!
          </p>
          <p class="bio-about">
            Armed with industry experience in fullstack development, user experience design and product management,
            I constantly aspire to create positive change in our society by focusing on pressing challenges such as improving the
            <a :href="bio.healthcare" target="_blank" class="external-article">healthcare system</a> and
            <a :href="bio.safety" target="_blank" class="external-article">public safety</a> (data security), or even
            <a :href="bio.democratize" target="_blank" class="external-article">democratizing AI</a>.
            My past work with Disney, DataHouse, and the Department of Health has certainly boosted my
            skills to develop better and more robust applications and to design with purpose—and I still continue to learn
            and grow my knowledge.
          </p>
          <div>
            <v-layout row>
              <v-spacer></v-spacer>
              <a :href="myprofile.resume_pdf" target="_blank">
                <v-btn round depressed color="primary">
                  Resume
                </v-btn>
              </a>
              <v-spacer></v-spacer>
            </v-layout>
          </div>
        </div>
      </v-img>
    </div>
    <div style="padding-top: 60px; padding-bottom: 50px;"><v-divider></v-divider></div>
    <div>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs4 v-for="(interest, index) in interests" v-bind:key="index">
            <p class="bio-interest-title" :class="`${interest.color}--text`">
              <v-avatar class="mr-2" :size="22" :color="interest.color">
                <v-icon color="white" :size="12">{{ interest.icon }}</v-icon>
              </v-avatar>
              {{ interest.title }}
            </p>
            <p class="bio-interest-list grey--text text--darken-2" v-for="(item, indexItem) in list(interest.data)" v-bind:key="indexItem">{{ item }}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'biography',
  created () {
    this.getUsers('vic-ong-2019')
    this.getInterests()
  },
  data () {
    return {
      picAttr: { height: '700px', bgColor: 'transparent', position: 'left' },
      bio: {
        healthcare: 'https://www.ideo.com/question/how-might-we-transform-institutionalized-care-into-individualized-care',
        safety: 'https://www.youtube.com/watch?time_continue=106&v=aEBi4OpXU4Q',
        democratize: 'https://medium.com/analytics-for-humans/why-hasnt-artificial-intelligence-been-democratized-240e5c33aab0'
      },
      interests: [
        {
          title: 'LEISURE ACTIVITIES',
          icon: 'fa-palette',
          color: 'primary',
          data: 'hobbies'
        },
        {
          title: 'CURRENT GOALS',
          icon: 'fab fa-font-awesome-flag',
          color: 'blue',
          data: 'goals'
        },
        {
          title: 'LATEST JAMS',
          icon: 'fa-headphones',
          color: 'orange',
          data: 'music'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('users', {
      myprofile: 'myprofile'
    }),
    ...mapGetters('interests', {
      hobbies: 'hobbies',
      goals: 'goals',
      music: 'music'
    })
  },
  methods: {
    ...mapActions('users', {
      getUsers: 'getUsers'
    }),
    ...mapActions('interests', {
      getInterests: 'getInterests'
    }),
    list (type) {
      return this[type]
    }
  }
}
</script>

<style scoped>
.external-article {
  text-decoration: underline;
  color: black;
}
.bio-profilepic-container {
  min-width: 300px;
}
.bio-title {
  color: white;
  font-size: 44px;
  font-weight: 700;
}
.bio-caption-offset {
  position: relative;
  top: 30px;
  left: 400px;
  width: 500px;
}
.bio-title-icon {
  color: #EDD826;
  animation: bounce 0.5s infinite alternate;
  -webkit-animation: bounce 0.5s infinite alternate;
}
.bio-caption-container {
  background-color: black;
  padding: 30px;
  padding-top: 15px;
  padding-bottom: 10px;
}
.bio-about-container {
  left: 500px;
  width: 400px;
  padding: 30px;
  padding-top: 10px;
}
.bio-about {
  font-size: 15px;
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
}
.bio-interest-title {
  font-size: 14px;
}
.bio-interest-list {
  font-size: 12px;
  font-weight: 700;
}
@keyframes bounce {
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(-10px);
  }
}
@-webkit-keyframes bounce {
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>
