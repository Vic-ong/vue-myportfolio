<template>
  <div id="intro">
    <div class="intro-container">
      <p class="display-4 intro-title">Articulated Design.</p>
      <p class="intro-caption">Hello! Welcome to my portfolio. I'm Vic Ong, a software engineer with {{ yearsOfExp }} years of industry experience. Most of my work revolves around <b>frontend</b> and <b>user experience</b> development but I've dabbled in backend design as well - to paint the entire picture. Over the years, I've designed and built various applications for clients in the government, education, public health and entertainment sectors. Have a look at some of my current and past projects! :)</p>
      <div class="intro-next">
        <v-icon medium color="grey lighten-1" @click="$vuetify.goTo(target, options)">fa-arrow-down</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {}
  },
  computed: {
    yearsOfExp () {
      const today = new Date()
      const curYear = today.getFullYear()
      const curMonth = today.getMonth() + 1
      return ((curYear + curMonth / 12) - 2016).toFixed(2)
    },
    target () {
      return 900
    },
    options () {
      return {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  }
}
</script>

<style scoped>
.intro-container {
  padding-bottom: 100px;
}
.intro-title {
  font-weight: 700;
  padding-bottom: 50px;
  background-image: -webkit-linear-gradient(left, black 25%, #C6FFDD 45%, #FBD786, #f7797d 62.5%, black 75%);
  background-image: linear-gradient(70deg, black 25%, #C6FFDD 45%, #FBD786, #f7797d 62.5%, black 75%);
  background-position: right center;
  background-size: 400% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: black;
  -webkit-text-fill-color: transparent;
  /* text-fill-color: transparent; */
  transition: color 500ms linear;
}
.intro-container:hover .intro-title{
  background-position: left center;
  color: #ef9671;
  transition: background-position 2000ms ease-out;
}
.intro-caption {
  font-weight: 300;
  font-size: 24px;
  line-height: 2;
  text-align: justify;
  text-justify: inter-word;
  padding-bottom: 100px;
}
.intro-next {
  text-align: center;
  animation: bounce 0.5s infinite alternate;
  -webkit-animation: bounce 0.5s infinite alternate;
}
@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
</style>
