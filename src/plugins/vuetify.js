import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#05ad8b',
    secondary: '#424242',
    accent: '#1976D2',
    warning: '#F44336'
  }
})
