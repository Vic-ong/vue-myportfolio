<template>
  <div id="biography">
    <div>
      <v-flex xs12>
        <v-layout row :style="picStyles">
          <v-flex class="profilepic-container">
            <v-img contain
              :src="myprofile.profile_pic"
              :lazy-src="myprofile.profile_pic_lowres"
              :height="picStyles['--height']"
              :class="picStyles.bgColor"
              :position="picStyles.position"
            >
              <div class="contacts-container">
                <v-flex>
                  <v-layout row>
                    <v-spacer></v-spacer>
                    <v-btn round depressed class="primary contact-btn" @click="showResume">
                      See Resume
                    </v-btn>
                    <v-btn round depressed class="white contact-btn" @click="showEmail">
                      Contact Me
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-layout>
                </v-flex>
              </div>
            </v-img>
          </v-flex>
          <v-flex>
            <div class="bio-caption-container bio-caption-offset">
              <p class="bio-title">A Passion to Create Meaningful Systems</p>
            </div>
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
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </div>
    <div style="padding-top: 120px; padding-bottom: 50px;">
      <v-flex>
        <v-layout row wrap>
          <v-flex xs4 v-for="(interest, index) in interests" v-bind:key="index">
            <p class="bio-interest-title primaryDark--text">
              <v-avatar class="mr-2" :size="22" color="primary">
                <v-icon color="white" :size="12">{{ interest.icon }}</v-icon>
              </v-avatar>
              <b>{{ interest.title }}</b>
            </p>
            <p
              v-for="(item, indexItem) in list(interest.data)"
              v-bind:key="indexItem"
              class="bio-interest-list secondaryDark--text"
            >
              {{ item }}
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'biography',
  data () {
    return {
      picAttr: { height: '600px', bgColor: 'transparent', position: 'left' },
      bio: {
        healthcare: 'https://www.ideo.com/question/how-might-we-transform-institutionalized-care-into-individualized-care',
        safety: 'https://www.youtube.com/watch?time_continue=106&v=aEBi4OpXU4Q',
        democratize: 'https://medium.com/analytics-for-humans/why-hasnt-artificial-intelligence-been-democratized-240e5c33aab0'
      },
      interests: [
        {
          title: 'LEISURE ACTIVITIES',
          icon: 'fa-palette',
          data: 'hobbies'
        },
        {
          title: 'CURRENT GOALS',
          icon: 'fab fa-font-awesome-flag',
          data: 'goals'
        },
        {
          title: 'LATEST JAMS',
          icon: 'fa-headphones',
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
    }),
    picStyles () {
      return {
        bgColor: 'transparent',
        position: 'left',
        '--height': '600px'
      }
    }
  },
  methods: {
    list (type) {
      return this[type]
    },
    showResume () {
      window.open(this.myprofile.resume_pdf)
    },
    showEmail () {
      window.open(`mailto:${this.myprofile.email}`)
    }
  }
}
</script>

<style scoped>
.profilepic-container {
  max-width: calc(5/7*var(--height));
}
.external-article {
  text-decoration: underline;
  color: black;
}
.bio-title {
  color: white;
  font-size: 44px;
  font-weight: 700;
}
.bio-caption-offset {
  position: relative;
  top: 30px;
  left: calc(-0.15*5/7*var(--height));
  width: 550px;
}
.bio-caption-container {
  background-color: black;
  padding: 45px;
  padding-top: 15px;
  padding-bottom: 10px;
}
.bio-about-container {
  left: calc(0.1*5/7*var(--height));
  width: 430px;
  padding-top: 25px;
}
.bio-about {
  font-size: 15px;
  line-height: 1.8;
  text-align: justify;
  text-justify: inter-word;
}
.contacts-container {
  position: relative;
  top: 88%;
  width: calc(5/7*var(--height));
}
.contact-btn {
  opacity: 0.7;
}
.contact-btn:hover {
  opacity: 1;
}
.bio-interest-title {
  font-size: 14px;
}
.bio-interest-list {
  padding-left: 33px;
  font-size: 13px;
}
</style>
